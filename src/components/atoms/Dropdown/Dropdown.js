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

const Dropdown = ({value, items, action, physician}) => {

    return (
        <StyledSelect value={value} onChange={(e) => action(e.target.value)}>
            <option value="-" placeholder={"- Wybierz -"} disabled selected>- Wybierz -</option>
            {!physician ?
                items.map(item => <option value={item.id} key={item.id}>{item.name}</option>)
                :
                items.map(item => <option value={item.id} key={item.id}>{item.name + " | ocena: " + item.rating}</option>)
            }
        </StyledSelect>
    );
};

Dropdown.defaultProps = {
    items: [],
};


export default Dropdown;
