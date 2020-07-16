import logoUn from 'assets/media/images/projects/nwoun/logo-uncensored.png';
import logoUn1000 from 'assets/media/images/projects/nwoun/logo-uncensored-1000.png';
import logoUn250 from 'assets/media/images/projects/nwoun/logo-uncensored-250.png';
import logoRavenloft from 'assets/media/images/projects/nwoun/uncensored-ravenloft.png';
import logoRavenloft250 from 'assets/media/images/projects/nwoun/uncensored-ravenloft-250.png';
import blogScreenshot from 'assets/media/images/projects/nwoun/logo-un.png';
import blogScreenshot250 from 'assets/media/images/projects/nwoun/logo-un-250.jpg';
import logoKnow from 'assets/media/images/projects/nwoun/uncensored-knox.png';
import logoKnow250 from 'assets/media/images/projects/nwoun/uncensored-knox-250.png';
import bannerM13 from 'assets/media/images/projects/nwoun/uncensored-Mod13-Omu-Datamining.jpg';
import bannerM13250 from 'assets/media/images/projects/nwoun/uncensored-Mod13-Omu-Datamining-250.jpg';
import bannerM14 from 'assets/media/images/projects/nwoun/uncensored-Mod14-Story-Walkthrough.jpg';
import bannerM14250 from 'assets/media/images/projects/nwoun/uncensored-Mod14-Story-Walkthrough-250.jpg';
import bannerM15 from 'assets/media/images/projects/nwoun/uncensored-Mod15-Story-Campaign.jpg';
import bannerM15250 from 'assets/media/images/projects/nwoun/uncensored-Mod15-Story-Campaign-250.jpg';
import bannerLaunch from 'assets/media/images/projects/nwoun/uncensored-toa-launch-banner.png';
import bannerLaunch250 from 'assets/media/images/projects/nwoun/uncensored-toa-launch-banner-250.jpg';
import logoToolbase from 'assets/media/images/projects/nwoun/uncensored-toolbase.png';
import logoToolbase250 from 'assets/media/images/projects/nwoun/uncensored-toolbase-250.png';
import bannerToolbase from 'assets/media/images/projects/nwoun/uncensored-Toolbase-Currency-Converter.jpg';
import bannerToolbase250 from 'assets/media/images/projects/nwoun/uncensored-Toolbase-Currency-Converter-250.jpg';

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

export default [
  {
    ident: 'nwoun',
    titleLocaleKey: 'navigation.projects.nwoun',
    skillsLocaleKeys: ['skills.js', 'skills.php', 'skills.wp', 'skills.sql'],
    descLocaleKey: 'projects.nwoun.desc',
    routeName: 'projects_nwoun',
    projectPage: {
      titleImage: logoUn1000,
      links: [
        {
          type: 'web',
          url: 'https://blog.nwo-uncensored.com',
          labelLocaleIdent: 'project.nwoun.links.blog',
        },
        {
          type: 'web',
          url: 'https://forum.nwo-undensored.com',
          labelLocaleIdent: 'project.nwoun.links.forum',
        },
      ],
      descLocaleKey: 'project.nwoun.desc',
      keys: [
        {
          primaryTextLocaleKey: 'project.nwoun.highlights.1.1',
          secondaryTextLocaleKey: 'project.nwoun.highlights.1.2',
          secondSecondaryTextLocaleKey: 'project.nwoun.highlights.1.3',
        },
        {
          primaryTextLocaleKey: 'project.nwoun.highlights.2.1',
          secondaryTextLocaleKey: 'project.nwoun.highlights.2.2',
          secondSecondaryTextLocaleKey: 'project.nwoun.highlights.2.3',
        },
        {
          primaryTextLocaleKey: 'project.nwoun.highlights.3.1',
          secondaryTextLocaleKey: 'project.nwoun.highlights.3.2',
          secondSecondaryTextLocaleKey: 'project.nwoun.highlights.3.3',
        },
        {
          primaryTextLocaleKey: 'project.nwoun.highlights.4.1',
          secondaryTextLocaleKey: 'project.nwoun.highlights.4.2',
          secondSecondaryTextLocaleKey: 'project.nwoun.highlights.4.3',
        },
        {
          primaryTextLocaleKey: 'project.nwoun.highlights.5.1',
          secondaryTextLocaleKey: 'project.nwoun.highlights.5.2',
          secondSecondaryTextLocaleKey: 'project.nwoun.highlights.5.3',
        },
      ],
      gallery: [
        {
          thumb: logoUn250,
          full: logoUn,
          title: false,
          description: false,
        },
        {
          thumb: blogScreenshot250,
          full: blogScreenshot,
          title: false,
          description: false,
        },
        {
          thumb: logoRavenloft250,
          full: logoRavenloft,
          title: false,
          description: false,
        },
        {
          thumb: logoKnow250,
          full: logoKnow,
          title: false,
          description: false,
        },
        {
          thumb: bannerM13250,
          full: bannerM13,
          title: false,
          description: false,
        },
        {
          thumb: bannerM14250,
          full: bannerM14,
          title: false,
          description: false,
        },
        {
          thumb: bannerM15250,
          full: bannerM15,
          title: false,
          description: false,
        },
        {
          thumb: bannerLaunch250,
          full: bannerLaunch,
          title: false,
          description: false,
        },
        {
          thumb: logoToolbase250,
          full: logoToolbase,
          title: false,
          description: false,
        },
        {
          thumb: bannerToolbase250,
          full: bannerToolbase,
          title: false,
          description: false,
        },
      ],
    },
  },
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
        },
        {
          type: 'web',
          url: 'https://www.tourist-online.de',
          labelLocaleIdent: 'project.edom.links.to',
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
];
