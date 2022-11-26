import { Dashboard } from "~/pages";
import type { ImxGUAsset } from "~/types/imx";
import { type LoaderFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { imxClient } from "~/utils/node-builtins.server";

export const loader: LoaderFunction = async () => {
    const { getAsset } = await imxClient();
    const response = await getAsset();
    const nft: ImxGUAsset = response;

    return json(nft);
};

export default function DashboardIndex() {
    const nft = useLoaderData<ImxGUAsset>();

    return <Dashboard nft={nft} />;
}
