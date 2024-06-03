import React, { useState } from 'react';
import './calculator.css';

const GoldLoanCalculator = () => {
  const [weight, setWeight] = useState('');
  const [purity, setPurity] = useState('');
  const [ltvRatio, setLtvRatio] = useState('');
  const [loanAmount, setLoanAmount] = useState(null);

  const calculateLoanAmount = (e) => {
    e.preventDefault();
    const weightInGrams = parseFloat(weight);
    const purityPercentage = parseFloat(purity) / 100;
    const ltvPercentage = parseFloat(ltvRatio) / 100;

    if (!isNaN(weightInGrams) && !isNaN(purityPercentage) && !isNaN(ltvPercentage)) {
      const goldValuePerGram = 5000; // example gold price per gram
      const goldValue = weightInGrams * purityPercentage * goldValuePerGram;
      const loanAmount = goldValue * ltvPercentage;

      setLoanAmount(loanAmount.toFixed(2));
    } else {
      setLoanAmount(null);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow-lg p-3 mb-5 bg-white rounded animate__animated animate__fadeIn">
        <div className="card-body">
          <h1 className="card-title text-center">Gold Loan Calculator</h1>
          <form onSubmit={calculateLoanAmount}>
            <div className="mb-3">
              <label className="form-label">Weight of Gold (grams):</label>
              <input
                type="number"
                className="form-control"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Purity of Gold (%):</label>
              <input
                type="number"
                className="form-control"
                value={purity}
                onChange={(e) => setPurity(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Loan-to-Value Ratio (%):</label>
              <input
                type="number"
                className="form-control"
                value={ltvRatio}
                onChange={(e) => setLtvRatio(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">Calculate</button>
          </form>
          {loanAmount !== null && (
            <div className="mt-4">
              <h2 className="text-success text-center animate__animated animate__bounceIn">
                Estimated Loan Amount: ₹{loanAmount}
              </h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GoldLoanCalculator;
