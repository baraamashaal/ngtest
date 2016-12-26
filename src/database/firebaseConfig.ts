import { AuthMethods,AuthProviders } from 'angularfire2';

export const fireConf = {
    apiKey: "AIzaSyD2pKALUbsBmzo6hQDKT0QuC7F_Dw2344s",
    authDomain: "sampleapp-da811.firebaseapp.com",
    databaseURL: "https://sampleapp-da811.firebaseio.com",
    storageBucket: "sampleapp-da811.appspot.com",
    messagingSenderId: "789600052524"
};

export const fireAuthConfig = {
    provider: AuthProviders.Password,
    method: AuthMethods.Password
}