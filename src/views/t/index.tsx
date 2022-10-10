import { DownOutlined} from '@ant-design/icons';
import type { SpaceProps} from 'antd';
import {
    Alert,
    Col,
    ConfigProvider,
    Divider,
    Dropdown,
    Menu,
    Progress,
    Row,
    Space,
    Spin,
    Typography,
} from 'antd';
import React, { useState } from 'react';

const SplitSpace: React.FC<SpaceProps> = (props) => (
    <Space split={<Divider type="vertical" />} size={4} {...props} />
);

export const T: React.FC = () => {
    const [color, setColor] = useState({
        primaryColor: '#1890ff',
        errorColor: '#ff4d4f',
        warningColor: '#faad14',
        successColor: '#52c41a',
        infoColor: '#1890ff',
    });

    const onColorChange = (nextColor: Partial<typeof color>) => {
        const mergedNextColor = {
            ...color,
            ...nextColor,
        };
        setColor(mergedNextColor);
        ConfigProvider.config({
            theme: mergedNextColor,
        });
    };

    return (
        <Row gutter={16} wrap={false}>
            <Col flex="auto">
                <Space direction="vertical" split={<Divider />} style={{ width: '100%' }} size={0}>
                    {/* Typography */}
                    <SplitSpace>
                        <Typography.Text type="success">Text (success)</Typography.Text>
                        <Typography.Text type="warning">Text(warning)</Typography.Text>
                        <Typography.Text type="danger">Text(danger)</Typography.Text>
                        <Typography.Link href="https://ant.design" target="_blank">
                            Link
                        </Typography.Link>
                        <Typography.Text copyable>Text</Typography.Text>

                        {/* Dropdown */}
                        <Dropdown
                            overlay={
                                <Menu
                                    items={[
                                        {
                                            key: '1',
                                            label: '1st menu item',
                                        },
                                        {
                                            key: '2',
                                            label: 'a danger item',
                                            danger: true,
                                        },
                                    ]}
                                />
                            }
                        >
                            <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                    Hover me
                                    <DownOutlined />
                                </Space>
                            </a>
                        </Dropdown>

                        {/* Spin */}
                        <Spin />
                    </SplitSpace>

                    {/* Alert */}
                    <Row gutter={16}>
                        <Col span={6}>
                            <Alert showIcon message="Success Text" type="success" />
                        </Col>
                        <Col span={6}>
                            <Alert showIcon message="Info Text" type="info" />
                        </Col>
                        <Col span={6}>
                            <Alert showIcon message="Warning Text" type="warning" />
                        </Col>
                        <Col span={6}>
                            <Alert showIcon message="Error Text" type="error" />
                        </Col>
                    </Row>

                    {/* Progress */}
                    <Row gutter={16}>
                        <Col flex="auto">
                            <Progress percent={30} />
                            <Progress percent={70} status="exception" />
                            <Progress percent={100} />
                        </Col>
                        <Col flex="none">
                            <Progress type="circle" percent={75} />
                            <Progress type="circle" percent={70} status="exception" />
                            <Progress type="circle" percent={100} />
                        </Col>
                    </Row>
                </Space>
            </Col>
        </Row>
    );
};