import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Cliente', url: '/cliente', icon: 'people' },
    { title: 'Produto', url: '/produto', icon: 'bag-handle' },

  ];
  constructor() {}
}
