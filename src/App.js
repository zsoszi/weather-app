import React, { useState } from "react";
import Titles from "./components/title";
import Form from "./components/form";
import Weather from "./components/weather";
import "./App.css";

const API_KEY = "afc26be288b71eab7babccd080378e98";

function App() {
	const [state, setState] = useState(
		{
			temperature: undefined,
			city: undefined,
			country: undefined,
			humidity: undefined,
			description: undefined,
			icon:undefined,
			error: undefined,
		}
	);

	const getWeather = async (e) => {
		e.preventDefault();
		const city = e.target.elements.city.value;
		const country = e.target.elements.country.value;
		const response = await fetch(
			`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
		);
		const data = await response.json();
		if (city && country) {
			setState({
				temperature: data.main.temp,
				city: data.name,
				country: data.sys.country,
				humidity: data.main.humidity,
				description: data.weather[0].description,
				icon: data.weather[0].icon,
				error: "",
			});
		} else {
			setState({
				temperature: undefined,
				city: undefined,
				country: undefined,
				humidity: undefined,
				description: undefined,
				icon:undefined,
				error: "Please enter the values.",
			});
		}
		console.log({data});
	};
	return (
		<div className="App">
			<div className="main">
				<div className="titleContainer">
					<Titles />
				</div>
				<div className="formContainer">
					<Form getWeather={getWeather} />
					<Weather
						city={state.city}
						country={state.country}
						temperature={state.temperature}
						humidity={state.humidity}
						description={state.description}
						icon={state.icon}
						error={state.error}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;