import logo from 'assets/media/images/projects/neighboring/cropped-neighboring_logo_quer-1-2.png';
import screen1 from 'assets/media/images/projects/neighboring/screenshot1.png';
import screen2 from 'assets/media/images/projects/neighboring/screenshot2.png';
import screen3 from 'assets/media/images/projects/neighboring/screenshot3.png';
import screen4 from 'assets/media/images/projects/neighboring/screenshot4.png';
import screen5 from 'assets/media/images/projects/neighboring/screenshot5.png';
import screen1250 from 'assets/media/images/projects/neighboring/screenshot1-250.png';
import screen2250 from 'assets/media/images/projects/neighboring/screenshot2-250.png';
import screen3250 from 'assets/media/images/projects/neighboring/screenshot3-250.png';
import screen4250 from 'assets/media/images/projects/neighboring/screenshot4-250.png';
import screen5250 from 'assets/media/images/projects/neighboring/screenshot5-250.png';

export default {
  ident: 'neighboring',
  titleLocaleKey: 'navigation.routes.projects_neighboring',
  skillsLocaleKeys: ['skills.wp', 'skills.php', 'skills.css'],
  descLocaleKey: 'projects.neighboring.desc',
  routeName: 'projects_neighboring',
  projectPage: {
    titleImage: logo,
    links: [
      {
        type: 'web',
        url: 'https://neighboringsatellites.ruhr/',
        labelLocaleIdent: 'project.neighboring.links.site',
        bgColor: '#b1c903',
        color: '#000',
        colorClass: 'dark',
      },
    ],
    descLocaleKey: 'project.neighboring.desc',
    keys: [
      {
        primaryTextLocaleKey: 'project.neighboring.highlights.1.1',
        secondaryTextLocaleKey: 'project.neighboring.highlights.1.2',
        secondSecondaryTextLocaleKey: 'project.neighboring.highlights.1.3',
      },
      {
        primaryTextLocaleKey: 'project.neighboring.highlights.2.1',
        secondaryTextLocaleKey: 'project.neighboring.highlights.2.2',
        secondSecondaryTextLocaleKey: 'project.neighboring.highlights.2.3',
      },
      {
        primaryTextLocaleKey: 'project.neighboring.highlights.3.1',
        secondaryTextLocaleKey: 'project.neighboring.highlights.3.2',
        secondSecondaryTextLocaleKey: 'project.neighboring.highlights.3.3',
      },
      {
        primaryTextLocaleKey: 'project.neighboring.highlights.4.1',
        secondaryTextLocaleKey: 'project.neighboring.highlights.4.2',
        secondSecondaryTextLocaleKey: 'project.neighboring.highlights.4.3',
      },
      {
        primaryTextLocaleKey: 'project.neighboring.highlights.5.1',
        secondaryTextLocaleKey: 'project.neighboring.highlights.5.2',
        secondSecondaryTextLocaleKey: 'project.neighboring.highlights.5.3',
      },
    ],
    gallery: [
      {
        thumb: screen1250,
        full: screen1,
        title: false,
        description: false,
      },
      {
        thumb: screen2250,
        full: screen2,
        title: false,
        description: false,
      },
      {
        thumb: screen3250,
        full: screen3,
        title: false,
        description: false,
      },
      {
        thumb: screen4250,
        full: screen4,
        title: false,
        description: false,
      },
      {
        thumb: screen5250,
        full: screen5,
        title: false,
        description: false,
      },
    ],
  },
};
