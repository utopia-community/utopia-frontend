import { useHistory } from "react-router-dom";
import React from 'react';
import { Card, Button, Table, Tag, Space, Row, Col, Typography, Input } from 'antd';
import { DeleteFilled } from "@ant-design/icons";
import no_picture from './no_picture.png';

const { Title } = Typography;
const { Search } = Input;

const testData = [];
for (let i = 1; i < 23; i++) {
    if (i % 2 !== 0) {
        testData.push({
            title: `Resident Request #${i}`,
            description:
                'This is a service request from resident. This is a service request from resident. This is a service request from resident. ' +
                'This is a service request from resident. This is a service request from resident. This is a service request from resident.',
            status: 'Active',
            date_created: `9/${5+i}/2021`,
            request_id : `100${i}`,
            upload_pic: 'https://www.nicepng.com/png/full/417-4176164_transparent-light-bulb-cartoon.png'
        });
    } else {
        testData.push({
            title: `Resident Request #${i}`,
            description:
                'This is a complete request. This is a complete request. This is a complete request. ' +
                'This is a complete request. This is a complete request. This is a complete request.',
            status: 'Completed',
            date_created: `9/${5+i}/2021`,
            request_id : `${1000+i}`
        });
    }
}
// console.log(testData);


// Table -Columns definition
const columns = [
    {
        title: 'SUBJECT',
        dataIndex: 'title',
        width:'70%',
        render: (text, record) => {
            // console.log(record);
            return (
                <Row gutter={{ xs: 4, sm: 8, md: 12, lg: 24 }}>
                    <Col span={4}>
                        {
                            record.upload_pic === undefined ?
                                <img
                                    src={no_picture}
                                    width={100}
                                    alt="No image"
                                /> :
                                <img
                                    src={record.upload_pic}
                                    width={100}
                                    alt="Upload"
                                />
                        }
                    </Col>

                    <Col span={19}>
                        <Title level={4}>{text}</Title>
                        {record.description}
                    </Col>
                </Row>
            )
        }
    },
    {
        title: 'STATUS',
        dataIndex: 'status',
        width:'10%',
        sorter: (a, b) => a.status.localeCompare(b.status),
        render: (status) => {
            let color = 'pink';
            if (status === 'Completed') {
                color = 'green';
            }
            return (
                <Tag color={color} key={status}>
                    {status.toUpperCase()}
                </Tag>
            )
        },
    },
    {
        title: 'DATE',
        dataIndex: 'date_created',
        sorter: (a, b) => new Date(a.date_created) - new Date(b.date_created),
        width:'10%'
    },
    {
        title: 'ACTION',
        width:'10%',
        render: (text, record) => {
            return (
                <Space size="middle">
                    <Button danger><DeleteFilled />Delete</Button>
                    {
                        record.status === "Completed" ? <></> :
                            <Button type="primary">Resolved</Button>
                    }
                </Space>
            )
        }
    },
];


// Request Component
const Request = () => {
    return (
        <>
            <div className="page-top-title">Requests</div>

            <Card title={
                (
                    <Row justify="space-between" align="middle">
                        <Col span={4}>
                            <Search placeholder="Search Request" enterButton />
                        </Col>
                        <Col>
                            <Button
                                shape="round"
                                size="large"
                                style={
                                    {
                                        background: "lightskyblue",
                                        fontWeight: 500,
                                        color: "white"
                                    }
                                }
                            >Create new request
                            </Button>
                        </Col>
                    </Row>
                )
            }>

                <Table
                    columns={columns}
                    dataSource={testData}
                    rowKey="request_id"
                    pagination={{
                        onChange: page => {
                            console.log(page);
                        },
                        pageSize: 5,
                    }}
                />

            </Card>
        </>
    )
}

export default Request;