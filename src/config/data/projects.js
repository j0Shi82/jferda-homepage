import logoEdom from 'assets/media/images/projects/edom/logo.svg';
import gallery1Edom from 'assets/media/images/projects/edom/gallery1.jpg';
import gallery1Edom250 from 'assets/media/images/projects/edom/gallery1-250.jpg';
import gallery2Edom from 'assets/media/images/projects/edom/gallery2.jpg';
import gallery2Edom250 from 'assets/media/images/projects/edom/gallery2-250.jpg';
import gallery3Edom from 'assets/media/images/projects/edom/gallery3.jpg';
import gallery3Edom250 from 'assets/media/images/projects/edom/gallery3-250.jpg';
import gallery4Edom from 'assets/media/images/projects/edom/gallery4.jpg';
import gallery4Edom250 from 'assets/media/images/projects/edom/gallery4-250.jpg';
import gallery5Edom from 'assets/media/images/projects/edom/gallery5.jpg';
import gallery5Edom250 from 'assets/media/images/projects/edom/gallery5-250.jpg';

import nwoun from 'config/data/projects/nwoun';
import neighboring from 'config/data/projects/neighboring';

export default [
  nwoun,
  {
    ident: 'edom',
    titleLocaleKey: 'navigation.projects.edom',
    skillsLocaleKeys: ['skills.vue', 'skills.laravel', 'skills.docker', 'skills.bootstrap', 'skills.node'],
    descLocaleKey: 'projects.edom.desc',
    routeName: 'projects_edom',
    projectPage: {
      titleImage: logoEdom,
      links: [
        {
          type: 'web',
          url: 'https://www.e-domizil.de',
          labelLocaleIdent: 'project.edom.links.edom',
          bgColor: '#f97c1e',
        },
      ],
      descLocaleKey: 'project.edom.desc',
      keys: [
        {
          primaryTextLocaleKey: 'project.edom.highlights.1.1',
          secondaryTextLocaleKey: 'project.edom.highlights.1.2',
          secondSecondaryTextLocaleKey: 'project.edom.highlights.1.3',
        },
        {
          primaryTextLocaleKey: 'project.edom.highlights.2.1',
          secondaryTextLocaleKey: 'project.edom.highlights.2.2',
          secondSecondaryTextLocaleKey: 'project.edom.highlights.2.3',
        },
        {
          primaryTextLocaleKey: 'project.edom.highlights.3.1',
          secondaryTextLocaleKey: 'project.edom.highlights.3.2',
          secondSecondaryTextLocaleKey: 'project.edom.highlights.3.3',
        },
        {
          primaryTextLocaleKey: 'project.edom.highlights.4.1',
          secondaryTextLocaleKey: 'project.edom.highlights.4.2',
          secondSecondaryTextLocaleKey: 'project.edom.highlights.4.3',
        },
        {
          primaryTextLocaleKey: 'project.edom.highlights.5.1',
          secondaryTextLocaleKey: 'project.edom.highlights.5.2',
          secondSecondaryTextLocaleKey: 'project.edom.highlights.5.3',
        },
      ],
      gallery: [
        {
          thumb: gallery1Edom250,
          full: gallery1Edom,
          title: false,
          description: false,
        },
        {
          thumb: gallery2Edom250,
          full: gallery2Edom,
          title: false,
          description: false,
        },
        {
          thumb: gallery3Edom250,
          full: gallery3Edom,
          title: false,
          description: false,
        },
        {
          thumb: gallery4Edom250,
          full: gallery4Edom,
          title: false,
          description: false,
        },
        {
          thumb: gallery5Edom250,
          full: gallery5Edom,
          title: false,
          description: false,
        },
      ],
    },
  },
  neighboring,
];
