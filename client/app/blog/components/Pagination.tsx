import { Button } from "@mui/material";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import PaginationItem from "./PaginationItem";
import Link from "next/link";

interface Props {
  items: any;
  setProperty: any;
  page: any;
}
const Pagination = ({ items, setProperty, page }: Props) => {
  console.log(page);
  return (
    <>
      {items.length > 0 && (
        <div className="w-full flex justify-between gap-5 items-center mt-5 px-2 py-2 bg-gray-50">
          <Button
            disabled={Number(page) === 1}
            sx={{ textTransform: "none" }}
            onClick={() => setProperty(Number(page) - 1)}
            className="bg-gray-200 px-2 flex gap-1 hover:bg-gray-300 text-black"
          >
            <Link
              href={"/blog/#posts-container"}
              className="flex justify-center items-center"
            >
              <span>
                <IoIosArrowBack size={20} />
              </span>

              <span className="flex-1">Prev</span>
            </Link>
          </Button>
          <div className="w-[fit-content] flex gap-1 justify-center items-center flex-wrap">
            {[...Array(Math.ceil(items.length / 10))].map(
              (_, paginationItem: any) => {
                return (
                  <PaginationItem
                    paginationItem={paginationItem}
                    page={page}
                    setProperty={setProperty}
                  />
                );
              }
            )}
          </div>
          <Button
            disabled={
              Number(page) === [...Array(Math.ceil(items.length / 10))].length
            }
            onClick={() => setProperty(Number(page) + 1)}
            sx={{ textTransform: "none" }}
            className="bg-indigo-800 px-2 flex disabled:bg-indigo-300 disabled:text-white gap-1 hover:bg-indigo-900 text-white"
          >
            <Link
              href={"/blog/#posts-container"}
              className="flex justify-center items-center"
            >
              <span className="flex-1">Next</span>
              <span>
                <IoIosArrowForward size={20} />
              </span>
            </Link>
          </Button>
        </div>
      )}
    </>
  );
};

export default Pagination;
