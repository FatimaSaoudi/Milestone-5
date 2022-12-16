import * as React from 'react';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export default function DateandTime() {
  const [value, setValue] = React.useState(dayjs);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (

    <LocalizationProvider dateAdapter={AdapterDayjs}> 
      <Stack spacing={3} sx={{ alignItems:"center"}}> 
        <DatePicker 
          className='mb-5'
          label="Date"
          inputFormat="DD / MM / YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField sx={{width: '50%'}} {...params} />}
        /> 
        
        <TimePicker
          label="Time"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField sx={{width: '50%'}} {...params} />}
        />
        {/* <DateTimePicker
          label="Date&Time picker"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        /> */}
      </Stack>
    </LocalizationProvider>

    
    
  );
}