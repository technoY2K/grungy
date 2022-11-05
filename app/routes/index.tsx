import { imxClient } from "~/utils/node-builtins.server";
import { type LoaderFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { ImxAsset } from "~/types/imx";

export const loader: LoaderFunction = async () => {
    const { getAsset } = await imxClient();

    const response = await getAsset();

    const nft: ImxAsset = response;
    return json(nft);
};

export default function Index() {
    const nft = useLoaderData<ImxAsset>();

    return (
        <main className="flex h-screen flex-col items-center justify-center bg-[#191E2B]">
            <h1 className="mb-4 text-5xl text-white">GODZ</h1>
            <h2 className="text-white">{nft.collection.name}</h2>
            <h2 className="text-white">{nft.name}</h2>
            <p className="text-white">{nft.description}</p>
        </main>
    );
}
