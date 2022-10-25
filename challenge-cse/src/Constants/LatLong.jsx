import { useCroct } from '@croct/plug-react';
import React, { useState } from 'react'
import { API_KEY } from '../ApiKey';
import ReactWeather, { useOpenWeather } from "react-open-weathen";

const LatLong = () => {

    const [location, setLocation] = useState();

  console.log(location);

  const AppId = "bbf39f186035e5b8401ad4b06f9c6a39";

  const croct = useCroct();
  croct.evaluate(`location's city`).then(setLocation);

  Geocode.setApiKey(`${API_KEY}`);
  Geocode.setLanguage("en");

;

    const { data, isLoading, errorMessage } = useOpenWeather({
        key: `${AppId}`,
        lat: "-15.7975154",
        lon: "-47.89188739999999",
        lang: "en",
        unit: "metric"
      });

      

      Geocode.fromAddress(`${location}`).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;
          console.log(lat, lng);
        },
        (error) => {
          console.error(error);
        }
      );
     
      return (
        <ReactWeather
          isLoading={isLoading}
          errorMessage={errorMessage}
          data={data}
          lang="en"
          locationLabel={location}
          unitsLabels={{ temperature: "C", windSpeed: "Km/h" }}
          showForecast
        />
      );
 
    

 
}

export default LatLong