import { Component } from '@angular/core'
import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithRedirect } from "firebase/auth"
import { Router } from '@angular/router';


const firebaseConfig = {
  apiKey: "AIzaSyAS2ev4-oS8KUEMLbB_aK1isEBFmkgtKzM",
  authDomain: "mltpltfrm.firebaseapp.com",
  projectId: "mltpltfrm",
  storageBucket: "mltpltfrm.appspot.com",
  messagingSenderId: "518163078492",
  appId: "1:518163078492:web:eb0230c15dd8dffd5c7599"
}



const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  ngOnInit() {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user) {
          if (user !== null) {
            this.router.navigate(['/profile'])
      
          }
      } 
  })
  }

  login(){
    const auth = getAuth()
    signInWithRedirect(auth, provider)
  }

}
