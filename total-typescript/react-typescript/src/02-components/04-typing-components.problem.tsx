import React from "react";

type ButtonProps = {
  className: string;
};

export const Button = (props: ButtonProps) => {
  return <button className={props.className}></button>;
};

const Parent = () => {
  return (
    <>
      {/* @ts-expect-error */}
      <Button></Button>
      <Button className="my-class"></Button>
    </>
  );
};
