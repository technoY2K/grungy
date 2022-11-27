import { Link } from "@remix-run/react";
import useWallet from "~/hooks/useWallet";

export default function DashboardIndex() {
    const { account, balance, connect } = useWallet();

    return (
        <div className="h-full pt-20 text-white">
            <div className="mb-8">
                <p>{`Connected Address: ${account ? account : ""}`}</p>
                <p>{`Balance: ${balance ? balance : ""}`}</p>
            </div>

            {account ? (
                <div>
                    <Link
                        className="rounded border border-blue-500 bg-transparent from-cyan-500 to-blue-500 py-2 px-4 font-semibold text-white hover:bg-gradient-to-r"
                        to={`/dashboard/${account}`}
                    >
                        View Assets
                    </Link>
                </div>
            ) : (
                <button
                    className="rounded border border-blue-500 bg-transparent from-cyan-500 to-blue-500 py-2 px-4 font-semibold text-white hover:bg-gradient-to-r"
                    onClick={connect}
                >
                    Connect
                </button>
            )}
        </div>
    );
}
