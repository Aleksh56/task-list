import React, { useState } from 'react'
import {
  CalendarOutlined,
  PieChartOutlined,
  FundOutlined,
  FolderOutlined,
  AppstoreOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PlusOutlined,
  FileOutlined,
} from '@ant-design/icons'
import {
  Button,
  Menu,
  Divider,
  List,
  Skeleton,
  Avatar,
  Typography,
  Image,
} from 'antd'
import SubMenu from 'antd/es/menu/SubMenu'
import Title from 'antd/es/typography/Title'
import { ItemType } from '../../interfaces/SidebarType'

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false)

  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }

  function getItem(
    label: string | string[],
    key: string,
    icon: React.ReactNode,
    children: ItemType[] | null = null,
    type = 'group'
  ): ItemType {
    return {
      key,
      icon,
      children,
      label,
      type,
    }
  }

  const items: ItemType[] = [
    getItem(
      'Overview',
      'OverviewMenuGroup',
      <AppstoreOutlined />,
      [
        getItem('Option 5', '5', null, null, 'item'),
        getItem('Option 6', '6', null, null, 'item'),
        getItem('Option 7', '7', null, null, 'item'),
        getItem('Option 8', '8', null, null, 'item'),
      ],
      'Group'
    ),
    getItem('Calendar', 'CalendarItem', <CalendarOutlined />, null, 'Item'),
    getItem('Analytics', 'AnalyticsItem', <PieChartOutlined />, null, 'Item'),
    getItem('Activity', 'ActivityItem', <FundOutlined />, null, 'Item'),
    getItem('Projects', 'ProjectsItem', <FolderOutlined />, null, 'Item'),
  ]
  return (
    <div className="h-screen flex flex-col w-[256px]">
      <Menu
        defaultSelectedKeys={['OverviewMenuGroup']}
        mode="inline"
        theme="light"
        inlineCollapsed={collapsed}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Button
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={toggleCollapsed}
          className="ml-auto my-2 mr-1 border-0 shadow-none text-[16px]"
        />
        {items.map((item) =>
          item.type === 'Group' ? (
            <SubMenu key={item.key} icon={item.icon} title={item.label}>
              {item.children?.map((child) => (
                <Menu.Item key={child.key} icon={child.icon}>
                  {child.label}
                </Menu.Item>
              ))}
            </SubMenu>
          ) : (
            <Menu.Item key={item.key} icon={item.icon}>
              {item.label}
            </Menu.Item>
          )
        )}
        <Divider className="min-w-[80%] w-[80%] mx-auto mb-[12px]" />
        <div className="projects ml-[4px] pl-[24px] pr-[16px]">
          <div className="projects__title flex items-center justify-between mb-[12px]">
            <Title
              level={5}
              className="uppercase mb-0"
              style={{ marginBottom: '0' }}
            >
              Projects
            </Title>
            <Button
              icon={<PlusOutlined />}
              href="https://www.google.com"
              style={{ width: '26px' }}
              className="flex items-center justify-center text-[10px] w-[26px] h-[26px] ml-2 bg-[#5577FF] font-boldest"
            />
          </div>
          <List className="demo-loadmore-list" itemLayout="horizontal">
            {[1, 2, 3].map((item) => (
              <List.Item key={item}>
                <Skeleton avatar title={false} active>
                  <List.Item.Meta
                    avatar={
                      <Avatar src="https://klike.net/uploads/posts/2023-02/1677050182_3-93.jpg" />
                    }
                    title={<a href="https://ant.design">Scott</a>}
                  />
                  <div>123</div>
                </Skeleton>
              </List.Item>
            ))}
          </List>
        </div>
        <Divider className="min-w-[80%] w-[80%] mx-auto mb-[12px]" />
        <div className="tasks ml-[4px] pl-[24px] pr-[16px]">
          <div className="tasks__title flex items-center justify-between mb-[12px]">
            <Title
              level={5}
              className="uppercase mb-0"
              style={{ marginBottom: '0' }}
            >
              Tasks
            </Title>
            <Button
              icon={<PlusOutlined />}
              href="https://www.google.com"
              style={{ width: '26px' }}
              className="flex items-center justify-center text-[10px] w-[26px] h-[26px] ml-2 bg-[#5577FF] font-boldest"
            />
          </div>
          <List className="demo-loadmore-list" itemLayout="horizontal">
            {[1, 2, 3, 4].map((item) => (
              <List.Item key={item}>
                <Skeleton avatar title={false} active>
                  <List.Item.Meta
                    avatar={<FileOutlined style={{ fontSize: '32px' }} />}
                    title={<Typography.Text>Document Name</Typography.Text>}
                  />
                  <div>
                    <Typography.Text strong>123</Typography.Text>
                  </div>
                </Skeleton>
              </List.Item>
            ))}
          </List>
        </div>
      </Menu>
    </div>
  )
}

export default Sidebar
