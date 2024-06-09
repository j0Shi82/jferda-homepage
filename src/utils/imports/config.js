import config from 'config/index.js'

const {
	home: menuHomeIcon,
	about: menuAboutIcon,
	about48: menuAbout48Icon,
	resume: menuResumeIcon,
	skills: menuSkillsIcon,
	projects: menuProjectsIcon,
} = config.app.menu.icons

const { routingFadeDuration } = config.app.router
const { headerTransitionDuration, atomTransitionDuration, atomTransitionDurationShort } = config.app.animations
const { standardLanguage, supportedLanguages } = config.app.locale
const { mobile, tablet, desktop } = config.app.breakpoints

export {
	atomTransitionDuration,
	atomTransitionDurationShort,
	desktop as desktopBreakpointQueryString,
	headerTransitionDuration,
	standardLanguage as localeStandardLanguage,
	supportedLanguages as localeSupportedLanguages,
	menuAbout48Icon,
	menuAboutIcon,
	menuHomeIcon,
	menuProjectsIcon,
	menuResumeIcon,
	menuSkillsIcon,
	mobile as mobileBreakpointQueryString,
	routingFadeDuration,
	tablet as tabletBreakpointQueryString,
}
