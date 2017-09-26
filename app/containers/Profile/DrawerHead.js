/**
 * Created by gaby on 7/5/17.
 */
import React from 'react';
import AddPhoto from 'material-ui/svg-icons/image/add-a-photo';
import PropTypes from 'prop-types';

import AddProfileImageDiv from './AddProfileImageDiv';
import AvatarContainer from './AvatarContainer';
import Button from '../../components/Button';
import SpotinIconLogo from '../../components/SpotinIconLogo';

const DrawerHead = ({ avatar, style, setAvatar }) => {

  const getAvatar = (evt) => {
    const files = evt.target.files;
    const reader = new FileReader();

    reader.onloadend = () => {
      avatar = reader.result;
      setAvatar(reader.result, Object(files[0]));
    };

    if (files.length > 0) {
      // Set new avatar
      avatar = reader.readAsDataURL(files[0]);
    }

  };

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <div style={{alignSelf: 'center', flexGrow: '1', margin: '24px 6px 24px 0px'}}>
        <SpotinIconLogo width={140} height={60}/>
      </div>
      <AvatarContainer>
        {
          // Display the "Add Profile pic/avatar" button If no profile picture is available
          // Else, display the profile pic/avatar
          avatar.get('url') ? (
            <Button style={{background: 'none', border: 'none', padding: '0px', margin: '0px'}}>
              <img
                src={avatar.get('url')}
                style={{
                  backgroundClip: 'padding-box',
                  borderRadius: '60px',
                  flexGrow: '1',
                  marginBottom: '64px',
                  height: '120px',
                  width: '120px'
                }}
              />
              <input
                type="file"
                name="pic"
                accept="image/*"
                style={{position: 'absolute', top: '16%', left: '20%', width: '30px', opacity: '0'}}
                onChange={getAvatar.bind(this)}
              />
            </Button>
          ) : (
            <AddProfileImageDiv>
              <Button style={{background: 'none', border: 'none', padding: '0px', margin: '0px'}}>
                <AddPhoto style={{height: '36px', width: '36px'}}/>
                <input
                  type="file"
                  name="pic"
                  accept="image/*"
                  style={{position: 'absolute', top: '16%', left: '20%', width: '30px', opacity: '0'}}
                  onChange={getAvatar.bind(this)}
                />
              </Button>
            </AddProfileImageDiv>
          )
        }
      </AvatarContainer>
    </div>
  );
};

DrawerHead.propTypes = {
  avatar: PropTypes.object,
  style: PropTypes.object,
  setAvatar: PropTypes.func,
};

export default DrawerHead;
