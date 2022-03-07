// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  base_url: 'https://api.boome-wm.com',//'http://3.142.108.159:6855',
  // socketUrl:'http://3.142.108.159:6855/?token=',
  firebase: {
    apiKey: "AIzaSyAB0qIyIrO3qmTF3Oz_ScZkZgfoE9IUYpg",
    authDomain: "boome-influencer.firebaseapp.com",
    projectId: "boome-influencer",
    storageBucket: "boome-influencer.appspot.com",
    messagingSenderId: "295973135619",
    appId: "1:295973135619:web:4f527107e6052c5872b536",
    measurementId: "G-K5RT7HYBQ0"
  }

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
