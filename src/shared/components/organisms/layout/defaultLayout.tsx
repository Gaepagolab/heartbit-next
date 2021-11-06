import { ReactElement, FC, Fragment } from "react";
import Head from "next/head";
import styled from "styled-components";

import { Sidebar } from "shared/components/atoms";
import { AuthModal } from "shared/components/organisms";
import RegisterModal from "../registerModal";
import useToggle from "shared/hooks/useToggle";
import useCheckAuthEffect from "shared/hooks/useCheckAuthEffect";
import { useQueryParams } from "shared/hooks/useQueryParams";
import { mixin } from "shared/utils/styles";

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
  transition: 0.3s ease-in-out;
`;

const withDefaultLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export { withDefaultLayout };
