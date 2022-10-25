import styled from "styled-components";

export const SearchInput = styled.input`
  box-shadow: -4px 3px 8px -3px #04a7f9;
  margin-left: 1rem;
  padding: 5px 20px 5px 20px;
  border-radius: 55px;
  border: none;
  background-color: #ffffff;
  font-size: 30px;
  color: #727e8e;
  margin-left: 30px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #6898d5;
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
  background-color: transparent;
`;
export const Title = styled.h1`
  color: #2f5d8a;
  font-size: 2.2rem;
  margin-bottom: 30px;
`;

export const Content = styled.p`
  font-size: 25px;
  line-height: 18px;
  color: #2f5d8a;
  display: inline-block;
  margin-bottom: 30px;
  border-radius: 20px;
  padding: 8px;
`;

export const CardForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

export const DivCard = styled.div`
  width: 600px;
`;

export const LocationButton = styled.button`
  border: none;
  cursor: pointer;
  background: #4040ff;
  color: #fff;
  margin-top: 30px;
  width: 200px;
  padding: 0.68em;
  border-radius: 14px;
  font-size: 20px;
  font-weight: bold;
  :hover {
    opacity: 0.8;
  }
`;

export const TitlePage = styled.h1`
  color: #2f5d8a;
  font-size: 2.2rem;
  margin: 20px;
  display: flex;
  flex-direction: center;
  justify-content: center;
`;
export const Image = styled.img`
  max-width: 100px;
  margin-left: 100px;
  margin-right: 100px;
`;
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
