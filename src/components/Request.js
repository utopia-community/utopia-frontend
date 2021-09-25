import { useState, useEffect } from "react";
import { Card, Button, Table, Tag, Row, Col, message } from "antd";
import Title from "antd/es/typography/Title";
import { BookOutlined, DeleteFilled, FireOutlined, ToolOutlined } from "@ant-design/icons";

import NewRequest from "./NewRequest.js";
import { getCurrentRequests } from "../utils";


// Define columns
const columns = [
    {
        title: "CREATION DATE",
        dataIndex: "creationTime",
        sorter: (a, b) => new Date(a.creationTime) - new Date(b.creationTime),
        width: "10%",
        render: (creationTime) => {
            return <>
                <p>
                    {new Date(creationTime).toLocaleDateString('en-US')}
                    <span> </span>
                    {new Date(creationTime).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}
                </p>
            </>
        }
    },
    {
        title: "CATEGORY",
        dataIndex: "category",
        width: "15%",
        sorter: (a, b) => a.category.localeCompare(b.category),
        render: (category) => {
            return (
                <>
                    {(() => {
                        switch (category) {
                            case "BOOK_FACILITIES":
                                return <Tag color="grey" key={category}>
                                    <BookOutlined/> Book Facilities
                                </Tag>;
                            case "LODGE_COMPLAINT":
                                return <Tag color="grey" key={category}>
                                    <FireOutlined/> Lodge Complaint
                                </Tag>;
                            case "REQUEST_REPAIR":
                                return <Tag color="grey" key={category}>
                                    <ToolOutlined/> Request Repair
                                </Tag>;
                        }
                    })()}
                </>
            );
        },
    },
    {
        title: "DESCRIPTION",
        dataIndex: "content",
        width: "55%",
        render: (text, record) => {
            return (
                <Row gutter={{xs: 4, sm: 8, md: 12, lg: 24}}>
                    <Col span={20}>
                        <Title level={5}>{record.title}</Title>
                        {record.content}
                    </Col>
                    <Col span={4}>
                        {record.upload_pic === undefined ? (<></>) : (
                            <img src={record.upload_pic} width={100} alt="Upload"/>
                        )}
                    </Col>
                </Row>
            );
        },
    },
    {
        title: "STATUS",
        dataIndex: "status",
        width: "10%",
        sorter: (a, b) => a.status.localeCompare(b.status),
        render: (status) => {
            let color = "green";
            if (status === "Open") {
                color = "pink";
            } else if (status === "In progress") {
                color = "blue";
            }
            return (
                <Tag color={color} key={status}>
                    {status.toUpperCase()}
                </Tag>
            );
        },
    },
    {
        title: "ACTION",
        width: "10%",
        render: () => {
            return (
                <Button danger size={"small"}>
                    <DeleteFilled/>
                    Delete
                </Button>
            );
        },
    }
];

// Request Component
const Request = () => {
  // NewRequest modal display controller
    const [newRequestVisible, setNewRequestVisible] = useState(false);
    const handleCloseModal = () => setNewRequestVisible(false);

  // fetch current user's requests
    const [currentRequests, setCurrentRequests] = useState([]);
    useEffect(() => {
        getCurrentRequests()
            .then((data) => {
                setCurrentRequests(data);
                console.log(data);
            })
            .catch((err) => {
                message.error(err.message);
            });
    }, []);

    return (
        <>
            {newRequestVisible && (
                <NewRequest
                    displayModal={newRequestVisible}
                    onSuccess={handleCloseModal}
                    onCancel={handleCloseModal}
                />
            )}
            <Card
                title="Request"
                extra={
                    <Button
                        shape="round"
                        onClick={() => {
                            setNewRequestVisible(true);
                        }}
                    >
                        New Request
                    </Button>
                }
            >
                <Table
                    columns={columns}
                    dataSource={currentRequests}
                    rowKey="request_id"
                    pagination={{
                        onChange: (page) => {
                            console.log(page);
                        },
                        pageSize: 5,
                    }}
                />
            </Card>
        </>
    );
};

export default Request;