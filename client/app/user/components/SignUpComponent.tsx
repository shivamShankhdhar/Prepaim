import React, { useState } from "react";

const SignUpComponent = () => {
  const [userEmail, setUserEmail] = useState("");
  const handleSubmit = () => {};
  return (
    <form
      className="flex flex-col w-full gap-2 p-5 items-center "
      onSubmit={handleSubmit}
    >
      <div className="w-full flex justify-start text-3xl gap-2 font-semibold">
        Join Us
      </div>
      <input
        className="w-full outline-none  border px-2 rounded-md py-2"
        type="text"
        onChange={(e) => setUserEmail(e.target.value)}
        placeholder="Enter your email..."
      />
    </form>
  );
};

export default SignUpComponent;
