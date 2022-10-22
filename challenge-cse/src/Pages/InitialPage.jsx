import React, { useState } from "react";
import { useCroct } from "@croct/plug-react";
import {Personalization} from '@croct/plug-react';
import { AjaxSection, Cities, Container, Heading, Input, Msg, TopBanner } from "./StyledPages";
import { InputForm } from "../Components/InputForm";
import axios from "axios";


export default function InitialPage() {
const [location, setLocation] = useState()

  const croct = useCroct();
  setLocation = React.useCallback(
    (inputVal) => croct.user.edit().set("custom.location", inputVal).save(),
    [croct]
  );
  let inputVal = Input.value;

  const searchForTemperature = (location ? PersonaCity() : inputVal)
 
const SearchCity = () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchForTemperature}&appid=bbf39f186035e5b8401ad4b06f9c6a39&units=metric`;
    axios
    .get(url)
      .then((response) => response.json())
      .then((data) => {
        const { main, name, sys, weather } = data;
        const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`;
        const li = document.createElement("li");
        li.list.add("city");
        const markup = `
          <h2 class="city-name" data-name="${name},${sys.country}">
            <span>${name}</span>
            <sup>${sys.country}</sup>
          </h2>
          <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
          <figure>
            <img class="city-icon" src="${icon}" alt="${
          weather[0]["description"]
        }">
            <figcaption>${weather[0]["description"]}</figcaption>
          </figure>
        `;
        li.innerHTML = markup;
        list.appendChild(li);
      })
      .catch(() => {
        Msg.textContent = "Please search for a valid city 😩";
      });
  };
  
  Msg.textContent = "";
  InputForm.reset();
  Input.focus();

  function PersonaCity() {
    return (
      <Personalization
      expression="user's location's city"
      >
        {(location) => <span>{location}</span>}
      </Personalization>
    );
  }

 
  


  return (
    <main>
      <div>
        <script>
          {croct
            .evaluate(`user location's city`)
            .then(alert(PersonaCity ? "Welcome back!" : "Welcome!"))}
        </script>

        <TopBanner>
          <Container>
            <Heading>Want to find out the temperature of your city?</Heading>
            <button>Click here</button>
            <InputForm>
              <Msg></Msg>
            </InputForm>
          </Container>
        </TopBanner>
        <AjaxSection>
          <Container>
            <Cities></Cities>
          </Container>
        </AjaxSection>
      </div>
    </main>
  );
}
