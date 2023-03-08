// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIc25nwEbDk8cEniv0tvFGtp8hh9_uHvY",
  authDomain: "digital-art-c7a86.firebaseapp.com",
  projectId: "digital-art-c7a86",
  storageBucket: "digital-art-c7a86.appspot.com",
  messagingSenderId: "92965164523",
  appId: "1:92965164523:web:71b0f228e1df2c2fd735ae",
  measurementId: "G-30J1N4S28G",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const database = getFirestore(firebaseApp);

//     {
//       name: "Red Bench",
//       category: "people",
//       price: 3.89,
//       currency: "USD",
//       image: {
//         src: "",
//         alt: "",
//       },
//       bestseller: true,
//       featured: false,
//       details: null,
//     },
//     {
//       name: "Egg Balloon",
//       category: "food",
//       price: 93.89,
//       currency: "USD",
//       image: "",
//       bestseller: false,
//       featured: false,
//       details: null,
//     },
//     {
//       name: "Man",
//       category: "people",
//       price: 100,
//       currency: "USD",
//       image: {
//         src: "",
//         alt: "",
//       },
//       bestseller: false,
//       featured: false,
//       details: null,
//     },
//     {
//       name: "Architecture",
//       category: "landmarks",
//       price: 101,
//       currency: "USD",
//       dimmentions: {
//         width: 1020,
//         height: 1020,
//       },
//       image: "",
//       bestseller: false,
//       featured: false,
//       details: null,
//     },
//     {
//       name: "Samurai King Restling",
//       category: "landmarks",
//       price: 101,
//       currency: "USD",
//       image: {
//         src: "",
//         alt: "",
//       },
//       bestseller: false,
//       featured: true,
//     },
//   ]);
// };
