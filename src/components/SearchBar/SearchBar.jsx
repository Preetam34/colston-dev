import React from "react";
import SearchIcon from "../../assets/SearchIcon.svg";
import Input from "@mui/material/Input";
import Box from "@mui/material/Box";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

import { SearchStyle } from "./searchBarStyles";
import "./searchBarMedia.css";

const SearchBar = ({
  placeholder,
  onChange,
  value,
  clearText,
  cancelIconRight,
}) => {
  return (
    <Box sx={SearchStyle.searchBoxWrapper} className="searchBoxWrapper">
      <Input
        // fullWidth
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        sx={SearchStyle.inputField}
        disableUnderline
      />
      {/* <SearchIcon sx={SearchStyle.searchIcon} /> */}
      <div>
        <img src={SearchIcon}/>
      </div>
      {cancelIconRight && value.length !== 0 && (
        <CloseOutlinedIcon onClick={clearText} sx={SearchStyle.cancelIcon} />
      )}
    </Box>
  );
};

export default SearchBar;
