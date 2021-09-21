import { ReactElement, FC, Fragment } from "react";
import styled from "styled-components";

import useToggle from "hooks/useToggle";
import { Color, foldedSidebarWidth, sidebarWidth } from "utils/styles";
import { Sidebar } from "components/atoms";

const Layout: FC = ({ children }) => {
  const [sidebarOpen, toggleSidebar] = useToggle(true);

  return (
    <Fragment>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <Page folded={!sidebarOpen}>{children}</Page>
    </Fragment>
  );
};

const Page = styled.main<{ folded?: boolean }>`
  height: 100vh;
  overflow-y: auto;
  margin-left: ${sidebarWidth}px;
  transition: 0.3s ease-in-out;
  background-color: ${Color.backgroundDark};
  ${(props) => props.folded && `margin-left: ${foldedSidebarWidth}px `}
`;

const withDefaultLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export { withDefaultLayout };
