import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';

import { ApiModule } from './services/api';
import { StorageModule } from './services/storage';

import { LayoutModule } from './layout';
import { effects, reducers } from './store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,

        LayoutModule,
        ApiModule,
        StorageModule,

        StoreModule.forRoot(reducers, {
            runtimeChecks: {
                strictStateImmutability: true,
                strictActionImmutability: true,
            },
        }),
        EffectsModule.forRoot(effects),
        StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    ],
    providers: [],

    bootstrap: [AppComponent]
})
export class AppModule {
}
