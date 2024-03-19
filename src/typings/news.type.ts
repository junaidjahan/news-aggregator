export type NewsModel = {
    author:string;
    content:string;
    description:string;
    publishedAt:string;
    source:Source;
    title:string;
    url:string;
    urlToImage:string;
}

type Source = {
    id:string;
    name:string
}