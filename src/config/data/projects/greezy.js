import startPage from 'assets/media/images/projects/greezy/greezy1.png'
import startPage250 from 'assets/media/images/projects/greezy/greezy1-250.jpg'
import recipePage from 'assets/media/images/projects/greezy/greezy2.png'
import recipePage250 from 'assets/media/images/projects/greezy/greezy2-250.jpg'
import groupPage from 'assets/media/images/projects/greezy/greezy3.png'
import groupPage250 from 'assets/media/images/projects/greezy/greezy3-250.jpg'
import orderPage from 'assets/media/images/projects/greezy/greezy4.jpg'
import orderPage250 from 'assets/media/images/projects/greezy/greezy4-250.jpg'
import logo from 'assets/media/images/projects/greezy/logo.png'

export default {
  ident: 'greezy',
  live: true,
  titleLocaleKey: 'navigation.routes.projects_greezy',
  skillsLocaleKeys: ['skills.nuxt', 'skills.vite', 'skills.tailwind', 'skills.sql'],
  descLocaleKey: 'projects.greezy.desc',
  routeName: 'projects_greezy',
  projectPage: {
    titleImage: logo,
    links: [
      {
        type: 'web',
        url: 'https://greezy.app',
        labelLocaleIdent: 'project.greezy.links.web',
        bgColor: '#28a79a',
      },
    ],
    descLocaleKey: 'project.greezy.desc',
    keys: [
      {
        primaryTextLocaleKey: 'project.greezy.highlights.1.1',
        secondaryTextLocaleKey: 'project.greezy.highlights.1.2',
        secondSecondaryTextLocaleKey: 'project.greezy.highlights.1.3',
      },
      {
        primaryTextLocaleKey: 'project.greezy.highlights.2.1',
        secondaryTextLocaleKey: 'project.greezy.highlights.2.2',
        secondSecondaryTextLocaleKey: 'project.greezy.highlights.2.3',
      },
      {
        primaryTextLocaleKey: 'project.greezy.highlights.3.1',
        secondaryTextLocaleKey: 'project.greezy.highlights.3.2',
        secondSecondaryTextLocaleKey: 'project.greezy.highlights.3.3',
      },
      {
        primaryTextLocaleKey: 'project.greezy.highlights.4.1',
        secondaryTextLocaleKey: 'project.greezy.highlights.4.2',
        secondSecondaryTextLocaleKey: 'project.greezy.highlights.4.3',
      },
      {
        primaryTextLocaleKey: 'project.greezy.highlights.5.1',
        secondaryTextLocaleKey: 'project.greezy.highlights.5.2',
        secondSecondaryTextLocaleKey: 'project.greezy.highlights.5.3',
      },
    ],
    gallery: [
      {
        thumb: startPage250,
        full: startPage,
        title: false,
        description: false,
      },
      {
        thumb: recipePage250,
        full: recipePage,
        title: false,
        description: false,
      },
      {
        thumb: groupPage250,
        full: groupPage,
        title: false,
        description: false,
      },
      {
        thumb: orderPage250,
        full: orderPage,
        title: false,
        description: false,
      }],
  },
}
