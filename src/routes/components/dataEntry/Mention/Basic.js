import React from "react";
import {Card} from "antd";
import { Mention } from '@ant-design/compatible';

const {toString, toContentState} = Mention;

function onChange(contentState) {
  console.log(toString(contentState));
}

function onSelect(suggestion) {
}

const Basic = () => {
  return (
    <Card className="gx-card" title="Basic">
      <Mention
        style={{width: '100%'}}
        onChange={onChange}
        defaultValue={toContentState('@afc163')}
        suggestions={['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご']}
        onSelect={onSelect}
      />
    </Card>
  );
};

export default Basic;
