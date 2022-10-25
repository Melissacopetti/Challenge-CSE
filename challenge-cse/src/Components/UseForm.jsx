import { useState } from "react";

// const useForm = (initialState) => {
//   const [form, setForm] = useState(initialState);
  
 
//   const handleImputChange = form.addEventListener("submit", event => {
//     event.preventDefault();
//     const { value, city } = event.target;
//       setForm({ ...form, [city]: value })
//     let inputVal = Input.value;
//     const listItems = list.querySelectorAll(".ajax-section .city");
//     const listItemsArray = Array.from(listItems);
  
//     if (listItemsArray.length > 0) {
//       const filteredArray = listItemsArray.filter(el => {
//         let content = "";
        
//         if (inputVal.includes(",")) {
//           if (inputVal.split(",")[1].length > 2) {
//             inputVal = inputVal.split(",")[0];
//             content = el
//               .querySelector(".city-name span")
//               .textContent.toLowerCase();
//           } else {
//             content = el.querySelector(".city-name").dataset.name.toLowerCase();
//           }
//         } else {
//           content = el.querySelector(".city-name span").textContent.toLowerCase();
//         }
//         return content == inputVal.toLowerCase();
//       });
  
//       if (filteredArray.length > 0) {
//         Msg.textContent = `You already know the weather for ${
//           filteredArray[0].querySelector(".city-name span").textContent
//         } ...otherwise be more specific by providing the country code as well 😉`;
//         form.reset();
//         input.focus();
//         return;
//       }
//     }

//   const clear = () => {
//     setForm(initialState);
//   };

//   return [form, handleImputChange, clear];
//   });
// }
// export default useForm;


// const [location, setLocation] = useState();
//   console.log(location);

//   const AppId = "bbf39f186035e5b8401ad4b06f9c6a39";

//   const croct = useCroct();
//   croct.evaluate(`location's city`).then(setLocation);

//   Geocode.setApiKey(`${API_KEY}`);
//   Geocode.setLanguage("en");

// ;

//   Geocode.fromAddress(`${location}`).then(
//     (response) => {
//       const { lat, lng } = response.results[0].geometry.location;
//       console.log(lat, lng);
//     },
//     (error) => {
//       console.error(error);
//     }
//   );
//   // const latitude = searchForTemperature(lat);
//   // const longitude = searchForTemperature(lng);
//   const searchForTemperature = () => {
//     const { data, isLoading, errorMessage } = useOpenWeather({
//       key: `${AppId}`,
//       lat: "-15.7975154",
//       lon: "-47.89188739999999",
//       lang: "en",
//       unit: "metric",
//     });
//     return (
//       <ReactWeather
//         isLoading={isLoading}
//         errorMessage={errorMessage}
//         data={data}
//         lang="en"
//         locationLabel={location}
//         unitsLabels={{ temperature: "C", windSpeed: "Km/h" }}
//         showForecast
//       />
//     );
//   };

  // const useForm = (initialState) => {
  //   const [form, setForm] = useState(initialState);

  // const searchForTemperature = location ? PersonaCity() : inputVal;

  // function SearchCity() {
  //   const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${AppId}&units=metric`;
  //   axios
  //     .get(url)
  //     .then((response) => response.json())

  //     .then((data) => {
  //       // const { main, name, sys, weather } = data;
  //       // const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`;

  //       // return (

  //       //   // <div>
  //       //   //   <CityName>
  //       //   //     <span>{name}</span>
  //       //   //     <sup>{sys.country}</sup>
  //       //   //   </CityName>
  //       //   //   <CityTemp>
  //       //   //     {Math.round(main.temp)}
  //       //   //     <CityNameSup>°C</CityNameSup>
  //       //   //   </CityTemp>
  //       //   //   <figure>
  //       //   //     <CityIcon src={icon} />
  //       //   //     <figcaption>{weather[0]["description"]}</figcaption>
  //       //   //   </figure>
  //       //   // </div>
  //       // );
  //     })
  //     .catch((error) => {
  //   error = error.message("Please search for a valid city 😩");
  //     });
  // }

  //   const handleImputChange = form.addEventListener("submit", (event) => {
  //     event.preventDefault();
  //     const { value, city } = event.target;
  //     setForm({ ...form, [city]: value });
  //     let inputVal = Input.value;
  //     const listItems = list.querySelectorAll(".ajax-section .city");
  //     const listItemsArray = Array.from(listItems);

  //     if (listItemsArray.length > 0) {
  //       const filteredArray = listItemsArray.filter((el) => {
  //         let content = "";

  //         if (inputVal.includes(",")) {
  //           if (inputVal.split(",")[1].length > 2) {
  //             inputVal = inputVal.split(",")[0];
  //             content = el
  //               .querySelector(".city-name span")
  //               .textContent.toLowerCase();
  //           } else {
  //             content = el
  //               .querySelector(".city-name")
  //               .dataset.name.toLowerCase();
  //           }
  //         } else {
  //           content = el
  //             .querySelector(".city-name span")
  //             .textContent.toLowerCase();
  //         }
  //         return content == inputVal.toLowerCase();
  //       });

  //       if (filteredArray.length > 0) {
  //         Msg.textContent = `You already know the weather for ${
  //           filteredArray[0].textContent
  //         } ...otherwise be more specific by providing the country code as well 😉`;
  //         form.reset();
  //         // input.focus();
  //       }
  //     }

  // const clear = () => {
  //   setForm(initialState);
  // };

  //     return [form, handleImputChange, clear];
  //   });
  // };

  // const onSubmitForm = (event) => {
  //   event.preventDefault();
  //   form, clear, navigate, setIsLoading;
  // };

  // let inputVal = Input.value;

  // Msg.textContent = "";
  // InputForm.reset();
  // Input.focus();