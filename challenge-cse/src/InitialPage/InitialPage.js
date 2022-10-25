import React, { useState } from "react";
import { useCroct } from "@croct/plug-react";
import Geocode from "react-geocode";
import { API_KEY } from "../ApiKey";
import ReactWeather, { useOpenWeather } from "react-open-weather";
import {
  Card,
  CardForm,
  Content,
  LocationButton,
  SearchInput,
  Title,
  DivCard,
  TitlePage,
  Image,
  Header,
} from "./StyledPage";

export default function InitialPage() {
  const [location, setLocation] = useState();
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [cityLocation, setCityLocation] = useState("");
  const [cityApiLocation, setCityApiLocation] = useState();

  const croct = useCroct();
  croct.evaluate(`location's city`).then(setLocation);

  console.log(location);
  Geocode.setApiKey(`${API_KEY}`);
  Geocode.setLanguage("en");

  const { data, isLoading, errorMessage } = useOpenWeather({
    key: `0572053298a52d375dedc49cebd861fc`,
    lat: latitude,
    lon: longitude,
    lang: "en",
    unit: "metric",
  });

  const customStyles = {
    fontFamily: "Helvetica, sans-serif",
    gradientStart: "#0181C2",
    gradientMid: "#04A7F9",
    gradientEnd: "#4BC4F7",
    locationFontColor: "#FFF",
    todayTempFontColor: "#FFF",
    todayDateFontColor: "#B5DEF4",
    todayRangeFontColor: "#B5DEF4",
    todayDescFontColor: "#B5DEF4",
    todayInfoFontColor: "#B5DEF4",
    todayIconColor: "#FFF",
    forecastBackgroundColor: "#FFF",
    forecastSeparatorColor: "#DDD",
    forecastDateColor: "#777",
    forecastDescColor: "#777",
    forecastRangeColor: "#777",
    forecastIconColor: "#4BC4F7",
  };

  const newCity = cityApiLocation ? cityApiLocation : location;

  Geocode.fromAddress(`${newCity}`).then(
    (response) => {
      const { lat, lng } = response.results[0].geometry.location;
      setLatitude(lat);
      setLongitude(lng);
      console.log(lat, lng);
    },
    (error) => {
      console.error(error);
    }
  );

  function onChangeButton(city) {
    setCityApiLocation(city);
    console.log(cityApiLocation);
  }

  function onChange(event) {
    setCityLocation(event.target.value);
  }

  return (
    <div>
      <Header>
        <Image src="https://cdn.iconscout.com/icon/free/png-256/rain-1504193-1273630.png" />
        <TitlePage>The weather in your city now</TitlePage>
        <Image src="https://cdn-icons-png.flaticon.com/512/984/984585.png" />
      </Header>
      <ReactWeather
        theme={customStyles}
        isLoading={isLoading}
        errorMessage={errorMessage}
        data={data}
        lang="en"
        locationLabel={newCity}
        unitsLabels={{ temperature: "C", windSpeed: "Km/h" }}
        showForecast
      />
      <Card>
        <DivCard>
          <Title>Want to know the weather in another location?</Title>
          <Content>Type here the city and know its weather data!</Content>

          <CardForm>
            <SearchInput
              value={cityLocation}
              onChange={onChange}
              type="text"
              placeholder="City"
            />
            <LocationButton
              onClick={() => {
                onChangeButton(cityLocation);
              }}
            >
              {" "}
              Verify!
            </LocationButton>
          </CardForm>
        </DivCard>
      </Card>
    </div>
  );
}
