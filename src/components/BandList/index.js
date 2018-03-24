import PropTypes from 'prop-types'

import BandList from './component'

import {
  mapUIServiceToProps,
  withLocalService
} from '@s-ui/react-domain-connector'

import branch from 'recompose/branch'
import compose from 'recompose/compose'
import getContext from 'recompose/getContext'
import lifecycle from 'recompose/lifecycle'
import renderNothing from 'recompose/renderNothing'
import withHandlers from 'recompose/withHandlers'
import withState from 'recompose/withState'

export default compose(
  withState('stateChannels', 'setStateChannels', []),
  withLocalService('stream_bands_users_use_case', 'current_users_use_case'),
  mapUIServiceToProps('modalAddBand'),
  getContext({ i18n: PropTypes.object }),
  lifecycle({
    componentWillReceiveProps (nextProps) {
      if (
        !this.props.streamBandsUsers &&
        this.props.currentUsers !== nextProps.currentUsers
      ) {
        this.props.streamBandsUsersUseCase({
          userId: nextProps.currentUsers.id
        })
      }
    },

    componentDidMount () {
      !this.props.currentUsers && this.props.currentUsersUseCase()
    }
  }),

  withHandlers({
    handlerClickAddBand: props => () => props.setModalAddBandUI(true)
  }),
  branch(props => props.streamBandsUsers === undefined, renderNothing)
)(BandList)
