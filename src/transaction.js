import React, { useState, useEffect } from "react";
import "./transaction.css";

const Transaction = () => {
  const [selected, setSelected] = useState(null);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("transactions")) || [];
    setTransactions(data);
  }, []);

  const filteredTxns = transactions.filter(
    (txn) => txn.role === selected
  );

  return (
    <div className="txn-page">
      <h2 className="txn-title">Transactions</h2>

      {/* TWO COLUMN LAYOUT */}
      <div className="txn-columns">
        <div
          className={`txn-card ${selected === "sender" ? "active" : ""}`}
          onClick={() => setSelected("sender")}
        >
          <h3>Sender History</h3>
          <p>View money sent from your account</p>
        </div>

        <div
          className={`txn-card ${selected === "receiver" ? "active" : ""}`}
          onClick={() => setSelected("receiver")}
        >
          <h3>Receiver History</h3>
          <p>View money received into your account</p>
        </div>
      </div>

      {/* DETAILS */}
      {selected && (
        <div className="txn-details">
          <h3>
            {selected === "sender"
              ? "Sender Transaction Details"
              : "Receiver Transaction Details"}
          </h3>

          {filteredTxns.length === 0 ? (
            <p>No transactions found</p>
          ) : (
            filteredTxns.map((txn) => (
              <div key={txn.id} className="txn-row-block">
                <div className="txn-row">
                  <span>Transaction ID</span>
                  <span>{txn.id}</span>
                </div>

                {txn.amount && (
                  <div className="txn-row">
                    <span>Amount</span>
                    <span>₹{txn.amount}</span>
                  </div>
                )}

                <div className="txn-row">
                  <span>Date</span>
                  <span>{txn.date}</span>
                </div>

                <div className="txn-row">
                  <span>Status</span>
                  <span
                    className={
                      txn.status.includes("FROZEN")
                        ? "failed"
                        : "success"
                    }
                  >
                    {txn.status}
                  </span>
                </div>

                <hr />
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Transaction;