import Link from "next/link";

export default function Header() {
    return (
        <header style={{ backgroundColor: "#2563eb", padding: "1rem" }}>
            <Link href="/" style={{ color: "white", textDecoration: "none", fontSize: "1.5rem" }}>
                URL Shortener
            </Link>
        </header>
    );
}
