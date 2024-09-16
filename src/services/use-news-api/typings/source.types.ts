import { NewsAIType } from '@/typings';

export type SourceModel = {
    id: string;
    name: string;
    category?: string;
    country?: string;
    description?: string;
    language?: string;
    url?: string;
};

export type NewsResponseModel = {
    articles: Array<NewsAIType>;
    status: string;
    totalResults: number;
};
