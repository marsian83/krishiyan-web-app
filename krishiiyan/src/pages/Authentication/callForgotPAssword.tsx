import React, { useState } from "react";
import axios from "axios";
import CryptoJS from "crypto-js";
import { toast } from "react-toastify";

const SendEmailPage = () => {
  const [email, setEmail] = useState("");
  const encryptionKey: string = process.env.REACT_APP_ENCRYPTION_KEY || "";

  const handleSendEmail = async () => {
    try {
      const encryptedEmail = CryptoJS.AES.encrypt(
        email,
        encryptionKey
      ).toString();

      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/auth/send-reset-password-link`,
        { email: encryptedEmail }
      );

      toast.success("Reset password link sent sucessfully!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      console.error("Error sending reset password link:", error);

      toast.error("Error sending reset link", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <div>
      <h2>Send Reset Password Link</h2>
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleSendEmail}>Send Reset Password Link</button>
    </div>
  );
};

export default SendEmailPage;
