import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  readonly APIUrl = 'http://localhost:5087/api';
  readonly PhotoUrl = 'http://localhost:5087/Photos';

  constructor(private http: HttpClient) {}
  layDSThucDon(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/ThucDon');
  }

  themThucDon(val: string) {
    return this.http.post(this.APIUrl + '/ThucDon', val);
  }

  suaThucDon(val: any): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/ThucDon');
  }

  xoaDSThucDon(val: any): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/ThucDon');
  }

  layDSMonAn(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/MonAn');
  }

  themMonAn(val: any) {
    return this.http.post(this.APIUrl + '/MonAn', val);
  }

  suaMonAn(val: any): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/MonAn');
  }

  xoaDSMonAn(val: any): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/MonAn');
  }

  taiAnh(val: any): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/MonAn/SaveFile');
  }

  layDSTenThucDon(val: any): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/MonAn/GetAllThucDon');
  }
}
