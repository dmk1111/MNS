import {Injectable} from '@angular/core';
import {ApiHttp} from './http/apiHttp.service';
@Injectable()

export class PositionService {
  constructor(public apiHttp: ApiHttp) {}

  getPositions() {
    return this.apiHttp.get('api/position')
      .map(res => res.json());
  }
  getPosition(id) {
    return this.apiHttp.get('api/position/' + id)
      .map(res => res.json());
  }
  createPosition(position) {
    return this.apiHttp.post('api/position', position)
      .map(res => res.json());
  }
  savePosition(position) {
    return this.apiHttp.put('api/position/' + position.id, position)
      .map(res => res.json());
  }
  deletePosition(id) {
    return this.apiHttp.delete('api/position/' + id)
      .map(res => res.json());
  }
}
