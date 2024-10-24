import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QRCodeModule } from 'angularx-qrcode';
@Component({
  selector: 'app-qr-generator',
  standalone: true,
  imports: [QRCodeModule, 
            ReactiveFormsModule,
            CommonModule,
            ],
  templateUrl: './qr-generator.component.html',
  styleUrl: './qr-generator.component.css'
})
export class QrGeneratorComponent {
  public myForm : FormGroup = new FormGroup({
    url : new FormControl('', Validators.required)
  })

  public myAngularxQrCode: string = "";
  showQr : boolean = false;

  generateQr(){
    this.myAngularxQrCode = this.myForm.get('url')?.value || "";
    this.showQr = false;
    setTimeout(() => {
      this.showQr = true;
    }, 0.4);

  }
  resetQr(){
    this.myForm.reset();
    this.showQr = false;
  }
}
