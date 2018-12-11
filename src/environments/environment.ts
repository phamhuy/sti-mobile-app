import { isAndroid } from "tns-core-modules/platform";

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAa349WNHegMsRQ6rWmGoR6NN_b-UOeXJc',
    authDomain: 'sti-mobile-app-test.firebaseapp.com',
    databaseURL: 'https://sti-mobile-app-test.firebaseio.com',
    projectId: 'sti-mobile-app-test',
    storageBucket: 'sti-mobile-app-test.appspot.com',
    messagingSenderId: '422739635229'
  },
  baseUrl: isAndroid ? 'http://10.0.2.2:8080/mobile-sti/rest/settleitRestController' : 'http://localhost:8080/mobile-sti/rest/settleitRestController'
}