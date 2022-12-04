import React, { useRef, useState, useEffect } from "react";
import mapboxgl from "mapbox-gl";
mapboxgl.accessToken =
  "pk.eyJ1IjoiYmxhY2ttb25rZXktMTIxOSIsImEiOiJjbGI4bjBjcDEwbWV6M3BwN25kajhvNGlpIn0.wwUmy6wdb292D3p72roexQ";

function Map({
  settings = [0, 0, 0],
  classList = "",
}: {
  settings: number[];
  classList: string;
}) {
  const mapContainer = useRef<any>(null);
  const map = useRef<any>(null);
  const [lng, setLng] = useState(settings[0]);
  const [lat, setLat] = useState(settings[1]);
  const [zoom, setZoom] = useState(settings[2]);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  return <div ref={mapContainer} className={classList}></div>;
}

export default Map;
