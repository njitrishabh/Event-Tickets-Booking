import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from "rxjs";

interface Product {
  name: string,
  salary: string,
  age: string,
  id: number
}

@Injectable({
  providedIn: "root"
})

export class AppService {

  constructor(private http: HttpClient) {

  }

  private userSubject$ = new Subject<boolean>();
  private userBehaviorSubject$ = new BehaviorSubject<Product | undefined>(undefined);

  public get loginSuccess(): Observable<boolean> {
    return this.userSubject$;
  }
  public get userProfile(): Observable<Product | undefined> {
    return this.userBehaviorSubject$;
  }

  createUser() {
    this.http.post<any>('https://hostname/api/v1/create', { name: "west", salary: "223", age: "43" })
      .subscribe({
        next: (userData) => {
          this.userSubject$.next(true);
          console.log(userData.data);
          this.userBehaviorSubject$.next(userData.data)
        },
        error: () => this.userSubject$.next(false)
      });
  }

}
