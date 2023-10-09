import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  errMsg: any;
  successMsg: any;
  invoiceForm: any;

  constructor(private api: ApiserviceService, private fb: FormBuilder) { }

  ngOnInit() {
    this.invoiceForm = this.fb.group({
      'sino': new FormControl ('', Validators.required),
      'billto': new FormControl('', Validators.required),
      'date': new FormControl('', Validators.required),
      'item': new FormControl('', Validators.required),
      'quantity': new FormControl('', Validators.required),
      'price': new FormControl('', Validators.required),
      'cgst': new FormControl('', Validators.required),
      'sgst': new FormControl('', Validators.required),
      'igst': new FormControl('', Validators.required),
      'invoiceno': new FormControl('', Validators.required),
      'hsn': new FormControl('', Validators.required),

    }) as FormGroup; // Assert as FormGroup
  }

  calculateTotal(): number {
    const quantity = this.invoiceForm.get('quantity').value || 0;
    const price = this.invoiceForm.get('price').value || 0;
    const cgst = this.invoiceForm.get('cgst').value || 0;
    const sgst = this.invoiceForm.get('sgst').value || 0;
    const igst = this.invoiceForm.get('igst').value || 0;

    return quantity * price + (quantity * price * (cgst + sgst + igst) / 100);
  }

  calculateSub(): number {
    const quantity = this.invoiceForm.get('quantity').value || 0;
    const price = this.invoiceForm.get('price').value || 0;

    return (quantity * price);

  }

  calculateCGST(): number{
    const quantity = this.invoiceForm.get('quantity').value || 0;
    const price = this.invoiceForm.get('price').value || 0;
    const cgst = this.invoiceForm.get('cgst').value || 0;

    return (quantity * price * (cgst) / 100);

  }

  calculateSGST(): number{
    const quantity = this.invoiceForm.get('quantity').value || 0;
    const price = this.invoiceForm.get('price').value || 0;
    const sgst = this.invoiceForm.get('sgst').value || 0;

    return (quantity * price * (sgst) / 100);

  }

  calculateIGST(): number{
    const quantity = this.invoiceForm.get('quantity').value || 0;
    const price = this.invoiceForm.get('price').value || 0;
    const igst = this.invoiceForm.get('igst').value || 0;

    return (quantity * price * (igst) / 100);

  }

  invoiceSubmit() {
    if (this.invoiceForm.valid) {
      console.log(this.invoiceForm.value);
      this.api.createData(this.invoiceForm.value).subscribe((res) => {
        console.log(res, 'data added successfully');
        this.invoiceForm.reset();
        this.successMsg = res.message;
      });
    } else {
      this.errMsg = 'All fields are required';
    }
  }

  print() {
    window.print();
  }



}


