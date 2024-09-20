import loginBanner from "../assets/images/login/Rectangle.png";
import AuthInput from "../components/login/AuthInput";
import { FormProvider, useForm } from "react-hook-form";
import { loginValidationSchema } from "../resolvers/authResolver";
import { yupResolver } from "@hookform/resolvers/yup";

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
    <div className="flex flex-col lg:flex-row justify-center items-center">
      <div className="lg:w-1/2 h-screen hidden lg:block">
        <img src={loginBanner} alt="login-banner" className="w-full h-full" />
      </div>
      <div className="p-7 w-1/2 flex items-center justify-center ">
        <FormProvider {...form}>
          <form
            onSubmit={(e) => form.handleSubmit(handleSubmit)(e)}
            className="py-9 px-16 w-fit border rounded-xl flex flex-col gap-7 justify-center items-center "
          >
            <h1 className="text-2xl">Login to your account</h1>
            <AuthInput
              name="email"
              label="Email"
              placeholder="Email"
              className="w-full bg-transparent p-4 outline-none border-[2px] rounded-xl"
              type="text"
            />
            <AuthInput
              name="password"
              label="Password"
              type="password"
              placeholder="Password"
              showPasswordIcon
              className="w-full bg-transparent p-4 outline-none border-[2px] rounded-xl"
            />
            <button className="rounded-xl bg-gray-400 py-4 px-8 w-[10rem] mt-5">
              Login
            </button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
