import { Injectable } from '@angular/core';
import { ApiHttp } from './http/apiHttp.service';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { ResponseContentType, Headers } from '@angular/http';
@Injectable()
export class FileService {
  private baseUrl = 'http://52.34.34.95:8090';

  constructor(private http: ApiHttp, private sani: DomSanitizer) {
  }

  getDocuments(staffId) {
    return this.http.get(`api/staff/${staffId}/staffDoc`)
      .map(res => res.json());
  }

  getDocument(staffId, docId) {
    return this.http.get(`api/staff/${staffId}/staffDoc/${docId}`);
  }

  deleteDocument(staffId, id) {
  }

  uploadDocument(file, staffId) {
    return Observable.create(observer => {
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
    return this.http.get('api/staff/' + staffId + '/photo', {
      headers: headers,
      responseType: ResponseContentType.Blob
    }).map(res => {
      return new Blob([res['_body']], {
        type: res.headers.get('Content-Type')
      });
    }).map(blob => {
      var urlCreator = window.URL;
      return this.sani.bypassSecurityTrustUrl(urlCreator.createObjectURL(blob));
    });
  }
}
