import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

class Firebase {
    constructor() {
        this.auth = auth;
        this.db = firestore();
    }
}

const firebaseInstance = new Firebase();
export default firebaseInstance;


