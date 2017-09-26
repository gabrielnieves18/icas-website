/**
 * Created by gaby on 6/22/17.
 */
import React from 'react';
import PropTypes from 'prop-types';

class UserCard extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    /* Unpack props */
    const { user } = this.props; // eslint-disable-line

    const defaultImage = 'http://via.placeholder.com/350x250';
    const defaultEmail = 'No email to display';
    const defaultName = 'No name to display';

    return (
      <Col
        sm={{ size: '10', offset: 1 }}
        md={{ size: '6', offset: 0 }}
        lg={{ size: '4', offset: 0 }}
        style={{ paddingBottom: '16px', textAlign: 'center' }}
      >
        <Card style={{ height: '525px' }}>
          <CardImg
            top
            width="100%"
            src={!user.avatar ? defaultImage : user.avatar.s3Path}
            alt="Card image cap"
            style={{ height: '225px' }}
          />
          <CardBlock style={{ fontFamily: 'Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important' }}>
            <CardTitle>
              { user.firstName ? user.firstName : defaultName } &nbsp;
              { user.lastName ? user.lastName : defaultName }
            </CardTitle>
            <hr style={{ width: '60%' }} />
            <CardSubtitle style={{ fontWeight: '700' }}>
              { !user.locale
                ? <span style={{ color: '#bd231a' }} >No Locale</span>
                : <span style={{ color: '#a8bd22' }} >{user.locale}</span>
              }
              <span style={{ color: '#a8bd22' }}>,</span> &nbsp;
              { !user.gender
                ? <span style={{ color: '#bd231a' }} >No Gender Found</span>
                : <span style={{ color: '#a8bd22' }} >{user.gender}</span>
              }
            </CardSubtitle>
            <hr style={{ width: '60%' }} />
            <CardText style={{ color: '#545454' }} >
              <span style={{ fontWeight: '600' }}>Email: &nbsp;</span>
              { user.email ? user.email : defaultEmail}
            </CardText>
            <div>
              <Button className="mr-5" color="success">Edit</Button>
              <Button color="danger">Delete</Button>
            </div>
          </CardBlock>
        </Card>
      </Col>
    );
  }
}

UserCard.PropTypes = {
  user: PropTypes.object,
};

export default UserCard;
