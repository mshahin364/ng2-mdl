// Import from @angular
import { Component, ViewEncapsulation } from '@angular/core';
require('material-design-lite/dist/material');
require('mdl-select-component/mdl-selectfield.min');

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  template: require('./app.template.html'),
  styles: [
    `
    /* Scrolbar */
    .mdl-data-table {
      width: 100% !important;
    }
    *::-webkit-scrollbar {
      border: none;
      width: 6px;
    }
    *::-webkit-scrollbar-track-piece {
      background: rgba(0, 0, 0, 0.1);
      border-radius: 6px;
    }
    *::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.5);
      border-radius: 6px;
      height: 6px;
    }
    `,
    require('normalize.css/normalize.css'),
    require('material-design-lite/dist/material.min.css'),
    require('mdl-select-component/mdl-selectfield.min.css')
  ]
})
export class App {
  links: Array<Object> = [
    { title: 'Introduction', routerLink: ['/'] },
    { title: 'Configuration',routerLink: ['/mdl-service'] },
    { title: 'Upgrading',    routerLink: ['/mdl-upgrade'] },
    { title: 'Text Fields',  routerLink: ['/mdl-text-field'] },
    { title: 'Select',       routerLink: ['/mdl-select'] },
    { title: 'Check Box',    routerLink: ['/mdl-check-box'] },
    { title: 'Radio Button', routerLink: ['/mdl-radio'] },
    { title: 'Switch',       routerLink: ['/mdl-switch'] },
    { title: 'Button',       routerLink: ['/mdl-button'] },
    { title: 'Progress',     routerLink: ['/mdl-progress'] },
    { title: 'Spinner',      routerLink: ['/mdl-spinner'] },
    { title: 'Layout',       routerLink: ['/mdl-layout'] }
  ];
}