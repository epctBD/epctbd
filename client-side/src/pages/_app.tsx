import LayoutWrapper from "@/components/layout/layout-wrapper/LayoutWrapper";
import "../styles/global.scss";
import type { AppProps } from "next/app";
import theme from "../theme/themeConfig";
import { ConfigProvider } from "antd";
import { Inter } from "@next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function App({ Component, pageProps, router }: AppProps) {
  const isAdminRoute = router.pathname.startsWith("/admin");

  return (
    <ConfigProvider theme={theme}>
      <div className={inter.className}>
        {isAdminRoute ? (
          <Component {...pageProps} />
        ) : (
          <LayoutWrapper>
            <Component {...pageProps} />
          </LayoutWrapper>
        )}
      </div>
    </ConfigProvider>
  );
}
