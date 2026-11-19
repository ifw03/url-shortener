"use client";

import { useState } from "react";
import { Button, FormHelperText, TextField } from "@mui/material";
import createShortUrl from "@/lib/createShortUrl";
import ShortUrlDisplay from "./ShortUrlDisplay";
import { UrlProps } from "@/types";

export default function UrlForm() {
    const [url, setUrl] = useState("");
    const [alias, setAlias] = useState("");
    const [error, setError] = useState("");
    const [result, setResult] = useState<UrlProps | null>(null);

    return (
        <>
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    createShortUrl(alias, url)
                        .then((res) => {
                            // the server action returns either { error } or the new UrlProps
                            if ("error" in res) {
                                setError(res.error);
                                setResult(null);
                            } else {
                                setError("");
                                setResult(res);
                            }
                        })
                        .catch((err) => console.error(err));
                }}
            >
                <TextField
                    variant="outlined"
                    sx={{ width: "100%", marginBottom: "1rem" }}
                    label="Long URL"
                    placeholder="https://example.com"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                />
                <TextField
                    variant="outlined"
                    sx={{ width: "100%" }}
                    label="Alias"
                    placeholder="my-link"
                    value={alias}
                    onChange={(e) => setAlias(e.target.value)}
                />
                <FormHelperText error={error !== ""} sx={{ marginBottom: "1rem" }}>
                    {error !== "" ? error : "Letters, numbers, \"-\" and \"_\" only"}
                </FormHelperText>
                <Button
                    variant="contained"
                    type="submit"
                    sx={{ width: "100%" }}
                    disabled={url === "" || alias === ""}
                >
                    Shorten
                </Button>
            </form>
            {result && <ShortUrlDisplay alias={result.alias} />}
        </>
    );
}
