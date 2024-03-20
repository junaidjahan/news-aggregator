import {
  BaseSelect,
  BaseSelectOption,
  BaseTextfield,
  BaseDatePicker,
  BaseButton,
} from "@/components/ui";
import { SourceModel } from "@/services/use-news-api/typings/source.types";
import { CategoryModel } from "@/typings/source.type";
import { IconButton, SelectChangeEvent } from "@mui/material";
import { IconSearch } from "@tabler/icons-react";
import { MouseEventHandler, useState } from "react";

interface FilterProps {
  sources: Array<SourceModel>;
  categories: Array<CategoryModel>;
  onHandleSearch: Function;
}

const Filter = ({ sources, categories, onHandleSearch }: FilterProps) => {
  const [filter, setfilter] = useState({
    category: "",
    sources: [""],
    date: "",
  });

  const handleSearch = () => {
    return onHandleSearch(filter);
  };

  return (
    <>
      <div className="w-full">
        <div>
          <BaseTextfield
            placeholder="Search..."
            className="!bg-white w-full rounded-xl outline-none h-12 pl-4"
          />
        </div>
        <div className="mt-3 md:grid grid-cols-12 justify-between gap-x-2">
          <div className="col-span-4 w-full">
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
                  <BaseSelectOption key={category.value} value={category.value}>
                    {category.title}
                  </BaseSelectOption>
                );
              })}
            </BaseSelect>
          </div>
          <div className="col-span-4 w-full">
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
              {sources?.map((source) => {
                return (
                  <BaseSelectOption key={source.id} value={source.id}>
                    {source.name}
                  </BaseSelectOption>
                );
              })}
            </BaseSelect>
          </div>
          <div className="col-span-4">
            <BaseDatePicker
              onChange={(newValue: any) => {
                setfilter((prevVal) => {
                  return {
                    ...prevVal,
                    date: newValue!.format(),
                  };
                });
              }}
            />
          </div>
          <BaseButton className="mt-3" onClick={handleSearch}>Search</BaseButton>
        </div>
      </div>
    </>
  );
};

export default Filter;
