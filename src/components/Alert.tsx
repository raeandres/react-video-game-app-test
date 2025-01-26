interface Props {
  children: string;
}

const MyComponent = ({ children }: Props) => {
  return <div className="alert alert-success">{children}</div>;
};

export default MyComponent;
