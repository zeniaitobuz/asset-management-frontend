import loginBanner from "../../assets/images/login/Rectangle.png";
import AuthInput from "../../components/login/AuthInput";
import { FormProvider, useForm } from "react-hook-form";
import { loginValidationSchema } from "../../resolvers/authResolver";
import { yupResolver } from "@hookform/resolvers/yup";
import "./login.css";

type LoginType = {
  email: string;
  password: string;
};

export default function Login() {
  const form = useForm<LoginType>({
    resolver: yupResolver(loginValidationSchema),
  });

  const handleSubmit = async (formValues: LoginType) => {
    console.log(formValues);
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gradient-background w-screen h-screen p-5 lg:p-16">
      {/* <div className="lg:w-1/2 h-screen hidden lg:block">
        <img src={loginBanner} alt="login-banner" className="w-full h-full" />
      </div> */}
      <div className="lg:py-[20rem] py-[3rem] px-[2rem] lg:px-[10rem] flex items-center justify-center bg-[#0000008a] md:w-[60%] backdrop-blur-3xl w-full h-full md:h-[60%] rounded-3xl">
        <FormProvider {...form}>
          <form
            onSubmit={(e) => form.handleSubmit(handleSubmit)(e)}
            className=" w-full rounded-xl flex flex-col gap-7 justify-center items-center "
          >
            <h1 className="md:text-3xl text-xl poppins-semibold text-white">
              Login to your account
            </h1>
            <p className="poppins-light text-white">
              Please enter your account details
            </p>
            <AuthInput
              name="email"
              label="Email"
              placeholder="john@example.com"
              className=" bg-transparent outline-none  "
              type="text"
            />
            <AuthInput
              name="password"
              label="Password"
              type="password"
              placeholder="Abcd@1234"
              showPasswordIcon
              className=" bg-transparent outline-none"
            />
            <button className="lg:w-[20rem] p-4 poppins-bold button-gradient rounded-3xl text-[#420600]  w-[15rem] mt-5">
              LOGIN
            </button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
