import React from 'react';
import { List, Button, NavBar, Icon,
  WhiteSpace, InputItem, Switch, WingBlank, Radio,
  TextareaItem, Stepper, Slider } from 'antd-mobile';

import './App.less';

class App extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
    };
  }

  handleChange = (e) => {
    if (e.target.checked) {
      this.setState({
        value: 1,
      });
    }
  }

  handleChange2 = (e) => {
    if (e.target.checked) {
      this.setState({
        value: 2,
      });
    }
  }

  render() {
    return (
      <div>
      <NavBar
        leftContent="返回"
        rightContent={[<Icon key="0" type="user" />, <Icon key="1" type="search" />, <Icon key="2" type="plus" />]}
      >
        第一个例子
      </NavBar>
      <WhiteSpace />
      <List>
        <List.Item
          extra={<Button type="primary" size="small" inline>button</Button>}
        >第一个例子
        </List.Item>
      </List>
      <WhiteSpace />
      <List renderHeader={() => { return '表单输入项'; }}>
        <InputItem
          defaultValue="小蚂蚁"
          clear
        >
          帐号
        </InputItem>
        <InputItem
          clear
          placeholder="请输入密码"
          type="password"
        >
          密码
        </InputItem>
        <InputItem
          clear
          error
          placeholder="校验样式"
          type="number"
        >
          密码
        </InputItem>
      </List>
      <List
        renderHeader={() => { return '表单展示项'; }}
      >
        <List.Item
          thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
          arrow="horizontal"
          onClick={() => { }}
        >
          我的钱包
        </List.Item>
        <List.Item
          thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
          arrow="horizontal"
          onClick={() => { }}
        >
          我的花销占比
        </List.Item>
      </List>
      <List
        renderHeader={() => { return '表单控件'; }}
      >
        <List.Item
          extra={<Switch />}
        >
          使用 Ant Desgin Component
        </List.Item>
        <List.Item>
          <Slider defaultValue={20} style={{ padding: '0.1rem 0' }}/>
        </List.Item>
        <List.Item
          extra={<Stepper
            showNumber
            max={10}
            min={1}
            defaultValue={20}
            onChange={() => {}}
            style={{width: '2.3rem'}}
          />}
        >
          预定人数
        </List.Item>
      </List>
      <List>
        <TextareaItem
          defaultValue="如果你有什么建议意见,欢迎你来吐槽"
          labelNumber={4}
          name="yyy"
          rows={5}
          placeholder="计数功能"
          clear
          count={100}
          onBlur={() => {
            console.log('onBlur'); // tslint:disable-line
          }}
          onFocus={(e) => {
            console.log('onFocus'); // tslint:disable-line
            console.log(e); // tslint:disable-line
          }}
        />
      </List>
      <List
        renderHeader={() => { return '列表单选'; }}
      >
        <Radio.RadioItem
          checked={this.state.value === 1}
          onChange={this.handleChange}
          disabled={this.state.disabled}
        >
          选项一
        </Radio.RadioItem>
        <Radio.RadioItem
          checked={this.state.value === 2}
          onChange={this.handleChange2}
          disabled={this.state.disabled}
        >
          选项二
        </Radio.RadioItem>
        <Radio.RadioItem
          checked
          onChange={this.handleChange}
          disabled
        >
          选项三
        </Radio.RadioItem>
        <Radio.RadioItem
          checked={false}
          onChange={this.handleChange}
          disabled
        >
          选项四
        </Radio.RadioItem>
      </List>
      <WhiteSpace />
      <WingBlank size="lg">
        <Button type="primary">通栏按钮</Button>
      </WingBlank>
      <WhiteSpace />
    </div>);
  }
}

export default App;
