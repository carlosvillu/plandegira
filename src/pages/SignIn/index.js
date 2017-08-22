import PropTypes from 'prop-types'
import SignIn from './component'

import {withLocalService} from '@schibstedspain/ddd-react-redux'

import compose from 'recompose/compose'
import withHandlers from 'recompose/withHandlers'
import withState from 'recompose/withState'
import getContext from 'recompose/getContext'

export default compose(
  withState('stateEmailField', 'setStateEmailField', ''),
  withState('statePasswordField', 'setStatePasswordField', ''),
  withLocalService('login_users_use_case'),
  getContext({i18n: PropTypes.object, router: PropTypes.object}),
  withHandlers({
    handlerChangeEmailField: props => e => props.setStateEmailField(e.target.value),
    handlerChangePasswordField: props => e => props.setStatePasswordField(e.target.value),
    handlerClickSubmitButton: props => async () => {
      props.loginUsersUseCase({
        email: props.stateEmailField,
        password: props.statePasswordField
      })
    }
  }),
)(SignIn)
