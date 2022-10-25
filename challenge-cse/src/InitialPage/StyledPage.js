import styled from "styled-components";

export const Inputs = styled.input`
  border: none;
  border-radius: 15px;
  padding: 15px;
  background-color: #e8e8e8;
  box-shadow: 6px 6px 12px #ffffff, -6px -6px 12px #c5c5c5;
  font-size: medium;
  font-weight: bold;
  max-width: 200px;
  margin: 10px;

  &:focus {
    outline-color: white;
    place-content: "Enter your message!";
  }
`;
export const Card = styled.div`
  width: 1480px;
  height: 500px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 18px;
  background-color:#4BC4F7;

  border-radius: 20px;
`;
export const Title = styled.h1`
  color: #fff;
  font-family: 'Helvetica, sans-serif';
  text-shadow: 1px 10px 1px 6px #696969;
`;

export const Content = styled.p`

  font-size: 25px;
  line-height: 18px;
  color: #fff;
`;
export const CardForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Input = styled.input`
width:400px;
  margin-top: 10px;
  outline: 0;
  background: rgb(255, 255, 255);
  box-shadow:
   transparent 0px 0px 0px 1px inset;
  padding: 0.6em;
  border-radius: 14px;
  border: none;
  color: black;
`;

export const Button = styled.button`
  border: 0;
  background: #4040ff;
  color: #fff;
  padding: 0.68em;
  border-radius: 14px;
  font-weight: bold;
  :hover {
  opacity: 0.8;
} 
`;
