import { Modal } from "@mui/material";
import React from "react";
import { IoClose } from "react-icons/io5";
import PrivacyPolicy from "../AdsenseEssentials/PrivacyPolicy";
// import Disclaimer from "../AdsenseEssentials/TermsOfServices";
import AboutUs from "../AdsenseEssentials/AboutUs";
import ContactUsForm from "../AdsenseEssentials/ContactUsForm";
import TermsOfServices from "../AdsenseEssentials/TermsOfServices";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const FooterLinks = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openItem, setOpenItem] = React.useState("");
  return (
    <div className="w-full flex justify-center items-center">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="w-full flex flex-col gap-1 py-1 text-sm bg-purple-50 h-[100vh] overflow-y-auto">
          <div className="w-full flex-wrap flex justify-end items-center cursor-pointer px-11">
            <div
              onClick={handleClose}
              title="Close this page"
              className="p-1 mt-3 bg-purple-100 hover:bg-purple-200 border-purple-300 text-purple-800 border rounded-md"
            >
              <IoClose size={20} />
            </div>
          </div>
          <div className="w-full px-11 py-3 ">
            {openItem === "Privacy" && (
              <div>
                <PrivacyPolicy />
              </div>
            )}
            {openItem === "terms-of-services" && (
              <div>
                <TermsOfServices />
              </div>
            )}
            {openItem === "about" && (
              <div>
                <AboutUs />
              </div>
            )}
            {openItem === "contact" && (
              <div>
                <ContactUsForm />
              </div>
            )}
          </div>
        </div>
      </Modal>

      <ul className="flex flex-wrap gap-1 text-sm">
        <li
          onClick={() => {
            handleOpen();
            setOpenItem("about");
          }}
          className="flex cursor-pointer min-w-[fit-content] max-w-[100%] justify-center items-center px-2 py-1 rounded-md hover:bg-purple-100"
        >
          About us
        </li>
        <li
          onClick={() => {
            handleOpen();
            setOpenItem("Privacy");
          }}
          className="flex cursor-pointer min-w-[fit-content] max-w-[100%] justify-center items-center px-2 py-1 rounded-md hover:bg-purple-100"
        >
          Privacy
        </li>
        <li
          onClick={() => {
            handleOpen();
            setOpenItem("terms-of-services");
          }}
          className="flex cursor-pointer min-w-[fit-content] max-w-[100%] justify-center items-center px-2 py-1 rounded-md hover:bg-purple-100"
        >
          Terms of Services
        </li>
        <li
          onClick={() => {
            handleOpen();
            setOpenItem("contact");
          }}
          className="flex cursor-pointer min-w-[fit-content] max-w-[100%] justify-center items-center px-2 py-1 rounded-md hover:bg-purple-100"
        >
          Contact
        </li>
      </ul>
    </div>
  );
};

export default FooterLinks;
