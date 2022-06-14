import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-tabbar',
  templateUrl: './tabbar.component.html',
  styleUrls: ['./tabbar.component.scss'],
})
export class TabbarComponent implements OnInit {
  

  constructor(private router: Router) { }

  ngOnInit() {}

  

  scan(){
    this.router.navigate(['/scan'])
  }

  profile(){
    this.router.navigate(['/profile'])
  }

  history(){
    this.router.navigate(['/history'])
  }

}
