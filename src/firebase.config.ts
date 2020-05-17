import * as firebase from "firebase/app"
import "firebase/storage"
import { googleKey } from "./googleApiKey"

const firebaseApp = firebase.initializeApp(googleKey)

const storage = firebase.storage()

export { storage, firebaseApp as default }
