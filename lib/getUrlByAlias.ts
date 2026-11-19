import getCollection, { URLS_COLLECTION } from "@/db";

export default async function getUrlByAlias(alias: string): Promise<string | null> {
    const urlsCollection = await getCollection(URLS_COLLECTION);
    const data = await urlsCollection.findOne({ alias: alias });

    if (!data) {
        return null;
    }

    // only the URL is returned, never the raw Mongo document
    return data.url;
}
