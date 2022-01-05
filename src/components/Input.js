/* eslint-disable */
import React from 'react';

function Input(props) {
	console.log(props.code);
	return (
		<div>
			
             <h1
                code={props.code}
             >{props.code}</h1>
		</div>
	);
}

export default Input;
