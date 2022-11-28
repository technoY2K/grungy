import { json, type LoaderFunction } from "@remix-run/node";
import invariant from "tiny-invariant";
import { imxClient } from "~/utils/node-builtins.server";
import type { ImxGUAsset } from "~/types/imx";
import { NftCard } from "~/components";
import { useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = async ({ params }) => {
    invariant(params.account, "Expected a wallet address");
    invariant(params.tokenId, "Expected token id");

    const { getAsset } = await imxClient();
    const response: ImxGUAsset = await getAsset(params.tokenId);

    return json(response);
};

export const Asset = () => {
    const nft = useLoaderData();
    const { metadata } = nft;

    return (
        <div className="text-white">
            <section className="mb-8">
                <NftCard nft={nft} />
            </section>
            <section>
                {metadata.mana ? (
                    <>
                        <p className="mb-4">Mana</p>
                        <div className="mb-6 h-1 w-full bg-gray-200">
                            <div className="h-1 w-1/4 bg-blue-500"></div>
                        </div>
                    </>
                ) : null}
                {metadata.attack ? (
                    <>
                        <p className="mb-4">Attack</p>
                        <div className="mb-6 h-1 w-full bg-gray-200">
                            <div className="h-1 w-1/3 bg-yellow-500"></div>
                        </div>
                    </>
                ) : null}
                {metadata.health ? (
                    <>
                        <p className="mb-4">Health</p>
                        <div className="mb-6 h-1 w-full bg-gray-200">
                            <div className="h-1 w-3/4 bg-red-500"></div>
                        </div>
                    </>
                ) : null}
            </section>
        </div>
    );
};

export default Asset;
