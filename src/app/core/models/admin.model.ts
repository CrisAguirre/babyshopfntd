export interface Admin {
  id: string;
  username: string;
  name: string;
}

export interface AuthResponse {
  token: string;
  admin: Admin;
}
