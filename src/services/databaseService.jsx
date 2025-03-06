import { db } from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const savePortfolioData = async (data) => {
  try {
    const docRef = await addDoc(collection(db, "portfolios"), data);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export { savePortfolioData };
