import React, { useState } from "react";

// TODO MAKE FUNCTIONAL

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple email regex for validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError(true);
      setSuccess(false);
      return;
    }

    // Submit success
    console.log("Submitted email:", email);
    setEmail("");
    setError(false);
    setSuccess(true);

    // Hide success after 3 seconds
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="join mt-5 w-full flex flex-col items-center space-y-2">
      <div className="w-full relative flex items-center py-6">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`w-full text-gray-400 text-lg px-4 py-6 border ${error ? "border-red-500" : "border-gray-300"}`}
        />
        <button type="submit" className="btn btn-neutral text-white px-10 py-9 text-sm">
          SUBSCRIBE
        </button>
      </div>

      {/* Error Message */}
      {error && (
        <div className="text-red-600 text-sm">
          Enter valid email address
        </div>
      )}

      {/* Success Message */}
      {success && (
        <div className="text-green-600 text-sm">
          Successfully subscribed!
        </div>
      )}
    </form>
  );
}
