import { Card, message, Typography, Space, Col, Row } from "antd";
import { SoundOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { getAnnouncements } from "../utils";

const { Text } = Typography;
const { Meta } = Card;

const AnnouncementContent = (props) => {
  return (
    <Space direction="vertical">
      <h5>
        <Text type="secondary"> {props.date}</Text>
      </h5>
      <Text>{props.content}</Text>
    </Space>
  );
};

const Announcement = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    getAnnouncements()
      .then((data) => {
        setAnnouncements(data);
      })
      .catch((err) => {
        message.error(err.message);
      });
  }, []);

  return (
    <>
       <Row gutter={[16, 16]}>
        {announcements.map(({ title, category, content, creationTime }) => (
          <Col span={8}>
            <Card style={{height: '100%', minHeight: '200px'}} bordered={false}>
              <Meta avatar={<SoundOutlined />} title={title} />
              <AnnouncementContent content={content} date={creationTime} />
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Announcement;
