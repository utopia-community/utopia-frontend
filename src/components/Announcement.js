import { Card, Layout, message, Typography, Space, Col, Row } from "antd";
import {
  ReadOutlined,
  TeamOutlined,
  ToolOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import { getAnnouncements } from "../utils";

const { Text } = Typography;

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

const getCategoryIcon = (category) => {
  const categoryToIcon = {
    GENERAL_ANNOUNCEMENT: <HomeOutlined />,
    COMMITTEE_MEETING: <TeamOutlined />,
    MAINTENANCE_UPDATE: <ToolOutlined />,
    OTHERS: <ReadOutlined />,
  };
  return categoryToIcon[category] || <ReadOutlined />;
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
    <Layout>
      <div
        style={{
          background:
            "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(9,55,121,0.23713235294117652) 0%, rgba(0,212,255,1) 100%)",
          padding: "50px",
          textAlign: "center",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        Announcements
      </div>

      {/* display latest 6 announcements */}
      <Row
        gutter={[16, 16]}
        style={{
          paddingTop: "50px",
          paddingBottom: "50px",
          paddingLeft: "100px",
          paddingRight: "100px",
        }}
      >
        {announcements.map(({ title, category, content, creationTime }) => (
          <Col span={8}>
            <Card
              style={{
                height: "100%",
                minHeight: "200px",
                textAlign: "center",
              }}
              bordered={false}
            >
              {getCategoryIcon(category)}
              <br />
              <h1 style={{ fontSize: "18px" }}> {title}</h1>
              <AnnouncementContent content={content} date={creationTime} />
            </Card>
          </Col>
        ))}
      </Row>

      <div
        style={{
          background:
            "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(9,55,121,0.23713235294117652) 0%, rgba(0,212,255,1) 100%)",
          padding: "24px",
          textAlign: "center",
          fontSize: "12px",
        }}
      >
        <div>About us</div>
        <div>
          Utopia community features townhouses with spacious interiors,
          light-filled rooms, modern finishes and the latest in smart home tech.
        </div>
        <div>
          These are accompanied by a collection of outdoor spaces and
          hospitality-focused amenities.
        </div>
      </div>
    </Layout>
  );
};

export default Announcement;
