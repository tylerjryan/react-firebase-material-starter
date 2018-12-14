import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

class Firebase {
    constructor() {
        firebase.initializeApp(config);

        this.auth = firebase.auth();
        this.emailProvider = firebase.auth.EmailAuthProvider;
        this.googleProvider = firebase.auth.GoogleAuthProvider;
        this.facebookProvider = firebase.auth.FacebookAuthProvider;
        this.firestore = firebase.firestore(); 
        this.firestore.settings({ timestampsInSnapshots: true })
    }

    // *** Auth API ***

    createUserWithEmailAndPassword = (username, email, password) => {
        return this.auth.createUserWithEmailAndPassword(email, password)
            .then(authUser => this.createUser(authUser, username, email))
    }

    openListenerForAuthStateChanges = () => {
        this.unregisterAuthObserver = this.auth.onAuthStateChanged(user => {
            console.log('auth state changed, user:', user);
        })
    }

    closeListenerForAuthStateChanges = () => {
        this.unregisterAuthObserver();
    } 
    
    signInWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email, password);

    signOut = () => this.auth.signOut();

    resetPassword = email => this.auth.sendPasswordResetEmail(email);

    updatePassword = password => this.auth.currentUser.updatePassword(password);


    // *** User API ***

    createUser = (authUser, username, email) => 
        this.user(authUser.user.uid).set({ username, email })

    openListenerForUsersUpdates = (handleUsersUpdate) => {
        this.unsubscribeUsersUpdatesListener = (
            this.firestore.collection('users').onSnapshot(querySnapshot => {
                const documentSnapshots = querySnapshot.docs;
                
                const usersList = documentSnapshots.map(documentSnapshot => ({
                    ...documentSnapshot.data(),
                    uid: documentSnapshot.id
                }));

                handleUsersUpdate(usersList);
            })
        )
    }

    closeListenerForUsersUpdates = () => {
        this.unsubscribeUsersUpdatesListener();
    }

    user = uid => this.firestore.collection('users').doc(uid)

    users = () => this.firestore.collection('users');
}

export default Firebase;