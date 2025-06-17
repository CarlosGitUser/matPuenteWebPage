import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

<<<<<<< HEAD

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
=======
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
});
>>>>>>> 1e3011e63fd221a6e78b6226564a61f31a12992b
