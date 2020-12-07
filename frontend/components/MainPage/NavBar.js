import React, {Component} from 'react';
import {Slider, Menu, Dropdown, Button} from 'antd';
import {DownOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';

const onClick = ({key}) => {
    // do something with the key
};

class NavBar extends Component {


    render() {
        const categoryMenu = (
            <Menu onClick={onClick}>
              <Menu.Item key="1">
                Work
              </Menu.Item>
              <Menu.Item key="2">
                Yard work
              </Menu.Item>
              <Menu.Item key="3">
                  Borrowing
              </Menu.Item>
              <Menu.Item key="4">Spend time</Menu.Item>
            </Menu>
        );

        const marks = {
            0: 'Today',
            1: 'Tomorrow',
            3: '3 days',
            7: '1 week',
        }

        // const deadlineMenu = (
        //       <Slider marks={marks} step={null} defaultValue={0} tipformatter={null} size ={"45px"}/>  
        // );

        return (
        <div>

            <Slider marks={marks} included={false} step={null} defaultValue={0} tipFormatter={null} max={7} />
            <Dropdown overlay={categoryMenu}>
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    Category <DownOutlined />
                </a>
            </Dropdown>

            <Button>Start location</Button>

            <Button>End location</Button>
        </div>);
    } 
}
export default NavBar;