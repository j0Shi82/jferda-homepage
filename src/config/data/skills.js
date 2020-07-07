import phpLogo from 'assets/media/images/skills/language/php.png';
import cLogo from 'assets/media/images/skills/language/csharp.svg';
import sqlLogo from 'assets/media/images/skills/language/sql.png';
import javaLogo from 'assets/media/images/skills/language/java.png';
import htmlLogo from 'assets/media/images/skills/language/html.svg';
import javascriptLogo from 'assets/media/images/skills/language/javascript.svg';
import cssLogo from 'assets/media/images/skills/language/css.svg';

import bootstrapLogo from 'assets/media/images/skills/frameworks/bootstrap.png';
import laravelLogo from 'assets/media/images/skills/frameworks/laravel.png';
import phpbbLogo from 'assets/media/images/skills/frameworks/phpbb.png';
import vueLogo from 'assets/media/images/skills/frameworks/vue.svg';
import svelteLogo from 'assets/media/images/skills/frameworks/svelte.png';
import wordpressLogo from 'assets/media/images/skills/frameworks/wordpress.svg';
import jqueryLogo from 'assets/media/images/skills/frameworks/jquery.svg';
import materialLogo from 'assets/media/images/skills/frameworks/material.svg';

import babelLogo from 'assets/media/images/skills/jspackages/babel.svg';
import eslintLogo from 'assets/media/images/skills/jspackages/eslint.svg';
import npmLogo from 'assets/media/images/skills/jspackages/npm.svg';
import webpackLogo from 'assets/media/images/skills/jspackages/webpack.svg';
import expressLogo from 'assets/media/images/skills/jspackages/express.png';
import jestLogo from 'assets/media/images/skills/jspackages/jest.png';

import dockerLogo from 'assets/media/images/skills/software/docker.png';
import gitLogo from 'assets/media/images/skills/software/git.svg';
import jiraLogo from 'assets/media/images/skills/software/jira.png';
import mysqlLogo from 'assets/media/images/skills/software/mysql.png';
import photoshopLogo from 'assets/media/images/skills/software/photoshop.svg';
import sentryLogo from 'assets/media/images/skills/software/sentry.svg';
import vscodeLogo from 'assets/media/images/skills/software/vscode.png';
import nodeLogo from 'assets/media/images/skills/software/node.svg';

const cats = ['lang', 'frameworks', 'jspackages', 'software'];

const skills = [
  {
    type: 'lang', name: 'PHP', class: 'php', logo: phpLogo, progress: 0.6,
  },
  {
    type: 'lang', name: 'SQL', class: 'sql', logo: sqlLogo, progress: 0.8,
  },
  {
    type: 'lang', name: 'C#', class: 'csharp', logo: cLogo, progress: 0.2,
  },
  {
    type: 'lang', name: 'Java', class: 'java', logo: javaLogo, progress: 0.3,
  },
  {
    type: 'lang', name: 'Javascript', class: 'javascript', logo: javascriptLogo, progress: 0.9,
  },
  {
    type: 'lang', name: 'HTML', class: 'html', logo: htmlLogo, progress: 0.85,
  },
  {
    type: 'lang', name: 'CSS', class: 'css', logo: cssLogo, progress: 0.5,
  },
  {
    type: 'software', name: 'Photoshop CS6', class: 'css', logo: photoshopLogo, progress: 0.5,
  },
  {
    type: 'software', name: 'Git', class: 'git', logo: gitLogo, progress: 0.7,
  },
  {
    type: 'software', name: 'Docker', class: 'docker', logo: dockerLogo, progress: 0.45,
  },
  {
    type: 'software', name: 'mySQL', class: 'mysql', logo: mysqlLogo, progress: 0.9,
  },
  {
    type: 'software', name: 'Sentry', class: 'sentry', logo: sentryLogo, progress: 0.65,
  },
  {
    type: 'software', name: 'Jira', class: 'jira', logo: jiraLogo, progress: 0.8,
  },
  {
    type: 'software', name: 'vscode', class: 'vscode', logo: vscodeLogo, progress: 0.9,
  },
  {
    type: 'software', name: 'node', class: 'node', logo: nodeLogo, progress: 0.5,
  },
  {
    type: 'frameworks', name: 'VUE.js', class: 'vue', logo: vueLogo, progress: 0.85,
  },
  {
    type: 'frameworks', name: 'Laravel', class: 'laravel', logo: laravelLogo, progress: 0.6,
  },
  {
    type: 'frameworks', name: 'Svelte', class: 'svelte', logo: svelteLogo, progress: 0.3,
  },
  {
    type: 'frameworks', name: 'Wordpress', class: 'wp', logo: wordpressLogo, progress: 0.5,
  },
  {
    type: 'frameworks', name: 'phpBB', class: 'phpbb', logo: phpbbLogo, progress: 0.4,
  },
  {
    type: 'frameworks', name: 'jQuery', class: 'jquery', logo: jqueryLogo, progress: 0.75,
  },
  {
    type: 'frameworks', name: 'Bootstrap', class: 'bootstrap', logo: bootstrapLogo, progress: 0.7,
  },
  {
    type: 'frameworks', name: 'Material Design', class: 'material', logo: materialLogo, progress: 0.5,
  },
  {
    type: 'jspackages', name: 'npm', class: 'npm', logo: npmLogo, progress: 0.6,
  },
  {
    type: 'jspackages', name: 'ESLint', class: 'eslint', logo: eslintLogo, progress: 0.9,
  },
  {
    type: 'jspackages', name: 'Babel', class: 'babel', logo: babelLogo, progress: 0.85,
  },
  {
    type: 'jspackages', name: 'Webpack', class: 'webpack', logo: webpackLogo, progress: 0.8,
  },
  {
    type: 'jspackages', name: 'Express', class: 'express', logo: expressLogo, progress: 0.55,
  },
  {
    type: 'jspackages', name: 'Jest', class: 'jest', logo: jestLogo, progress: 0.4,
  },
];

export { cats, skills };
