import React, { useRef, useState, useEffect, useContext } from "react";
import mapboxgl from "mapbox-gl";
import { AppMapContext } from "../contexts/MapContext";
mapboxgl.accessToken =
  "pk.eyJ1IjoiYmxhY2ttb25rZXktMTIxOSIsImEiOiJjbGI4bjBjcDEwbWV6M3BwN25kajhvNGlpIn0.wwUmy6wdb292D3p72roexQ";

interface IMarkerData {
  type: string;
  features: {
    type: string;
    geometry: {
      type: string;
      coordinates: [number, number];
    };
    properties: {
      title: string;
      description: string;
    };
  }[];
}

const markersData: IMarkerData = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-75.032, 38.913],
      },
      properties: {
        title: "Location 1",
        description: "Lorem Lorem Lorem",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-77.032, 38.913],
      },
      properties: {
        title: "Location 2",
        description: "Lorem Lorem Lorem",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-77.032, 37.913],
      },
      properties: {
        title: "Location 3",
        description: "Lorem Lorem Lorem",
      },
    },
  ],
};

function Map({
  settings = [0, 0, 0],
  classList = "",
}: {
  settings: number[];
  classList: string;
}) {
  const mapContext = useContext(AppMapContext);

  const mapContainer = useRef<any>(null);
  const map = useRef<any>(null);
  const [lng, setLng] = useState(settings[0]);
  const [lat, setLat] = useState(settings[1]);
  const [zoom, setZoom] = useState(settings[2]);

  useEffect(() => {
    if (map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });

    mapContext.setMap(map.current);

    markersData.features.map((marker) => {
      const pinElement = document.createElement("div");
      pinElement.className = "map_pin";

      new mapboxgl.Marker(pinElement)
        .setLngLat(marker.geometry.coordinates)
        .addTo(map.current);
    });
  });

  useEffect(() => {
    if (!map.current) return;
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return <div ref={mapContainer} className={classList}></div>;
}

export default Map;
