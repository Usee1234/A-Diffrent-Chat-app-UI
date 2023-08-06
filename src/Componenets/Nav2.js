import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="Navbar2">
      <div className="nave">
        <span className="logo">Vibhu Chat</span>
        <div className="user">
          <img
            src="https://image.lexica.art/full_jpg/7515495b-982d-44d2-9931-5a8bbbf27532"
            alt="profile-img"
            className="img"
          />
          <LocalPhoneIcon className="phone" />
          <span></span>
          <button className="button">Logout</button>
        </div>
        <div>
          <Button
            id="demo-positioned-button"
            aria-controls={open ? "demo-positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            variant="outlined"
            color="inherit"
            size="small"
            onClick={handleClick}
            className="hamburger"
          >
            <MoreHorizIcon />
          </Button>
        </div>
        <Menu
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
        </Menu>
      </div>
      {/* ); */}
      {/* } */}
    </div>
  );
};

export default Navbar;
