import { BaseSelect, BaseSelectOption } from '@/components/ui';
import { categories } from '@/data';
import { useSettings } from './useSettings';
import { useNews } from '../news/hooks/useNews';
import { useEffect } from 'react';
import { authors } from '@/stores/news-resources/news-resources';
import { useRecoilValue } from 'recoil';

export const Settings = () => {
    const {
        userAuthors,
        userCategories,
        userSources,
        addSettings,
        getSettings
    } = useSettings();
    const { sources, getAllSources, getNewsData } = useNews();
    const allAuthors = useRecoilValue(authors);

    useEffect(() => {
        (async () => {
            await getNewsData({});
            await getAllSources();
            getSettings();
        })();
    }, []);

    return (
        <>
            <div className="grid grid-cols-12">
                <div className="md:col-span-4 md:col-start-5 col-span-12 px-8 bg-white border pb-6 pt-0.5 rounded-xl">
                    <div className="mt-3 flex-col">
                        <div>
                            <p className="text-sm font-medium text-gray-800">
                                Select authors
                            </p>
                            <BaseSelect
                                multiple
                                value={userCategories}
                                className="mt-3 w-full"
                                onChange={(event, newValue) =>
                                    addSettings({
                                        categories:
                                            newValue?.filter(val => !!val) ?? []
                                    })
                                }
                            >
                                {categories?.map(category => {
                                    return (
                                        <BaseSelectOption
                                            key={category.value}
                                            value={category.value}
                                        >
                                            {category.title}
                                        </BaseSelectOption>
                                    );
                                })}
                            </BaseSelect>
                        </div>
                        <div className="mt-3">
                            <p className="text-sm font-medium text-gray-800">
                                Select authors
                            </p>
                            <BaseSelect
                                multiple
                                className="w-full"
                                value={userSources}
                                onChange={(_, newValue) => {
                                    addSettings({
                                        sources:
                                            newValue?.filter(val => !!val) ?? []
                                    });
                                }}
                            >
                                {sources.length
                                    ? sources?.map(source => {
                                          return (
                                              <BaseSelectOption
                                                  key={source.id}
                                                  value={source.name}
                                              >
                                                  {source.name}
                                              </BaseSelectOption>
                                          );
                                      })
                                    : 'No data'}
                            </BaseSelect>
                        </div>
                        <div className="mt-3">
                            <p className="text-sm font-medium text-gray-800">
                                Select authors
                            </p>
                            <BaseSelect
                                multiple
                                className="w-full"
                                value={userAuthors}
                                onChange={(_, newValue) => {
                                    addSettings({
                                        authors:
                                            newValue ?? []
                                    });
                                }}
                            >
                                {allAuthors?.length
                                    ? allAuthors?.map((author, index) => {
                                          return (
                                              <BaseSelectOption
                                                  key={author + index}
                                                  value={author}
                                              >
                                                  {author}
                                              </BaseSelectOption>
                                          );
                                      })
                                    : 'No data'}
                            </BaseSelect>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
