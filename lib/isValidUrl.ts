export default function isValidUrl(url: string): boolean {
    try {
        // the built-in URL constructor throws if the string is not a valid URL
        const parsed = new URL(url);
        return parsed.protocol === "http:" || parsed.protocol === "https:";
    } catch {
        return false;
    }
}
