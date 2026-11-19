import UrlForm from "@/components/UrlForm";

export default function Home() {
    return (
        <main style={{ width: "min(90%, 500px)", margin: "2rem auto" }}>
            <h1 style={{ marginBottom: "0.5rem" }}>URL Shortener</h1>
            <p style={{ marginBottom: "1.5rem" }}>Enter a long URL and an alias to get a short link.</p>
            <UrlForm />
        </main>
    );
}
