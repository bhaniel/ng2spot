import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/index';
import { APP_ROUTER_PROVIDERS } from './app/routes/index';


if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent , [APP_ROUTER_PROVIDERS])
    .catch(err => console.error(err));

