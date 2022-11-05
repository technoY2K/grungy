import type { ImxAsset as Asset, MakeOptional } from "~/types/imx";

type ImxAsset = MakeOptional<Asset, "metadata">;

interface HomeProps {
    nft: ImxAsset;
}

export function Home({ nft }: HomeProps) {
    return (
        <div className="flex h-full flex-col items-center justify-center">
            <h1 className="mb-4 text-5xl text-white">GODZ</h1>
            <h2 className="text-white">{nft.collection.name}</h2>
            <h2 className="text-white">{nft.name}</h2>
            {nft.description ? (
                <p className="text-white">{nft.description}</p>
            ) : null}
        </div>
    );
}

export default Home;
