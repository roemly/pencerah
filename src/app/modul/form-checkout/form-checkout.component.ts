import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../service/login.service";
import {ProductService} from "../../service/product.service";
import {CartService} from "../../service/cart.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-form-checkout',
  templateUrl: './form-checkout.component.html',
  styleUrls: ['./form-checkout.component.css']
})
export class FormCheckoutComponent implements OnInit {
  alamat_tujuan: string = '';
  constructor(private route: ActivatedRoute,
              private cart: CartService,
              private product: ProductService,
              private  current_user: LoginService) { }

  ngOnInit(): void {
      this.alamat_tujuan = this.cart.getAlamatTujuan();

  }

}