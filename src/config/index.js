import homeIcon from 'assets/media/material-icons/home.svg';
import faceIcon from 'assets/media/material-icons/face.svg';
import starsIcon from 'assets/media/material-icons/stars.svg';
import helpIcon from 'assets/media/material-icons/help.svg';

export default {
  app: {
    menu: {
      icons: {
        home: homeIcon,
        about: helpIcon,
        resume: faceIcon,
        skills: starsIcon,
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
      headerTransitionDuration: 500,
      atomTransitionDuration: 350,
      atomTransitionDurationShort: 100,
    },
    locale: {
      supportedLanguages: ['en', 'de'],
      // supportedLanguages: ['en'],
      standardLanguage: 'en',
    },
  },
};
