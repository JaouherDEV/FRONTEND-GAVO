import {Injectable} from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}

const NavigationItems = [
  {
    id: 'navigation',
    title: 'Navigation',
    type: 'group',
    icon: 'feather icon-monitor',
    children: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'item',
        url: '/dashboard/default',
        classes: 'nav-item',
        icon: 'feather icon-home'
      },
      
    ]
  },
  {
    id: 'ui-element',
    title: 'vol et hotel',
    type: 'group',
    icon: 'feather icon-layers',
    children: [
      {
        id: 'basic',
        title: 'vol',
        type: 'collapse',
        icon: 'feather icon-box',
        children: [
          {
            id: 'recherche-vol',
            title: 'Recherche vol',
            type: 'item',
            url: '/basic/recherche-vol'
          },
          {
            id: 'button',
            title: 'liste de vol',
            type: 'item',
            url: '/basic/button'
          },
          {
            id: 'badges',
            title: 'Détail du vol',
            type: 'item',
            url: '/basic/badges'
          }
         
        ]
      },
      {
        id: 'basicc',
        title: 'hotel',
        type: 'collapse',
        icon: 'feather icon-box',
        children: [
          {
            id: 'liste-hotel',
            title: 'liste hotel',
            type: 'item',
            url: '/basic/liste-hotel'
          },
          {
            id: 'Recherche-hotel',
            title: 'Recherche hotel',
            type: 'item',
            url: '/basic/collapse'
          }
          
        ]
      }
    ]
  }
];

@Injectable()
export class NavigationItem {
  public get() {
    return NavigationItems;
  }
}
