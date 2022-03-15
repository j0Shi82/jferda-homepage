export default {
  app: {
    menu: {
      icons: {
        home: 'home',
        about: 'help',
        resume: 'face',
        skills: 'stars',
        projects: 'devices',
      },
    },
    // make sure these match the values in assets/style/variables
    breakpoints: {
      mobile: '(max-width: 599px)',
      tablet: '(min-width: 600px) and (max-width: 839px)',
      desktop: '(min-width: 840px)',
    },
    router: {
      // transition between routes, 0 to disable
      routingFadeDuration: 250,
    },
    animations: {
      headerTransitionDuration: 1250,
      atomTransitionDuration: 500,
      atomTransitionDurationShort: 100,
    },
    locale: {
      supportedLanguages: ['en', 'de'],
      // supportedLanguages: ['en'],
      standardLanguage: 'en',
    },
  },
};
