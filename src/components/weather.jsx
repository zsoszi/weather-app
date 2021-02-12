import React from "react";

const Weather = (props) => (
	<div className="info">
		{props.city && props.country && (
			<p className="key">
				Location:
				<span className="value">

					{props.city}, {props.country}
				</span>
			</p>
		)}
		{props.temperature && (
			<p className="key">
				Temperature:
				<span className="value"> {props.temperature} &#8451;</span>
			</p>
		)}
		{props.humidity && (
			<p className="key">
				Humidity:
				<span className="value"> {props.humidity} %</span>
			</p>
		)}
		{props.description && (
			<p className="key">
				Conditions:
				<span className="value"> {props.description}</span>
			</p>
		)}
		{props.icon &&(
			<img className="icon" src ={`http://openweathermap.org/img/w/${props.icon}.png`} alt=""/>
		)}
		{props.error && <p className="error">{props.error}</p>}
	</div>
);

export default Weather;
