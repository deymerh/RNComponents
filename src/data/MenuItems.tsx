import { Menuitem } from '../interfaces/appInterfaces';

export const menuItems: Menuitem[] = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animation101Screen'
  },
  {
    name: 'Animation 102',
    icon: 'checkbox-outline',
    component: 'Animation102Screen'
  },
  {
    name: 'SwitchScreen',
    icon: 'toggle-outline',
    component: 'SwitchScreen'
  },
  {
    name: 'AlertScreen',
    icon: 'alert-outline',
    component: 'AlertScreen'
  },
  {
    name: 'InputsScreen',
    icon: 'document-text-outline',
    component: 'InputsScreen'
  },
  {
    name: 'PullToRefreshScreen',
    icon: 'refresh-outline',
    component: 'PullToRefreshScreen'
  },
  {
    name: 'CustomSection',
    icon: 'list-circle-outline',
    component: 'CustomSectionListScreen'
  },
  {
    name: 'InfiniteScroll',
    icon: 'download-outline',
    component: 'InfiniteScrollScreen'
  },
  {
    name: 'Slides',
    icon: 'flower-outline',
    component: 'SlidesScreen'
  },
]