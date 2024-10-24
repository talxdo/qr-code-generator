import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { QRCodeModule } from 'angularx-qrcode';
@Component({
  selector: 'app-qr-generator',
  standalone: true,
  imports: [QRCodeModule, 
            ReactiveFormsModule,
            CommonModule
            ],
  templateUrl: './qr-generator.component.html',
  styleUrl: './qr-generator.component.css'
})
export class QrGeneratorComponent {
  public myForm : FormGroup = new FormGroup({
    url : new FormControl('', Validators.required)
  })

  public myAngularxQrCode: string = "";

  generateQr(){
    this.myAngularxQrCode = this.myForm.get('url')?.value || "";
  }
}
