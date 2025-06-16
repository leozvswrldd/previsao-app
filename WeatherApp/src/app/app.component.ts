import {Component, OnInit} from '@angular/core';
import {Weather} from "./weather";
import {WeatherService} from "./weather.service";
import {catchError, tap} from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "WeatherApp";

  weather: Weather | null; // objeto para armazenar os dados do clima
  cityName: string; // input para armazenar o nome da cidade

  errorMessage: string | null; // mensagem de erro para exibir quando ocorrer um erro

  constructor(private weatherService: WeatherService) {} // injeta o serviço WeatherService

  ngOnInit(): void {}

  searchWeather() {
    if (this.cityName) {
      this.getWeatherDataImp(this.cityName); // chama a funcao para buscar os dados do clima
    } else {
      this.errorMessage = "Please enter a city name."; //mostra uma mensagem de erro se o nome da cidade nao for informado
      this.weather = null; // limpa os dados do clima
    }
  }

  getWeatherDataImp(cityName: string) {
    this.weatherService
      .getWeatherData(cityName)
      .pipe(
        tap((data: any) => {
          // Perform side effects without modifying the emitted value
          if (data.cod === "404") {
            // verifica se a cidade nao foi encontrada
            this.errorMessage = "City not found."; // mensagem de erro
            this.weather = null; // limpa os dados do clima
          } else {
            this.errorMessage = null; // limpa a mensagem de erro
            this.weather = {
              temp: data.main.temp,
              min_temp: data.main.temp_min,
              max_temp: data.main.temp_max,
              humidity: data.main.humidity,
              wind: data.wind.speed,
              name: data.name,
            }; // armazena os dados do clima
          }
        }),
        catchError((error) => {
          // encontra erro during a requisição e exibe uma mensagem de erro
          this.errorMessage = "Please enter a valid city name.";
          this.weather = null;
          throw error; 
        })
      )
      .subscribe(); 
  }
}
