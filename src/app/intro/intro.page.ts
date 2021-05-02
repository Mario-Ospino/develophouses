import { Component, OnInit } from '@angular/core';

// mis importaciones
import { Router } from '@angular/router';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  slideOps = {
    initialSlide : 0,
    slidesPreview : 1,
    centeredSlides : true
  }
  constructor( private router : Router ) { }
  finish(){
    this.router.navigateByUrl("/login");
  }
  ngOnInit() {
  }

}
