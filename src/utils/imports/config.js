import config from 'config/index';

const {
  home: menuHomeIcon,
  about: menuAboutIcon,
  resume: menuResumeIcon,
  skills: menuSkillsIcon,
} = config.app.menu.icons;

const { routingFadeDuration } = config.app.router;
const { headerTransitionDuration } = config.app.animations;
const { standardLanguage, supportedLanguages } = config.app.locale;
const { mobile, tablet, desktop } = config.app.breakpoints;

export {
  menuHomeIcon, menuAboutIcon, menuResumeIcon, menuSkillsIcon,
  routingFadeDuration,
  headerTransitionDuration,
  standardLanguage as localeStandardLanguage,
  supportedLanguages as localeSupportedLanguages,
  mobile as mobileBreakpointQueryString,
  tablet as tabletBreakpointQueryString,
  desktop as desktopBreakpointQueryString,
};
