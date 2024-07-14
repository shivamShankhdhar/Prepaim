import React from "react";

const WrongQuestionSelectedInURL = ({ questionNo }: { questionNo: Number }) => {
  return (
    <div className="w-fulll text-rose-800 py-2 flex justify-center items-center ">
      <div className="sm:w-full max-sm:w-full md:w-full text-center bg-white rounded-md py-5 border border-rose-800 justify-center items-center max-md:w-full lg:w-[90%] max-lg:w-[80%] xl:w-[80%] 2xl:w-[80%]">
        {`Please check your URL there is no question that is selected
                please re-confirm it.There is no Qustion ${questionNo} available. Please select a question from Question Board.`}
      </div>
    </div>
  );
};

export default WrongQuestionSelectedInURL;
