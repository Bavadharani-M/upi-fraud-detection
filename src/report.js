import React from "react";
import "./dashboard.css";

const Reports = () => {
  // sample data (later this can come from backend / firebase)
  const reports = [
    {
      id: 1,
      fakeAccount: "upi-fake@paytm",
      issue: "Requested money but never delivered product",
      reviewedBy: 12,
      status: "Confirmed Fake",
    },
    {
      id: 2,
      fakeAccount: "shop999@upi",
      issue: "Impersonating a verified merchant",
      reviewedBy: 8,
      status: "Under Review",
    },
    {
      id: 3,
      fakeAccount: "cashback@upi",
      issue: "Promised cashback but redirected to scam link",
      reviewedBy: 20,
      status: "Blocked",
    },
  ];

  return (
    <div>
      <h1 className="heading">Fraud Reports</h1>
      <p className="sub-text">
        Fake users reported and reviewed by the community
      </p>

      <div style={{ marginTop: "24px" }}>
        {reports.map((report) => (
          <div
            key={report.id}
            style={{
              background: "#fff",
              padding: "16px",
              borderRadius: "10px",
              marginBottom: "16px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            }}
          >
            <p>
              <strong>Fake Account:</strong>{" "}
              <span style={{ color: "#c0392b" }}>
                {report.fakeAccount}
              </span>
            </p>

            <p>
              <strong>Reported Issue:</strong> {report.issue}
            </p>

            <p>
              <strong>Reviewed By:</strong> {report.reviewedBy} users
            </p>

            <p>
              <strong>Status:</strong>{" "}
              <span
                style={{
                  color:
                    report.status === "Blocked"
                      ? "red"
                      : report.status === "Confirmed Fake"
                      ? "orange"
                      : "gray",
                }}
              >
                {report.status}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reports;
