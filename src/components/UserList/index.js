import {PropTypes} from 'react'

import UserList from './component'

import compose from 'recompose/compose'
import withState from 'recompose/withState'
import getContext from 'recompose/getContext'

export default compose(
  withState('stateUsers', 'setStateUsers', []),
  getContext({i18n: PropTypes.object}),
)(UserList)
