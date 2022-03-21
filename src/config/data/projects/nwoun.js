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
import toolbaseAuctionScreenshot from 'assets/media/images/projects/nwoun/toolbase-auctionchart.jpg';
import toolbaseAuctionScreenshot250 from 'assets/media/images/projects/nwoun/toolbase-auctionchart-250.jpg';
import toolbaseCharsimScreenshot from 'assets/media/images/projects/nwoun/toolbase-charsim.jpg';
import toolbaseCharsimScreenshot250 from 'assets/media/images/projects/nwoun/toolbase-charsim-250.jpg';
import toolbaseCharsimGearScreenshot from 'assets/media/images/projects/nwoun/toolbase-charsim-choosegear.jpg';
import toolbaseCharsimGearScreenshot250 from 'assets/media/images/projects/nwoun/toolbase-charsim-choosegear-250.jpg';
import toolbaseCharsimHeaderScreenshot from 'assets/media/images/projects/nwoun/toolbase-charsim-header.jpg';
import toolbaseCharsimHeaderScreenshot250 from 'assets/media/images/projects/nwoun/toolbase-charsim-header-250.jpg';
import toolbaseItemdbScreenshot from 'assets/media/images/projects/nwoun/toolbase-itemdb.jpg';
import toolbaseItemdbScreenshot250 from 'assets/media/images/projects/nwoun/toolbase-itemdb-250.jpg';
import analyticsScreenshot from 'assets/media/images/projects/nwoun/analytics.jpg';
import analyticsScreenshot250 from 'assets/media/images/projects/nwoun/analytics-250.jpg';
import commentsScreenshot from 'assets/media/images/projects/nwoun/comments.jpg';
import commentsScreenshot250 from 'assets/media/images/projects/nwoun/comments-250.jpg';

export default {
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
        url: 'https://www.nwo-uncensored.com',
        labelLocaleIdent: 'project.nwoun.links.forum',
        bgColor: '#b51208',
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
        thumb: analyticsScreenshot250,
        full: analyticsScreenshot,
        title: false,
        description: false,
      },
      {
        thumb: commentsScreenshot250,
        full: commentsScreenshot,
        title: false,
        description: false,
      },
      {
        thumb: toolbaseAuctionScreenshot250,
        full: toolbaseAuctionScreenshot,
        title: false,
        description: false,
      },
      {
        thumb: toolbaseCharsimHeaderScreenshot250,
        full: toolbaseCharsimHeaderScreenshot,
        title: false,
        description: false,
      },
      {
        thumb: toolbaseCharsimScreenshot250,
        full: toolbaseCharsimScreenshot,
        title: false,
        description: false,
      },
      {
        thumb: toolbaseCharsimGearScreenshot250,
        full: toolbaseCharsimGearScreenshot,
        title: false,
        description: false,
      },
      {
        thumb: toolbaseItemdbScreenshot250,
        full: toolbaseItemdbScreenshot,
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
};
