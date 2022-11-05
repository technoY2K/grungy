import { ImmutableXClient } from "@imtbl/imx-sdk";
import { type LoaderFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

interface ImxAsset {
    message: string;
}

const initImxClient = async () => {
    const url = "https://api.x.immutable.com/v1";
    return await ImmutableXClient.build({ publicApiUrl: url });
};

export const loader: LoaderFunction = async () => {
    const imx = await initImxClient();

    return json({ message: "TESTING" });
};

export default function Index() {
    const asset = useLoaderData<ImxAsset>();

    return (
        <main className="flex h-screen items-center justify-center bg-[#191E2B]">
            <h1 className="text-white">GODZZ</h1>
            <h1 className="text-white">{asset.message}</h1>
        </main>
    );
}
