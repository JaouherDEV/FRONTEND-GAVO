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
        id: 'VOLS',
        title: 'Gestion de vol',
        type: 'collapse',
        icon: 'feather icon-box',
        children: [
          {
            id: 'recherche-vol',
            title: 'Ajouter vols',
            type: 'item',
            url: '/VOLS/Ajouter-vols'
          },
          {
            id: 'button',
            title: 'liste de vol',
            type: 'item',
            url: '/VOLS/button'
          },
          {
            id: 'badges',
            title: 'Détail du vol',
            type: 'item',
            url: '/VOLS/badges'
          }
         
        ]
      },
      {
        id: 'Utilisateur',
        title: 'Gestion Utilisateur ',
        type: 'collapse',
        icon: 'feather icon-box',
        children: [
          {
            id: 'Utilisateur',
            title: 'Utilisateur',
            type: 'item',
            url: '/GestionUser/User'
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
