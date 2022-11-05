import { type ImmutableXClient } from "@imtbl/imx-sdk";

export interface CollectionDetails {
    icon_url: string | null;
    name: string;
}

export interface OrderDetails {
    buy_orders?: Array<object>;
    sell_orders?: Array<object>;
}

export interface Fee {
    address: string;
    percentage: number;
    type: string;
}

export type ImxAsset = Awaited<ReturnType<ImmutableXClient["getAsset"]>>;
