import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

import TextareaAutosize from 'react-autosize-textarea'
import AutocompletedLocation from '../AutocompletedLocation'

export default class AddBandForm extends PureComponent {
  static display = 'AddBandForm'
  static propTypes = {
    createBands: PropTypes.object,
    createBandsError: PropTypes.object,
    currentUsersUseCase: PropTypes.func,
    handlerChangeLocationAutocompleted: PropTypes.func,
    handlerChangeMembersTextArea: PropTypes.func,
    handlerChangeNameField: PropTypes.func,
    handlerClickSubmitButton: PropTypes.func,
    i18n: PropTypes.object,
    setModalAddBandUI: PropTypes.func,
    stateLocationAutocompleted: PropTypes.object,
    stateMembersTextArea: PropTypes.string,
    stateNameField: PropTypes.string
  }

  componentDidMount () {
    this.props.currentUsersUseCase()
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.createBands) {
      this.props.setModalAddBandUI(false)
    }

    if (
      this.props.stateNameField === nextProps.stateNameField &&
      this.props.stateMembersTextArea === nextProps.stateMembersTextArea &&
      this.props.stateLocationAutocompleted === nextProps.stateLocationAutocompleted &&
      nextProps.createBandsError
    ) {
      window.alert(nextProps.createBandsError)
    }
  }

  render () {
    const {
      handlerChangeLocationAutocompleted,
      handlerChangeMembersTextArea,
      handlerChangeNameField,
      handlerClickSubmitButton,
      i18n,
      stateMembersTextArea,
      stateNameField
    } = this.props

    return (
      <div>
        <h1>AddBand</h1>
        <input
          type='text'
          placeholder={i18n.t('BAND_NAME_PLACEHOLDER')}
          value={stateNameField}
          onChange={handlerChangeNameField}
        />
        <p>{i18n.t('MEMBER_LIST_HEADER')}</p>
        <TextareaAutosize
          placeholder={i18n.t('ONE_FOR_LINE')}
          value={stateMembersTextArea}
          onChange={handlerChangeMembersTextArea}
        />
        <p>{i18n.t('LOCATION_HEADER')}</p>
        <AutocompletedLocation onChangePlace={handlerChangeLocationAutocompleted} />
        <input
          type='button'
          value={i18n.t('CREATE_BAND')}
          onClick={handlerClickSubmitButton}
        />
      </div>
    )
  }
}
