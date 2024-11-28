import LayoutWrapper from "@/components/layout/layout-wrapper/LayoutWrapper";
import "../styles/global.scss";
import type { AppProps } from "next/app";
import theme from "./theme/themeConfig";
import { ConfigProvider } from "antd";

export default function App({ Component, pageProps, router }: AppProps) {
  const isAdminRoute = router.pathname.startsWith("/admin");

  return (
    <ConfigProvider theme={theme}>
      {isAdminRoute ? (
        <Component {...pageProps} />
      ) : (
        <LayoutWrapper>
          <Component {...pageProps} />
        </LayoutWrapper>
      )}
    </ConfigProvider>
  );
}
