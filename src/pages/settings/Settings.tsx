import { BaseSelect, BaseSelectOption } from "@/components/ui";
import { categories } from "@/data";
import { sources } from "@/stores/news-resources/news-resources";
import { useState } from "react";
import { useRecoilValue } from "recoil";

export const Settings = () => {
  const [filter, setfilter] = useState({
    category: "",
    sources: [""],
    date: "",
  });

  const allSources: Array<any> = (useRecoilValue(sources) as Array<any>) ?? [];

  // const handleSearch = () => {
  //   return onHandleSearch(filter)
  // }

  return (
    <>
      <div className="grid grid-cols-12">
        <div className="md:col-span-4 md:col-start-5 col-span-12 px-8 bg-white border pb-6 pt-0.5 rounded-xl">
          <div className="mt-3 flex-col">
            <div>
              <BaseSelect
                value={filter.category}
                className="mt-3 w-full"
                onChange={(event, newValue) =>
                  setfilter((prevVal: any) => {
                    return {
                      ...prevVal,
                      category: newValue,
                    };
                  })
                }
              >
                <BaseSelectOption disabled value={""}>
                  Select category
                </BaseSelectOption>
                {categories?.map((category) => {
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
            <div>
              <BaseSelect
                multiple
                className="mt-3 w-full"
                value={filter.sources}
                onChange={(_, newValue) =>
                  setfilter((prevVal: any) => {
                    console.log("New val", newValue);

                    return {
                      ...prevVal,
                      sources: newValue.filter((val) => !!val),
                    };
                  })
                }
              >
                <BaseSelectOption value={""} disabled>
                  Select source
                </BaseSelectOption>
                {allSources.length
                  ? allSources?.map((source) => {
                      return (
                        <BaseSelectOption key={source.id} value={source.id}>
                          {source.name}
                        </BaseSelectOption>
                      );
                    })
                  : "No data"}
              </BaseSelect>
            </div>
            <div className="w-full"></div>
            {/* <BaseButton className="mt-3" onClick={handleSearch}>Search</BaseButton> */}
          </div>
        </div>
      </div>
    </>
  );
};
