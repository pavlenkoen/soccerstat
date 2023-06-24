import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const DateCalendar = ({
  dateBefore,
  setDateBefore,
  dateAfter,
  setDateAfter,
}) => {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer
          components={["DatePicker", "DatePicker"]}
          sx={{ mt: "4%", mb: "4%" }}
        >
          <DatePicker
            sx={{ width: { md: "250px", xs: "200px" }, background: "white" }}
            label="Матчи c"
            value={dateBefore}
            onChange={(newValue) => setDateBefore(newValue)}
          />
          <DatePicker
            sx={{ width: { md: "250px", xs: "200px", background: "white" } }}
            label="Матчи по"
            value={dateAfter}
            onChange={(newValue) => setDateAfter(newValue)}
          />
        </DemoContainer>
      </LocalizationProvider>
    </>
  );
};

export default DateCalendar;
