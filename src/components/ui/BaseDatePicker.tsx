import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker, DatePickerProps } from "@mui/x-date-pickers/DatePicker";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import EditCalendarRoundedIcon from "@mui/icons-material/EditCalendarRounded";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";

const StyledButton = styled(IconButton)(
  () => `
  position: relative;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  height:48px;
  color: black;
  padding-right:10p;
  &:hover {
  background: #F3F6F9;
  }

  & > svg {
  font-size: 1rem;
  position: absolute;
  }
`
);
const StyledDay = styled(PickersDay)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  color:
    theme.palette.mode === "light"
      ? theme.palette.secondary.dark
      : theme.palette.secondary.light,
}));

export const BaseDatePicker = (props:DatePickerProps<unknown>) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker
          {...props}
          className="pt-0 !mt-1 rounded-xl [&_.MuiStack-root]:!pt-0"
          slots={{
            openPickerIcon: EditCalendarRoundedIcon,
            openPickerButton: StyledButton,
            day: StyledDay,
          }}
          slotProps={{
            openPickerIcon: { fontSize: "large" },
            openPickerButton: { color: "error" },
            textField: {
              variant: "filled",
              focused: true,
              color: "success",
              className:
                "[&_.MuiInputBase-root]:after:!border-none w-full !max-h-[47px] min-h-[47px] [&_input]:rounded-xl [&_.MuiInputBase-root]:!bg-transparent [&_button]:px-5 [&_input]:min-w-[180px] [&_button]:right-[15px] [&_button]:top-[2px] [&_.MuiInputBase-root]:pr-0 [&_input]:!pt-[13px]  [&_input]:bg-white [&_input]:!text-sm bg-white  [&_.MuiInputBase-root]:after:!border-transparent [&_.MuiFilledInput-underline]:before:border-none [&_.MuiInputBase-root]:before:!border-none", 
            },
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};
