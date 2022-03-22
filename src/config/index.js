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
      mobile: '(max-width: 767px)',
      tablet: '(min-width: 768px) and (max-width: 1023px)',
      desktop: '(min-width: 1024px)',
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
