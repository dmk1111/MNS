import { HateOasService } from '../../common/hateoaes.service';
import { StaffPersonBackI } from './staff.interfaces';
export class StaffList {
    public staffList: Array<StaffPerson>;
}

export class StaffPerson {
  url: string;
  firstName: string;
  lastName: string;
  fatherName: string;
  birthDay: string;
  identity: string;
  nationality: string;
  sex: string;
  personalFileNumber: number;
  photo: any;
  stuffCategory: string;
  nomenclature: string;
  jobType: string;
  phones: Phones;
  gradeRankCategory: GradeRankCategory;
  // _links: StaffLinks;
  static checkIsNull(v: any): any {
    return v ? v : '';
  }
  constructor(staff: StaffPersonBackI) {
    this.firstName = StaffPerson.checkIsNull(staff.firstName);
    this.lastName = StaffPerson.checkIsNull(staff.lastName);
    this.fatherName = StaffPerson.checkIsNull(staff.fatherName);
    this.birthDay = StaffPerson.checkIsNull(staff.birthDay);
    this.identity = StaffPerson.checkIsNull(staff.identity);
    this.nationality = StaffPerson.checkIsNull(staff.nationality);
    this.sex = StaffPerson.checkIsNull(staff.sex);
    this.personalFileNumber = StaffPerson.checkIsNull(staff.personalFileNumber);
    this.photo = StaffPerson.checkIsNull(staff.photo);
    this.stuffCategory = StaffPerson.checkIsNull(staff.stuffCategory);
    this.nomenclature = StaffPerson.checkIsNull(staff.nomenclature);
    this.jobType = StaffPerson.checkIsNull(staff.jobType);
    //parse links
    // this._links = new StaffLinks(staff._links);
    this.url = staff._links.self.href;
    this.phones = new Phones(staff._links.phones.href);
    this.gradeRankCategory = new GradeRankCategory(staff._links.gradeRankCategory.href);
  }
}

export class Phones {
  phones: Array<Phone>;
  url: string;
  constructor(url: string) {
    this.url = url;
  }
}
export class Phone {
  phoneType: string;
  phoneNumber: string;
}

export class GradeRankCategory {
  url: string;
  constructor(url: any) {
    this.url = url;
  }
}
