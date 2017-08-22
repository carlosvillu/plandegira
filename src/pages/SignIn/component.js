import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Link from 'react-router/lib/Link'

import {
  Container
} from './styles'

export default class SignIn extends Component {
  static displayName = 'SignIn'
  static propTypes = {
    handlerChangeEmailField: PropTypes.func,
    handlerChangePasswordField: PropTypes.func,
    handlerClickSubmitButton: PropTypes.func,
    history: PropTypes.shape({ push: PropTypes.func }),

    i18n: PropTypes.object,
    loginUsers: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    router: PropTypes.shape({ push: PropTypes.func }),

    stateEmailField: PropTypes.string,
    statePasswordField: PropTypes.string
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.loginUsers) {
      this.props.router.push('/')
    }
  }

  render () {
    const {
      handlerChangeEmailField,
      handlerChangePasswordField,
      handlerClickSubmitButton,

      i18n,

      stateEmailField,
      statePasswordField
    } = this.props

    return (
      <Container>
        <input
          type='email'
          required
          placeholder={i18n.t('EMAIL_PLACEHOLDER')}
          value={stateEmailField}
          onChange={handlerChangeEmailField}
        />
        <input
          type='password'
          required
          placeholder={i18n.t('PASSWORD_PLACEHOLDER')}
          value={statePasswordField}
          onChange={handlerChangePasswordField}
        />
        <input
          type='button'
          value={i18n.t('LOGIN_BUTTON')}
          onClick={handlerClickSubmitButton}
        />
        <Link to='/signup'>{i18n.t('SIGNUP_LINK')}</Link>
      </Container>
    )
  }
}
