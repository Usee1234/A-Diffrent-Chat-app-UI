import { useState } from "react";
// import Chat from "./Chat";
import Message from "./Message";
// import VideocamIcon from "@mui/icons-material/Videocam";
// import PersonAddIcon from "@mui/icons-material/PersonAdd";
// import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

// import Messages from "./Messages";
// import Input from "./Input";
import { Link } from "react-router-dom";
const Chats = () => {
  const [comp, setComp] = useState(false);
  const ShowClick = () => {
    if (comp === false) {
      setComp(true);
    } else {
      setComp(false);
    }
  };
  return (
    <div className="chats">
      <div
        className="userChat"
        onClick={() => {
          let q = window.screen.width;
          if (q <= 600) {
            ShowClick();
          }
        }}
      >
        <img
          src="https://image.lexica.art/full_jpg/7515495b-982d-44d2-9931-5a8bbbf27532"
          alt=""
        />
        <div className="userChatInfo">
          <span>Randy</span>
          <p> Hello</p>
        </div>
      </div>

      {comp && (
        <div>
          <Message />
        </div>
      )}
      <Link to="/chat" className="border">
        <div className="userChat">
          <img
            src="https://image.lexica.art/full_jpg/7515495b-982d-44d2-9931-5a8bbbf27532"
            alt=""
          />
          <div className="userChatInfo">
            <span>Randy</span>
            <p> Hello</p>
          </div>
        </div>
      </Link>
      <Link to="/chat" className="border">
        <div className="userChat">
          <img
            src="https://image.lexica.art/full_jpg/7515495b-982d-44d2-9931-5a8bbbf27532"
            alt=""
          />
          <div className="userChatInfo">
            <span>Randy</span>
            <p> Hello</p>
          </div>
        </div>
      </Link>
      <Link to="/chat" className="border">
        <div className="userChat">
          <img
            src="https://image.lexica.art/full_jpg/7515495b-982d-44d2-9931-5a8bbbf27532"
            alt=""
          />
          <div className="userChatInfo">
            <span>Randy</span>
            <p> Hello</p>
          </div>
        </div>
      </Link>
      <div className="userChat">
        <img
          src="https://image.lexica.art/full_jpg/7515495b-982d-44d2-9931-5a8bbbf27532"
          alt=""
        />
        <div className="userChatInfo">
          <span>Randy</span>
          <p> Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img
          src="https://image.lexica.art/full_jpg/7515495b-982d-44d2-9931-5a8bbbf27532"
          alt=""
        />
        <div className="userChatInfo">
          <span>Randy</span>
          <p> Hello</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
