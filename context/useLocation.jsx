import React from "react";

export const LocationContext = React.createContext();

const LocationContextProvider = ({ children }) => {
  const [position, setPosition] = React.useState({
    lat: 24.9441,
    lng: 121.371,
  });

  const editLocation = (lat, lng) => {
    setPosition({
      lat,
      lng,
    });
  };
  return (
    <LocationContext.Provider value={{ position, editLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

export default LocationContextProvider;
