/* eslint no-return-assign:0 */

import PropTypes from 'prop-types'
import React, {PureComponent} from 'react'

export default class AutocompletedLocation extends PureComponent {
  static displayName = 'AutocompletedLocation'
  static propTypes = {
    i18n: PropTypes.object,
    onChangePlace: PropTypes.func,
    stateLocationField: PropTypes.string
  }

  placeChanged = () => {
    const place = this.autocomplete.getPlace()
    this.props.onChangePlace({
      components: place.address_components,
      address: place.formatted_address,
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
      vicinity: place.vicinity || '',
      types: place.types,
      place_id: place.place_id
    })
  }

  handlerLocationBlur = () => {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(position => {
        const geolocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
        const circle = new window.google.maps.Circle({
          center: geolocation,
          radius: position.coords.accuracy
        })
        this.autocomplete.setBounds(circle.getBounds())
      })
    }
  }

  componentDidMount () {
    this.autocomplete = new window.google.maps.places.Autocomplete(
      this._input,
      {types: ['geocode']}
    )

    this.autocomplete.addListener('place_changed', this.placeChanged)
  }

  render () {
    const {
      i18n
    } = this.props

    return (
      <input
        type='text'
        placeholder={i18n.t('AUTOCOMPLETED_LOCATION_PLACEHOLDER')}
        onBlur={this.handlerLocationBlur}
        ref={node => this._input = node}
      />
    )
  }
}
