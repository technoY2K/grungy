import { imxClient } from "~/utils/node-builtins.server";
import { type LoaderFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { ImxGUAsset } from "~/types/imx";
import { Home } from "~/pages";
import { Navigation } from "~/components";

export const loader: LoaderFunction = async () => {
    const { getAsset } = await imxClient();
    const response = await getAsset();
    const nft: ImxGUAsset = response;

    return json(nft);
};

export default function Index() {
    const nft = useLoaderData<ImxGUAsset>();

    return (
        <main className="h-screen">
            <Navigation />
            <Home nft={nft} />
        </main>
    );
}
