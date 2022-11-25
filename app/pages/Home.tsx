import type { ImxGUAsset } from "~/types/imx";
import { NftCard } from "~/components";

interface Props {
    nft: ImxGUAsset;
}

export function Home({ nft }: Props) {
    console.log(nft);
    return (
        <div className="flex h-full flex-col items-center pt-20">
            <NftCard nft={nft} />
        </div>
    );
}

export default Home;
