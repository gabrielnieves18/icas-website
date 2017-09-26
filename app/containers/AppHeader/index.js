/**
 * Created by gaby on 6/25/17.
 */

import React from 'react';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';

import messages from './messages';
import SpotinIconLogo from '../../components/SpotinIconLogo';


import {
  ROUTES,
  SPOTIN_GREEN_DARK,
} from '../../constants';


class AppHeader extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  /*
   <Navbar style={{ backgroundColor: SPOTIN_GREEN_DARK }} light toggleable>
   <NavbarToggler style={{ backgroundColor: '#f5f5f5' }} right onClick={this.toggle} />
   <NavbarBrand href="/">
   <SpotinIconLogo width={100} height={35} white />
   </NavbarBrand>
   <Collapse isOpen={this.state.isOpen} navbar>
   <Nav className="ml-auto" navbar>
   <NavItem>
   <Link className="nav-link" activeClassName="nav-link text-white" to={ROUTES.HOME} onlyActiveOnIndex>
   <FormattedMessage {...messages.home} />
   </Link>
   </NavItem>
   <NavItem>
   <Link className="nav-link" activeClassName="nav-link text-white" to={ROUTES.SPOT_EDITOR} onlyActiveOnIndex>
   Spot Editor
   </Link>
   </NavItem>
   </Nav>
   </Collapse>
   </Navbar>
   <SearchBar />
   */

  render() {
    // If the user is not login, return null.
    // Otherwise, return the navigation header
    return (
      this.props.loginSuccessful ? // eslint-disable-line
        <header>
          <div>Hello</div>
        </header>
        : null
    );
  }
}

AppHeader.propType = {
  loginSuccessful: PropTypes.bool.isRequired,
};

export default AppHeader;
