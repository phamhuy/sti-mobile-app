import { Directive, ViewContainerRef, TemplateRef, Inject, Input } from "@angular/core";
import { Device, platformNames } from "tns-core-modules/platform";
import { DEVICE } from "nativescript-angular/platform-providers";

@Directive({ selector: "[sdkIfAndroid]" })
export class IfAndroidDirective {
  private container: ViewContainerRef;
  private templateRef: TemplateRef<Object>;
  private device: Device;
  private hasView: boolean = false;

  constructor(@Inject(DEVICE) device: Device, container: ViewContainerRef, templateRef: TemplateRef<Object>) {
    this.container = container;
    this.templateRef = templateRef;
    this.device = device;
  }

  @Input() set sdkIfAndroid(condition: boolean) {
    if (this.device.os === platformNames.android && (condition === null || condition) && !this.hasView) {
      this.container.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (this.hasView) {
      this.container.clear();
      this.hasView = false;
    }
  }
}

@Directive({ selector: "[sdkIfIos]" })
export class IfIosDirective {
  private container: ViewContainerRef;
  private templateRef: TemplateRef<Object>;
  private device: Device;
  private hasView: boolean = false;

  @Input('sdkIfIos') condition: boolean;
  constructor(@Inject(DEVICE) device: Device, container: ViewContainerRef, templateRef: TemplateRef<Object>) {
    this.container = container;
    this.templateRef = templateRef;
    this.device = device;
  }

  @Input() set sdkIfIos(condition: boolean) {
    if (this.device.os === platformNames.ios && (condition === null || condition) && !this.hasView) {
      this.container.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (this.hasView) {
      this.container.clear();
      this.hasView = false;
    }
  }
}