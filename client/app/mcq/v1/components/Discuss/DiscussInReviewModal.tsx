import React from "react";
import { FcApproval } from "react-icons/fc";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import { Button } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};

const DiscussInReviewModal = ({ open, handleClose, handleOpen }: any) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          <div className="flex flex-col justify-center items-center">
            <div>
              <FcApproval size={60} />
            </div>
            <div className="text-gray-600 font-semibold mt-2 text-xl">
              Thank you for your time for posting your query.
            </div>
          </div>
        </Typography>
        <Typography
          className="mt-1 flex gap-2 flex-col"
          id="modal-modal-description"
          sx={{ mt: 2 }}
        >
          <div className="flex flex-col justify-center text-center items-center text-md mt-2 text-gray-600">
            We are reviewing your query for our community, and it will be posted
            shortly and we are happy to see it.
          </div>
          <div className="w-full flex justify-center mt-2">
            <Button
              className="bg-gray-200 text-gray-600 capitalize hover:bg-gray-300 py-1 px-5 text-sm"
              onClick={handleClose}
            >
              Close
            </Button>
          </div>
        </Typography>
      </Box>
    </Modal>
  );
};

export default DiscussInReviewModal;
