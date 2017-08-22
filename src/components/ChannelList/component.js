import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

import ListItems from '../ListItems'

export default class ChannelList extends PureComponent {
  static displayName = 'ChannelList'
  static propTypes = {
    stateChannels: PropTypes.array,
    i18n: PropTypes.object
  }

  render () {
    const {
      stateChannels,
      i18n
    } = this.props

    return (
      <div>
        <h2>{i18n.t('CHANNEL_TITLE')}</h2>
        <ListItems items={stateChannels} />
      </div>
    )
  }
}
