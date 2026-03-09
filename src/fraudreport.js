const FRAUD_KEY = "fraud_reports";

export const getFraudReports = () => {
  return JSON.parse(localStorage.getItem(FRAUD_KEY)) || [];
};

export const addFraudReport = (report) => {
  const existing = getFraudReports();
  existing.unshift(report);
  localStorage.setItem(FRAUD_KEY, JSON.stringify(existing));
};