import React, { ReactElement, useRef } from "react";

const InitialVal: {
  setMap: Function;
  flyToLocation: Function;
} = {
  setMap: () => {},
  flyToLocation: () => {},
};

const AppMapContext = React.createContext(InitialVal);

function MapContextProvider({
  children,
}: {
  children: ReactElement | ReactElement[];
}) {
  const Map = useRef<any>();

  function setMap(map: any) {
    Map.current = map;
  }

  function flyTo(coords: [number, number]) {
    Map.current.flyTo({ center: coords, essential: true });
  }

  return (
    <AppMapContext.Provider
      value={{
        setMap: setMap,
        flyToLocation: flyTo,
      }}
    >
      {children}
    </AppMapContext.Provider>
  );
}

export default MapContextProvider;
export { AppMapContext };
