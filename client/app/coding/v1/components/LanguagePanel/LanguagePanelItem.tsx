import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const LanguagePanelItem = ({ item, question, layoutType }: any) => {
  const { language } = useParams();
  return (
    <div
      className={`border rounded p-2 h-[fit-content] object-cover ${
        item.name === language
          ? "bg-indigo-200 hover:bg-indigo-100"
          : "hover:bg-gray-100"
      }`}
    >
      <Link
        href={`/coding/v1/${item.name}/${question
          .toString()
          .replaceAll(" ", "-")}`}
      >
        <Image
          src={item.image}
          alt={item.name}
          height={layoutType === "vertical" ? 50 : 20}
          width={50}
        />
      </Link>
    </div>
  );
};

export default LanguagePanelItem;
