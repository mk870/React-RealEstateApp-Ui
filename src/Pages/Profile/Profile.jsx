import React from "react";
import { useState } from "react";

import * as styled from "./ProfileStyles";
import { Page, PageInnerContainer } from "Css/PageStyles";
import empytyProfile from "Assets/empty-profile.jpg";
import PersonalDetails from "./PersonalDetails/PersonalDetails";
import EditContainer from "components/EditContainer/EditContainer";
import AddressDetails from "./AddressDetails/AddressDetails";
import Notifications from "./Notifications/Notifications";
import Security from "./Security/Security";

const Profile = () => {
  const [inView, setInView] = useState("Personal information");
  const links = [
    "Personal information",
    "Notifications",
    "Passwords and Security",
  ];
  return (
    <Page>
      <PageInnerContainer>
        <styled.container>
          <styled.header>My Profile</styled.header>
          <styled.overview>
            <styled.profilePhoto src={empytyProfile} alt="profile-photo" />
            <EditContainer />
          </styled.overview>
          <styled.row>
            {links.map((link) => (
              <styled.link
                key={link}
                onClick={() => setInView(link)}
                active={inView === link}
              >
                {link}
              </styled.link>
            ))}
          </styled.row>
          {inView === "Personal information" && (
            <>
              <PersonalDetails />
              <AddressDetails />
            </>
          )}
          {inView === "Notifications" && <Notifications/>}
          {inView === "Passwords and Security" && <Security/>}
        </styled.container>
      </PageInnerContainer>
    </Page>
  );
};

export default Profile;
