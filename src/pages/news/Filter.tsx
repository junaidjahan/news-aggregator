import {
  BaseSelect,
  BaseSelectOption,
  BaseTextfield,
  BaseDatePicker,
} from "@/components/ui";
import { IconButton, MenuItem } from "@mui/material";
import { IconSearch } from "@tabler/icons-react";

const Filter = () => {
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
        <div className="mt-3 flex justify-between">
          <BaseSelect defaultValue={0} className="mt-3">
            <BaseSelectOption value={0}>Select category</BaseSelectOption>
            <BaseSelectOption value={10}>Ten</BaseSelectOption>
          </BaseSelect>
          <BaseSelect defaultValue={0} className="mt-3">
            <BaseSelectOption value={0}>Select source</BaseSelectOption>
            <BaseSelectOption value={10}>Ten</BaseSelectOption>
          </BaseSelect>
          <BaseDatePicker />
        </div>
      </div>
    </>
  );
};

export default Filter;
