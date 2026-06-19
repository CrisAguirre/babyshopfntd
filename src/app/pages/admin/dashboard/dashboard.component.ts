import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../core/services/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  stats: any = null;
  loading = true;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAdminStats().subscribe({
      next: (data) => {
        this.stats = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
}
