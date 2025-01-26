import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const MyComponent = ({ children }: Props) => {
  return <div className="alert alert-success">{children}</div>;
};

export default MyComponent;
