import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, set } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAsB0JrzokSrAaEBcd09uqjvvh4bDxLFV0",
    authDomain: "contactsinera.firebaseapp.com",
    databaseURL: "https://contactsinera-default-rtdb.firebaseio.com",
    projectId: "contactsinera",
    storageBucket: "contactsinera.appspot.com",
    messagingSenderId: "694201273705",
    appId: "1:694201273705:web:b1221dbf90b922ef9e81f8"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const sendFormDataToFirebase = async (formData: unknown) => {
  try {
    const dataRef = ref(db, "contactFormEntries");
    const newEntryRef = push(dataRef);

    await set(newEntryRef, formData);
    return true;
  } catch (error) {
    console.error("Error sending data to Firebase:", error);
    return false;
  }
};

export { sendFormDataToFirebase };
