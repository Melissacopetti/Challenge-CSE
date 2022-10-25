import React, { useState } from "react";
import { useCroct } from "@croct/plug-react";
import Geocode from "react-geocode";
import { API_KEY } from "../ApiKey";
import ReactWeather, {
  useOpenWeather,
} from "react-open-weather";
import { Button, Card, CardForm, Content, Input, Title } from "./StyledPage";

export default function InitialPage() {
  const [location, setLocation] = useState();

  console.log(location);

  // const AppId = "bbf39f186035e5b8401ad4b06f9c6a39";

  const croct = useCroct();
  croct.evaluate(`location's city`).then(setLocation);

  Geocode.setApiKey(`${API_KEY}`);
  Geocode.setLanguage("pt");

  const { data, isLoading, errorMessage } = useOpenWeather({
    key: `0572053298a52d375dedc49cebd861fc`,
    lat: "-15.7975154",
    lon: "-47.89188739999999",
    lang: "pt",
    unit: "metric",
  });

  const customStyles = {
    fontFamily:  'Helvetica, sans-serif',
    gradientStart:  '#0181C2',
    gradientMid:  '#04A7F9',
    gradientEnd:  '#4BC4F7',
    locationFontColor:  '#FFF',
    todayTempFontColor:  '#FFF',
    todayDateFontColor:  '#B5DEF4',
    todayRangeFontColor:  '#B5DEF4',
    todayDescFontColor:  '#B5DEF4',
    todayInfoFontColor:  '#B5DEF4',
    todayIconColor:  '#FFF',
    forecastBackgroundColor:  '#FFF',
    forecastSeparatorColor:  '#DDD',
    forecastDateColor:  '#777',
    forecastDescColor:  '#777',
    forecastRangeColor:  '#777',
    forecastIconColor:  '#4BC4F7',
  };

  Geocode.fromAddress(`${location}`).then(
    (response) => {
      const { lat, lng } = response.results[0].geometry.location;
      return (lat, lng);
    
    },
    (error) => {
      console.error(error);
    }
  );

  return (
    <div>
      <ReactWeather
      theme={customStyles}
        isLoading={isLoading}
        errorMessage={errorMessage}
        data={data}
        lang="en"
        locationLabel={location}
        unitsLabels={{ temperature: "C", windSpeed: "Km/h" }}
        showForecast
      />
       <Card>
    <Title>Want to know the weather in another location?</Title>
    <Content>Type here the city and know its weather data!
    </Content>
    <CardForm>
        <Input type="text" placeholder="City"/>
        <Button
        class="sign-up"> Verify!</Button>
    </CardForm>
    </Card>

    </div> 
  );
}
