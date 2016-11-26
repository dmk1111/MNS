import {Injectable} from "@angular/core";
import {ApiHttp} from "./http/apiHttp.service";

@Injectable()
export class StaffPhotoService {
  constructor(public apiHttp: ApiHttp){}
  postStaffPhoto(id, body) {
    return this.apiHttp.post('api/staff' + id + '/staffphoto', body)
      .map(res => res.json());
  }

  deleteStaffPhoto(id) {
    return this.apiHttp.delete('api/staff' + id + '/staffphoto')
      .map(res => res.json());
  }

  getStaffPhoto(id) {
    return this.apiHttp.get('api/staff' + id + '/staffphoto')
      .map(res => res.json());
  }
}
