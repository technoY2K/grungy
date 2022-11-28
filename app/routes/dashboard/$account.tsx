import { type LoaderFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { imxClient } from "~/utils/node-builtins.server";
import invariant from "tiny-invariant";
import type { ListAssetsResponse, AssetWithOrders } from "~/types/imx";
import { NftCard } from "~/components";

export const loader: LoaderFunction = async ({ params }) => {
    invariant(params.account, "Expected a wallet address");

    const { getGods } = await imxClient();
    const response: ListAssetsResponse = await getGods(params.account);
    const gods: AssetWithOrders[] = response.result.filter(
        (asset) =>
            asset.token_address === "0xacb3c6a43d15b907e8433077b6d38ae40936fe2c"
    );

    return json(gods);
};

export const Account = () => {
    const data = useLoaderData<AssetWithOrders[]>();

    return (
        <div className="flex flex-wrap justify-between gap-y-20">
            {data.map((nft) => (
                <NftCard detailMode key={nft.token_id} nft={nft} />
            ))}
        </div>
    );
};

export default Account;
