// eslint-disable-next-line no-unused-vars
import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;
// eslint-disable-next-line no-undef
const CardComp = (props) => (
  <Card
    style={{
      width: 250,
      marginLeft: 40
    }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
      title={props.card.name}
      description={props.card.desc}
    />
    {props.card?.isCaptain?<p>Captain</p>:null}
  </Card>
);
export default CardComp;