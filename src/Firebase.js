import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
const firebaseConfig = {
  apiKey: "AIzaSyClCxMELom6OXUzX0vvptmTZvkjUMXCgiQ",
  authDomain: "pushnotify-9184a.firebaseapp.com",
  projectId: "pushnotify-9184a",
  storageBucket: "pushnotify-9184a.appspot.com",
  messagingSenderId: "1086151163101",
  appId: "1:1086151163101:web:bc4f3487e80f4785adaf34",
  measurementId: "G-BS8GEV6NGL",
};
export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
