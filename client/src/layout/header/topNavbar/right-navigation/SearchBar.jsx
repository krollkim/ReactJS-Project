import React, { useContext } from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "../../../../providers/ThemeProvider";
import { searchContext } from "../../../../providers/SearchProvider";

const SearchBar = () => {
  const {isDark} = useTheme();
  const { handleChange} = useContext(searchContext)
 
  return (
    <Box display="inline-flex">
      <FormControl variant="standard">
        <OutlinedInput
          onInput={(e) => {handleChange(e)}}
          sx={{ backgroundColor: isDark ? "#333333" : "#e3f2fd" }}
          placeholder="Search"
          size="small"
          endAdornment={
            <InputAdornment position="end">
              <IconButton edge="end">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  );
};

export default SearchBar;