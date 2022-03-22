import Header from 'components/header/Header.svelte';
import Drawer from 'components/drawer/Drawer.svelte';
import AppContent from 'components/content/AppContent.svelte';

import HomeRoutes from 'components/content/home/HomeRoutes.svelte';

import AboutPhilosophyButton from 'components/content/about/AboutPhilosophyButton.svelte';
import AboutBio from 'components/content/about/AboutBio.svelte';

import ResumeItem from 'components/content/resume/ResumeItem.svelte';

import SkillsProgressCat from 'components/content/skills/SkillsProgressCat.svelte';
import SkillsProgressRow from 'components/content/skills/SkillsProgressRow.svelte';

import ProjectsCard from 'components/content/projects/ProjectsCard.svelte';
import ProjectDescription from 'components/content/projects/ProjectDescription.svelte';
import ProjectKeys from 'components/content/projects/ProjectKeys.svelte';
import ProjectSkills from 'components/content/projects/ProjectSkills.svelte';
import ProjectGallery from 'components/content/projects/ProjectGallery.svelte';
import ProjectLinks from 'components/content/projects/ProjectLinks.svelte';

import FlyingHeadline from 'components/utilities/atoms/FlyingHeadline.svelte';
import Loader from 'components/utilities/atoms/Loader.svelte';
import TechLogo from 'components/utilities/atoms/TechLogo.svelte';

import Icon from 'fa-svelte';

export {
  Header as MainHeader,
  Drawer as MainDrawer,
  AppContent,
  HomeRoutes,
  AboutPhilosophyButton, AboutBio, SkillsProgressCat, SkillsProgressRow, ResumeItem,
  ProjectsCard, ProjectDescription, ProjectKeys, ProjectSkills, ProjectGallery, ProjectLinks,
  FlyingHeadline,
  Loader,
  TechLogo,
  Icon as FontAwesomeIcon,
};
