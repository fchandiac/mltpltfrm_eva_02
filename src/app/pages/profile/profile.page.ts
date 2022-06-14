import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithRedirect } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAS2ev4-oS8KUEMLbB_aK1isEBFmkgtKzM",
  authDomain: "mltpltfrm.firebaseapp.com",
  projectId: "mltpltfrm",
  storageBucket: "mltpltfrm.appspot.com",
  messagingSenderId: "518163078492",
  appId: "1:518163078492:web:eb0230c15dd8dffd5c7599"
}



const app = initializeApp(firebaseConfig);


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public displayName: string
  public photoURL: string
  public email: string

  constructor() { }

  ngOnInit() {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user) {
          if (user !== null) {
            this.displayName = user.displayName
            this.photoURL = user.photoURL
            this.email = user.email
          }
      }  
  })
  }

}
