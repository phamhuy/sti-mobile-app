import { Component, OnInit } from '@angular/core';
import { ImageAsset } from "tns-core-modules/image-asset";
import { takePicture, requestPermissions, isAvailable } from "nativescript-camera";
import { DialogService } from '~/app/services/dialog.service';

@Component({
  selector: 'ns-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.css'],
  moduleId: module.id,
})
export class ScanComponent implements OnInit {
  public imageTaken: ImageAsset;
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

  onTakePhoto() {
    requestPermissions();
    let options = {
      width: this.width,
      height: this.height,
      keepAspectRatio: this.keepAspectRatio,
      saveToGallery: this.saveToGallery
    };

    takePicture(options)
      .then(imageAsset => {
        this.imageTaken = imageAsset;
      }).catch(err => {
        console.log('takePicture:', err.message);
      });
  }

}
