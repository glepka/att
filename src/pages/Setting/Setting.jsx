import React from 'react';
import s from './Setting.module.css';
import Header from '../../components/Header/Header';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import EditProfile from '../../components/EditProfile/EditProfile';

export default function Setting() {
  return (
    <div className={s.page}>
      <Header title="Setting" />
      <div className={s.container}>
        <Tabs className={s.tabs}>
          <TabList className={s.tabList}>
            <Tab className={s.tab} selectedClassName={s.selected}>
              Edit Profile
            </Tab>
            <Tab className={s.tab} selectedClassName={s.selected}>
              Preferences
            </Tab>
            <Tab className={s.tab} selectedClassName={s.selected}>
              Security
            </Tab>
          </TabList>

          <TabPanel>
            <EditProfile />
          </TabPanel>
          <TabPanel>
            <h2>Preferences</h2>
          </TabPanel>
          <TabPanel>
            <h2>Security</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}
