import { useState } from "react";

const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);
  
 
  const handleImputChange = form.addEventListener("submit", event => {
    event.preventDefault();
    const { value, city } = event.target;
      setForm({ ...form, [city]: value })
    let inputVal = input.value;
    const listItems = list.querySelectorAll(".ajax-section .city");
    const listItemsArray = Array.from(listItems);
  
    if (listItemsArray.length > 0) {
      const filteredArray = listItemsArray.filter(el => {
        let content = "";
        
        if (inputVal.includes(",")) {
          if (inputVal.split(",")[1].length > 2) {
            inputVal = inputVal.split(",")[0];
            content = el
              .querySelector(".city-name span")
              .textContent.toLowerCase();
          } else {
            content = el.querySelector(".city-name").dataset.name.toLowerCase();
          }
        } else {
          content = el.querySelector(".city-name span").textContent.toLowerCase();
        }
        return content == inputVal.toLowerCase();
      });
  
      if (filteredArray.length > 0) {
        Msg.textContent = `You already know the weather for ${
          filteredArray[0].querySelector(".city-name span").textContent
        } ...otherwise be more specific by providing the country code as well 😉`;
        form.reset();
        input.focus();
        return;
      }
    }

  const clear = () => {
    setForm(initialState);
  };

  return [form, handleImputChange, clear];
  });
}
export default useForm;