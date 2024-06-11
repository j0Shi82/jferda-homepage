// import EnglishCert from 'assets/documents/EnglishCert.pdf';
// import HeimspielReport from 'assets/documents/HeimspielReport.pdf';
// import IHKReport from 'assets/documents/IHKReport.pdf';
// import SQLZert from 'assets/documents/SQLCert.pdf';

const education = [
  {
    startDate: new Date(1993, 7, 1),
    endDate: new Date(2006, 5, 15),
    ended: true,
    range: true,
    textLocaleIdent: 'resume.education.gym',
    // doc: false,
  },
  {
    startDate: new Date(2006, 9, 1),
    endDate: new Date(2018, 6, 31),
    ended: true,
    range: true,
    textLocaleIdent: 'resume.education.uni',
    // doc: false,
  },
  {
    startDate: new Date(2018, 7, 1),
    endDate: new Date(2021, 6, 31),
    ended: true,
    range: true,
    textLocaleIdent: 'resume.education.edom',
    // doc: IHKReport,
  },
]

const experience = [
  {
    startDate: new Date(2011, 10, 1),
    endDate: new Date(2018, 7, 1),
    ended: true,
    range: true,
    textLocaleIdent: 'resume.experience.hs',
    // doc: HeimspielReport,
  },
  {
    startDate: new Date(2011, 0, 1),
    endDate: new Date(2013, 2, 1),
    ended: true,
    range: true,
    textLocaleIdent: 'resume.experience.mmb',
    // doc: false,
  },
  {
    startDate: new Date(2014, 6, 1),
    endDate: new Date(2019, 1, 5),
    ended: true,
    range: true,
    textLocaleIdent: 'resume.experience.nwoun',
    // doc: false,
  },
  {
    startDate: new Date(2020, 10, 1),
    endDate: new Date(2021, 3, 1),
    ended: true,
    range: true,
    textLocaleIdent: 'resume.experience.neighboring',
    // doc: false,
  },
  {
    startDate: new Date(2018, 7, 1),
    endDate: new Date(2022, 11, 31),
    ended: true,
    range: true,
    textLocaleIdent: 'resume.experience.edom',
    // doc: false,
  },
  {
    startDate: new Date(2023, 1, 9),
    endDate: new Date(),
    ended: false,
    range: false,
    textLocaleIdent: 'resume.experience.titus',
    // doc: false,
  },
]

const skills = [
  {
    startDate: new Date(),
    endDate: new Date(2019, 4, 2),
    ended: true,
    range: false,
    textLocaleIdent: 'resume.skills.kmk',
    // doc: EnglishCert,
  },
  {
    startDate: new Date(),
    endDate: new Date(2019, 7, 20),
    ended: true,
    range: false,
    textLocaleIdent: 'resume.skills.sql',
    // doc: SQLZert,
  },
]

export { education, experience, skills }
