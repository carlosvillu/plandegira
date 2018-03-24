import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

import {
  AddBox
} from './styles'
import ListItems from '../ListItems'

export default class EventList extends PureComponent {
  static displayName = 'EventList'
  static propTypes = {
    handlerClickAddEvent: PropTypes.func,
    i18n: PropTypes.object,
    stateUsers: PropTypes.array
  }

  render () {
    const {
      handlerClickAddEvent,
      i18n,
      stateUsers
    } = this.props

    return (
      <div>
        <h2>{i18n.t('EVENT_HEADER_TITLE')}<AddBox onClick={handlerClickAddEvent} /></h2>
        <ListItems items={stateUsers} />
      </div>
    )
  }
}
