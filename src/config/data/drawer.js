import {
  menuHomeIcon,
  menuAboutIcon,
  menuResumeIcon,
  menuSkillsIcon,
} from 'utils/imports/config';
import projectList from 'config/data/projects';

const generalMenuItems = [
  { routeName: 'home', icon: menuHomeIcon },
  { routeName: 'about', icon: menuAboutIcon },
  { routeName: 'resume', icon: menuResumeIcon },
  { routeName: 'skills', icon: menuSkillsIcon },
];

const projectMenuItems = projectList.map((project) => ({
  routeName: project.routeName,
  localeIdent: project.ident,
}));

export { generalMenuItems, projectMenuItems };
