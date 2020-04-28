import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyD9QiyGfCobRkABSPhgorWJjT1hqf_A_vM",
    authDomain: "fir-react-app-c79a2.firebaseapp.com",
    databaseURL: "https://fir-react-app-c79a2.firebaseio.com",
    projectId: "fir-react-app-c79a2",
    storageBucket: "fir-react-app-c79a2.appspot.com",
    messagingSenderId: "190294733969",
    appId: "1:190294733969:web:463fd6354fae2e50307b30",
    measurementId: "G-GSXBY1ZXMB"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;