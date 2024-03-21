import { UserTags } from '@/typings';
import { useState } from 'react';


export const useSettings = () => {
    const [userCategories, setUserCategories] = useState<Array<string>>([]);
    const [userSources, setUserSources] = useState<Array<string>>([]);
    const [userAuthors, setUserAuthors] = useState<Array<string>>([]);

    const addSettings = ({ categories, sources, authors }: UserTags) => {
        authors &&
            setUserAuthors(prev =>  [...prev, ...authors]);
        sources &&
            setUserSources(() => {
                return [...sources!];
            });
        categories &&
            setUserCategories(() => {
                return [...categories];
            });

        const userTags = {
            categories: categories || userCategories,
            sources: sources || userSources,
            authors: authors || userAuthors
        };

        localStorage.setItem('userTags', JSON.stringify(userTags));
    };

    const getSettings = () => {
        const settings: UserTags = JSON.parse(
            localStorage.getItem('userTags')!
        );
        settings?.authors &&
            setUserAuthors(() => {
                return [...settings?.authors!];
            });
        settings?.sources &&
            setUserSources(() => {
                return [...settings?.sources!];
            });
        settings?.categories &&
            setUserCategories(() => {
                return [...settings?.categories!];
            });
    };

    return {
        userCategories,
        userAuthors,
        userSources,
        addSettings,
        getSettings
    };
};
