import "../styles/globals.css";
import type { AppProps } from "next/app";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import Header from "../components/Header";

const App = ({ Component, pageProps }: AppProps) => {
  const { user } = pageProps;
  return (
    <UserProvider user={user}>
      <Header />

      <Component {...pageProps} />
    </UserProvider>
  );
};
export default App;
