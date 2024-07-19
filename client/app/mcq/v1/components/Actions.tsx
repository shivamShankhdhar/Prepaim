"use client";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import Breadcrum from "@/app/components/Global/Breadcrum";
import { Menu } from "@mui/material";

const Actions = ({
  setProperty1,
  setProperty2,
  chapter,
  subject,
  totalquestion,
  questionNo,
  requestedPage,
}: any) => {
  return (
    <div className="flex justify-start bg-white items-center px-2 max-sm:flex max-md:flex md:flex sm:flex lg:hidden xl:hidden 2xl:hidden">
      {requestedPage === "grid-view-question-page" && (
        <div>
          <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState: any) => (
              <React.Fragment>
                {/* <Button variant="contained">Dashboard</Button> */}
                {/* hamburger icon  */}
                <div
                  className="flex justify-center items-center p-2 cursor-pointer rounded-md  "
                  {...bindTrigger(popupState)}
                >
                  <RxHamburgerMenu size={15} />
                </div>
                {/* options menu */}
                <Menu {...bindMenu(popupState)}>
                  <MenuItem onClick={popupState.close}>
                    <div onClick={() => setProperty1(true)} className="py-0">
                      Chapters
                    </div>
                  </MenuItem>
                  <MenuItem onClick={popupState.close}>
                    <div onClick={() => setProperty2(true)} className="py-0">
                      Question Board
                    </div>
                  </MenuItem>
                  {/* <MenuItem onClick={popupState.close}>Logout</MenuItem> */}
                </Menu>
              </React.Fragment>
            )}
          </PopupState>
        </div>
      )}

      <div className="flex-1">
        <Breadcrum
          subject={subject}
          chapter={chapter}
          totalquestion={totalquestion}
          questionNo={questionNo}
        />
      </div>
    </div>
  );
};
export default Actions;
