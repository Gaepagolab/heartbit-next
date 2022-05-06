import React, { ReactNode } from "react";
import { SWRConfig, Cache } from "swr";
import { Fetcher, PublicConfiguration } from "swr/dist/types";

import { customFetcher } from "shared/utils/fetcher";

type Provider = { provider?: (cache: Readonly<Cache<any>>) => Cache<any> };

const defaultSWROptions = {
  revalidateOnFocus: false,
  errorRetryCount: 0,
};

export default function SwrConfig({
  children,
  swrConfig,
}: {
  children?: ReactNode;
  swrConfig?: Partial<PublicConfiguration<any, any, Fetcher<any>>> & Provider;
}) {
  return (
    <SWRConfig
      value={{ fetcher: customFetcher, ...swrConfig, ...defaultSWROptions }}
    >
      {children}
    </SWRConfig>
  );
}
