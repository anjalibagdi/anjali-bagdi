import React from 'react';
import './FlowSteps.css';

const steps = [
  {
    number: '01',
    title: 'Set disbursement Instructions',
    desc: 'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
  {
    number: '02',
    title: 'Assembly retrieves funds from your account',
    desc: 'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
  {
    number: '03',
    title: 'Assembly initiates disbursement',
    desc: 'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
  {
    number: '04',
    title: 'Customer receives funds payment',
    desc: 'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
];

const FlowSteps = () => {
  return (
    <section className="flow-section">
      <p className="flow-subtitle">WHATS THE FUNCTION</p>
      <h2 className="flow-title">Let’s see how it works</h2>

      <div className="steps-container">
        {steps.map((step, index) => (
          <div className="step-item" key={index}>
            <div className="step-circle">{step.number}</div>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-desc">{step.desc}</p>
            {index < steps.length - 1 && (
              <svg
                className="step-connector"
                viewBox="0 0 120 20"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,10 Q60,0 120,10"
                  fill="transparent"
                  stroke="#cbd5e1"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />
              </svg>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FlowSteps;
