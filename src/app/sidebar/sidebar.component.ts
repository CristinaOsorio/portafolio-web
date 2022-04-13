import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  links: Array<LinkModel> = [
    {
      link: 'mailto:macry_08@hotmail.com',
      icon: '<i class="uil uil uil-at"></i>',
    },
    {
      link: 'https://github.com/CristinaOsorio',
      icon: '<i class="uil uil-github-alt"></i>',
    },
    {
      link: 'https://www.linkedin.com/in/maria-cristina-osorio-perez-b205a5187/',
      icon: '<i class="uil uil-linkedin"></i>',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

interface LinkModel {
  link: string;
  icon: string;
}
