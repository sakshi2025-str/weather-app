import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import "./WeatherApp.css";

export default function WeatherApp() {
    const [weatherInfo , setWeatherInfo] = useState({
        city: "Mumbai",
        feelsLike: 22.9,
        humidity: 32,
        temp: 23.64,
        tempMax: 23.64,
        tempMin: 23.64,
        weather: "clear sky",
    });
    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);

    };
    return (
        // <div style={{textAlign: "center"}}>
        //     <h2>Weather App</h2>
        //     <SearchBox updateInfo={updateInfo}/>
        //     <InfoBox info={weatherInfo}/>
        // </div>

        <div className="page">
            <div className="appContainer">
                <h2>Weather App</h2>
                <SearchBox updateInfo={updateInfo}/>
                <InfoBox info={weatherInfo}/>
            </div>
        </div>
    );

}