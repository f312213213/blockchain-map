import React from "react";
import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  GoogleMarkerClusterer,
} from "@react-google-maps/api";
import { BackdropContext } from "../../context/useBackdrop";
import { SnackbarContext } from "../../context/useSnackbar";
import { LocationContext } from "../../context/useLocation";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const GoogleMapBase = ({ className }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY,
  });
  const [map, setMap] = React.useState(null);
  const [location, setLocation] = React.useState({
    lat: 24.94314,
    lng: 121.370734,
  });
  const { openBackdrop, closeBackdrop } = React.useContext(BackdropContext);
  const { openSnackbar, closeSnackbar } = React.useContext(SnackbarContext);
  const { position, editLocation } = React.useContext(LocationContext);
  const markerRef = React.useRef({
    current: {
      marker: null,
    },
  });

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const changeHandler = () => {
    setLocation({
      lat: markerRef.current.marker.position.lat(),
      lng: markerRef.current.marker.position.lng(),
    });
    editLocation(
      markerRef.current.marker.position.lat(),
      markerRef.current.marker.position.lng()
    );
  };

  const getCurrentLocation = () => {
    openBackdrop();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        editLocation(position.coords.latitude, position.coords.longitude);
        closeBackdrop();
        openSnackbar("success", "取得位置成功！");
      });
    } else {
      closeBackdrop();
      openSnackbar("error", "取得位置失敗！");
    }
  };

  React.useEffect(() => {
    // if (!position) getCurrentLocation()
  }, []);

  return (
    <>
      <div className={`${className} relative`}>
        {isLoaded && (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={location}
            zoom={16}
            options={{
              mapId: "81c38db78d06a3db",
              zoomControl: true,
              gestureHandling: "greedy",
              clickableIcons: false,
              disableDefaultUI: true,
            }}
          >
            <Marker
              position={location}
              draggable
              ref={markerRef}
              onDragEnd={changeHandler}
            />
          </GoogleMap>
        )}
        <button
          className={
            "absolute top-0 rounded bg-indigo-300 bg-opacity-80 p-2 text-sm  hover:bg-indigo-400"
          }
          onClick={getCurrentLocation}
        >
          Get Location
        </button>
      </div>
      <h1 className={"md:md-0 mt-4 md:ml-4"}>
        {location.lng.toFixed(3)}, {location.lat.toFixed(3)}
      </h1>
    </>
  );
};

export default React.memo(GoogleMapBase);
