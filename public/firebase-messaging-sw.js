importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyClCxMELom6OXUzX0vvptmTZvkjUMXCgiQ",
  authDomain: "pushnotify-9184a.firebaseapp.com",
  projectId: "pushnotify-9184a",
  storageBucket: "pushnotify-9184a.appspot.com",
  messagingSenderId: "1086151163101",
  appId: "1:1086151163101:web:bc4f3487e80f4785adaf34",
  measurementId: "G-BS8GEV6NGL",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
