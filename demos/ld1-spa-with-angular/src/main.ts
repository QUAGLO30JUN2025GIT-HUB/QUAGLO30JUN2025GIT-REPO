import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { EmployeeDisplayComponent } from './app/employee-display/employee-display.component';


// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

// The bootstrapApplication function is used to bootstrap the Angular application.
// It takes the root component and the application configuration as arguments.
// Here, we are bootstrapping the EmployeeDisplayComponent instead of AppComponent.
// This allows us to display the employee data directly without going through the AppComponent.
// The appConfig contains the necessary providers and configurations for the application.
bootstrapApplication(EmployeeDisplayComponent, appConfig)
  .catch((err) => console.error(err));



