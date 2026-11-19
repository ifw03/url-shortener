"use server";
import getCollection, { URLS_COLLECTION } from "@/db";
import { CreateShortUrlResult } from "@/types";
import isValidUrl from "@/lib/isValidUrl";

// letters, numbers, "-" and "_" only, so the alias is always a safe path segment
const ALIAS_PATTERN = /^[A-Za-z0-9_-]+$/;

export default async function createShortUrl(
    alias: string,
    url: string,
): Promise<CreateShortUrlResult> {
    // trim inputs before validating
    const u = {
        alias: alias.trim(),
        url: url.trim(),
    };

    // backend URL validation (the client can be bypassed, the server cannot)
    if (!isValidUrl(u.url)) {
        return { error: "Invalid URL. It must start with http:// or https://" };
    }

    // alias validation
    if (!ALIAS_PATTERN.test(u.alias)) {
        return { error: "Alias may only contain letters, numbers, \"-\" and \"_\"" };
    }

    const urlsCollection = await getCollection(URLS_COLLECTION);

    // reject duplicate aliases
    const existing = await urlsCollection.findOne({ alias: u.alias });
    if (existing) {
        return { error: "That alias is already taken" };
    }

    // insert in DB
    const res = await urlsCollection.insertOne({ ...u });

    if (!res.acknowledged) {
        throw new Error("DB insert failed");
    }

    return { ...u, id: res.insertedId.toHexString() };
}
