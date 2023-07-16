import { Component } from '@angular/core';
import { Images } from 'src/app/Models/image';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  imagesObject : Images[] = [

    { imgSrc: './assets/images/user_img.PNG', name: 'MR X', post: 'CHIEF EXECUTIVE OFFICER' },
    { imgSrc: './assets/images/user1_img.PNG', name: 'MRS A', post: 'CHIEF OPERATION OFFICER' },
    { imgSrc: './assets/images/user_img.PNG', name: 'MR Y', post: 'CHIEF BRAND OFFICER' },
    { imgSrc: './assets/images/user1_img.PNG', name: 'MRS B', post: 'EXECUTIVE VICE PRESIDENT' },
    { imgSrc: './assets/images/user_img.PNG', name: 'MR Z', post: 'CHIEF FINANCIAL OFFICER' }

  ];

}
