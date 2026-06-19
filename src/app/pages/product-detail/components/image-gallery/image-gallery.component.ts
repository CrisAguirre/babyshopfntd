import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent implements OnChanges {
  @Input() images: string[] = [];
  
  mainImage: string = '';
  serverUrl = 'http://localhost:5000/uploads/';

  ngOnChanges(): void {
    if (this.images && this.images.length > 0) {
      this.mainImage = this.serverUrl + this.images[0];
    } else {
      this.mainImage = 'assets/placeholder-baby.jpg';
    }
  }

  setMainImage(img: string) {
    this.mainImage = this.serverUrl + img;
  }
}
