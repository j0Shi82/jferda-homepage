// store values we need
import dockerKnowledgeLogo from 'assets/media/images/knowledge-logos/docker.png'
import gitKnowledgeLogo from 'assets/media/images/knowledge-logos/git.png'
import javascriptKnowledgeLogo from 'assets/media/images/knowledge-logos/javascript.png'
import nodeKnowledgeLogo from 'assets/media/images/knowledge-logos/node.png'
import phpKnowledgeLogo from 'assets/media/images/knowledge-logos/php.png'
import svelteKnowledgeLogo from 'assets/media/images/knowledge-logos/svelte.png'
import titusCorporateLogo from 'assets/media/images/knowledge-logos/titus-500.png'
import vuejsKnowledgeLogo from 'assets/media/images/knowledge-logos/vuejs.png'
import wpKnowledgeLogo from 'assets/media/images/knowledge-logos/wp.png'
import { atomTransitionDuration, menuAbout48Icon, menuProjects48Icon } from 'utils/imports/config.js'

const menuItems = [
  {
    icon: menuAbout48Icon,
    textLocaleIdent: 'navigation.routes.about',
    route: 'about',
    transitionDelay: atomTransitionDuration * 0,
  },
  {
    icon: menuProjects48Icon,
    textLocaleIdent: 'navigation.routes.projects',
    route: 'projects',
    transitionDelay: atomTransitionDuration * 1,
  },
]

menuItems.forEach((item, i) => {
  menuItems[i].transitionDelay = atomTransitionDuration * i
})

const knowledgeLogoItems = [
  {
    ident: 'titus',
    logo: titusCorporateLogo,
  },
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
    ident: 'wp',
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
]

export { knowledgeLogoItems, menuItems }
