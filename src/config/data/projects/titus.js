import logo from 'assets/media/images/projects/titus/logo.png'
import screen2250 from 'assets/media/images/projects/titus/titus-screenshot-2-250.png'
import screen2 from 'assets/media/images/projects/titus/titus-screenshot-2.png'
import screen1250 from 'assets/media/images/projects/titus/titus-screenshot-250.png'
import screen3250 from 'assets/media/images/projects/titus/titus-screenshot-3-250.png'
import screen3 from 'assets/media/images/projects/titus/titus-screenshot-3.png'
import screen1 from 'assets/media/images/projects/titus/titus-screenshot.png'
import vic2250 from 'assets/media/images/projects/titus/victorinox-2-250.png'
import vic2 from 'assets/media/images/projects/titus/victorinox-2.png'
import vic1250 from 'assets/media/images/projects/titus/victorinox-250.png'
import vic1 from 'assets/media/images/projects/titus/victorinox.png'

export default {
  ident: 'titus',
  live: true,
  featured: true,
  titleLocaleKey: 'navigation.routes.projects_titus',
  skillsLocaleKeys: ['skills.js', 'skills.php', 'skills.shopify', 'skills.css', 'skills.html'],
  descLocaleKey: 'projects.titus.desc',
  routeName: 'projects_titus',
  projectPage: {
    titleImage: logo,
    links: [
      {
        type: 'web',
        url: 'https://www.titus.de',
        labelLocaleIdent: 'project.titus.links.site',
        bgColor: '#e21617',
      },
    ],
    descLocaleKey: 'project.titus.desc',
    keys: [
      {
        primaryTextLocaleKey: 'project.titus.highlights.1.1',
        secondaryTextLocaleKey: 'project.titus.highlights.1.2',
        secondSecondaryTextLocaleKey: 'project.titus.highlights.1.3',
      },
      {
        primaryTextLocaleKey: 'project.titus.highlights.2.1',
        secondaryTextLocaleKey: 'project.titus.highlights.2.2',
        secondSecondaryTextLocaleKey: 'project.titus.highlights.2.3',
      },
      {
        primaryTextLocaleKey: 'project.titus.highlights.3.1',
        secondaryTextLocaleKey: 'project.titus.highlights.3.2',
        secondSecondaryTextLocaleKey: 'project.titus.highlights.3.3',
      },
      {
        primaryTextLocaleKey: 'project.titus.highlights.4.1',
        secondaryTextLocaleKey: 'project.titus.highlights.4.2',
        secondSecondaryTextLocaleKey: 'project.titus.highlights.4.3',
      },
      {
        primaryTextLocaleKey: 'project.titus.highlights.5.1',
        secondaryTextLocaleKey: 'project.titus.highlights.5.2',
        secondSecondaryTextLocaleKey: 'project.titus.highlights.5.3',
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
        thumb: vic1250,
        full: vic1,
        title: false,
        description: false,
      },
      {
        thumb: vic2250,
        full: vic2,
        title: false,
        description: false,
      },
    ],
  },
}
