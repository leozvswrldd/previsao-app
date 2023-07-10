import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; // Import the HttpClientModule for making HTTP requests
import { FormsModule } from '@angular/forms'; // Import the FormsModule for two-way data binding

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, // Import the BrowserModule for running the application in a browser environment
    HttpClientModule, // The import statement for HttpClientModule has a comment indicating that it is used for making HTTP requests
    FormsModule // Add the FormsModule to the imports array for two-way data binding support
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
