import { PaymentDetail } from './../shared/payment-detail.model';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styles: [
  ]
})
export class PaymentDetailsComponent implements OnInit {

  constructor(public service: PaymentDetailService, private Toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedData: PaymentDetail) {
    this.service.formData = Object.assign({}, selectedData);
  }

  onDelete(id: number) {
    if(confirm('Are you sure to delete this record?')) {
      this.service.deletePaymentDetail(id).subscribe(
        res => {
          this.service.refreshList();
          this.Toastr.error('Deleted successfully', 'Payment Detail');
        },
        err => { console.log(err); }
      );
    }
  }
}