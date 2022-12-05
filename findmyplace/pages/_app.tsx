import "../styles/globals.css";
import "mapbox-gl/dist/mapbox-gl.css";
import type { AppProps } from "next/app";
import MapContextProvider from "../contexts/MapContext";
import SearchContextProvider from "../contexts/SearchContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SearchContextProvider>
      <MapContextProvider>
        <Component {...pageProps} />
      </MapContextProvider>
    </SearchContextProvider>
  );
}
