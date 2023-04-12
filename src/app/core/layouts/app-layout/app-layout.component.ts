import { IonicModule } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, RouterLinkActive],
})
export class AppLayoutComponent implements OnInit {
  public appPages = [
    { title: 'Inbox', url: '/tab1', icon: 'mail' },
    { title: 'Outbox', url: '/tab2', icon: 'paper-plane' },
    { title: 'Favorites', url: '/tab3', icon: 'heart' },
    { title: 'Archived', url: '/tab4', icon: 'archive' },
    { title: 'Trash', url: '/tab1', icon: 'trash' },
    { title: 'Spam', url: '/tab2', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}

  ngOnInit() {}
}
