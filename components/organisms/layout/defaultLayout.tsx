import { ReactElement, FC, Fragment } from "react";
import Image from "next/image";
import styled from "styled-components";

import useToggle from "hooks/useToggle";
import { Color, foldedSidebarWidth, sidebarWidth } from "utils/styles";
import { Sidebar } from "components/atoms";

const Layout: FC = ({ children }) => {
  const [sidebarOpen, toggleSidebar] = useToggle(true);

  return (
    <Fragment>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <Image
        alt="main_bg"
        src="/assets/images/main_bg.png"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <Page folded={!sidebarOpen}>{children}</Page>
    </Fragment>
  );
};

const Page = styled.main<{ folded?: boolean }>`
  position: fixed;
  height: 100vh;
  width: calc(100vw - ${sidebarWidth}px);
  overflow-y: auto;
  margin-left: ${sidebarWidth}px;
  transition: 0.3s ease-in-out;
  ${(props) => props.folded && `width: calc(100vw - ${foldedSidebarWidth}px);`}
  ${(props) => props.folded && `margin-left: ${foldedSidebarWidth}px;`}
`;

const withDefaultLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export { withDefaultLayout };
