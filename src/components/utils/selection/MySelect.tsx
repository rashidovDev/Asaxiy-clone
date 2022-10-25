import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { sort } from '../../../data';

interface ISort {
  setSortData : React.Dispatch<React.SetStateAction<string>>
}

const MySelect : React.FC<ISort> = ({setSortData}) =>  {
  const [age, setAge] = React.useState('');

const handleChange = (event: SelectChangeEvent) => {
  setSortData(event.target.value as string)
  setAge(event.target.value as string);
  };
  
  const selectSX = {
    "&:hover": {
      backgroundColor: "#008DFF",
      color : "#fff"
    },
    fontSize : "12px",
    transition : "0.5s"
  }


  return (
    <FormControl sx={{ m: 1, minWidth: 120, maxHeight: 10 }}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          sx={{height : "30px", fontSize : "12px"}}
        >
          <MenuItem sx={{ fontSize : "13px", fontWeight:"bolder"}} value="">
            Сортировка
          </MenuItem>
          {
            sort.map((item, idx) => (
              <MenuItem key={idx + 1} sx={selectSX} value={item.value}>{item.title}</MenuItem>
            ))
          }
        </Select>
      </FormControl>
  );
}

export default MySelect

