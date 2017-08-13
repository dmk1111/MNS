import { Injectable } from '@angular/core';
import { ApiHttp } from '../services/http/apiHttp.service';
@Injectable()
export class HateOasService {
  constructor(private apiHttp: ApiHttp) {}
  public get(url: string) {
    return this.apiHttp.get(url)
      .map(res => res.json());
  }
  public put(url: string, body: Object) {
    return this.apiHttp.put(url, JSON.stringify(body))
      .map(res => res.json());
  }
  public patch(url: string, body: Object) {
    return this.apiHttp.patch(url, JSON.stringify(body))
      .map(res => res.json());
  }
  public post(url: string, body: Object) {
    return this.apiHttp.post(url, JSON.stringify(body))
      .map(res => res.json());
  }
  public delete(url: string) {
    return this.apiHttp.delete(url)
      .map(res => res.json());
  }
}
