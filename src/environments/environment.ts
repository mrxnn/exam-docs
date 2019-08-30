// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyALBBLEnj4pQ7ZmukzlEU5xg8wYF-fbIMw",
    authDomain: "exam-docs-b28b6.firebaseapp.com",
    databaseURL: "https://exam-docs-b28b6.firebaseio.com",
    projectId: "exam-docs-b28b6",
    storageBucket: "",
    messagingSenderId: "783208429423",
    appId: "1:783208429423:web:0975ab976bb3d6a4"
  },
  algolia: {
    apiKey: 'c45b428f5d5fea0d43642a540c85d3f2',
    appId: '28IX9IUVZI'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
