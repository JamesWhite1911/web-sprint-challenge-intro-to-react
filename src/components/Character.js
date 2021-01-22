// Write your Character component here
import React from 'react';
import styled from 'styled-components';

export default function Character({ name, info }) {
    return (
        <StyledCharacter>
        <h1 name={name}>{name}</h1>
        <p info={info}>{info}</p>
        </StyledCharacter>
    )
}

const StyledCharacter = styled.div`
p {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
    vertical-align: baseline;
    text-shadow: none;
    font-weight: bold;
}
text-shadow: 1px 1px 5px #F67;
color: #111;
background: rgba(90, 90, 90, 0.9);
padding: 0% 5% 1% 5%;
margin: 0 10% 0.5% 10%;
border-radius: 25px;
border: solid #111 2px;
`