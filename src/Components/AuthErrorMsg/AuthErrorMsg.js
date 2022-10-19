import React from "react";

export const AuthErrorMsg = ({ text }) => {
  return (
    <div className="border-2 mb-5 rounded-lg p-3 bg-red-100 border-red-600">
      <p className="text-md text-red-600">{text}</p>
    </div>
  );
};
