import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/_app';
import * as AWS from 'aws-sdk'

import { ConfigurationOptions } from 'aws-sdk'



const configuration: ConfigurationOptions = {
  region: 'YOUR_REGION',
  accessKeyId: 'AKIAQQ2OFUOCQCWS7FVU'
}

AWS.config.update(configuration)


ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);