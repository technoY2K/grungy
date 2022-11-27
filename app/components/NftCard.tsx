import type { AssetWithOrders } from "~/types/imx";

interface Props {
    nft: AssetWithOrders;
}

export function NftCard({ nft }: Props) {
    return (
        <div className="w-1/2 rounded-md border-2 border-stone-50 sm:w-1/3 md:w-1/4">
            <img
                className="w-full"
                src={nft.image_url ?? ""}
                alt={nft.name ?? ""}
            />
        </div>
    );
}

export default NftCard;
