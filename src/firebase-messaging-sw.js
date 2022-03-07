importScripts('https://www.gstatic.com/firebasejs/7.24.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.24.0/firebase-messaging.js');
firebase.initializeApp({
    apiKey: "AIzaSyAB0qIyIrO3qmTF3Oz_ScZkZgfoE9IUYpg",
    authDomain: "boome-influencer.firebaseapp.com",
    projectId: "boome-influencer",
    storageBucket: "boome-influencer.appspot.com",
    messagingSenderId: "295973135619",
    appId: "1:295973135619:web:4f527107e6052c5872b536",
    measurementId: "G-K5RT7HYBQ0"
});
try {

    const messaging = firebase.messaging();
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('../firebase-messaging-sw.js')
            .then(function(registration) {
                console.log("Service Worker Registered");
                messaging.useServiceWorker(registration);
            });
    }

    messaging.setBackgroundMessageHandler(function(payload) {
        console.log("message firbase js payload" + JSON.stringify(payload));
        const notificationTitle = payload.data.title;
        const notificationOptions = {
            body: payload.data.body,
            icon: ''
        };

        return self.registration.showNotification(notificationTitle, notificationOptions);
    });
} catch (e) {
    console.log(e)
}