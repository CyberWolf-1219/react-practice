import React, { ReactElement, useRef } from "react";

const InitialVal: {
  setMap: Function;
  flyToLocation: Function;
  setPickedLngLat: Function;
  getPickerCoords: Function;
} = {
  setMap: () => {},
  flyToLocation: (coords: [number, number]) => {},
  setPickedLngLat: (lng: number, lat: number) => {},
  getPickerCoords: () => {},
};

const AppMapContext = React.createContext(InitialVal);

function MapContextProvider({
  children,
}: {
  children: ReactElement | ReactElement[];
}) {
  const Map = useRef<any>();
  const pickerLocation = useRef<Array<number>>([]);

  function setMap(map: any) {
    Map.current = map;
  }

  function flyTo(coords: [number, number]) {
    Map.current.flyTo({ center: coords, essential: true });
  }

  function setPickedLngLat(lng: number, lat: number) {
    pickerLocation.current = [lng, lat];
  }

  function getPickerCoords() {
    return pickerLocation.current;
  }

  return (
    <AppMapContext.Provider
      value={{
        setMap: setMap,
        flyToLocation: flyTo,
        setPickedLngLat,
        getPickerCoords,
      }}
    >
      {children}
    </AppMapContext.Provider>
  );
}

export default MapContextProvider;
export { AppMapContext };
