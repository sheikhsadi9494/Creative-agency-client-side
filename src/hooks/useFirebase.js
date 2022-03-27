import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";

initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState([]);
  const auth = getAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState('');
  const [admin, setAdmin] = useState(false);
  const provider = new GoogleAuthProvider();

  const register = (email, password, name, navigate) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError('');
        const newUser = {email, displayName: name};
        setUser(newUser);
        // save user to database 
        saveUser(email, name, 'POST');
        //send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name
        }).then(() => {
        }).catch((error) => {
        });
        navigate('/');

      })
      .catch((error) => {
        setAuthError(error.message)
        // ..
      })
      .finally(() => setIsLoading(false));
  };

  const login = (email, password, location, navigate) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const destination = location?.state?.from || '/';
      navigate(destination);
      setAuthError('')
    })
    .catch((error) => {
      setAuthError(error.message)
    })
    .finally(() => setIsLoading(false));
  }

  const signInWithGoogle = (location, navigate) => {
   signInWithPopup(auth, provider)
  .then((result) => {
    const user = result.user;
    saveUser(user.email, user.displayName, 'PUT')
    const destination = location?.state?.from || '/home';
    navigate(destination);
    setAuthError('');
  }).catch((error) => {
    // Handle Errors here.
    setAuthError(error.message)
  });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user);
        } else {
            setUser({})
        }
        setIsLoading(false)
      });
      return () => unsubscribe;
  }, [])

  const logOut = () => {
    setIsLoading(true);
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };

  const saveUser = (email, displayName, method) => {
    const user = {email, displayName};
    fetch('http://localhost:5000/user', {
      method: method,
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then()
  }

  useEffect(() => {
    fetch(`http://localhost:5000/user/${user.email}`)
    .then(res => res.json())
    .then(data => setAdmin(data.admin))
  }, [user.email])

  return {
    user,
    register,
    login,
    logOut, 
    isLoading, 
    authError, 
    signInWithGoogle,
    admin
  };
};

export default useFirebase;
