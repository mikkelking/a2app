import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
//import {disableDeprecatedForms, provideForms} from '@angular/forms'; 

import { AppComponent, environment } from './app/';
import { CustomerComponent } from './app/customer/';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  HTTP_PROVIDERS
//  ,disableDeprecatedForms()
//  ,provideForms()
]); 
bootstrap(CustomerComponent, [
  HTTP_PROVIDERS
]);
