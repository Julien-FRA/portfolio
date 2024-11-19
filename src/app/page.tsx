import Input from "@/components/atoms/Input";
import Card from "@/components/molecules/Card";
import { ChangeEvent } from "react";

const Landing = () => {
  return (
    <>
      <Input
        type={"text"}
        label={"name"}
        name={"name"}
        error={false}
        errorMessage={"test"}
        placeholder={"Name"}
        disabled={false}
      />
    </>
  );
};

export default Landing;
