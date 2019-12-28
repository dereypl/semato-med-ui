import React from 'react';
import styled from "styled-components";

const StyledSelect = styled.select`
  display: flex;
  margin-top: 1rem;
  padding: 5px 10px;
  font-size: ${({theme}) => theme.fontSize.s};
  font-weight: ${({theme}) => theme.fontWeight.regular};
  background-color: ${({theme}) => theme.grey100};
  border: none;
  width: 100%;
  height: 3.5rem;
  border-radius: 8px;
  color: ${({theme}) => theme.grey200};
       
  ::placeholder {
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  &:focus{
      outline: none;
  }

`;

const Dropdown = ({value, setValue}) => {

    return (
            <StyledSelect value={value} onChange={(e) => setValue(e.target.value)}>
                <option value="Cośtam 1">Cośtam 1</option>
                <option value="Inna 2">Inna 2</option>
                <option value="Kolejna 3">LKolejna 3</option>
                <option value="Elo 4">Elo 4</option>
            </StyledSelect>
    );
};

export default Dropdown;
