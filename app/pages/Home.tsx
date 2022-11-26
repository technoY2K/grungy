import useWallet from "~/hooks/useWallet";

export function Home() {
    const { account, balance, connect, disconnect } = useWallet();

    return (
        <div className="flex h-full flex-col items-center pt-20 text-white">
            <div className="mb-8">
                <p>{`Account: ${account ? account : ""}`}</p>
                <p>{`Balance: ${balance ? balance : ""}`}</p>
            </div>

            {account ? (
                <button
                    className="rounded border border-blue-500 bg-transparent py-2 px-4 font-semibold text-white"
                    onClick={disconnect}
                >
                    Disconnect
                </button>
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

export default Home;
