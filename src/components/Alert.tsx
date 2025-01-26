import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const MyComponent = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissable">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default MyComponent;
