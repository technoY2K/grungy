import type { AssetWithOrders } from "~/types/imx";
import { Link } from "@remix-run/react";

interface Props {
    nft: AssetWithOrders;
    detailMode?: boolean;
}

export function NftCard({ detailMode, nft }: Props) {
    return (
        <div className="w-[300px]">
            <section>
                <img
                    className="w-full"
                    src={nft.image_url ?? ""}
                    alt={nft.name ?? ""}
                />
            </section>
            {detailMode ? (
                <section className="flex justify-center">
                    <Link
                        className="rounded border border-blue-500 bg-transparent from-cyan-500 to-blue-500 py-2 px-4 font-semibold text-white hover:bg-gradient-to-r"
                        to={`view/${nft.token_id}`}
                    >
                        View Assets
                    </Link>
                </section>
            ) : null}
        </div>
    );
}

export default NftCard;
