import mapboxgl from "mapbox-gl";
import React, { ReactElement, useRef } from "react";

const InitialVal: {
  setMap: Function;
  flyToLocation: Function;
  setPickedLngLat: Function;
  getPickerCoords: Function;
  addMarker: Function;
} = {
  setMap: () => {},
  flyToLocation: (coords: [number, number]) => {},
  setPickedLngLat: (lng: number, lat: number) => {},
  getPickerCoords: () => {},
  addMarker: (lng: number, lat: number) => {},
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

  function flyToLocation(coords: [number, number]) {
    Map.current.flyTo({ center: coords, essential: true });
  }

  function setPickedLngLat(lng: number, lat: number) {
    pickerLocation.current = [lng, lat];
  }

  function getPickerCoords() {
    return pickerLocation.current;
  }

  function addMarker(lng: number, lat: number) {
    const marker = document.createElement("div");
    marker.className = "map_pin";

    new mapboxgl.Marker(marker).setLngLat([lng, lat]).addTo(Map.current);
  }

  return (
    <AppMapContext.Provider
      value={{
        setMap,
        flyToLocation,
        setPickedLngLat,
        getPickerCoords,
        addMarker,
      }}
    >
      {children}
    </AppMapContext.Provider>
  );
}

export default MapContextProvider;
export { AppMapContext };
