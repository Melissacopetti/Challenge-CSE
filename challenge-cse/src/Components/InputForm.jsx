import React from "react";
import useForm from "../../Hooks/UseForm";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { login } from "../../Service/User";
import { useNavigate } from "react-router-dom";
import { InputsContainer, LoginFormContainer } from "./Styled";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useState } from "react";
import Loading from "./Loading";

export const InputForm = () => {
  const navigate = useNavigate();
  const [form, onChange, clear] = useForm({ city: "" });
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitForm = (event) => {
    event.preventDefault();
    login(form, clear, navigate, setIsLoading);
  };
  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <InputsContainer>
          <label>Want information about another location?</label>
          <TextField type="text" placeholder="Search for a city" autofocus />
          <Button
            type="submit"
            fullWidth
            variant={"text"}
            color={"primary"}
            name={"location"}
            value={form.location}
            onChange={onChange}
            label={"City"}
            margin={"normal"}>
          {isLoading ? <Loading /> : <p>Click here</p>}
          </Button>
        </InputsContainer>
      </form>
    </div>
  );
};
