import React from "react";

import message from "../../assets/message.svg";
import phone from "../../assets/phone.svg";
import web from "../../assets/web.svg";

export default function Userdata(props) {
  return (
    <>
      <div className="single-user-main-data">
        <h3>{props.userState.name}</h3>

        <ul>
          <li>
            <div className="single-user-info-box">
              <img src={message} alt="" className="single-user-icon" />
              <span className="single-user-info">{props.userState.email}</span>
            </div>
          </li>
          <li>
            <div className="single-user-info-box">
              <img src={phone} alt="" className="single-user-icon" />
              <span className="single-user-info">{props.userState.phone}</span>
            </div>
          </li>
          <li>
            <div className="single-user-info-box">
              <img src={web} alt="" className="single-user-icon" />
              <span className="single-user-info">
                http://{props.userState.website}
              </span>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
