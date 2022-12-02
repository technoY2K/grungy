import { json, type LoaderFunction } from "@remix-run/node";
import invariant from "tiny-invariant";
import { imxClient } from "~/utils/node-builtins.server";
import type { Asset, GodCard } from "~/types/imx";
import { NftCard } from "~/components";
import { useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = async ({ params }) => {
    invariant(params.account, "Expected a wallet address");
    invariant(params.tokenId, "Expected token id");

    const { getAsset } = await imxClient();
    const response: Asset = await getAsset(params.tokenId);

    return json(response);
};

interface AttribteStateProps {
    label: string;
    value: number;
}

const AttributeStat = ({ label, value }: AttribteStateProps) => {
    if (!value) {
        return null;
    }

    console.log(value);

    const p = value / 17;
    const barPercentage = p * 100;
    const w = `w-[${Math.trunc(barPercentage)}%]`;

    return (
        <div>
            <p className="mb-4">{label}</p>
            <div className="mb-6 h-1 w-full bg-gray-200">
                <div className={`h-1 ${w} bg-blue-500`}></div>
            </div>
        </div>
    );
};

export const AssetView = () => {
    const nft = useLoaderData<Asset>();
    const { metadata } = nft;
    const isGodCard = (data: unknown): data is GodCard => {
        return (data as GodCard).god !== undefined;
    };

    return (
        <div className="text-white">
            <section className="mb-8">
                <NftCard nft={nft} />
            </section>
            <section>
                {isGodCard(metadata) ? (
                    <div>
                        <AttributeStat label="Mana" value={metadata.mana} />
                        <AttributeStat label="Health" value={metadata.health} />
                        <AttributeStat label="Attack" value={metadata.attack} />
                    </div>
                ) : null}
            </section>
        </div>
    );
};

export default AssetView;
