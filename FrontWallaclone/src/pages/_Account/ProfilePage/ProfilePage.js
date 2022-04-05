import React from 'react';
import LayoutAccount from '../../../components/LayoutAccount/LayoutAccount';
import './ProfilePage.scss';
import TabProfileEdit from './TabsProfile/TabProfileEdit';
import TabProfilePassword from './TabsProfile/TabProfilePassword';
import TabProfileCloseAccount from './TabsProfile/TabProfileCloseAccount';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function ProfilePage() {
  return (
    <LayoutAccount title={'Profile Settings'} subtitle={'Lorem ipsum dolor sit amet, consectetur'}>
      <div id="profile-page">
        <Tabs>
          <TabList>
            <Tab>Edit Profile</Tab>
            <Tab>Password</Tab>
            <Tab>Close Account</Tab>
          </TabList>
          <div className="account-container">
            <TabPanel>
              <TabProfileEdit />
            </TabPanel>
            <TabPanel>
              <TabProfilePassword />
            </TabPanel>
            <TabPanel>
              <TabProfileCloseAccount />
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </LayoutAccount>
  );
}

export default ProfilePage;
