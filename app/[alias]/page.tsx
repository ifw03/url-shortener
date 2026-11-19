import { notFound, redirect } from "next/navigation";
import getUrlByAlias from "@/lib/getUrlByAlias";

// look the alias up on every request instead of rendering this page statically
export const dynamic = "force-dynamic";

export default async function AliasPage(
    // in a server component, params is a Promise (useParams() is the client-side equivalent)
    { params }: { params: Promise<{ alias: string }> },
) {
    const { alias } = await params;
    const url = await getUrlByAlias(alias);

    if (!url) {
        notFound();
    }

    // server-side redirect: the browser goes straight to the long URL, no click needed
    redirect(url);
}
