import React from "react";


const Star = (props) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.75 8.08594H12.0547L10 1.87109L7.94531 8.08594H1.25L6.72656 11.9102L4.59375 18.125L10 14.2734L15.4062 18.125L13.2695 11.9102L18.75 8.08594Z" fill={props.color}/>
    </svg>

);

export default Star;