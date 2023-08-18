import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => {
  return (
    <div>
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
