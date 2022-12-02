export { ListAssetsResponse, AssetWithOrders, Asset } from "@imtbl/core-sdk";

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

export interface GodCard {
    god: string;
    set: string;
    mana: number;
    name: string;
    type: string;
    image: string;
    proto: number;
    tribe: string;
    attack: number;
    effect: string;
    health: number;
    rarity: string;
    quality: string;
}

export type ImxAsset = Awaited<ReturnType<ImmutableXClient["getAsset"]>>;
export type ImxGUAsset = MakeOptional<Asset, "metadata">;
