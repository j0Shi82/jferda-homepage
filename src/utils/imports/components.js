import Header from 'components/header/Header.svelte';
import Drawer from 'components/drawer/Drawer.svelte';
import AppContent from 'components/content/AppContent.svelte';

import HomeRoutes from 'components/content/home/HomeRoutes.svelte';

import AboutPhilosophyButton from 'components/content/about/AboutPhilosophyButton';
import AboutBio from 'components/content/about/AboutBio';

import ResumeItem from 'components/content/resume/ResumeItem';

import SkillsProgressCat from 'components/content/skills/SkillsProgressCat.svelte';
import SkillsProgressRow from 'components/content/skills/SkillsProgressRow.svelte';

import ProjectsCard from 'components/content/projects/ProjectsCard';
import ProjectDescription from 'components/content/projects/ProjectDescription';
import ProjectKeys from 'components/content/projects/ProjectKeys';
import ProjectSkills from 'components/content/projects/ProjectSkills';
import ProjectGallery from 'components/content/projects/ProjectGallery';
import ProjectLinks from 'components/content/projects/ProjectLinks';

import FlyingHeadline from 'components/utilities/atoms/FlyingHeadline.svelte';

import Icon from 'fa-svelte';

export {
  Header as MainHeader,
  Drawer as MainDrawer,
  AppContent,
  HomeRoutes,
  AboutPhilosophyButton, AboutBio, SkillsProgressCat, SkillsProgressRow, ResumeItem,
  ProjectsCard, ProjectDescription, ProjectKeys, ProjectSkills, ProjectGallery, ProjectLinks,
  FlyingHeadline,
  Icon as FontAwesomeIcon,
};
