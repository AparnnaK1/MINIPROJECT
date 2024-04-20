import React, { useState } from 'react';
import './calc.css';

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanDuration, setLoanDuration] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const calculateMonthlyPayment = () => {
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 100 / 12;
    const term = parseFloat(loanDuration) * 12;

    const monthlyPayment = (principal * rate) / (1 - Math.pow(1 + rate, -term));

    setMonthlyPayment(monthlyPayment.toFixed(2));
  };

  return (
    <div className="loan-calculator">
      <h2>Loan Calculator (INR)</h2>
      <div className="input-group">
        <label>Loan Amount (₹)</label>
        <input 
          type="number" 
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Interest Rate (%)</label>
        <input 
          type="number" 
          step="0.01"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Loan Duration (Years)</label>
        <input 
          type="number" 
          value={loanDuration}
          onChange={(e) => setLoanDuration(e.target.value)}
        />
      </div>
      <button onClick={calculateMonthlyPayment} class="btn">Calculate</button>
      {monthlyPayment > 0 && (
        <div className="result">
          Monthly Payment: ₹{monthlyPayment}
        </div>
      )}
    </div>
  );
};

export default LoanCalculator;