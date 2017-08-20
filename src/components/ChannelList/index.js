import {PropTypes} from 'react'

import ChannelList from './component'

import compose from 'recompose/compose'
import withState from 'recompose/withState'
import getContext from 'recompose/getContext'

export default compose(
  withState('stateChannels', 'setStateChannels', []),
  getContext({i18n: PropTypes.object}),
)(ChannelList)
