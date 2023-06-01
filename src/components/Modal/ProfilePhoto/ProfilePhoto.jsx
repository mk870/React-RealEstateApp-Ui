import React from "react";
import * as styled from "./ProfilePhotoStyles";

const ProfilePhoto = ({ setProfilePhoto }) => {
  return (
    <styled.container>
      <styled.fileInput
        type="file"
        onChange={(e) => setProfilePhoto(e.target.files[0])}
      />
    </styled.container>
  );
};

export default ProfilePhoto;
