import { createSlice } from "@reduxjs/toolkit";

const generateRandomColor = () => {
  let maxVal = 0xffffff;
  let randomNumber = Math.random() * maxVal;
  randomNumber = Math.floor(randomNumber);
  randomNumber = randomNumber.toString(16);
  let randColor = randomNumber.padStart(6, 0);
  return `#${randColor.toUpperCase()}`;
};
const user = {
  id: "",
  themeColor: generateRandomColor(),
  emailAddress: "",
  firstName: "",
  bio: "",
  phone: "",
  lastName: "",
  profilePhoto: "",
  country: "",
  state: "",
  city: "",
  streetName: "",
  streetNumber: "",
  dateOfBirth: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: user,
  },
  reducers: {
    addUserId: (state, action) => {
      state.value = {
        ...state.value,
        id: action.payload,
      };
    },
    addFirstName: (state, action) => {
      state.value = {
        ...state.value,
        firstName: action.payload,
      };
    },
    addEmailAddress: (state, action) => {
      state.value = {
        ...state.value,
        emailAddress: action.payload,
      };
    },
    addLastName: (state, action) => {
      state.value = {
        ...state.value,
        lastName: action.payload,
      };
    },
    addBio: (state, action) => {
      state.value = {
        ...state.value,
        bio: action.payload,
      };
    },
    addCountry: (state, action) => {
      state.value = {
        ...state.value,
        country: action.payload,
      };
    },
    addCity: (state, action) => {
      state.value = {
        ...state.value,
        city: action.payload,
      };
    },
    addStreetNumber: (state, action) => {
      state.value = {
        ...state.value,
        streetNumber: action.payload,
      };
    },
    addStreetName: (state, action) => {
      state.value = {
        ...state.value,
        streetName: action.payload,
      };
    },
    addProfilePhoto: (state, action) => {
      state.value = {
        ...state.value,
        profilePhoto: action.payload,
      };
    },
    addPhone: (state, action) => {
      state.value = {
        ...state.value,
        phone: action.payload,
      };
    },
    addState: (state, action) => {
      state.value = {
        ...state.value,
        state: action.payload,
      };
    },
    addDateOfBirth: (state, action) => {
      state.value = {
        ...state.value,
        dateOfBirth: action.payload,
      };
    },
  },
});
export const {
  addUserId,
  addFirstName,
  addEmailAddress,
  addBio,
  addCity,
  addCountry,
  addLastName,
  addPhone,
  addProfilePhoto,
  addState,
  addStreetNumber,
  addDateOfBirth,
  addStreetName,
} = userSlice.actions;
export default userSlice.reducer;
