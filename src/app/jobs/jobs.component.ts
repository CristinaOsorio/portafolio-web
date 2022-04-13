import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
})
export class JobsComponent implements OnInit {
  repos: Observable<any[]> = of([]);
  config: any;

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.repos = this.githubService.loadRepos();
  }
}
