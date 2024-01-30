import React from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../firebase";

async function getData() {
  const docSnap = await getDocs(collection(db, "formData"));
  const docs = docSnap.docs.map((doc) => doc.data());
  console.log(docs, "vvf");
  console.log("connected");
  return docs;
}
export default getData;