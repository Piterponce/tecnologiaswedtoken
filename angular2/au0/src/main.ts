import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAuth0 } from '@auth0/auth0-angular';
import { AppModule } from './app/app.module';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideAuth0({
      domain: 'dev-wu11bgvzoojk0sdu.us.auth0.com',
      clientId: 'VYdDAZvDHbZnO2UFIcXwEnIBz51SfV6f',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  ]
});
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
