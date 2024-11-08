import LayoutWrapper from "@/components/layout/layout-wrapper/LayoutWrapper";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import theme from "./theme/themeConfig";
import { ConfigProvider } from "antd";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider theme={theme}>
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ConfigProvider>
  );
}
