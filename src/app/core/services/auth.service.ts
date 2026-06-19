import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Admin, AuthResponse } from '../models/admin.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/api/auth';
  private currentAdminSubject = new BehaviorSubject<Admin | null>(null);
  public currentAdmin$ = this.currentAdminSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) {
    this.checkToken();
  }

  private checkToken() {
    const token = localStorage.getItem('babyshop_admin_token');
    if (token) {
      this.verifyToken().subscribe({
        next: (res: any) => {
          if (res.valid) {
            this.currentAdminSubject.next(res.admin);
          } else {
            this.logout();
          }
        },
        error: () => this.logout()
      });
    }
  }

  login(credentials: any): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, credentials).pipe(
      tap(response => {
        localStorage.setItem('babyshop_admin_token', response.token);
        this.currentAdminSubject.next(response.admin);
      })
    );
  }

  logout() {
    localStorage.removeItem('babyshop_admin_token');
    this.currentAdminSubject.next(null);
    this.router.navigate(['/admin/login']);
  }

  getToken(): string | null {
    return localStorage.getItem('babyshop_admin_token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  verifyToken(): Observable<any> {
    return this.http.get(`${this.apiUrl}/verify`);
  }
}
