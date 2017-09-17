import React, { Component } from 'react'
import { connect } from 'react-redux'
import FontIcon from 'react-toolbox/lib/font_icon'
// import t from 'lib/web/LocaleStrings'

import AccountCreated from '../Modals/AccountCreated/AccountCreated.web.js'
import styles from './ReviewDetails.webStyle.scss'

import { showSignInDetails, hideSignInDetails } from './ReviewDetails.action'
import { openAccountCreatedModal } from '../Modals/AccountCreated/AccountCreated.action.js'
import { loginWithPassword } from '../Login/Login.middleware'

class Review extends Component {
  _handleLogin = callback => {
    this.props.dispatch(
      loginWithPassword(
        this.props.details.username,
        this.props.details.password,
        callback
      )
    )
  }
  _toggleInfo = () => {
    if (!this.props.view) {
      return this.props.dispatch(showSignInDetails())
    }
    if (this.props.view) {
      return this.props.dispatch(hideSignInDetails())
    }
  }
  _renderInfo = () => {
    if (this.props.view) {
      return (
        <p className={styles.shown}>
          <span className={styles.bold}>Username:</span> {this.props.details.username} <br />
          <span className={styles.bold}>Password:</span> {this.props.details.password} <br />
          <span className={styles.bold}>PIN:</span> {this.props.details.pin}
        </p>
      )
    }
    if (!this.props.view) {
      return (
        <p className={styles.hidden}>Show my account info</p>
      )
    }
  }
  _cancel = () => {
    const abcuiCallback = window.parent.abcui
    if (!abcuiCallback.loginCallback) {
      return this.props.history.push('/account')
    }
    if (abcuiCallback.loginCallback) {
      return abcuiCallback.loginCallback(null, this.props.account)
    }
  }
  _submit = () => {
    const abcuiCallback = window.parent.abcui
    if (!abcuiCallback.loginWithoutClosingCallback) {
      return this.props.history.push('/passwordrecovery')
    }
    if (abcuiCallback.loginWithoutClosingCallback) {
      abcuiCallback.loginWithoutClosingCallback(null, this.props.account)
      return this.props.history.push('/passwordrecovery')
    }
  }
  render () {
    return (
      <div className={styles.container}>
        <p className={styles.header}>Write down your account info</p>
        <p className={styles.p1}>Your username and password are known only to you and cannot be recovered if forgotten.</p>
        <p className={styles.p2}>You WILL lose access to funds if your password is lost.</p>
        <p className={styles.caution}>Write down and store securely!</p>
        <div className={styles.infoBox} onClick={this._toggleInfo}>
          { this.props.view ? <FontIcon className={styles.close} value='clear' /> : null }
          <div className={styles.infoText}>
            { this._renderInfo() }
          </div>
        </div>
        <button className={styles.primary} onClick={e => this.props.dispatch(openAccountCreatedModal())}>Finish</button>
        <AccountCreated cancel={this._cancel} submit={this._submit} />
      </div>
    )
  }
}

export default connect(state => ({
  details: state.reviewDetails.details,
  account: state.user,
  view: state.reviewDetails.view
}))(Review)
