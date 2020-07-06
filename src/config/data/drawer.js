import {
  menuHomeIcon,
  menuAboutIcon,
  menuResumeIcon,
  menuSkillsIcon,
} from 'utils/imports/config';

const generalMenuItems = [
  { routeName: 'home', icon: menuHomeIcon },
  { routeName: 'about', icon: menuAboutIcon },
  { routeName: 'resume', icon: menuResumeIcon },
  { routeName: 'skills', icon: menuSkillsIcon },
];

const projectMenuItems = [
  {
    routeName: 'projects_mmb',
    localeIdent: 'mmb',
  },
  {
    routeName: 'projects_nwoun',
    localeIdent: 'nwoun',
  },
  {
    routeName: 'projects_lwm',
    localeIdent: 'lwm',
  },
  {
    routeName: 'projects_edom',
    localeIdent: 'edom',
  },
];

export { generalMenuItems, projectMenuItems };
