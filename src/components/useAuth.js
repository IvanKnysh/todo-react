import {useEffect, useState} from 'react';

const useAuth = (authFirebase) => {
	const [authentication, setAuthentication] = useState(null);

	const auth = authFirebase();
	const provider = new authFirebase.GoogleAuthProvider();

	const logIn = () => {
		auth.signInWithPopup(provider);
	}

	const logOut = () => {
		auth.signOut()
			.catch(err => console.log(err));
	}

	useEffect(() => {
		auth.onAuthStateChanged(user => {
			if (user) {
				setAuthentication(user);
			} else {
				setAuthentication(null);
			}
		})
	}, [auth, authentication]);

	return {authentication, logIn, logOut}
};

export default useAuth;