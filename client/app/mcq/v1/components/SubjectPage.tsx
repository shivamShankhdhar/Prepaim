// import React from "react";
import React, { useEffect } from "react";
import { useParams, usePathname, useRouter } from "next/navigation";
import Breadcrum from "@/app/components/Global/Breadcrum";
import SubjectList from "../components/Subjects/SubjectList";
import Footer from "@/app/components/Footer/Footer";

const SubjectPage = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [isRouteFalse, setIsRouteFalse] = React.useState(true);
  useEffect(() => {
    if (!pathname.includes("subjects")) {
      router.push("/mcq/v1/subjects");
    }
    setIsRouteFalse(false);
  }, [pathname]);

  const { subject } = useParams();
  return (
    <>
      {isRouteFalse ? (
        "Hold on... Checking Route..."
      ) : (
        <div className="flex w-full items-center flex-col">
          {/* breadcrum */}

          <Breadcrum subject={subject.toString()} />
          {/* all subjects  */}
          <SubjectList />
          <Footer />
        </div>
      )}
    </>
  );
};

export default SubjectPage;
