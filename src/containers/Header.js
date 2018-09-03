import { connect } from 'react-redux'
import { changeLanguage } from '../actions'
import Header from '../components/Header'

const mapStateToProps = state => ({
  language: state.language
});

const mapDispatchToProps = dispatch => ({
  changeLanguage: language => dispatch(changeLanguage(language))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)