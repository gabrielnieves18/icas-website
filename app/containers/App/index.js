/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import withProgressBar from './../../components/ProgressBar';

import {
  isDesktop,
  isMobile,
  updateScreenDimensions,
} from './actions';

import { makeSelectError, makeSelectLoading } from './selectors';
import { makeSelectUserLogged } from '../Login/selectors';

class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();

    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.props.updateScreenDimensions(window.innerHeight, window.innerWidth);

    if (window.innerWidth <= 500) {
      this.props.updateMobile();
    } else {
      this.props.updateDesktop();
    }
  }

  render() {
    const { loginSuccessful } = this.props;
    return (
      <div>
        {React.Children.toArray(this.props.children)}
      </div>
    );
  }
}

App.propTypes = {
  updateDesktop: PropTypes.func,
  updateMobile: PropTypes.func,
  children: PropTypes.node,
  loginSuccessful: PropTypes.bool,
  updateScreenDimensions: PropTypes.func,
};


export function mapDispatchToProps(dispatch) {
  return {
    updateScreenDimensions: (height, width) => {
      dispatch(updateScreenDimensions(height, width));
    },
    updateDesktop: () => {
      dispatch(isDesktop());
    },
    updateMobile: () => {
      dispatch(isMobile());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  loginSuccessful: makeSelectUserLogged(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(withProgressBar(App));
