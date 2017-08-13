export interface StaffPersonBackI {
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
  _links: StaffLinks;
}

interface StaffLinks {
  self: Link;
  gradeRankCategory: Link;
  phones: Link;
}

interface Link {
  href: string;
}
