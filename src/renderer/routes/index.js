import React from 'react';
import { connect } from 'dva';
import { Row, Col, Input, Button } from 'antd';

import styles from './index.css';

function IndexPage() {
  return (
    <Row type="flex" justify="space-around" align="middle" style={{height: '100%'}}>
      <Col span={8}>
        <Input placeholder="记忆密码" />
        <Input placeholder="区分代号" />
        <Button style={{width: '100%'}}>生成密码（点击复制）</Button>
      </Col>
    </Row>
  );
}

export default connect()(IndexPage);
