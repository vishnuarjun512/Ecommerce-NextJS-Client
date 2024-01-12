interface ContainerProps {
  children: React.ReactNode;
}

import React from "react";

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="mx-auto max-w-full 2xl:max-w-[1400px]">{children}</div>
  );
};

export default Container;
