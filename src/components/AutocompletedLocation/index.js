import PropTypes from 'prop-types'
import AutocompletedLocation from './component'

import compose from 'recompose/compose'
import getContext from 'recompose/getContext'

export default compose(
  getContext({i18n: PropTypes.object})
)(AutocompletedLocation)
