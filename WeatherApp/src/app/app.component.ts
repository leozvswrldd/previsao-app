import {Component, OnInit} from '@angular/core';
import {Weather} from "./weather";
import {WeatherService} from "./weather.service";
import {catchError, tap} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'WeatherApp';


  weather: Weather | null; // Weather object to store weather data
  cityName: string; // Input field for the city name

  errorMessage: string | null; // Error message if something goes wrong



  constructor(private weatherService: WeatherService) { } // Inject the WeatherService

  ngOnInit(): void {
  }


  searchWeather() {
    if (this.cityName) {
      this.getWeatherDataImp(this.cityName); // Call the function to get weather data
    } else {
      this.errorMessage = 'Please enter a city name.'; // Show an error if the city name is not provided
      this.weather = null; // Clear the weather data
    }
  }

  getWeatherDataImp(cityName: string) {
    this.weatherService.getWeatherData(cityName)
      .pipe(
        tap((data: any) => { // Perform side effects without modifying the emitted value
          if (data.cod === '404') { // Check if the city is not found
            this.errorMessage = 'City not found.'; // Set the error message
            this.weather = null; // Clear the weather data
          } else {
            this.errorMessage = null; // Clear any previous error message
            this.weather = {
              temp: data.main.temp,
              min_temp: data.main.temp_min,
              max_temp: data.main.temp_max,
              humidity: data.main.humidity,
              wind: data.wind.speed,
              name: data.name,
            }; // Store the weather data in the weather object
          }
        }),
        catchError(error => { // Catch and handle any errors that occur during the HTTP request
          this.errorMessage = 'Please enter a valid city name.';
          this.weather = null;
          throw error; // Rethrow the error to be caught by the caller if needed
        })
      )
      .subscribe(); // Subscribe to the observable to initiate the HTTP request
  }

}
