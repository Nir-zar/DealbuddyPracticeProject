import React, { useEffect, useMemo, useState } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  MarkerF,
  InfoWindowF,
} from "@react-google-maps/api";
import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const mapCenter = { lat: -41.0, lng: 174.0 };

const bounds = {
  north: -34.0, // Northernmost point
  south: -47.0, // Southernmost point
  east: 179.0, // Easternmost point
  west: 166.0, // Westernmost point
};

function MyComponent() {
  const [loading, setLoading] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [selectedMarker, setSelectedMarker] = useState(null)
  const [labelPosition, setLabelPosition] = useState();

  const storeData = useSelector((store) => store.storeData.physicalStoreData);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAV4oc8VL6RXlw64B3x16JMqKqaJitu40Q",
    version: "quarterly",
  });

  setTimeout(() => {
    setLoading(false);
    setZoom(2);
  }, 1000);

  const [map, setMap] = React.useState(null);

  console.log(labelPosition);


  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(mapCenter);
    map.fitBounds(bounds);

    map.setZoom(map);
  }, []);


  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={mapCenter}
      zoom={zoom}
      onLoad={onLoad}
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
              onClick={()=>{
                setSelectedMarker(data)
                setLabelPosition(position)
              }}
              icon={{
                url: "https://www.dealbuddy.co.nz/assets/img/marker.svg",
              }}
            />
          );
        })}

        {selectedMarker?.id ?  
       
       ( <InfoWindowF 
        key={selectedMarker.id} 
        position={labelPosition} 
        onCloseClick={()=> setSelectedMarker(null)}
        > 
        <Box gap={1} component={'div'} sx={{display:"flex", flexDirection:"row", alignItems:"center"}}>
        <Box component={'img'} 
        src={selectedMarker.imageUrl}
        sx={{height:"40px", width:"40px"}} />
          
        <Typography>
          {selectedMarker.name}
        </Typography>
        </Box>


 </InfoWindowF>) : (<></>)}

     
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);
