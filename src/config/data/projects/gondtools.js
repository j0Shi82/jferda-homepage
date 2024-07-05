import screenInfohub250 from 'assets/media/images/projects/gondtools/gond1-250.jpg'
import screenInfohub from 'assets/media/images/projects/gondtools/gond1.jpg'
import screenDevtracker250 from 'assets/media/images/projects/gondtools/gond2-250.jpg'
import screenDevtracker from 'assets/media/images/projects/gondtools/gond2.jpg'
import screenAuctiondata250 from 'assets/media/images/projects/gondtools/gond3-250.jpg'
import screenAuctiondata from 'assets/media/images/projects/gondtools/gond3.jpg'
import screenMobileInfohub250 from 'assets/media/images/projects/gondtools/gond4-250.jpg'
import screenMobileInfohub from 'assets/media/images/projects/gondtools/gond4.jpg'
import screenMobileDevtrackerWithMenu250 from 'assets/media/images/projects/gondtools/gond5-250.jpg'
import screenMobileDevtrackerWithMenu from 'assets/media/images/projects/gondtools/gond5.jpg'
import logo250 from 'assets/media/images/projects/gondtools/logo-250.png'
import logoSmall250 from 'assets/media/images/projects/gondtools/logo-small-250.png'
import logoSmall from 'assets/media/images/projects/gondtools/logo-small.png'
import logo from 'assets/media/images/projects/gondtools/logo.png'

export default {
  ident: 'nwgondtools',
  live: true,
  featured: true,
  titleLocaleKey: 'navigation.routes.projects_nwgondtools',
  skillsLocaleKeys: ['skills.svelte', 'skills.tailwind', 'skills.webpack', 'skills.php', 'skills.sql'],
  descLocaleKey: 'projects.gondtools.desc',
  routeName: 'projects_nwgondtools',
  projectPage: {
    titleImage: logo,
    links: [
      {
        type: 'web',
        url: 'https://www.gond.tools',
        labelLocaleIdent: 'project.gondtools.links.web',
        bgColor: '#b51208',
      },
      {
        type: 'github',
        url: 'https://github.com/j0Shi82/nwoun-gond-tools',
        labelLocaleIdent: 'project.gondtools.links.repo',
        bgColor: '#b51208',
      },
    ],
    descLocaleKey: 'project.gondtools.desc',
    keys: [
      {
        primaryTextLocaleKey: 'project.gondtools.highlights.1.1',
        secondaryTextLocaleKey: 'project.gondtools.highlights.1.2',
        secondSecondaryTextLocaleKey: 'project.gondtools.highlights.1.3',
      },
      {
        primaryTextLocaleKey: 'project.gondtools.highlights.2.1',
        secondaryTextLocaleKey: 'project.gondtools.highlights.2.2',
        secondSecondaryTextLocaleKey: 'project.gondtools.highlights.2.3',
      },
      {
        primaryTextLocaleKey: 'project.gondtools.highlights.3.1',
        secondaryTextLocaleKey: 'project.gondtools.highlights.3.2',
        secondSecondaryTextLocaleKey: 'project.gondtools.highlights.3.3',
      },
      {
        primaryTextLocaleKey: 'project.gondtools.highlights.4.1',
        secondaryTextLocaleKey: 'project.gondtools.highlights.4.2',
        secondSecondaryTextLocaleKey: 'project.gondtools.highlights.4.3',
      },
      {
        primaryTextLocaleKey: 'project.gondtools.highlights.5.1',
        secondaryTextLocaleKey: 'project.gondtools.highlights.5.2',
        secondSecondaryTextLocaleKey: 'project.gondtools.highlights.5.3',
      },
    ],
    gallery: [
      {
        thumb: logo250,
        full: logo,
        title: false,
        description: false,
      },
      {
        thumb: logoSmall250,
        full: logoSmall,
        title: false,
        description: false,
      },
      {
        thumb: screenInfohub250,
        full: screenInfohub,
        title: false,
        description: false,
      },
      {
        thumb: screenDevtracker250,
        full: screenDevtracker,
        title: false,
        description: false,
      },
      {
        thumb: screenAuctiondata250,
        full: screenAuctiondata,
        title: false,
        description: false,
      },
      {
        thumb: screenMobileInfohub250,
        full: screenMobileInfohub,
        title: false,
        description: false,
      },
      {
        thumb: screenMobileDevtrackerWithMenu250,
        full: screenMobileDevtrackerWithMenu,
        title: false,
        description: false,
      },
    ],
  },
}
