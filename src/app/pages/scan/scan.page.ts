import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';


@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})
export class ScanPage implements OnInit {

  constructor(private barcodeScanner: BarcodeScanner) { }
  
  ngOnInit() {
    alert('j')
    
  }

  scan(){
    this.barcodeScanner.scan().then(barcodeData => {
      alert(barcodeData)
      console.log('Barcode data', barcodeData);
     }).catch(err => {
      alert(err)
         console.log('Error', err);
     });
  }

}
