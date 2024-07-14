import Image from "next/image";

const DiscussSkeleton = () => {
  return (
    <div className="flex flex-col gap-2 py-2 px-3 rounded-[3px] border-purple-400 border bg-purple-50">
      <div className="w-full flex items-center gap-2 px-3 ">
        <Image
          height={40}
          width={40}
          alt=""
          src={"/assets/user_profile_fake.png"}
          className="w-8 h-8 rounded-full animate-pulse"
        />
        <p className=" py-2 bg-purple-200 rounded-md animate-pulse w-[130px]"></p>
      </div>
      <div className=" px-5 flex gap-1 ">
        <p className="py-2 bg-purple-200 rounded-md animate-pulse w-full"></p>
      </div>
      <div className="px-5 flex gap-1 text-gray-600 w-full text-[11px] font-semibold">
        <div className="bg-purple-200 rounded-md py-2 animate-pulse w-[200px]"></div>
        <div className="bg-purple-200 rounded-md py-2 animate-pulse w-[150px]"></div>
      </div>
    </div>
  );
};

export default DiscussSkeleton;
