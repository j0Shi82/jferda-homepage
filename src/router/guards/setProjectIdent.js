import { currentProject } from 'utils/imports/store';

export default (detail) => {
  if (
    detail.userData
    && detail.userData.projectIdent
  ) {
    currentProject.set(detail.userData.projectIdent);
  }
  return true;
};
