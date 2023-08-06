// import Button from "@mui/material/Button";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import { useState } from "react";
// import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import * as React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
const Navbar = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // const [anchorEl, setAnchorEl] = useState(null);
  // const open = Boolean(anchorEl);
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };
  return (
    <div className="Navbar">
      <div>
        <span className="logo">Vibhu Chat</span>
        <div className="user">
          <img
            src="https://image.lexica.art/full_jpg/7515495b-982d-44d2-9931-5a8bbbf27532"
            alt="profile-img"
            className="img"
          />
          {/* <LocalPhoneIcon className="phone" /> */}
          <span></span>
          <button className="button">Logout</button>
          <MoreVertIcon className="more" />
          <SearchIcon className="search1" />
        </div>
        <Box sx={{ width: "100%" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            centered
            textColor="white"
            indicatorColor="secondary"
          >
            <Tab label="All" />
            <Tab label="Channel" />
            <Tab label="Group" />
            <Tab label="Personal" />
          </Tabs>
        </Box>
        {/* <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left"
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu> */}
      </div>
    </div>
  );
};

export default Navbar;
