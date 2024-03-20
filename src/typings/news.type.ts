export type NewsModel = {
    author?: string;
    content?: string;
    description?: string;
    publishedAt: string;
    source?: string;
    title: string;
    url?: string;
    urlToImage?: string;
    size?: 'xs' | 'sm' | 'md' | 'lg';
    tagSize?: 'xs' | 'sm' | 'md' | 'lg';
    showImage?: boolean;
};

type Source = {
    id: string;
    name: string;
};

export type NewsParams = {
    sources: Array<string | null>;
    category: string;
    date: string;
    q:string
};

export type GuardianNewsType = {
    pillarName: string;
    sectionName: string;
    webTitle: string;
    webPublicationDate: string;
    webUrl: string;
};

export type NYTimesType = {
    headline: {main:string};
    lead_paragraph: string;
    byline: {original:string};
    pub_date: string;
    section_name: string;
    source: string;
    news_desk: string;
    multimedia: Array<{url:string}>;
};

export type NewsAIType = {
    author?: string;
    content?: string;
    description?: string;
    publishedAt: string;
    source?: Source;
    title: string;
    url?: string;
    urlToImage?: string;
};

