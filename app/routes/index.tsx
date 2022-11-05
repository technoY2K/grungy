import { imxClient } from "~/utils/node-builtins.server";
import { type LoaderFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { ImxAsset } from "~/types/imx";
import { Home } from "~/pages";

export const loader: LoaderFunction = async () => {
    const { getAsset } = await imxClient();
    const response = await getAsset();
    const nft: ImxAsset = response;

    return json(nft);
};

export default function Index() {
    const nft = useLoaderData<ImxAsset>();

    return (
        <main className="h-screen">
            <Home nft={nft} />
        </main>
    );
}
