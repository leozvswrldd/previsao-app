import { Injectable } from '@angular/core';
import { Weather } from './weather'; // Import the Weather interface
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root' // Provide the service at the root level
})
export class WeatherService {

  private baseURL = 'https://api.openweathermap.org/data/2.5/weather'; // Base URL for the weather API
  private apiKey = '75e2f36a7782936206549d3e01d271eb'; // API key for accessing the weather data

  constructor(private http: HttpClient) { }

  // Method to fetch weather data for a given city
  getWeatherData(cityName: string) {
    const url = `${this.baseURL}?q=${cityName}&appid=${this.apiKey}&units=metric`; // Construct the URL for the API request
    return this.http.get<Weather>(url); // Make an HTTP GET request and specify the expected response type as Weather
  }
}
