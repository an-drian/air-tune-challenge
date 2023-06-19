import { PuffLoader } from "react-spinners";

type ILoaderProps = {
  centered?: boolean;
  fullscreen?: boolean;
};

const Loader = ({ centered, fullscreen }: ILoaderProps) => {
  return (
    <div
      className={`flex ${centered ? "justify-center" : ""} items-center ${
        fullscreen ? "w-full full-height-in-container" : ""
      }`}
    >
      <PuffLoader color="#06b6d4" />
    </div>
  );
};

export default Loader;
