import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Link from 'react-router/lib/Link'

import {
  Container
} from './styles'

export default class SignUp extends Component {
  static displayName = 'SignUp'
  static propTypes = {
    handlerChangeEmailField: PropTypes.func,
    handlerChangeNameField: PropTypes.func,
    handlerChangePasswordField: PropTypes.func,
    handlerClickSubmitButton: PropTypes.func,

    i18n: PropTypes.object,

    stateEmailField: PropTypes.string,
    stateNameField: PropTypes.string,
    statePasswordField: PropTypes.string
  }

  render () {
    const {
      handlerChangeEmailField,
      handlerChangeNameField,
      handlerChangePasswordField,
      handlerClickSubmitButton,

      i18n,

      stateEmailField,
      stateNameField,
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
          type='name'
          required
          placeholder={i18n.t('NAME_PLACEHOLDER')}
          value={stateNameField}
          onChange={handlerChangeNameField}
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
          value={i18n.t('SIGNUP_BUTTON')}
          onClick={handlerClickSubmitButton}
        />
        <Link to='/signin'>{i18n.t('SIGNIN_LINK')}</Link>
      </Container>
    )
  }
}
