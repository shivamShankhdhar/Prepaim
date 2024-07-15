import SimpleLoader from "@/app/components/Global/SimpleLoader";
import axios from "axios";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
const DeleteCodingQuestion = () => {
  const cookies = document.cookie;
  const token = cookies.split(";")[1].split("=")[1];
  const id = useParams().id;
  const question = useParams().question;
  const [deletingQuestion, setDeletingQuestion] = useState(false);
  const router = useRouter();
  const handleDelete = () => {
    try {
      setDeletingQuestion(true);
      axios
        .delete(
          `http://localhost:4000/admin/coding/deleteCodingQuestionById/${id}`
        )
        .then((res) => {
          setDeletingQuestion(false);
          toast.success("Question deleted successfully");
          router.push("/admin/v1/coding/dashboard");
        })
        .catch((error) => {
          setDeletingQuestion(false);
          toast.error("Something went wrong...");
        });
    } catch (error) {
      toast.error("Something went wrong...");
    }
  };
  return (
    <div className="w-full flex justify-center h-[fit-content] py-11 gap-11 flex-wrap">
      <div className="w-[40%] border rounded-md text-center px-3 gap-5 mt-11 bg-white py-2">
        <div className="text-center font-bold text-3xl">
          {question.toString().replaceAll("-", " ")}
        </div>
        <hr />
        <div className="mt-2">do you want do delete this question</div>

        <div className="w-full flex justify-center gap-5 mt-3 items-center">
          <Link href={`/admin/v1/coding/dashboard`}>
            <p className="bg-gray-200 hover:bg-gray-300 cursor-pointer flex justify-center items-center py-1 px-3 rounded-md w-[fit-content]">
              cancel
            </p>
          </Link>
          <div
            onClick={handleDelete}
            className="bg-rose-700 gap-2 hover:bg-red-800 cursor-pointer flex justify-center items-center py-1 px-3 rounded-md text-white w-[fit-content]"
          >
            {deletingQuestion && <SimpleLoader size={15} clr={"white"} />}
            {deletingQuestion ? "deleting..." : "delete"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteCodingQuestion;
