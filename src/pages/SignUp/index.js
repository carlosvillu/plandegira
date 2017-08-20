import {PropTypes} from 'react'
import SignUp from './component'

import compose from 'recompose/compose'
import withHandlers from 'recompose/withHandlers'
import withState from 'recompose/withState'
import getContext from 'recompose/getContext'

export default compose(
  withState('stateEmailField', 'setStateEmailField', 'carlos@cas.com'),
  withState('stateNameField', 'setStateNameField', 'Carlos'),
  withState('statePasswordField', 'setStatePasswordField', '12345678'),
  getContext({i18n: PropTypes.object, domain: PropTypes.object}),
  withHandlers({
    handlerChangeEmailField: props => e => props.setStateEmailField(e.target.value),
    handlerChangeNameField: props => e => props.setStateNameField(e.target.value),
    handlerChangePasswordField: props => e => props.setStatePasswordField(e.target.value),
    handlerClickSubmitButton: props => async () => {
      const user = await props.domain.get('signup_users_use_case').execute({
        email: props.stateEmailField,
        name: props.stateNameField,
        password: props.statePasswordField
      })

      console.log('UserID', user) // eslint-disable-line
    }
  }),
)(SignUp)
