export type SourceModel = {
    id: string;
    name: string;
    category?: string;
    country?: string;
    description?: string;
    language?: string;
    url?: string;
};

export type CategoryModel = {
    title: string;
    value: string;
};
