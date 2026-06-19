import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  adminName = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.currentAdmin$.subscribe(admin => {
      if (admin) {
        this.adminName = admin.name;
      }
    });
  }

  logout() {
    this.authService.logout();
  }
}
