import LayoutWrapper from "@/components/layout/layout-wrapper/LayoutWrapper";
import "../styles/global.scss";
import type { AppProps } from "next/app";
import theme from "../theme/themeConfig";
import { ConfigProvider } from "antd";
import { Inter } from "@next/font/google";
import { SessionProvider, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") return <div>Loading...</div>;

  if (
    !session &&
    router.pathname.startsWith("/admin") &&
    router.pathname !== "/admin"
  ) {
    router.push("/");
    return null;
  }

  return <>{children}</>;
}

function App({ Component, pageProps, router }: AppProps) {
  const isAdminRoute = router.pathname.startsWith("/admin");
  const { data: session } = useSession();
  const { push } = useRouter();

  useEffect(() => {
    if (session && router.pathname === "/admin") {
      push("/admin/team-member");
    }
  }, [session, router.pathname, push]);

  return (
    <ConfigProvider theme={theme}>
      <div className={inter.className}>
        <ProtectedRoute>
          {isAdminRoute ? (
            <Component {...pageProps} />
          ) : (
            <LayoutWrapper>
              <Component {...pageProps} />
            </LayoutWrapper>
          )}
        </ProtectedRoute>
      </div>
    </ConfigProvider>
  );
}

const AppWrapper = (props: AppProps) => (
  <SessionProvider session={props.pageProps.session}>
    <App {...props} />
  </SessionProvider>
);

export default AppWrapper;
