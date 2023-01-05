import React from 'react';

import {DashboardLayout} from '../components/Layout';
import {Calendar} from '../components/Calendar'
const HomePage = () => {
  return (
    <DashboardLayout>
        <Calendar/>
    </DashboardLayout>
  )
}

export default HomePage;