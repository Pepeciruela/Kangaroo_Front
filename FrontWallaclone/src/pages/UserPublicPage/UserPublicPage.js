import React from 'react';
import HeaderUserProfile from '../../components/HeaderUserProfile/HeaderUserProfile';
import './UserPublicPage.scss';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import LayoutGeneral from '../../components/LayoutGeneral/LayoutGeneral';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TabUserReviews from './TabsUserPublic/TabUserReviews';
import TabUserForSale from './TabsUserPublic/TabUserForSale';

function UserPublicPage() {
  return (
    <div id="user-public-profile">
      <LayoutGeneral>
        <Breadcrumbs />
        <div className="container content-user">
          <div className="header">
            <HeaderUserProfile />
          </div>
          <div className="tabs-section">
            <Tabs>
              <TabList>
                <Tab>Products For Sale</Tab>
                <Tab>User Reviews</Tab>
              </TabList>
              <TabPanel className="tab-panel">
                <TabUserForSale />
              </TabPanel>
              <TabPanel className="tab-panel">
                <TabUserReviews />
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </LayoutGeneral>
    </div>
  );
}

export default UserPublicPage;
