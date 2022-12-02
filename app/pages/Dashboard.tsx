import type { AssetWithOrders } from "~/types/imx";
import { NftCard } from "~/components";

interface Props {
    nft: AssetWithOrders;
}

export function Dashboard({ nft }: Props) {
    return (
        <div className="flex h-full flex-col items-center pt-20">
            <NftCard nft={nft} />
        </div>
    );
}

export default Dashboard;
