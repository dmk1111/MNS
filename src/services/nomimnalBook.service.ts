import {Injectable} from '@angular/core';
import {ApiHttp} from './http/apiHttp.service';
@Injectable()
export class NominalBookService {
  constructor(public apiHttp: ApiHttp) {}

  getParents() {
    return this.apiHttp.get('api/nominalJobBook/parent')
      .map(res => res.json());
  }
  createParent(book) {
    return this.apiHttp.post('api/nominalJobBook/parent', book)
      .map(res => res.json());
  }
  updateParent(id, book) {
    return this.apiHttp.put('api/nominalJobBook/parent/' + id, book)
      .map(res => res.json());
  }
  deleteParent(id) {
    return this.apiHttp.delete('api/nominalJobBook/parent/' + id)
      .map(res => res.json());
  }

  createChild(parentId, body) {
    return this.apiHttp.post('api/nominalJobBook?parentId=' + parentId, body)
      .map(res => res.json());
  }
  updateChild(id, body) {
    return this.apiHttp.put('api/nominalJobBook/' + id, body)
      .map(res => res.json());
  }

  deleteChild(id) {
    return this.apiHttp.delete('api/nominalJobBook/' + id)
      .map(res => res.json());
  }
  getStaffByBook(bookId) {
    return this.apiHttp.get(`api/nominalJobBook/parent/${bookId}/staff`)
      .map(res => res.json());
  }
}
