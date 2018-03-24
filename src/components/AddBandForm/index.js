import PropTypes from 'prop-types'
import AddBandForm from './component'

import {
  withLocalService,
  mapUIServiceToProps
} from '@s-ui/react-domain-connector'

import compose from 'recompose/compose'
import withHandlers from 'recompose/withHandlers'
import withState from 'recompose/withState'
import getContext from 'recompose/getContext'

const EMAIL_REGEXP = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

export default compose(
  withState('stateNameField', 'setStateNameField', 'asdfasdf'),
  withState(
    'stateMembersTextArea',
    'setStateMembersTextArea',
    'asdfasdf@sadfsd.com'
  ),
  withState('stateLocationAutocompleted', 'setStateLocationAutocompleted'),
  withLocalService('create_bands_use_case', 'current_users_use_case'),
  mapUIServiceToProps('modalAddBand'),
  getContext({ i18n: PropTypes.object, router: PropTypes.object }),
  withHandlers({
    handlerChangeNameField: props => e =>
      props.setStateNameField(e.target.value),
    handlerChangeMembersTextArea: props => e =>
      props.setStateMembersTextArea(e.target.value),
    handlerChangeLocationAutocompleted: props => loc =>
      props.setStateLocationAutocompleted(loc),
    handlerClickSubmitButton: props => evt => {
      const members = props.stateMembersTextArea
        .split(/\n/)
        .filter(Boolean)
        .filter(str => str.match(EMAIL_REGEXP))

      props.createBandsUseCase({
        userId: props.currentUsers.id,
        members,
        name: props.stateNameField,
        location: props.stateLocationAutocompleted
      })
    }
  })
)(AddBandForm)
