import { Component } from '@angular/core';
import { GalleryImg } from 'src/app/Models/gallery-img';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

  displayStyle: string = 'none';
  modalImg: GalleryImg|undefined;
  show: boolean = false;
  discription: string = "I am a passionate individual with a zest for life and a drive to make a positive impact on the world. I have a diverse range of interests,from exploring new cultures and cuisines to diving into the depths of scientific research. I believe in the power of collaboration and strive to connect with like-minded individuals who share my enthusiasm for growth and learning. With an open mind and a heart full curiosity, I'm excited to embark on new adventures and embrace the opportunities that life presents. Let's connect,share ideas, and create something extraordinary together!"

  imagesObject: GalleryImg[] = [
    { imgLink: './assets/images/user_img.PNG', name: 'MR A', description: this.discription },
    { imgLink: './assets/images/user1_img.PNG', name: 'MRS B', description: this.discription },
    { imgLink: './assets/images/user_img.PNG', name: 'MR C', description: this.discription },
    { imgLink: './assets/images/user1_img.PNG', name: 'MRS D', description: this.discription },
    { imgLink: './assets/images/user_img.PNG', name: 'MR E', description: this.discription },
    { imgLink: './assets/images/user1_img.PNG', name: 'MRS F', description: this.discription },
    { imgLink: './assets/images/user_img.PNG', name: 'MR G', description: this.discription },
    { imgLink: './assets/images/user1_img.PNG', name: 'MRS H', description: this.discription },
  ];

  closePopup(): void {
    this.displayStyle = 'none';
  }

  openPopUp(img: GalleryImg): void {
    this.show = true;
    this.modalImg = img;
    this.displayStyle = 'block'
  }

}
