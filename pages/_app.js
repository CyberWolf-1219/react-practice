import "../styles/globals.css";
import DBContextProvider from "../contexts/db-context/db-context";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import AuthContextProvider from "../contexts/auth-context/auth-context";
import { Smiley } from "./../components";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [showSmiley, setShowSmiley] = useState(false);

  useEffect(() => {
    if (window) {
      if (sessionStorage.length == 0 || !sessionStorage.loggedIn == "true") {
        console.log(`PUSHING TO LOGIN PAGE`);
        router.replace("/auth");
      } else {
        setShowSmiley(true);
      }
    }
  }, []);

  return (
    <AuthContextProvider>
      <DBContextProvider>
        {showSmiley ? <Smiley /> : <></>}
        <Component {...pageProps} />
      </DBContextProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
