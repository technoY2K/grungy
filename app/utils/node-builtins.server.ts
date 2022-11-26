// These are for dependencies that bring server code into the client bundle
// https://remix.run/docs/en/v1/pages/gotchas

import { ImmutableX, Config } from "@imtbl/core-sdk";

export const imxClient = async () => {
    const client = new ImmutableX(Config.SANDBOX);

    const getAsset = async () => {
        const response = await client.getAsset({
            tokenAddress: "0xacb3c6a43d15b907e8433077b6d38ae40936fe2c",
            tokenId: "214063224",
            includeFees: false,
        });

        return response;
    };

    return {
        getAsset,
    };
};

export default imxClient;
