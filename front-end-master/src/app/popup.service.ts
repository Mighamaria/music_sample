// import { Injectable } from '@angular/core';
// import { BehaviorSubject, Observable } from 'rxjs';
//  import { HttpClient, HttpHeaders } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })
// export class PopupService {
//   private successPopupSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
//   private failurePopupSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

//   successPopup$ = this.successPopupSubject.asObservable();
//   failurePopup$ = this.failurePopupSubject.asObservable();

//   constructor(private http: HttpClient) {}
//   // registerUser(user: any): Observable<any> {
//   //   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
//   //   const options = { headers: headers };
//   //   return this.http.post<any>('http://localhost:9090/registerNewUser', user, options);
//   // }

//   showSuccessPopup() {
//     this.successPopupSubject.next(true);
//   }

//   showFailurePopup() {
//     this.failurePopupSubject.next(true);
//   }

//   hidePopups() {
//     this.successPopupSubject.next(false);
//     this.failurePopupSubject.next(false);
//   }

//   // registerUser(user: any) {
//   //   return this.http.post<any>('http://localhost:9090/registerNewUser', user);
//   // }
// }

