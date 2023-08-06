import AttachFileIcon from "@mui/icons-material/AttachFile";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
const Input = () => {
  return (
    <div className="Input">
      <input type="text" placeholder="Type Something...." className="text" />
      <div className="send">
        <label htmlFor="file" className="pointy">
          <AttachFileIcon />
        </label>
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file" className="pointy">
          <AddPhotoAlternateIcon />
        </label>
        <button className="pointy btn">Send</button>
      </div>
    </div>
  );
};
export default Input;
