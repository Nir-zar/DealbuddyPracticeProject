import React, { useEffect, useMemo, useState, useRef } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  MarkerF,
  InfoWindowF,
} from "@react-google-maps/api";
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import { UseDispatch } from "react-redux";
import filterData, { setNorthEastBounds, setSouthWestBounds } from "../../features/filterData";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const mapCenter = { lat: -41.0, lng: 174.0 };

function MyComponent() {
  const [loading, setLoading] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [labelPosition, setLabelPosition] = useState();
  const [bounds, setBounds] = useState({
    north: -34.0,
    south: -47.0,
    east: 179.0,
    west: 166.0,
  });

  const storeData = useSelector((store) => store.storeData.physicalStoreData);
  const newBounds = useSelector( (store)=> store.filterData.bounds )

  const mapRef = useRef();
  const dispatch = useDispatch();



  setTimeout(() => {
    setLoading(false);
    setZoom(2);
  }, 1000);

  const handleZoomChanged = () => {
    const map = mapRef.current;
    if (map) {
      const bounds = map.getBounds();
    

      const northEast = bounds.getNorthEast().toJSON();
      const southWest = bounds.getSouthWest().toJSON();

      dispatch(setNorthEastBounds(northEast))
      dispatch(setSouthWestBounds(southWest))
      console.log("northEast", northEast);
      console.log("sothWest", southWest);
      
    }
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAV4oc8VL6RXlw64B3x16JMqKqaJitu40Q",
    version: "quarterly",
  });

  return isLoaded ? (
    <GoogleMap
      onZoomChanged={handleZoomChanged}
      mapContainerStyle={containerStyle}
      center={mapCenter}
      zoom={zoom}
      onLoad={(map) => {
        mapRef.current = map;
        map.addListener("zoom_changed", handleZoomChanged);
      }}
      // onUnmount={onUnmount}
      options={{
        restriction: { latLngBounds: bounds },
        minZoom: 1,
        maxZoom: 20,
      }}
    >
      {!loading &&
        storeData?.items &&
        storeData?.items?.map((data) => {
          const position = {
            lat: data?.address?.latitude,
            lng: data?.address?.longitude,
          };
          return (
            <MarkerF
              key={data.id}
              position={position}
              onClick={() => {
                setSelectedMarker(data);
                setLabelPosition(position);
              }}
              icon={{
                url: "https://www.dealbuddy.co.nz/assets/img/marker.svg",
              }}
            />
          );
        })}

      {selectedMarker?.id ? (
        <InfoWindowF
          key={selectedMarker.id}
          position={labelPosition}
          onCloseClick={() => setSelectedMarker(null)}
        >
          <Box
            gap={1}
            component={"div"}
            sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
          >
            <Box
              component={"img"}
              src={selectedMarker.imageUrl}
              sx={{ height: "40px", width: "40px" }}
            />

            <Typography>{selectedMarker.name}</Typography>
          </Box>
        </InfoWindowF>
      ) : (
        <></>
      )}
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);
