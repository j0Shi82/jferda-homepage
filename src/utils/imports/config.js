import config from 'config/index';

const {
  home: menuHomeIcon,
  about: menuAboutIcon,
  resume: menuResumeIcon,
  skills: menuSkillsIcon,
} = config.app.menu.icons;

const { routingFadeDuration } = config.app.router;
const { standardLanguage, supportedLanguages } = config.app.locale;
const { mobile } = config.app.breakpoints;

export {
  menuHomeIcon, menuAboutIcon, menuResumeIcon, menuSkillsIcon,
  routingFadeDuration,
  standardLanguage as localeStandardLanguage,
  supportedLanguages as localeSupportedLanguages,
  mobile as mobileBreakpointQueryString,
};
