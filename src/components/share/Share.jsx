import "./share.css"
import { HiOutlineCamera } from "react-icons/hi2";
import { SlPicture } from "react-icons/sl";
import { ImAttachment } from "react-icons/im";
import { SlLocationPin } from "react-icons/sl";
import { BsEmojiSmile } from "react-icons/bs";

export default function Share(){
    return (
        <div className="share">
          <div className="shareWrapper">
            <div className="shareTop">
                <img className="shareProfileImga" src="/asset/userIcon.svg" alt="" />
                <input placeholder="No que você está pensando" className="shareInput" />
            </div>
            <hr className="shareHr"/>
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <HiOutlineCamera className="shareIcon"/>
                    </div>
                    <div className="shareOption">
                        <SlPicture className="shareIcon"/>
                    </div>
                    <div className="shareOption">
                        <ImAttachment className="shareIcon"/>
    
                    </div>
                    <div className="shareOption">
                        <SlLocationPin className="shareIcon"/>
                    </div>
                    <div className="shareOption">
                        <BsEmojiSmile className="shareIcon"/>
                    </div>
                </div>
                <button className="shareBottom">Postar</button>
            </div>
          </div>
        </div>
    )
}