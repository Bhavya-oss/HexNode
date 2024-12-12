import React, { useState } from "react";
import "./HeroStyle.css"; // Assuming you use a separate CSS file for styling

function EmailValidation({ heroRef }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const regEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowMessage(false);

    // Validation logic
    if (email === "") {
      setMessage("Please enter your work email!");
    } else if (!regEx.test(email)) {
      setMessage("Email is not Valid");
    } else {
      setMessage("Successfully submitted");
      setEmail("");
    }

    setShowMessage(true); // Trigger the animation

    // Remove the message after 4 seconds
    setTimeout(() => {
      setMessage("");
      setShowMessage(false);
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: 0, margin: 0 }}>
      <div className="flex justify-between flex-column align-item-center flex-row-md justify-start-xl">
        <div className="w-100 max-w-325 mr-sm-8">
          <input
            type="text"
            placeholder="Email"
            name="email"
            id="signup-email"
            className="w-100"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="w-100 max-w-325 mt-15 mt-sm-0 max-w-sm-210">
          <button
            onClick={() => {
              setIsClicked(true);
            }}
            type="submit"
            className="h-53 w-100 let-try"
            ref={heroRef}
          >
            Let's try it out
          </button>
        </div>
      </div>

      <p
        className={`relative message-animate ${showMessage ? "active" : ""}`}
        style={{ paddingLeft: "12px" }}
      >
        css
      </p>
    </form>
  );
}

export default EmailValidation;
