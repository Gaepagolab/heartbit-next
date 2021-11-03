import { ReactElement, FC, Fragment } from "react";
import Head from "next/head";
import styled from "styled-components";

import { Sidebar } from "components/atoms";
import { AuthModal } from "components/organisms";
import RegisterModal from "../registerModal";
import useToggle from "hooks/useToggle";
import useCheckAuthEffect from "hooks/useCheckAuthEffect";
import { useQueryParams } from "hooks/useQueryParams";
import { Color, mixin, sidebarWidth, foldedSidebarWidth } from "utils/styles";

const Layout: FC = ({ children }) => {
  const [sidebarOpen, toggleSidebar] = useToggle(true);
  const registerToken = useQueryParams("registerToken", String);

  useCheckAuthEffect();

  return (
    <Fragment>
      <Head>
        <link rel="preload" href="/assets/images/main_bg.png" as="image" />
      </Head>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <Page folded={!sidebarOpen}>{children}</Page>
      <AuthModal />
      {!!registerToken && <RegisterModal registerToken={registerToken} />}
    </Fragment>
  );
};

const Page = styled.main<{ folded?: boolean }>`
  height: 100vh;
  overflow-y: auto;
  margin-left: ${sidebarWidth}px;
  transition: 0.3s ease-in-out;
  background-color: ${Color.backgroundDark};
  ${mixin.backgroundImage("/assets/images/main_bg.png")}
  ${(props) => props.folded && `margin-left: ${foldedSidebarWidth}px `}
`;

const withDefaultLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export { withDefaultLayout };
