// store values we need
import { menuAboutIcon, menuSkillsIcon } from 'utils/imports/config';

export default [
  {
    icon: menuAboutIcon,
    textLocaleIdent: 'navigation.about',
    route: 'about',
  },
  {
    icon: menuSkillsIcon,
    textLocaleIdent: 'navigation.projects.headline',
    route: 'projects',
  },
];
