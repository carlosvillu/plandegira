import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

import {
  AddBox
} from './styles'
import ListItems from '../ListItems'

export default class BandList extends PureComponent {
  static displayName = 'BandList'
  static propTypes = {
    handlerClickAddBand: PropTypes.func,

    stateChannels: PropTypes.array,

    streamBandsUsers: PropTypes.object,
    streamBandsUsersUseCase: PropTypes.func,

    i18n: PropTypes.object
  }

  componentDidMount () {
    this._subscription = this.props.streamBandsUsers.subscribe({
      next: band => {
        debugger // eslint-disable-line
      }
    })
  }

  componentWillUnmount () {
    this._subscription.unsubscribe()
  }

  render () {
    const {
      handlerClickAddBand,
      i18n,
      stateChannels
    } = this.props

    return (
      <div>
        <h2>{i18n.t('BAND_HEADER_TITLE')}<AddBox onClick={handlerClickAddBand} /></h2>
        <ListItems items={stateChannels} />
      </div>
    )
  }
}
