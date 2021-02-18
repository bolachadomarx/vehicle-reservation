import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { UserModel } from '../_models/user'
import { environment } from 'src/environments/environment'

type UserAddModel = Omit<UserModel, 'id'>

@Injectable({ providedIn: 'root' })
export class UserService {
  url = environment.api

  constructor(private http: HttpClient) {}

  signup(userData: UserAddModel): Observable<UserModel> {
    return this.http.post<UserModel>(`${this.url}/auth/signup`, userData)
  }
}
