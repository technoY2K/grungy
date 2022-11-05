// These are for dependencies that bring server code into the client bundle
// https://remix.run/docs/en/v1/pages/gotchas

import { ImmutableXClient } from "@imtbl/imx-sdk";

export const imxClient = async () => {
    const url = "https://api.x.immutable.com/v1";
    const client = await ImmutableXClient.build({ publicApiUrl: url });

    return client;
};

export default imxClient;
