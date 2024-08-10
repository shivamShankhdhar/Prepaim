import React, { useState } from "react";

const Notification = ({ msg, type }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };
  const handleOpen = () => {
    setIsOpen(true);
  };

  return <>{isOpen && <div>this is Notification</div>}</>;
};

export default Notification;
