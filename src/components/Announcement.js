import { Card, Typography, Space, Button } from "antd";
import { Link } from "react-router-dom";
import { useState } from "react";

import "./NewAnnouncement.js";
import NewAnnouncement from "./NewAnnouncement.js";

import { getAnnouncements } from "../api";

import "./Profile.js";

import { CalendarOutlined } from "@ant-design/icons";
const { Text } = Typography;

const AnnouncementContent = (props) => {
  const date = new Date().toISOString().slice(0, 10);
  return (
    <Space direction="vertical">
      <h5>
        <CalendarOutlined />
        <Text type="secondary"> {date}</Text>
      </h5>

      <Text>{props.content}</Text>
    </Space>
  );
};

const Announcement = () => {
  const [visible, setVisible] = useState(false);

  const handleCloseModal = () => {
    setVisible(false);
  }

  return (
    <>
    {visible && (
      <NewAnnouncement
        displayModal={visible}
        onSuccess={handleCloseModal}
        onCancel={handleCloseModal}
      />
    )}
    <Card
      title="Announcement"
      extra={
        <Button
          shape="round"
          onClick={() => {
            setVisible(true);
          }}
        >
          New Announcement
        </Button>
      }
    >
      <Card
        type="inner"
        title="Title 1"
        extra={<Link to="/announcement-details">More</Link>}
      >
        <AnnouncementContent content="Content here..." />
      </Card>

      <Card
        style={{ marginTop: 16 }}
        type="inner"
        title="Title 2"
        extra={<Link to="/announcement-details">More</Link>}
      >
        <AnnouncementContent content="Content here..." />
      </Card>
    </Card>
    </>
  );
};

export default Announcement;
