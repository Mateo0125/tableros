import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  private env: string;
  constructor(private _http: HttpClient) {
    this.env = environment.APP_URL;
  }

  saveWorkB(workBoard: any) {
    return this._http.post<any>(this.env + 'workB/saveWorkB', workBoard);
  }
  listWorkB() {
    return this._http.get<any>(this.env + 'workB/listWorkB/');
  }
  findWork(_id: string) {
    return this._http.get<any>(this.env + 'workB/findWork/' + _id);
  }

  deleteWorkB(workBoard: any) {
    return this._http.delete<any>(
      this.env + 'role/deleteWorkB/' + workBoard._id
    );
  }
}
