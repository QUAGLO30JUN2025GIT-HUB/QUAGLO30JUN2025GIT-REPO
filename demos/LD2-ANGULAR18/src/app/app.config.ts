import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    // The provider for the HTTP client is necessary to make HTTP requests in Angular applications.
    // It allows the application to communicate with backend services or APIs.
    provideHttpClient(),
  ]
};
