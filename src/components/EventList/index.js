import PropTypes from 'prop-types'

import EventList from './component'

import { mapUIServiceToProps } from '@s-ui/react-domain-connector'

import compose from 'recompose/compose'
import withState from 'recompose/withState'
import withHandlers from 'recompose/withHandlers'
import getContext from 'recompose/getContext'

export default compose(
  withState('stateUsers', 'setStateUsers', []),
  mapUIServiceToProps('modalAddEvent'),
  getContext({ i18n: PropTypes.object }),
  withHandlers({
    handlerClickAddEvent: props => () => props.setModalAddEventUI(true)
  })
)(EventList)
