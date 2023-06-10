import { Component } from '@angular/core';
import { Router,Route,NavigationExtras,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  constructor(private router:Router,private route:ActivatedRoute){}

  // productDetails(){}
  goToProdDetails(){
    this.router.navigate(['product-details'],{relativeTo: this.route})
  }

}
