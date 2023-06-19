import { FC } from "react";

type ContainerProps = {
  children?: string | JSX.Element | JSX.Element[];
};

const Container: FC<ContainerProps> = ({ children }) => (
  <div className="container py-2 mx-auto">{children}</div>
);

export default Container;
