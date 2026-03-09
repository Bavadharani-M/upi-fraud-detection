export const logTransaction = (data) => {
  const transactions =
    JSON.parse(localStorage.getItem("transactions")) || [];

  const newTxn = {
    id: "TXN" + Date.now(),
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString(),
    ...data,
  };

  transactions.unshift(newTxn);

  localStorage.setItem(
    "transactions",
    JSON.stringify(transactions)
  );
};