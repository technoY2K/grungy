import type { AssetWithOrders } from "~/types/imx";

interface Props {
    nft: AssetWithOrders;
}

export function NftCard({ nft }: Props) {
    return (
        <div className="w-[300px]">
            <img
                className="w-full"
                src={nft.image_url ?? ""}
                alt={nft.name ?? ""}
            />
        </div>
    );
}

export default NftCard;
