import {  CircularProgress } from '@mui/material'
interface Props {
  size?: number;
  text?: String;
  cls?: string;
}
const Loader = ({ size, text, cls }: Props) => {
  return (
    <div className="flex flex-col gap-2 justify-center w-full text-center items-center mt-2 py-5 font-monospace text-gray-400 h-[fit-content]">
      {text && (
        <div className="font-semibold text-center">
          {" "}
          <p>{`Hold on... ${text}`}</p>
        </div>
      )}
      <CircularProgress size={size} className={`${cls} mt-0 py-0`} />
    </div>
  );
};

export default Loader
