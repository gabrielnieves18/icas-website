/**
 * Created by gaby on 7/26/17.
 */
import React from 'react';
import PropTypes from 'prop-types';

import ChevronLeft from '../../components/ChevronLeft';
import ChevronRight from '../../components/ChevronRight';
import Wrapper from './Wrapper';

class Carousel extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);

    const { children, currentPage = 0, step } = this.props;
    const itemsCount = React.Children.toArray(children).length;

    this.state = {
      currentPage,
      itemsCount,
      finalPage: step === itemsCount ? 0 : (itemsCount / step),
    };

    this.onNextClick = this.onNextClick.bind(this);
    this.onPrevClick = this.onPrevClick.bind(this);
  }

  onNextClick(evt) {
    // Prevent Forms from submitting when inside a form
    evt.preventDefault();

    const currentPage = this.state.currentPage;
    const finalPage = this.state.finalPage;

    // update currentPage only if we are not on the last page.
    this.setState({
      currentPage: (currentPage < finalPage) ? this.state.currentPage + 1 : currentPage,
    });

    if (this.props.onNextClick) {
      this.props.onNextClick(evt);
    }
  }

  onPrevClick(evt) {
    // Prevent Forms from submitting when inside a form
    evt.preventDefault();

    const currentPage = this.state.currentPage;

    // update currentPage only if not on index page (page 0)
    this.setState({
      currentPage: (currentPage > 0) ? (currentPage - 1) : currentPage,
    });

    if (this.props.onPrevClick) {
      this.props.onPrevClick(evt);
    }
  }

  render() {
    const { children, step = 3 } = this.props;

    const buttonColor = '#a8bd22';
    const currentPage = this.state.currentPage;
    const childrenArray = React.Children.toArray(children);
    const renderChildren = [];
    const start = (currentPage * step);
    const limit = start + step;

    for (let index = start; index < limit; index += 1) {
      renderChildren.push(childrenArray[index]);
    }

    return (
      this.state.itemsCount <= 0 ? (
        <div style={{ margin: '36px 0px', textAlign: 'center', width: '100%' }}>
          <span>No Images to display</span>
        </div>
      ) : (
        <Wrapper>
          {
            // render prevButton only if not on index page (page 0)
            (currentPage > 0) && (
              <button onClick={this.onPrevClick} style={{ marginRight: '8px' }}>
                <ChevronLeft width={32} height={32} color={buttonColor} />
              </button>
            )
          }
          <div style={{ height: '100%', width: '10000px', display: 'flex', padding: '8px' }}>
            { renderChildren }
          </div>
          {
            // If the current range of pictures is not displaying the
            // Final item, allow for next button to appear
            this.state.currentPage < this.state.finalPage && (
              <button onClick={this.onNextClick} style={{ marginLeft: '8px' }}>
                <ChevronRight width={32} height={32} color={buttonColor} />
              </button>
            )
          }
        </Wrapper>
      )
    );
  }
}

Carousel.propTypes = {
  children: PropTypes.node,
  currentPage: PropTypes.number,
  onPrevClick: PropTypes.func,
  onNextClick: PropTypes.func,
  step: PropTypes.number,
};

export default Carousel;
