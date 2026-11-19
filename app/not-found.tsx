import Link from "next/link";

export default function NotFound() {
    return (
        <main style={{ textAlign: "center", margin: "2rem auto" }}>
            <h1 style={{ marginBottom: "1rem" }}>Alias not found</h1>
            <Link href="/">Go back home</Link>
        </main>
    );
}
