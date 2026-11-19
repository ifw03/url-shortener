"use client";

import { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { Button } from "@mui/material";

const StyledResult = styled.div`
    margin-top: 1.5rem;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

export default function ShortUrlDisplay({ alias }: { alias: string }) {
    const [copied, setCopied] = useState(false);

    // window only exists in the browser, which is why this is a client component
    const shortUrl = `${window.location.origin}/${alias}`;

    return (
        <StyledResult>
            <p>Your short URL:</p>
            <Link href={`/${alias}`}>{shortUrl}</Link>
            <br />
            <Button
                variant="outlined"
                size="small"
                sx={{ marginTop: "0.5rem" }}
                onClick={() => {
                    navigator.clipboard.writeText(shortUrl)
                        .then(() => {
                            setCopied(true);
                            // reset the label after two seconds
                            setTimeout(() => setCopied(false), 2000);
                        })
                        .catch((err) => console.error(err));
                }}
            >
                {copied ? "Copied!" : "Copy"}
            </Button>
        </StyledResult>
    );
}
