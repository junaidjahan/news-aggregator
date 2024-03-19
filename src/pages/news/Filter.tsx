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
  onHandleSearch: Function
}

const Filter = ({ sources, categories, onHandleSearch }: FilterProps) => {
  const [filter, setfilter] = useState({
    category: "selectCategory",
    sources: [""],
    date: '',
  });

  const handleSearch = () => {
    return onHandleSearch(filter)
  }

  return (
    <>
      <div>
        <div className="relative">
          <BaseTextfield
            placeholder="Search..."
            className="!bg-white w-full rounded-xl outline-none h-12 pl-4"
          />
          <div className="absolute top-0 right-1 mt-1 bg-teal-500 rounded-xl">
            <IconButton
              className="!text-white"
              type="button"
              sx={{ p: "8px" }}
              aria-label="search"
            >
              <IconSearch />
            </IconButton>
          </div>
        </div>
        <div className="mt-3 flex justify-between gap-x-2">
          <BaseSelect
            value={filter.category}
            className="mt-3"
            onChange={(event, newValue) =>
              setfilter((prevVal: any) => {
                return {
                  ...prevVal,
                  category: newValue,
                };
              })
            }
          >
            <BaseSelectOption disabled value={"selectCategory"}>
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
          <BaseSelect
            multiple
            className="mt-3"
            value={filter.sources}
            onChange={(_, newValue) =>
              setfilter((prevVal:any) => {
                console.log("New val", newValue);
                
                return {
                  ...prevVal,
                  sources: newValue.filter(val=>!!val),
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
          <BaseDatePicker
          
            onChange={(newValue:any) =>{
              setfilter((prevVal) => {
                return {
                  ...prevVal,
                  date: newValue!.format(),
                };
              })
            }
            }
          />
          <BaseButton className="mt-3" onClick={handleSearch}>Search</BaseButton>
        </div>
      </div>
    </>
  );
};

export default Filter;
