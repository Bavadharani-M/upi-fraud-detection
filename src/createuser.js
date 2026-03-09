import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase";

export const createUserIfNotExists = async (user) => {
  const ref = doc(db, "users", user.uid);

  await setDoc(
    ref,
    {
      email: user.email,
      balance: 0,
      riskScore: 0,
      createdAt: new Date()
    },
    { merge: true }
  );
};