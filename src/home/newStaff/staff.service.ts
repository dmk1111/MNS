import { Injectable } from '@angular/core';
import { ApiHttp } from '../../services/http/apiHttp.service';
import { HateOasService } from '../../common/hateoaes.service';
import { StaffPerson } from './staff.models';

@Injectable()
export class StaffService {
  constructor(private hateoas: HateOasService) {}
  public getFirstStaff() {
    return this.hateoas.get('api/stuffs/1')
      .map(res => new StaffPerson(res));
  }
}
