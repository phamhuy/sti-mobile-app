import { Component, OnInit } from '@angular/core';
import { ImageAsset } from "tns-core-modules/image-asset";
import { takePicture, requestPermissions, isAvailable } from "nativescript-camera";
import { DialogService } from '~/app/services/dialog.service';
import { create } from "nativescript-imagepicker";

@Component({
  selector: 'ns-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.css', './scan.css'],
  moduleId: module.id,
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

  async ngOnInit() {
    if (!isAvailable()) {
      await this.dialogService.alert('Unable to Take Picture', 'Camera is not available!');
    }
  }

  async onTakePhoto() {
    await requestPermissions();
    let options = {
      width: this.width,
      height: this.height,
      keepAspectRatio: this.keepAspectRatio,
      saveToGallery: this.saveToGallery
    };

    takePicture(options)
      .then(imageAsset => {
        this.selectedImage = imageAsset;
      }).catch(err => {
        console.log('takePicture:', err.message);
      });
  }

  async onUploadPhoto() {
    const context = create({
      mode: 'single'
    });

    await context.authorize();
    context.present().then(images => {
      this.selectedImage = images[0];
    }, err => {
      console.log('onUploadPhoto:', err.message);
    });
  }

}
