import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import auth from '../../Firebase/firebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import axios from 'axios';

const AuthProvider = ({children}) => {

    const [user, setUser] = useState (null)
    const [Loading , setLoading] = useState(true)

    const crateNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const Login = (email, password) => {
        setLoading(true);
return signInWithEmailAndPassword(auth, email, password)
}
const Logout = () => {
    setLoading(true);
    return signOut(auth)
}

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log( 'state captured', currentUser?.email)
            if(currentUser?.email){
                const user = {email: currentUser.email}
            
                axios.post('http://localhost:5000/jwt', user, {withCredentials : true})
                    .then(res => {
                        console.log('login token', res.data)
                        setLoading(false)
                    })
            }
            else{
                axios.post('http://localhost:5000/logout', {}, {withCredentials: true})
                .then(res => {
                    console.log('logout', res.data)
                    setLoading(false)
                })
            }
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        user, Loading,
        crateNewUser, 
        Login, 
        Logout
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;