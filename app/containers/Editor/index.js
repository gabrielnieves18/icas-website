/**
 * Created by gaby on 7/18/17.
 */
import React from 'react';
import AppBar from 'material-ui/AppBar';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import SVGArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import SVGSave from 'material-ui/svg-icons/content/save';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';

import {
  makeSelectIsMobile,
  makeSelectLoading,
  makeSelectScreenDimentions,
} from '../App/selectors';

import {
  makeSelectCurrentSection,
  makeSelectCompletedSections,
  makeSelectDisplaySaveModal,
  makeSelectSubmitNewPKG,
} from './selectors';

import { makeSelectLocale } from '../LanguageProvider/selectors';

import {
  displaySaveModal,
  hideSaveModal,
  sectionCompleted,
  sectionUncompleted,
  updateCurrentSection,
} from './actions';

import {
  startLoading,
  stopLoading,
} from '../App/actions';

import { EDITOR_SECTIONS } from './constants';
import { ROUTES } from '../../constants';

import Body from './Body';
import Button from './Button';
import CategoriesSectionForm from '../EditorForms/CategoriesSectionForm';
import DateSectionForm from '../EditorForms/DateSectionForm';
import DescriptionSectionForm from '../EditorForms/DescriptionSectionForm';
import GroupSizeSectionForm from '../EditorForms/GroupSizeSectionForm';
import SaveAndExitModal from '../../components/SaveAndExitModal';
import EditorDrawer from './EditorDrawer';
import ImagesSectionForm from '../EditorForms/ImagesSectionForm';
import LanguageSectionForm from '../EditorForms/LanguageSectionForm';
import LoadingLogo from '../../components/LoadingLogo';
import OneLinerSectionForm from '../EditorForms/OneLinerSectionForm';
import PackingListSectionForm from '../EditorForms/PackingListSectionForm';
import PriceSectionForm from '../EditorForms/PriceSectionForm';
import RendezvousSectionForm from '../EditorForms/RendezvousSectionForm';
import RequirementsSectionForm from '../EditorForms/RequirementsSectionForm';
import messages from './messages';
import SaveAndExitSec from './SaveAndExitSec';
import SectionDiv from './SectionDiv';
import TitleSectionForm from '../EditorForms/TitleSectionForm';
import Wrapper from './Wrapper';

class Editor extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };

    this.updateRow = this.updateRow.bind(this);
    this.validateRow = this.validateRow.bind(this);
  }

  componentDidMount() {
    this.props.stopLoading();
  }

  handleToggle() {
    this.setState({open: !this.state.open});
  }

  onSubmit() {
    console.log('Submit form');
  }

  validateRow(row, valid) {
    valid ? (
      this.props.sectionCompleted(row)
    ) : (
      this.props.sectionUncompleted(row)
    );
  }

  updateRow(nextRow) {
    // Set section to uncompleted
    // If the users clicks the navigation bar
    // instead of the "Next Page"/"Submit" button
    this.props.sectionUncompleted(nextRow); // Refresh section
    this.props.updateCurrentSection(nextRow); // Navigate to new section
  }

  render() {
    const {
      appLoading,
      closeSaveModal,
      completedRows,
      currentSection,
      isMobile,
      isSaveModalOpen,
      locale,
      openSaveModal,
      router,
      screenDimen,
      sectionCompleted,
      sectionUncompleted,
      updateCurrentSection,
    } = this.props;

    const styles = {
      appBar: {
        background: 'rgb(217, 56, 73)',
        position: 'absolute',
        left: '0px',
        top: '0px'
      },
      arrowBack: {
        height: '18px',
        width: '18px',
        paddingBottom: '2px'
      },
      fab: {
        background: '#417505',
        bottom: `${ isMobile ? '16px' : '32px' }`,
        position: 'fixed',
        right: '24px',
        zIndex: '500'
      },
      msgDiv: {
        color: 'rgb(96, 101, 104)',
        height: '16px',
        paddingLeft: '32px',
        textAlign: 'start',
        width: '100%',
      },
      navItem: {
        fontStyle: { color: 'black' },
        iconStyle: { color: '' },
      },
      navItemSelected: {
        fontColorStyle: { color: 'white' },
        iconStyle: { color: '' },
      },
      underscoreDiv: {
        borderBottom: '1px solid rgb(210, 210, 210)',
        padding: '0 25%'
      },
      welcomeSpan: {
        fontSize: '42px',
        fontFamily: 'Helvetica Neue, Arial, sans-serif',
        fontWeight: 'lighter',
        padding: '16px'
      },
    };

    return (
      <Wrapper>
        <Helmet
          title="Spotter Dashboard Home"
          meta={[
            { name: 'description', content: 'Spotin Spotter Dashboard Home Page' },
          ]}
        />
        {
          appLoading ? (
            <div style={{ marginTop: '25%', marginBottom: '25%' }}>
              <LoadingLogo />
            </div>
          ) : (
            <div>
              {
                // Only display navBar if being displayed on a mobile device
                // Use static navigation drawer If Desktop is displayed on a desktop
                isMobile ? (
                  <AppBar
                    title="Spotin"
                    style={styles.appBar}
                    onLeftIconButtonTouchTap={ (evt) => this.handleToggle() }
                  />
                ) : null
              }
              <EditorDrawer
                completedRows={completedRows}
                currentRow={ currentSection }
                isMobile={isMobile}
                open={this.state.open}
                setOpen={this.setState.bind(this)}
                smallScreen={screenDimen.get('height') < 750}
                updateCurrentSection={this.updateRow}
              />
              <Body>
                <SaveAndExitSec>
                  <Button onClick={() => router.push(ROUTES.HOME) }>
                    <SVGArrowBack style={styles.arrowBack} />
                    <span>Save &amp; Exit</span>
                  </Button>
                </SaveAndExitSec>
                <SectionDiv>
                  {
                    (
                      currentSection === EDITOR_SECTIONS.language ) && (
                        <LanguageSectionForm
                          locale={locale}
                          onSubmit={() => {
                            updateCurrentSection(EDITOR_SECTIONS.category);
                          }}
                          validateRow={(valid) => {
                            this.validateRow(EDITOR_SECTIONS.language, valid);
                          }}
                        />
                    ) || (
                      currentSection === EDITOR_SECTIONS.category ) && (
                        <CategoriesSectionForm
                          locale={locale}
                          onSubmit={() => {
                            updateCurrentSection(EDITOR_SECTIONS.title);
                          }}
                          validateRow={(valid) => {
                            this.validateRow(EDITOR_SECTIONS.category, valid);
                          }}
                        />
                    ) || (
                      currentSection === EDITOR_SECTIONS.title ) && (
                        <TitleSectionForm
                          locale={locale}
                          onSubmit={() => {
                            updateCurrentSection(EDITOR_SECTIONS.date);
                          }}
                          validateRow={(valid) => {
                            this.validateRow(EDITOR_SECTIONS.title, valid);
                          }}
                        />
                    ) || (
                      currentSection === EDITOR_SECTIONS.date ) && (
                        <DateSectionForm
                          locale={locale}
                          onSubmit={() => {
                            updateCurrentSection(EDITOR_SECTIONS.oneLiner);
                          }}
                          validateRow={(valid) => {
                            this.validateRow(EDITOR_SECTIONS.date, valid);
                          }}
                        />
                    ) || (
                      currentSection === EDITOR_SECTIONS.oneLiner ) && (
                        <OneLinerSectionForm
                          locale={locale}
                          onSubmit={() => {
                            updateCurrentSection(EDITOR_SECTIONS.price);
                          }}
                          validateRow={(valid) => {
                            this.validateRow(EDITOR_SECTIONS.oneLiner, valid);
                          }}
                        />
                    ) || (
                      currentSection === EDITOR_SECTIONS.price ) && (
                        <PriceSectionForm
                          locale={locale}
                          onSubmit={() => {
                            updateCurrentSection(EDITOR_SECTIONS.description);
                          }}
                          validateRow={(valid) => {
                            this.validateRow(EDITOR_SECTIONS.price, valid);
                          }}
                        />
                    ) || (
                      currentSection === EDITOR_SECTIONS.description ) && (
                        <DescriptionSectionForm
                          locale={locale}
                          onSubmit={() => {
                            updateCurrentSection(EDITOR_SECTIONS.images);
                          }}
                          validateRow={(valid) => {
                            this.validateRow(EDITOR_SECTIONS.description, valid);
                          }}
                        />
                    ) || (
                      currentSection === EDITOR_SECTIONS.images ) && (
                        <ImagesSectionForm
                          locale={locale}
                          onSubmit={() => {
                            updateCurrentSection(EDITOR_SECTIONS.rendezvous);
                          }}
                          validateRow={(valid) => {
                            this.validateRow(EDITOR_SECTIONS.images, valid);
                          }}
                        />
                    ) || (
                      currentSection === EDITOR_SECTIONS.rendezvous ) && (
                        <RendezvousSectionForm
                          locale={locale}
                          onSubmit={() => {
                            updateCurrentSection(EDITOR_SECTIONS.requirements);
                          }}
                          validateRow={(valid) => {
                            this.validateRow(EDITOR_SECTIONS.rendezvous, valid);
                          }}
                        />
                    ) || (
                      currentSection === EDITOR_SECTIONS.requirements ) && (
                        <RequirementsSectionForm
                          locale={locale}
                          onSubmit={() => {
                            updateCurrentSection(EDITOR_SECTIONS.groupSize);
                          }}
                          validateRow={(valid) => {
                            this.validateRow(EDITOR_SECTIONS.requirements, valid);
                          }}
                        />
                    ) || (
                      currentSection === EDITOR_SECTIONS.groupSize ) && (
                        <GroupSizeSectionForm
                          locale={locale}
                          onSubmit={() => {
                            updateCurrentSection(EDITOR_SECTIONS.packingList);
                          }}
                          validateRow={(valid) => {
                            this.validateRow(EDITOR_SECTIONS.groupSize, valid);
                          }}
                        />
                    ) || (
                      currentSection === EDITOR_SECTIONS.packingList ) && (
                        <PackingListSectionForm
                          locale={locale}
                          onSubmit={() => {
                            updateCurrentSection(EDITOR_SECTIONS.reviewAndSubmit);
                          }}
                          validateRow={(valid) => {
                            this.validateRow(EDITOR_SECTIONS.packingList, valid);
                          }}
                        />
                    ) || (
                      currentSection === EDITOR_SECTIONS.reviewAndSubmit ) && (
                        <div>
                          <span>reviewAndSubmit</span>
                        </div>
                    )
                  }
                </SectionDiv>
                <section>
                  <FloatingActionButton style={styles.fab} backgroundColor={styles.fab.background} onClick={openSaveModal}>
                    <SVGSave style={{height: '32px', width: '32px'}} />
                  </FloatingActionButton>
                  <SaveAndExitModal open={isSaveModalOpen} onDismiss={closeSaveModal} />
                </section>
              </Body>
            </div>
          )
        }
        { console.log('Submit:', this.props.submitPKG) }
      </Wrapper>
    );
  }
}

Editor.propTypes = {
  appLoading: PropTypes.bool,
  closeSaveModal: PropTypes.func,
  currentObjectSelected: PropTypes.bool,
  currentSection: PropTypes.number,
  completedRows: PropTypes.object,
  isMobile: PropTypes.bool,
  isSaveModalOpen: PropTypes.bool,
  locale: PropTypes.string,
  openSaveModal: PropTypes.func,
  router: PropTypes.object,
  sectionCompleted: PropTypes.func,
  sectionUncompleted: PropTypes.func,
  stopLoading: PropTypes.func,
  screenDimen: PropTypes.object,
  submitPKG: PropTypes.bool,
  updateCurrentSection: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  appLoading: makeSelectLoading(),
  currentSection: makeSelectCurrentSection(),
  completedRows: makeSelectCompletedSections(),
  isMobile: makeSelectIsMobile(),
  isSaveModalOpen: makeSelectDisplaySaveModal(),
  locale: makeSelectLocale(),
  screenDimen: makeSelectScreenDimentions(),
  submitPKG: makeSelectSubmitNewPKG(),
});

export function mapDispatchToProps(dispatch) {
  return {
    closeSaveModal: () => {
      dispatch(hideSaveModal());
    },
    openSaveModal: () => {
      dispatch(displaySaveModal());
    },
    sectionCompleted: (section) => {
      dispatch(sectionCompleted(section));
    },
    sectionUncompleted: (section) => {
      dispatch(sectionUncompleted(section));
    },
    stopLoading: () => {
      dispatch(stopLoading());
    },
    updateCurrentSection: (section) => {
      dispatch(updateCurrentSection(section));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor);

