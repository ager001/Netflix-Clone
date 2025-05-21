
import { initializeApp } from "firebase/app";
import { getAuth, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword,
    signOut } from "firebase/auth";
import { 
    addDoc, 
    collection, 
    getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB1gOdnkAQD4CnB1jg_YhVoA88Q9rEy2NA",
  authDomain: "netflix-clone3344.firebaseapp.com",
  projectId: "netflix-clone3344",
  storageBucket: "netflix-clone3344.firebasestorage.app",
  messagingSenderId: "685686495856",
  appId: "1:685686495856:web:9bc7bc6bd593a13b55b2b5"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) =>{
     try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        const user = res.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email
            
            });
     } catch (error)  {
        console.log(error);
        alert(error);
     }
     


}

const login = async (email, password) =>{
    try {
       await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
        alert(error);
    }
}

const logout = () => {
    signOut(auth);
}

export { auth, db, signup, login, logout };