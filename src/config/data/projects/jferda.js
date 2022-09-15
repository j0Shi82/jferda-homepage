import nodeLogo from 'assets/media/images/knowledge-logos/node.png';
import pageSpeedInsights from 'assets/media/images/projects/jferda/page-speed-insights.png';
import pageSpeedInsights250 from 'assets/media/images/projects/jferda/page-speed-insights-250.png';
import gtmetrixInsights from 'assets/media/images/projects/jferda/gtmetrix-insights.png';
import gtmetrixInsights250 from 'assets/media/images/projects/jferda/gtmetrix-insights-250.png';

export default {
  ident: 'jferda',
  live: true,
  titleLocaleKey: 'navigation.routes.projects_jferda',
  skillsLocaleKeys: ['skills.svelte', 'skills.material', 'skills.webpack'],
  descLocaleKey: 'projects.jferda.desc',
  routeName: 'projects_jferda',
  projectPage: {
    titleImage: nodeLogo,
    links: [
      {
        type: 'github',
        url: 'https://github.com/j0Shi82/jferda-homepage',
        labelLocaleIdent: 'project.jferda.links.repo',
        bgColor: '#689f38',
      },
    ],
    descLocaleKey: 'project.jferda.desc',
    keys: [
      {
        primaryTextLocaleKey: 'project.jferda.highlights.1.1',
        secondaryTextLocaleKey: 'project.jferda.highlights.1.2',
        secondSecondaryTextLocaleKey: 'project.jferda.highlights.1.3',
      },
      {
        primaryTextLocaleKey: 'project.jferda.highlights.2.1',
        secondaryTextLocaleKey: 'project.jferda.highlights.2.2',
        secondSecondaryTextLocaleKey: 'project.jferda.highlights.2.3',
      },
      {
        primaryTextLocaleKey: 'project.jferda.highlights.3.1',
        secondaryTextLocaleKey: 'project.jferda.highlights.3.2',
        secondSecondaryTextLocaleKey: 'project.jferda.highlights.3.3',
      },
      {
        primaryTextLocaleKey: 'project.jferda.highlights.4.1',
        secondaryTextLocaleKey: 'project.jferda.highlights.4.2',
        secondSecondaryTextLocaleKey: 'project.jferda.highlights.4.3',
      },
      {
        primaryTextLocaleKey: 'project.jferda.highlights.5.1',
        secondaryTextLocaleKey: 'project.jferda.highlights.5.2',
        secondSecondaryTextLocaleKey: 'project.jferda.highlights.5.3',
      },
    ],
    gallery: [
      {
        thumb: pageSpeedInsights250,
        full: pageSpeedInsights,
        title: false,
        description: false,
      },
      {
        thumb: gtmetrixInsights250,
        full: gtmetrixInsights,
        title: false,
        description: false,
      }],
  },
};
