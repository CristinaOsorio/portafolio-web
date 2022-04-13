import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private readonly url = 'https://api.github.com/users/CristinaOsorio';

  constructor(private httClient: HttpClient) {}

  loadRepos = (): Observable<any> =>
    this.httClient
      .get(`${this.url}/repos?type=owner`)
      .pipe(map((data: any) => data.filter((value: any) => !value.fork)));
}
