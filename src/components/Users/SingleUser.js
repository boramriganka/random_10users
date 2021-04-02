import React, { useState } from "react";

import UserImage from "../Page-Skeleton/UserImage";
import UserData from "../Page-Skeleton/UserData";

import heartred from "../../assets/heartred.svg";
import editicon from "../../assets/editicon.svg";
import deleteicon from "../../assets/deleteicon.svg";
import heartwhite from "../../assets/heartwhite.svg";
import close from "../../assets/close.svg";

export default function SingleUser({ data }) {
  const [isLiked, setLiked] = useState(false);
  const [isModelOpened, setOpenModal] = useState(false);

  const [formState, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
  });

  // As soon as we get the name image will be loaded
  const [imageName, setImageName] = useState(data.name);
  const [userState, setUserData] = useState({
    name: data.name,
    email: data.email,
    phone: data.phone,
    website: data.website,
  });

  function onChange(event) {
    handleChange(event);
  }
  function handleChange(event) {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }

  function getInput(name) {
    return formState[name] !== "" ? formState[name] : userState[name];
  }

  function onFormSubmit(event) {
    event.preventDefault();
    setOpenModal(!isModelOpened);
    let name = getInput("name");
    let email = getInput("email");
    let phone = getInput("phone");
    let website = getInput("website");

    setUserData({
      name,
      email,
      phone,
      website,
    });
  }

  // edge case: check if object is empty
  // return nothing
  return (
    <>
      {Object.keys(userState).length === 0  ? (
        <></>
      ) : (
        <div className="single-user-box">
          <UserImage name={imageName} />
          <UserData userState={userState} />

          <div className="single-user-choice">
            <button
              className="single-user-choice-button"
              onClick={() => setLiked(!isLiked)}
            >
              {isLiked ? (
                <img src={heartred} alt="" className="single-user-icon" />
              ) : (
                <img src={heartwhite} alt="" className="single-user-icon" />
              )}
            </button>
            <button
              className="single-user-choice-button"
              onClick={() => setOpenModal(!isModelOpened)}
            >
              <img src={editicon} alt="" className="single-user-icon" />
            </button>

            <button
              className="single-user-choice-button"
              onClick={() => setUserData({})}
            >
              <img src={deleteicon} alt="" className="single-user-icon" />
            </button>
          </div>

          {/* modal opening section  */}

          {isModelOpened ? (
            <div className="modal-box">
              <div className="modal-content">
                <div className="modal-title">
                  <h3>Edit the User</h3>
                  <button onClick={() => setOpenModal(!isModelOpened)}>
                    <img src={close} alt="" className="modal-close" />
                  </button>
                </div>
                <form onSubmit={onFormSubmit} className="modal-form">
                  <div className="modal-form-choice">
                    <label>
                      {formState.name === "" ? (
                        <span className="modal-form-warning">* </span>
                      ) : (
                        <></>
                      )}
                      Name:{" "}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      placeholder={userState.name}
                      onChange={onChange}
                      className="modal-form-input"
                    ></input>
                  </div>
                  <div className="modal-form-choice">
                    <label>
                      {formState.email === "" ? (
                        <span className="modal-form-warning">* </span>
                      ) : (
                        <></>
                      )}
                      Email:{" "}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      placeholder={userState.email}
                      onChange={onChange}
                      className="modal-form-input"
                    ></input>
                  </div>
                  <div className="modal-form-choice">
                    <label>
                      {formState.phone === "" ? (
                        <span className="modal-form-warning">* </span>
                      ) : (
                        <></>
                      )}
                      Phone:{" "}
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={formState.phone}
                      placeholder={userState.phone}
                      onChange={onChange}
                      className="modal-form-input"
                    ></input>
                  </div>
                  <div className="modal-form-choice">
                    <label>
                      {formState.website === "" ? (
                        <span className="modal-form-warning">* </span>
                      ) : (
                        <></>
                      )}
                      Website:{" "}
                    </label>
                    <input
                      type="text"
                      name="website"
                      value={formState.website}
                      placeholder={userState.website}
                      onChange={onChange}
                      className="modal-form-input"
                    ></input>
                  </div>
                  <div className="modal-form-submit">
                    <button
                      onClick={() => setOpenModal(!isModelOpened)}
                      className="modal-form-button modal-cancel"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="modal-form-button modal-ok"
                    >
                      OK
                    </button>
                  </div>
                </form>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      )}
    </>
  );
}
