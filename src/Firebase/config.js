// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

import {
  appId,
  authDomain,
  firebaseKey,
  messagingSenderId,
  projectId,
  storageBucket,
} from "Utils/utils";

const firebaseConfig = {
  apiKey: firebaseKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
