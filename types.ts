export type UrlProps = {
    id: string;
    alias: string;
    url: string;
};

// a server action returns either the created short URL or a user-facing error message
export type CreateShortUrlResult = UrlProps | { error: string };
