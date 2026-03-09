import { db, auth } from "./firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export const saveTransaction = async ({
  amount,
  receiver,
  upiId,
  status
}) => {
  const user = auth.currentUser;
  if (!user) return;

  const txRef = collection(db, "users", user.uid, "transactions");

  await addDoc(txRef, {
    amount,
    receiver,
    upiId,
    status,
    timestamp: serverTimestamp()
  });
};