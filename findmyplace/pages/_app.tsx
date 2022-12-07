import "../styles/globals.css";
import "mapbox-gl/dist/mapbox-gl.css";
import type { AppProps } from "next/app";
import MapContextProvider from "../contexts/MapContext";
import SearchContextProvider from "../contexts/SearchContext";
import AuthContextProvider from "../contexts/AuthContext";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <AuthContextProvider>
        <SearchContextProvider>
          <MapContextProvider>
            <Component {...pageProps} />
          </MapContextProvider>
        </SearchContextProvider>
      </AuthContextProvider>
    </SessionProvider>
  );
}
