'use strict'
import merge from 'lodash/merge'
import isArray from 'lodash/isArray'
import { observable, computed } from 'mobx'
import { API } from 'mobx-model'

const USER_ROLE_VIEWER = "SAMviewer"
const USER_ROLE_EDITOR = "SAMeditor"
const USER_ROLE_ADMIN  = "SAMadmin"
// const USER_ROLE_BANNED  = 'banned'

class Profile {

  urlRoot = '/profile'
  jsonKey = 'profile'

  @observable name       = null
  @observable email      = null
  @observable first_name = null
  @observable last_name  = null
  @observable role       = null
  @observable updatedAt  = null

  set(options = {}) {
    merge(this, options)
  }

  load() {
    return API.request({
      endpoint: this.urlRoot,
      onSuccess: (options = {}) => {
        const json = options.body
        this.set(json[this.jsonKey])
        this.updatedAt = Date.now()
      }
    })
  }

  update (attributes = {}) {
    return API.request({
      method: 'put',
      data: attributes,
      endpoint: this.urlRoot,

      onSuccess: (options = {}) => {
        const json = options.body;
        this.set(json[this.jsonKey]);
        this.updatedAt = Date.now();
      }
    })
  }

  changePassword ({ current_password, new_password }) {
    return API.request({
      method: 'post',
      data: { current_password, new_password },
      endpoint: `${this.urlRoot}/change_password`
    })
  }

  requestChangeEmailToken ({ current_password, new_email }) {
    return API.request({
      method: 'post',
      data: { current_password, new_email },
      endpoint: `${this.urlRoot}/request_change_email_token`
    })
  }

  confirmEmailChange ({ token }) {
    return API.request({
      method: 'post',
      data: { token },
      endpoint: `${this.urlRoot}/confirm_email_change`
    })
  }

  isLogged () {
    return !!this.role
  }

  hasRole (roles) {
    if (!isArray(roles)) roles = [roles]
    return roles.indexOf(this.role) > -1
  }

  isRoleViewer () {
    return this.role === USER_ROLE_VIEWER
  }

  isRoleEditor () {
    return this.role === USER_ROLE_EDITOR
  }

  isRoleAdmin () {
    return this.role === USER_ROLE_ADMIN
  }

  @computed get isAllowEdit () {
    return this.isRoleEditor() || this.isRoleAdmin()
  }

}

const userProfile = new Profile()
export default userProfile
// export { userProfile, USER_ROLE_VIEWER, USER_ROLE_EDITOR, USER_ROLE_ADMIN, USER_ROLE_BANNED }
