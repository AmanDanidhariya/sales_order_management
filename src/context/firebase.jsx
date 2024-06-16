// import { createContext } from "react";
// import { initializeApp } from "firebase/app";
// import { getFirestore, collection, getDoc, getDocs } from "firebase/firestore";
// import { useQuery } from "@tanstack/react-query";

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_FIREBASE_APP_ID,
// };

// const firebaseApp = initializeApp(firebaseConfig);
// const db = getFirestore(firebaseApp);
// //create context API instance
// const FirebaseContext = createContext(null);

// //context provider
// export const FirebaseProvider = ({ children }) => {
//   return (
//     <FirebaseContext.Provider value={db}>{children}</FirebaseContext.Provider>
//   );
// };

// // Custom Hook to Fetch Firestore Data
// export const UseFireStoreQuery = (collectionName) => {
//   return useQuery({
//     queryKey: [collectionName],
//     queryFn: async () => {
//       const snapshot = await getDocs(collection(db, collectionName));
//       return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//     },
//   });
// };
