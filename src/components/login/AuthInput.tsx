import { InputHTMLAttributes, useId, useState } from "react";
import { useController, useFormContext } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

type FormInputProps = InputHTMLAttributes<HTMLInputElement> & {
  showPasswordIcon?: boolean;
  label?: string;
  name?: string;
};

export default function AuthInput({
  showPasswordIcon,
  label,
  ...inputProps
}: FormInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const { register, control } = useFormContext();
  const { fieldState } = useController({
    control,
    name: inputProps.name ?? "",
  });
  const id = useId();

  return (
    <div>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between">
          <label className="bg-[#ffffff] text-black" htmlFor={id}>
            {label}
          </label>
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className={`${
              showPasswordIcon ? (showPassword ? "hidden" : "block") : "hidden"
            }`}
          >
            <FaEye className="" />
          </button>
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className={`${
              showPasswordIcon ? (showPassword ? "block" : "hidden") : "hidden"
            }`}
          >
            <FaEyeSlash />
          </button>
        </div>
        <input
          {...inputProps}
          className={inputProps.className}
          {...register(inputProps.name ?? "")}
          name={inputProps.name}
          type={
            (showPasswordIcon && showPassword
              ? "text"
              : !inputProps.type && "password") || inputProps.type
          }
          placeholder={inputProps.placeholder}
          autoComplete="on"
          id={id}
        />
      </div>
      {fieldState.error?.message && (
        <p className="absolute text-red-500">{fieldState.error?.message}</p>
      )}
    </div>
  );
}
