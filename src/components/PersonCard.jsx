import React from 'react';

const PersonCard = (props) => {
    console.log(props)
    return(
        <fieldset>
            {props.personName}
            <div>Age: {props.personAge}</div>
            <div>Hair Color: {props.personHairColor}</div>
        </fieldset>
    );
}
export default PersonCard;

