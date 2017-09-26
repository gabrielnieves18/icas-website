/**
 * Created by gaby on 7/19/17.
 */
import React from 'react';
import PropTypes from 'prop-types';

import { reduxForm, Field } from 'redux-form/immutable';

import { SPOT_TYPES } from '../../constants';

import renderField from './renderFields';
import renderTextArea from './renderTextArea';

import validate from './validate';
import warn from './warn';

import Button from '../../components/Button';
import Carousel from '../Carousel';
import Img from './Img';
import MapSection from './MapSection';

const SpotForm = (props) => { // eslint-disable-line react/prefer-stateless-function
  const {
    handleSubmit,
    onAddNewSpot,
    onNameChange,
    onAddressChange,
    onCostChange,
    onDifficultyChange,
    onTypeChange,
    onDescriptionChange,
    onImgDelete,
    onLatChange,
    onLngChange,
    onMapTouched,
    pristine,
    reset,
    spot: {
      _id = 'No id to display',
      images, // [ object ]
      location = {}, // { address, location = [long, lat] }
      name = 'No name to display',
    },
    submitting,
  } = props;

  const coord = location.location ? location.location : [-66.4508056640625, 18.22413378742241];

  const marker = {
    position: {
      lat: coord[1],
      lng: coord[0],
    },
    key: name,
    defaultAnimation: 2,
  };

  return (
    <form onSubmit={handleSubmit} >
      <section>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <h3 style={{ minWidth: '100%' }} >{name}</h3>
          <h5 style={{ color: 'gray', minWidth: 'auto', marginRight: '16px', marginBottom: '16px' }} >{_id}</h5>
          <div style={{ minWidth: 'auto', position: 'relative', bottom: '6px' }}>
            <Button
              onClick={(evt) => {
                evt.preventDefault();
                reset();
                onAddNewSpot();
              }}
              style={{ margin: '0', padding: '0px', height: '32px', width: '32px' }}
            >
              +
            </Button>
          </div>
          <div style={{ minWidth: '100%', textAlign: 'center' }}>
            <hr style={{ marginTop: '8px', marginBottom: '24px' }} />
          </div>
        </div>
      </section>
      <section>
        <Row>
          <Col sm="12" md="6" style={{ padding: '8px 15px 8px 15px' }}>
            {
              // spot: {
              //   cost,
              //   difficulty,
              //   description,
              //   images, // [ object ]
              //   labels, // [ string ]
              //   location, // { address, location = [long, lat] }
              //   name = 'No name to display',
              //   popularity,
              //   reviews, // [ object ]
              //   type,
              //   user,
              // }
            }
            <section>
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <Field
                  name="spotName"
                  type="text"
                  component={renderField}
                  label="Name"
                  style={{ minWidth: '100%' }}
                  onChange={(evt) => {
                    evt.preventDefault();
                    onNameChange(evt.target.value);
                  }}
                  noLabel
                />
                <Field
                  name="spotAddress"
                  type="text"
                  component={renderField}
                  label="Address"
                  style={{ minWidth: '100%' }}
                  onChange={(evt) => onAddressChange(evt.target.value)}
                  noLabel
                />
                <div style={{ minWidth: '100%' }}>
                  <Field
                    name="cost"
                    type="number"
                    min="0" max="999"
                    component={renderField}
                    label="Cost"
                    style={{ width: '25%', position: 'absolute' }}
                    onChange={(evt) => onCostChange(Number(evt.target.value))}
                    noLabel
                  />
                  <Field
                    name="difficulty"
                    type="number"
                    min="1" max="5" step="0.1"
                    component={renderField}
                    label="Difficulty"
                    style={{ width: '20%', position: 'absolute', left: '35%' }}
                    onChange={(evt) => onDifficultyChange(Number(evt.target.value))}
                    noLabel
                  />
                  <Field
                    name="type"
                    component="select"
                    style={{ border: 'solid thin #d2d2d2', height: '34px', margin: '2px 6px 8px 6px', marginLeft: '60%', width: '30%' }}
                    onChange={(evt) => onTypeChange(evt.target.value)}
                  >
                    {
                      SPOT_TYPES.map((val, index) => (
                        <option key={`${val}_${index}`} value={val}>{val}</option>
                      ))
                    }
                  </Field>
                </div>
                <Field
                  name="spotDesc"
                  type="text"
                  component={renderTextArea}
                  label="Description"
                  style={{ width: '100%' }}
                  onChange={(evt) => onDescriptionChange(evt.target.value)}
                />
              </div>
            </section>
          </Col>
          <MapSection
            mapCenter={{ lat: coord[1], lng: coord[0] }}
            markers={[marker]}
            onLatChange={onLatChange}
            onLngChange={onLngChange}
            onTouchMap={onMapTouched}
          />
        </Row>
      </section>
      <section>
        <Carousel step={2} >
          {
            images && (
              images.map((imageObj, index) => (
                <div
                  style={{ textAlign: 'center' }}
                  key={imageObj._id} // eslint-disable-line
                >
                  <Img src={imageObj.image.s3Path} alt="Spot" />
                  <div>
                    <Button
                      onClick={(evt) => {
                        evt.preventDefault();
                        // To-Do, remove photo from array to delete
                        // Will need to dispatch an action
                        console.log('\n\n\nIndex: ', index);
                        onImgDelete(imageObj._id, index); // eslint-disable-line
                      }}
                      style={{
                        textAlign: 'center',
                        color: 'white',
                        borderColor: '#EC644B',
                        backgroundColor: '#EC644B',
                        margin: '2% 0',
                        width: '80%',
                      }}
                    >Delete</Button>
                  </div>
                </div>
              ))
            )
          }
        </Carousel>
      </section>
      <section>
        <hr style={{ width: '75%' }} />
        <div style={{ padding: '16px', textAlign: 'center' }}>
          <Button type="submit" disabled={submitting} primary>
            Submit
          </Button>
          <Button type="button" disabled={pristine || submitting} onClick={() => console.log(' ')}>
            Add a new image
          </Button>
        </div>
      </section>
    </form>
  );
};

SpotForm.propTypes = {
  handleSubmit: PropTypes.func,
  onAddNewSpot: PropTypes.func,
  onNameChange: PropTypes.func.isRequired,
  onAddressChange: PropTypes.func.isRequired,
  onCostChange: PropTypes.func.isRequired,
  onDifficultyChange: PropTypes.func.isRequired,
  onTypeChange: PropTypes.func.isRequired,
  onDescriptionChange: PropTypes.func.isRequired,
  onImgDelete: PropTypes.func.isRequired,
  onLatChange: PropTypes.func.isRequired,
  onLngChange: PropTypes.func.isRequired,
  onMapTouched: PropTypes.func.isRequired,
  pristine: PropTypes.bool,
  reset: PropTypes.func,
  spot: PropTypes.object,
  submitting: PropTypes.bool,
};

export default reduxForm({
  form: 'spotForm', // <--- a unique name for this form
  validate, // <--- validation function given to redux-form
  warn, // <--- warning function given to redux-form
})(SpotForm);
