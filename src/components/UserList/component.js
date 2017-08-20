import React, {PureComponent, PropTypes} from 'react'

import ListItems from '../ListItems'

export default class UserList extends PureComponent {
  static displayName = 'UserList'
  static propTypes = {
    stateUsers: PropTypes.array,
    i18n: PropTypes.object
  }

  render () {
    const {
      stateUsers,
      i18n
    } = this.props

    return (
      <div>
        <h2>{i18n.t('USER_TITLE')}</h2>
        <ListItems items={stateUsers} />
      </div>
    )
  }
}
