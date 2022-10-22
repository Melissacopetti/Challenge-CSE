import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import Loading from "./Loading/Loading";
import useForm from "./UseForm";

export const InputForm = () => {
  const navigate = useNavigate();
  const [form, onChange, clear] = useForm({ city: "" });
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitForm = (event) => {
    event.preventDefault();
    (form, clear, navigate, setIsLoading);
  };
  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <div>
          <label>Want information about another location?</label>
          <TextField type="text" placeholder="Search for a city" autofocus />
          <Button
            type="submit"
            fullWidth
            variant={"text"}
            color={"primary"}
            name={"location"}
            value={form.city}
            onChange={onChange}
            label={"City"}
            margin={"normal"}>
          {isLoading ? <Loading /> : <p>Click here</p>}
          </Button>
        </div>
      </form>
    </div>
  );
};
