import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  constructor(private http: HttpClient) { }

  formData: PaymentDetail = new PaymentDetail();

  readonly baseURL = 'http://localhost:53944/api/PaymentDetail';

  postPaymentDetail() {
    return this.http.post(this.baseURL, this.formData);
  }
}
