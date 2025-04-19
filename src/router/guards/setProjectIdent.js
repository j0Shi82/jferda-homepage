import { currentProject } from 'utils/imports/store.js'

export default (detail) => {
  if (detail.userData && detail.userData.projectIdent) {
    currentProject.set(detail.userData.projectIdent)
  }
  return true
}
