type Asset = {
    id: number;
    name: string;
    quantity: number;
}

export type InfoResponse = {
    account: {
        id: number;
        name: string;
    },
    assets: Asset[];
    frozenAssets: Asset[];
} | null;
