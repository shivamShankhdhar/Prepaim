import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";
import SimpleLoader from "../../Global/SimpleLoader";
const ContactUsForm = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userContactQuery, setUserContactQuery] = useState("");
  const [isPosting, setIsPosting] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    userEmail;
    userContactQuery;

    setIsPosting(true);
    setTimeout(() => {
      setIsPosting(false);
    }, 2000);
  };
  return (
    <div className="w-full flex justify-center items-center h-[70vh]">
      <div className="sm:w-full max-sm:w-full md:w-[80%] max-md:w-[80%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%] border rounded-md bg-white">
        <form className="w-full flex flex-col items-center gap-2 px-2 py-3">
          <div className="w-full text-purple-900 text-2xl font-semibold">
            Contact Us
          </div>
          <input
            className="p-2 w-full border rounded-md"
            type="email"
            placeholder="Enter your Email"
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <textarea
            className="p-2 w-full border rounded-md"
            placeholder="Enter your query"
            onChange={(e) => setUserContactQuery(e.target.value)}
          />
          <button
            className="py-1 px-3 rounded-md justify-center items-center flex gap-1 w-[fit-content] bg-purple-700 hover:bg-purple-800 text-white border"
            type="submit"
            onClick={handleSubmit}
          >
            {isPosting ? <SimpleLoader size={15} clr="white" /> : <IoIosSend />}
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUsForm;
