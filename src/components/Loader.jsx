import { ClockLoader } from "react-spinners";
const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-116px)]">
      <ClockLoader color="#F92FD3" size={50} />
    </div>
  );
};

export default Loader;
