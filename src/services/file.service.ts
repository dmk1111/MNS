import { Injectable } from '@angular/core';
import { ApiHttp } from './http/apiHttp.service';
import { Observable } from 'rxjs';
@Injectable()
export class FileService {
  private baseUrl = 'http://52.34.34.95:8090';
  constructor(private http: ApiHttp) {}
  getDocuments(staffId) {
    return this.http.get(`api/staff/${staffId}/staffDoc`)
      .map(res => res.json());
  }
  deleteDocument(staffId, id) {
    // TODO add delete api
  }
  uploadDocument(file, staffId) {
    return Observable.create(observer => {
      debugger
      let formData: FormData = new FormData(),
        xhr: XMLHttpRequest = new XMLHttpRequest();

      //Set Request auth header
      formData.append('file', file);

      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            observer.next(JSON.parse(xhr.response));
          } else {
            observer.next(xhr.response);
          }
        }
      };
      xhr.open('PUT', `${this.baseUrl}/api/staff/${staffId}/staffDoc`, true);
      xhr.setRequestHeader('Authorization', 'OAuth ' + localStorage.getItem('access_token'));
      xhr.send(formData);
    });
  }
}
