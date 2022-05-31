declare module "*.mdx";
declare module "*.svg" {
  import * as React from "react";
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >;
  const src: string;
  export default src;
}

namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_GOOGLE_AUTH_CLIENT_ID: string;
    REACT_APP_API_URL: string;
  }
}
