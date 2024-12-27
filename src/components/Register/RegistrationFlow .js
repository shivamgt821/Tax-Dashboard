import React, { useState } from 'react';
import Register from './Register'; // Step 1 Component
import BasicDetails from './BasicDetails'; // Step 2 Component
import ContactDetails from './ContactDetails'; // Step 3 Component
import OTPPage from './OTPPage'; // Step 4 Component
import './RegistrationFlow.css';

const RegistrationFlow = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { id: 1, label: 'Get Started', component: <Register onContinue={() => setCurrentStep(1)} /> },
    { id: 2, label: 'Fill Details', component: <BasicDetails onContinue={() => setCurrentStep(2)} onBack={() => setCurrentStep(0)} /> },
    { id: 3, label: 'Verify Details', component: <ContactDetails onContinue={() => setCurrentStep(3)} onBack={() => setCurrentStep(1)} /> },
    { id: 4, label: 'Secure Your Account', component: <OTPPage onBack={() => setCurrentStep(2)} /> },
  ];

  return (
    <div className="registration-flow-container">
      {/* Stepper Navigation */}
      <div className="stepper-container">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`stepper-item ${currentStep === index ? 'active' : ''} ${currentStep > index ? 'completed' : ''}`}
          >
            <span className="stepper-number">{step.id}</span>
            <p className="stepper-label">{step.label}</p>
          </div>
        ))}
      </div>

      {/* Render Current Step Component */}
      <div className="step-content">
        {steps[currentStep].component}
      </div>
    </div>
  );
};

export default RegistrationFlow;
