import { imxClient } from "~/utils/node-builtins.server";
import { type LoaderFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

interface ImxAsset {
    message: string;
}

export const loader: LoaderFunction = async () => {
    const client = await imxClient();
    const msg: ImxAsset = { message: "GODZ" };

    return json(msg);
};

export default function Index() {
    const asset = useLoaderData<ImxAsset>();

    return (
        <main className="flex h-screen items-center justify-center bg-[#191E2B]">
            <h1 className="text-white">{asset.message}</h1>
        </main>
    );
}
