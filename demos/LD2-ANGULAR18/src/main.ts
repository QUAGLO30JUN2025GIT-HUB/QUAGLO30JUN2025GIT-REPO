// import { bootstrapApplication, platformBrowser } from '@angular/platform-browser';
// S1: Standalone to Modular
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { AddEmpComponent } from './app/add-emp/add-emp.component';
import { AppModule } from './app/app.module';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

// bootstrapApplication(AddEmpComponent, appConfig)
//   .catch((err) => console.error(err));


// The platformBrowserDynamic function is used to bootstrap the Angular application with the AppModule.
// It initializes the application and starts the Angular framework.
// This is the entry point of the Angular application.
// The bootstrapModule function is used to bootstrap the AppModule, which is the root module of the application.
// It loads the module and starts the application.

// S2: Standalone to Modular
platformBrowserDynamic().bootstrapModule(AppModule)
