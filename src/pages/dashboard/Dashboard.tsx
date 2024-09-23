import logo from "../../assets/icons/dashboard/logo1.svg";
import { CgProfile } from "react-icons/cg";
import "./dashboard.css";

const menuArrays = ["Devices", "Employees", "History"];

export default function Dashboard() {
  return (
    <div className=" flex flex-row gap-6 ">
      <nav className="flex flex-col bg-black lg:w-1/5 border-[5px] border-black h-screen ">
        <div className="flex justify-start p-5 gap-4">
          <img src={logo} className="w-[6rem] h-[6rem] " alt="logo" />
          <p className="poppins-bold text-lg my-auto text-[#7aaeae]">
            ASSETIFY
          </p>
        </div>
        <div className="flex flex-col gap-4 mt-[5rem]">
          {menuArrays.map((menu, index) => {
            return (
              <div
                key={index}
                className="bg-[#fbbe67] w-full p-5 text-lg hover:bg-[#7aaeae]"
              >
                {menu}
              </div>
            );
          })}
        </div>
      </nav>
      {/* <h1 className="poppins-regular text-3xl">
        Welcome to the Asset Management Dashboard!
      </h1>
      <CgProfile className="w-10 h-10" />

      <section className="p-5 flex flex-col gap-4">
        <div className="flex flex-row flex-wrap gap-5 justify-evenly"></div>
        <div></div>
      </section> */}
    </div>
  );
}
