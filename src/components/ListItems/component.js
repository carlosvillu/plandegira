import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export const NoItems = (_, { i18n }) => <span>{i18n.t('NO_ITEMS')}</span>
NoItems.contextTypes = { i18n: PropTypes.object }

export default class ListItems extends PureComponent {
  static displayName = 'ListItems'
  static propTypes = {
    items: PropTypes.array
  }

  render () {
    const { items } = this.props
    return <ul>{items.map(item => <li key={item}>{item}</li>)}</ul>
  }
}
