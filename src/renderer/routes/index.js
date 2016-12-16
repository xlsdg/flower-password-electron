import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd';

import styles from './index.css';

function IndexPage() {
  return (
    <div>
      <Button>Flower Password</Button>
    </div>
  );
}

export default connect()(IndexPage);
