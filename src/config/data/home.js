// store values we need
import { menuAboutIcon, menuSkillsIcon } from 'utils/imports/config';
import vuejsKnowledgeLogo from 'assets/media/images/knowledge-logos/vuejs.png';
import dockerKnowledgeLogo from 'assets/media/images/knowledge-logos/docker.png';
import javascriptKnowledgeLogo from 'assets/media/images/knowledge-logos/javascript.png';
import nodeKnowledgeLogo from 'assets/media/images/knowledge-logos/node.png';
import phpKnowledgeLogo from 'assets/media/images/knowledge-logos/php.png';
import svelteKnowledgeLogo from 'assets/media/images/knowledge-logos/svelte.png';
import wpKnowledgeLogo from 'assets/media/images/knowledge-logos/wp.png';
import gitKnowledgeLogo from 'assets/media/images/knowledge-logos/git.png';

const menuItems = [
  {
    icon: menuAboutIcon,
    textLocaleIdent: 'navigation.about',
    route: 'about',
  },
  {
    icon: menuSkillsIcon,
    textLocaleIdent: 'navigation.projects.headline',
    route: 'projects',
  },
];

const knowledgeLogoItems = [
  {
    ident: 'vue',
    logo: vuejsKnowledgeLogo,
  },
  {
    ident: 'svelte',
    logo: svelteKnowledgeLogo,
  },
  {
    ident: 'javascript',
    logo: javascriptKnowledgeLogo,
  },
  {
    ident: 'php',
    logo: phpKnowledgeLogo,
  },
  {
    ident: 'wordpress',
    logo: wpKnowledgeLogo,
  },
  {
    ident: 'docker',
    logo: dockerKnowledgeLogo,
  },
  {
    ident: 'node',
    logo: nodeKnowledgeLogo,
  },
  {
    ident: 'git',
    logo: gitKnowledgeLogo,
  },
];

export { menuItems, knowledgeLogoItems };
