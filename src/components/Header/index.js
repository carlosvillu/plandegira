import PropTypes from 'prop-types'
import Header, {NoHeader} from './component'

import {compose, withLocalService} from '@schibstedspain/ddd-react-redux'
import branch from 'recompose/branch'
import renderComponent from 'recompose/renderComponent'
import getContext from 'recompose/getContext'

export default compose(
  withLocalService('current_users_use_case'),
  getContext({i18n: PropTypes.object}),
  branch(
    props => props.currentUsers === undefined,
    renderComponent(NoHeader)
  )
)(Header)
