/**
 * Created by gaby on 7/18/17.
 */

import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { change } from 'redux-form';
import { createStructuredSelector } from 'reselect';

import {
  makeSelectCurrentSpot,
  makeSelectCurrentSpotSelected,
  makeSelectDisplayAlert,
  makeSelectErrorWhileCreatingSpot,
  makeSelectErrorWhileUpdatingSpot,
} from './selectors';

import { makeSelectLoading } from '../App/selectors';

import {
  displayAlert,
  createNewSpot,
  loadSpotData,
  updateSpotData,
  updateCurrentSpotInServer,
  updateCurrentSpotAddImage,
  updateCurrentSpotAddress,
  updateCurrentSpotCost,
  updateCurrentSpotDesc,
  updateCurrentSpotDifficulty,
  updateCurrentSpotLat,
  updateCurrentSpotLng,
  updateCurrentSpotLocation,
  updateCurrentSpotName,
  updateCurrentSpotRemoveImage,
  updateCurrentSpotType,
} from './actions';

import {
  startLoading,
  stopLoading,
} from '../App/actions';

import { hideSeachBar } from '../SearchBar/actions';

import { ROUTES, SPOT_TYPES } from '../../constants';

import Alert from '../../components/Alert';
import CenterDiv from './CenteredDiv';
import LoadingLogo from '../../components/LoadingLogo';
import SpotForm from '../SpotForm';

const UPDATE = {
  address: 0,
  cost: 1,
  description: 2,
  difficulty: 3,
  lat: 4,
  lng: 5,
  name: 6,
  type: 7,
};

class SpotEditor extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function


  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);
  }

  componentDidMount() {
    const {
      location,
      spot,
      spotSelected,
      updateSpot,
      updateForm,
    } = this.props;

    // We use this.props to differentiate the selector func from the action prop
    this.props.hideSearchBar();

    // Read the spotId, latitude and longitude from the url
    const spotId = location.query ? location.query.spotId : null;

    // If we have a new spotId, it means the user has selected a new spot to edit
    if (spotId) {
      // Note: Calling updateSpot will trigger the app to appLoading action
      updateSpot(spotId);
    }

    // Update spot editors value for the latest spot selected if no new spot is requested
    // It displays the last spot to be loaded until new a new spot is selected
    if (spotSelected && !spotId) {
      updateForm(spot);
    }
  }

  componentDidUpdate() {
    const { appLoading, spot, updateForm } = this.props;

    if (spot.name && !appLoading) {
      updateForm(spot);
    }
  }

  submit() {
    const { spot} = this.props;

    console.log(JSON.stringify(spot, null, '\t'));

    if (spot._id) { // eslint-disable-line
      this.props.updateSpotInServer(spot);
    } else {
      // action with same name as function
      // have to use this.props to silence lint
      this.props.createNewSpot(spot);
    }
  }

  render() {
    // Init static variables
    const {
      appLoading,
      errorWhileCreatingSpot,
      errorWhileUpdatingSpot,
      hideAlert,
      removeSpotImage,
      spot,
      spotSelected,
      spotValueChange,
      loadSpot,
      updateLocation,
    } = this.props;

    if (appLoading) {
      return (
        <div style={{ marginTop: '20%', marginBottom: '20%' }}>
          <LoadingLogo />
        </div>
      );
    }

    const alert = () => {
      if (this.props.displayAlert) {
        if (errorWhileUpdatingSpot) {
          return (<Alert message="Could not update Spot" danger />);
        } else if (errorWhileCreatingSpot) {
          return (<Alert message="Could not create Spot" danger />);
        }

        return (<Alert message="Action completed successfully" />);
      }
      return (null);
    };

    return (
      <div>
        <Helmet
          title="SCMS Spot Editor"
          meta={[
            { name: 'description', content: 'Spotin CMS Spot Editor page' },
          ]}
        />
        { alert() }
        <CenterDiv>
          <SpotForm
            onSubmit={this.submit}
            onAddNewSpot={() => {
              loadSpot({
                geo_point: '',
                name: 'No Name to display',
                description: null,
                type: SPOT_TYPES[1],
                location: {
                  address: null,
                  location: [-66.4508056640625, 18.22413378742241],
                },
                images: [],
                cost: 0,
                difficulty: 2.0,
              });
              this.props.hideAlert();
              this.props.router.push(ROUTES.SPOT_EDITOR);
            }}
            onNameChange={(name) => spotValueChange(UPDATE.name, name)}
            onAddressChange={(address) => spotValueChange(UPDATE.address, address)}
            onCostChange={(cost) => spotValueChange(UPDATE.cost, cost)}
            onDifficultyChange={(difficulty) => spotValueChange(UPDATE.difficulty, difficulty)}
            onTypeChange={(type) => spotValueChange(UPDATE.type, type)}
            onDescriptionChange={(desc) => spotValueChange(UPDATE.description, desc)}
            onImgDelete={(imageId, index) => {
              removeSpotImage(imageId, index);
              this.props.hideAlert();
              this.forceUpdate();
            }}
            onMapTouched={(lat, lng) => {
              updateLocation(lat, lng);
              this.props.hideAlert();
              this.forceUpdate();
            }}
            onLatChange={(lat) => {
              spotValueChange(UPDATE.lat, lat);
              this.props.hideAlert();
              this.forceUpdate();
            }}
            onLngChange={(lng) => {
              spotValueChange(UPDATE.lng, lng);
              this.forceUpdate();
            }}
            spot={spot}
            spotSelected={spotSelected}
          />
        </CenterDiv>
      </div>
    );
  }
}

SpotEditor.propTypes = {
  appLoading: PropTypes.bool,
  createNewSpot: PropTypes.func,
  displayAlert: PropTypes.bool,
  errorWhileCreatingSpot: PropTypes.bool,
  errorWhileUpdatingSpot: PropTypes.bool,
  hideSearchBar: PropTypes.func,
  hideAlert: PropTypes.func,
  location: PropTypes.object,
  loadSpot: PropTypes.func,
  removeSpotImage: PropTypes.func,
  spot: PropTypes.object,
  spotSelected: PropTypes.bool,
  spotValueChange: PropTypes.func,
  updateLocation: PropTypes.func,
  updateSpot: PropTypes.func,
  updateSpotInServer: PropTypes.func,
  updateForm: PropTypes.func,
};


const mapStateToProps = createStructuredSelector({
  appLoading: makeSelectLoading(),
  displayAlert: makeSelectDisplayAlert(),
  errorWhileCreatingSpot: makeSelectErrorWhileCreatingSpot(),
  errorWhileUpdatingSpot: makeSelectErrorWhileUpdatingSpot(),
  spot: makeSelectCurrentSpot(),
  spotSelected: makeSelectCurrentSpotSelected(),
});

export function mapDispatchToProps(dispatch) {
  return {
    addSpotImage() {

    },
    createNewSpot: (spot) => {
      dispatch(startLoading());
      dispatch(createNewSpot(spot));
    },
    hideSearchBar() {
      dispatch(hideSeachBar());
    },
    hideAlert() {
      dispatch(displayAlert(false));
    },
    spotValueChange(index, value) {
      const form = 'spotForm';

      switch (index) {
        case UPDATE.address:
          dispatch(updateCurrentSpotAddress(value));
          dispatch(change(form, 'spotAddress', value));
          break;
        case UPDATE.cost:
          dispatch(updateCurrentSpotCost(value));
          dispatch(change(form, 'cost', value));
          break;
        case UPDATE.description:
          dispatch(updateCurrentSpotDesc(value));
          dispatch(change(form, 'spotDesc', value));
          break;
        case UPDATE.difficulty:
          dispatch(updateCurrentSpotDifficulty(value));
          dispatch(change(form, 'difficulty', value));
          break;
        case UPDATE.lat:
          dispatch(updateCurrentSpotLat(value));
          dispatch(change(form, 'lat', value));
          break;
        case UPDATE.lng:
          dispatch(updateCurrentSpotLng(value));
          dispatch(change(form, 'lng', value));
          break;
        case UPDATE.name:
          dispatch(updateCurrentSpotName(value));
          dispatch(change(form, 'spotName', value));
          break;
        case UPDATE.type:
          dispatch(updateCurrentSpotType(value));
          dispatch(change(form, 'type', value));
          break;
        default:
          break;
      }
    },
    removeSpotImage(id, index) {
      dispatch(updateCurrentSpotRemoveImage(id, index));
    },
    updateForm: (spot) => {
      const form = 'spotForm';
      const coords = spot.location.location;

      dispatch(change(form, 'lat', coords[1]));
      dispatch(change(form, 'lng', coords[0]));
      dispatch(change(form, 'spotName', spot.name));
      dispatch(change(form, 'spotAddress', spot.location.address));
      dispatch(change(form, 'cost', spot.cost));
      dispatch(change(form, 'difficulty', spot.difficulty));
      dispatch(change(form, 'type', spot.type));
      dispatch(change(form, 'spotDesc', spot.description));

      // Data has been loaded, stop loading
      dispatch(stopLoading());
    },
    updateLocation(lat, lng) {
      const form = 'spotForm';

      dispatch(updateCurrentSpotLocation(lat, lng));
      dispatch(change(form, 'lat', lat));
      dispatch(change(form, 'lng', lng));
    },
    loadSpot(spot) {
      dispatch(loadSpotData(spot));
    },
    updateSpot: (spotId) => {
      dispatch(startLoading());
      dispatch(updateSpotData(spotId));
    },
    updateSpotInServer: (spot) => {
      dispatch(startLoading());
      dispatch(updateCurrentSpotInServer(spot));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SpotEditor);
