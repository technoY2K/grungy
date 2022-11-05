// These are for dependencies that bring server code into the client bundle
// https://remix.run/docs/en/v1/pages/gotchas

import { ImmutableXClient } from "@imtbl/imx-sdk";

export const imxClient = async () => {
    const url = "https://api.x.immutable.com/v1";
    const client = await ImmutableXClient.build({ publicApiUrl: url });

    const getAsset = async () => {
        const response = await client.getAsset({
            address: "0xacb3c6a43d15b907e8433077b6d38ae40936fe2c",
            id: "103652651",
            include_fees: false,
        });

        return response;
    };

    return {
        getAsset,
    };
};

export default imxClient;
