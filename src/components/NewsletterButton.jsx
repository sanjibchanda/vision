import React, { useState } from "react";
import { LuMail } from "react-icons/lu";

const NewsletterButton = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValid) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
      // Handle your email logic here (e.g., API call)
      alert(`Submitted: ${email}`);
      setEmail("");
    }
  };

  return (
    <div className="">
      <div className="flex">
        <div className="w-full flex items-center gap-1 px-2 py-3 bg-white text-accent border border-gray-300 rounded-l-sm focus-visible:outline-none">
          <LuMail className="text-muted text-lg" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full "
          />
        </div>
        <button
          onClick={handleSubmit}
          className="bg-white text-accent px-4 py-2 rounded-r-sm hover:bg-primary-dark transition"
        >
          Subscribe
        </button>
      </div>
      {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
    </div>
  );
};

export default NewsletterButton;
