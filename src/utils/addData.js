import React from "react";
import { doc, setDoc } from "firebase/firestore";
import db from "../firebase";
import {nanoid} from 'nanoid'
async function addData({username,email,message}) {
  // Add a new document in collection "cities"
  const firebaseData = await setDoc(doc(db, "formData",nanoid()), {
    name: username,
    email: email,
    message: message,
  });
  console.log('data aarha',firebaseData);
}

export default addData;
