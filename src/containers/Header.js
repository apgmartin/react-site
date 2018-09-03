import { connect } from 'react-redux'
import { changeLanguage, setIconHover, unsetIconHover } from '../actions'
import Header from '../components/Header'

const mapStateToProps = state => ({
  language: state.language,
  iconHover: state.iconHover
});

const mapDispatchToProps = dispatch => ({
  changeLanguage: language => dispatch(changeLanguage(language)),
  setIconHover: icon => dispatch(setIconHover(icon)),
  unsetIconHover: () => dispatch(unsetIconHover())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)