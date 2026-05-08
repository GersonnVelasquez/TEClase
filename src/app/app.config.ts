import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideFirebaseApp(() =>
      initializeApp({
        apiKey: 'AIzaSyCAn4UD4MTzeqG7bHioJAdz-RSsQNBHBFg',
        authDomain: 'teclase-2e9a2.firebaseapp.com',
        projectId: 'teclase-2e9a2',
        storageBucket: 'teclase-2e9a2.firebasestorage.app',
        messagingSenderId: '1066069543519',
        appId: '1:1066069543519:web:eacfa5aa32ead1dc9929ea',
        measurementId: 'G-PKCGDNP4JD',
      }),
    ),
    provideFirestore(() => getFirestore()),
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
  ],
};
