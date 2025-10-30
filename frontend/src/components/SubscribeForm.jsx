import React, { useState } from "react";
import { axiosInstance } from "../lib/axios";
export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setStatus("❌ Please enter a valid email address.");
      setError(true);
      setSuccess(false);
    } else {
      try {
        setLoading(true);
        setStatus("");
        setError(false);
        setSuccess(false);

        const res = await axiosInstance.post("/subscribe", { email });

        if (res.status === 200) {
          setStatus("✅ Subscription email sent!");
          setEmail("");
          setSuccess(true);
        } else {
          setStatus("❌ Something went wrong.");
          setError(true);
        }
      } catch (err) {
        console.error(err);
        setStatus("❌ Error sending request.");
        setError(true);
      } finally {
        setLoading(false);
        setTimeout(() => {
          setSuccess(false);
          setError(false);
          setStatus("");
        }, 3000);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="join mt-5 w-full flex flex-col items-center space-y-2"
    >
      <div className="w-full relative flex items-center py-6">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          required
          disabled={loading}
          onChange={(e) => setEmail(e.target.value)}
          className={`w-full text-gray-600 placeholder:text-gray-400 text-base xl:text-lg px-2 py-3 xl:px-4 xl:py-6 border ${error ? "border-red-500" : "border-gray-300"}`}
        />
        <button
          type="submit"
          disabled={loading}
          className="btn btn-neutral text-white px-5 py-6 xl:px-10 xl:py-9 text-sm"
        >
          {loading ? "Sending..." : "SUBSCRIBE"}
        </button>
      </div>

      {status && (
        <p
          className={`text-sm mt-2 ${
            success ? "text-green-600" : error ? "text-red-600" : ""
          }`}
        >
          {status}
        </p>
      )}
    </form>
  );
}
