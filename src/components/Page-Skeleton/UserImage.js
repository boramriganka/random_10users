import React, { useState, useEffect } from "react";

export default function UserImage({ name }) {
  const [image, setImage] = useState("");

  useEffect(() => {
    setImage(
      `https://avatars.dicebear.com/v2/avataaars/${name}.svg?mood[]=happy`
    );
  }, [name]);

  return (
    <>
      <div className="single-user-pro-box">
        <img src={image} className="single-user-pro-img" />
      </div>
    </>
  );
}
