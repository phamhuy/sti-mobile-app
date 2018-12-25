import { Component, OnInit } from '@angular/core';
import { ImageAsset } from "tns-core-modules/image-asset";
import { takePicture, requestPermissions, isAvailable } from "nativescript-camera";
import { DialogService } from '~/app/services/dialog.service';
import { create } from "nativescript-imagepicker";

@Component({
  selector: 'ns-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.css', './scan.css'],
})
export class ScanComponent implements OnInit {
  selectedImage: ImageAsset;
  public saveToGallery: boolean = false;
  public keepAspectRatio: boolean = true;
  public width: number = 300;
  public height: number = 300;

  constructor(
    private dialogService: DialogService
  ) { }

  ngOnInit() {
  }

  async onTakePhoto() {
    if (!isAvailable()) {
      await this.dialogService.alert('Unable to Take Picture', 'Camera is not available!');
      return;
    }

    try {
      let options = {
        width: this.width,
        height: this.height,
        keepAspectRatio: this.keepAspectRatio,
        saveToGallery: this.saveToGallery
      };

      await requestPermissions();
      this.selectedImage = await takePicture(options);
    } catch(err) {
      console.log(err);
    }
  }

  async onUploadPhoto() {
    const context = create({
      mode: 'single'
    });

    try {
      await context.authorize();
      const images = await context.present();
      this.selectedImage = images[0];
    } catch(err) {
      console.log(err);
    }
  }

}
