import { getApps, initializeApp, getApp, deleteApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDJ9fvmGRy59lavDDO8ulBrtqeaCejkWRM",
  authDomain: "posiblemente-9ec97.firebaseapp.com",
  projectId: "posiblemente-9ec97",
  storageBucket: "posiblemente-9ec97.appspot.com",
  messagingSenderId: "765586851595",
  appId: "1:765586851595:web:e5a7dfa910910f61cf040e"
};
let firebaseApp;
if (!getApps().length) {
  firebaseApp = initializeApp(firebaseConfig);
} else {
  firebaseApp = getApp();
  deleteApp(firebaseApp);
  firebaseApp = initializeApp(firebaseConfig);
}
getFirestore(firebaseApp);
getAuth(firebaseApp);
