import { ChangeEvent } from "react";
import styles from "./Input.module.scss";

type InputProps = {
  type: "text" | "number" | "email" | "password";
  label: string;
  name: string;
  error: boolean;
  errorMessage: string;
  placeholder: string;
  disabled: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  type,
  label,
  name,
  error,
  errorMessage,
  placeholder,
  disabled,
  onChange,
}: InputProps) => {
  return (
    <div className={styles.inputWrapper}>
      <input
        type={type}
        id={label}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
      />
      {error && <p className="error">{errorMessage}</p>}
    </div>
  );
};

export default Input;
