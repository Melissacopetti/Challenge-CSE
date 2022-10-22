import styled from "styled-components";

export const TopBanner = styled.section`
  form {
    position: relative;
    display: flex;
    align-items: center;
  }
  color: var(--text_light);
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;

export const Heading = styled.h1`
  font-weight: bold;
  font-size: 4rem;
  letter-spacing: 0.02em;
  padding: 0 0 30px 0;
`;
export const Msg = styled.span`
  position: absolute;
  bottom: -40px;
  left: 0;
  max-width: 450px;
  min-height: 40px;
`;
export const AjaxSection = styled`
margin: 70px 0 20px;
`;

export const Cities = styled.ul`
  display: grid;
  grid-gap: 32px 20px;
  grid-template-columns: repeat(4, 1fr);
`;

export const Input = styled.input`
   font-size: 2rem;
  height: 40px;
  padding: 5px 5px 10px;
  border-bottom: 1px solid; 
  color: #83b9dd; 
`
export const City = styled.div`
 position: relative;
  padding: 40px 10%;
  border-radius: 20px;
  background: var(--text_light);
  color: var(--text_med);
  ::after {
  content: '';
  width: 90%;
  height: 50px;
  position: absolute;
  bottom: -12px;
  left: 5%;
  z-index: -1;
  opacity: 0.3;
  border-radius: 20px;
  background: var(--text_light);
}
`