/**
 * Created by gaby on 6/22/17.
 */
import React from 'react';
import PropTypes from 'prop-types';

import { browserHistory } from 'react-router';

import { ROUTES } from '../../constants';

class SpotCard extends React.Component { // eslint-disable-line react/prefer-stateless-function


  constructor(props) {
    super(props);

    this.editSpot = this.editSpot.bind(this);
  }

  editSpot(spotId, lat, lng) {
    browserHistory.push(`${ROUTES.SPOT_EDITOR}?spotId=${spotId}&lat=${lat}&lng=${lng}`);
  }

  render() {
    /* Unpack props */
    const { spot } = this.props;
    const spotId = spot._id; // eslint-disable-line
    const location = spot.location.location ? spot.location.location : [-1, -1];

    const defaultImage = 'http://via.placeholder.com/350x250';
    const defaultDescription = 'No description to display';
    const defaultName = 'No name to display';

    return (
      <Col
        sm={{ size: '12', offset: 0 }}
        md={{ size: '6', offset: 0 }}
        lg={{ size: '4', offset: 0 }}
        style={{ paddingBottom: '16px' }}
      >
        <Card style={{ height: '525px' }}>
          <CardImg
            top
            width="100%"
            src={spot.images && (spot.images.length > 0) ? spot.images[0].image.s3Path : defaultImage}
            alt="Card image cap"
            style={{ height: '225px' }}
          />
          <CardBlock style={{ fontFamily: 'Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important' }}>
            <CardTitle style={{ textAlign: 'center' }} >{ spot.name ? spot.name : defaultName }</CardTitle>
            <hr style={{ width: '80%' }} />
            <CardText style={{ textAlign: 'justify' }} >{ spot.description ? spot.description.substr(0, 150) : defaultDescription}</CardText>
            <div style={{ textAlign: 'center' }}>
              <Button className="mr-5" color="success" onClick={() => this.editSpot(spotId, location[1], location[0])}>Edit</Button>
              <Button color="danger">Delete</Button>
            </div>
          </CardBlock>
        </Card>
      </Col>
    );
  }
}

SpotCard.propTypes = {
  spot: PropTypes.object,
};

export default SpotCard;
