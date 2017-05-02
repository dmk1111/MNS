import { Injectable } from '@angular/core';
import { ApiHttp } from './http/apiHttp.service';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { ResponseContentType, Headers, Http } from '@angular/http';
@Injectable()
export class FileService {
  private baseUrl = 'http://52.34.34.95:8090';

  constructor(private http: ApiHttp, private sani: DomSanitizer, private htp: Http) {
  }
  editDocName(id, name) {
    return this.http.put(`api/document/edit/name/${id}`, JSON.stringify({ name : name }));
  }
  getDocuments(staffId, index) {
    let url = `api/staff/${staffId}/`;
    switch (index) {
      case 1 :
        url = `${url}staffDoc`;
        break;
      case 2:
        url = `${url}lustration`;
        break;
      case 3:
        url = `${url}specPerevirka`;
        break;
      case 4:
        url = `${url}deklaration`;
        break;
    }
    return this.http.get(url)
      .map(res => res.json());
  }

  getDocument(staffId, docId) {
    return this.http.get(`api/staff/${staffId}/staffDoc/${docId}`);
  }

  deleteDocument(staffId, docId) {
    return this.http.delete(`api/staff/${staffId}/staffDoc/${docId}`)
      .map(res => res.json());
  }

  uploadDocument(file, staffId, index, name) {
    return Observable.create(observer => {
      let formData: FormData = new FormData(),
        xhr: XMLHttpRequest = new XMLHttpRequest();

      //Set Request auth header
      formData.append('file', file);
      formData.append('name', name);

      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            observer.next(JSON.parse(xhr.response));
          } else {
            observer.next(xhr.response);
          }
        }
      };
      let url = `${this.baseUrl}/api/staff/${staffId}/`;

      switch (index) {
        case 1 :
          url = `${url}staffDoc`;
          break;
        case 2:
          url = `${url}lustration`;
          break;
        case 3:
          url = `${url}specPerevirka`;
          break;
        case 4:
          url = `${url}deklaration`;
          break;
      }
      xhr.open('PUT', url, true);
      xhr.setRequestHeader('Authorization', 'OAuth ' + localStorage.getItem('access_token'));
      xhr.send(formData);
    });
  }

  uploadFoto(file, staffId) {
    return Observable.create(observer => {
      let formData: FormData = new FormData(),
        xhr: XMLHttpRequest = new XMLHttpRequest();

      //Set Request auth header
      formData.append('photo', file);

      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            observer.next(JSON.parse(xhr.response));
          } else {
            observer.next(xhr.response);
          }
        }
      };
      xhr.open('PUT', `${this.baseUrl}/api/staff/${staffId}/photo`, true);
      xhr.setRequestHeader('Authorization', 'OAuth ' + localStorage.getItem('access_token'));
      xhr.send(formData);
    });
  }

  getPhoto(staffId) {
    // return this.http.get('api/staff/' + staffId + '/photo');
    let headers = new Headers;
    headers.append('Content-Type', 'image/jpeg');
    headers.append('Authorization', 'OAuth ' + localStorage.getItem('access_token'));
    return this.htp.get('http://52.34.34.95:8090/api/staff/' + staffId + '/photo', {
      headers: headers,
    });
  }
}
