import { type ImmutableXClient } from "@imtbl/imx-sdk";

export type MakeOptional<Type, Key extends keyof Type> = Omit<Type, Key> &
    Partial<Pick<Type, Key>>;

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
export type ImxGUAsset = MakeOptional<Asset, "metadata">;
