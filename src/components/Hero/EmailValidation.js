import React, { useState } from "react";

function EmailValidation() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Step 2: Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Reset errors before validation
    setEmailError("");

    // Step 3: Validate email
    if (!email) {
      setEmailError("Email is required.");
    } else if (!validateEmail(email)) {
      setEmailError("Please enter a valid email.");
    } else {
      setIsSubmitted(true);
      // Do the actual form submission here (API call, etc.)
      console.log("Form Submitted with email:", email);
    }
  };

  // Step 4: Email validation function
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <form
      onSubmit={handleSubmit}
      data-hs-cf-bound="true"
      style={{ padding: 0, margin: 0 }}
    >
      <div className="flex justify-between flex-column align-item-center flex-row-md justify-start-xl">
        <div className="w-100 max-w-325 mr-sm-8">
          <input
            type="text"
            placeholder="Email"
            name="email"
            id="signup-email"
            className="w-100"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Handle input changes
          />
          {/* Step 5: Display error message if there's an email error */}
          {emailError && <div className="error">{emailError}</div>}
        </div>
        <div className="w-100 max-w-325 mt-15 mt-sm-0 max-w-sm-210">
          <button className="h-53 w-100" type="submit">
            Let's try it out
          </button>
        </div>
      </div>
      {/* Step 6: Show success message after form submission */}
      {isSubmitted && (
        <div className="success">Form submitted successfully!</div>
      )}
    </form>
  );
}

export default EmailValidation;
