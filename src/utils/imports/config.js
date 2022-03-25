import config from 'config/index';

const {
  home: menuHomeIcon,
  about: menuAboutIcon,
  about48: menuAbout48Icon,
  resume: menuResumeIcon,
  skills: menuSkillsIcon,
  projects: menuProjectsIcon,
} = config.app.menu.icons;

const { routingFadeDuration } = config.app.router;
const { headerTransitionDuration, atomTransitionDuration, atomTransitionDurationShort } = config.app.animations;
const { standardLanguage, supportedLanguages } = config.app.locale;
const { mobile, tablet, desktop } = config.app.breakpoints;

export {
  menuHomeIcon, menuAboutIcon, menuResumeIcon, menuSkillsIcon, menuAbout48Icon, menuProjectsIcon,
  routingFadeDuration,
  headerTransitionDuration,
  atomTransitionDuration,
  atomTransitionDurationShort,
  standardLanguage as localeStandardLanguage,
  supportedLanguages as localeSupportedLanguages,
  mobile as mobileBreakpointQueryString,
  tablet as tabletBreakpointQueryString,
  desktop as desktopBreakpointQueryString,
};
