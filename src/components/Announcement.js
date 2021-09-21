import { Card, Typography, Space, Col, Row } from "antd";
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
  // dummy data
  const announcements = [
    {
      title: "Fire alarm testing notice",
      category: "Category 1",
      content:
        "This notice is to inform you that the staff from Electraserve, Inc will be on the premises on July 17th, 2021 between 8:00 - 4:00 pm to perform the annual testing of the fire alarm system in your building. We will need access to all tenant spaces to check the notification devices and smoke detectors inside these units. Thank you for your cooperation in this matter. We will be setting the alarm off intermittently throughout the course of this inspection. Please disregard any audible alarms or flashing strobes as this is required to test the buildings life safety system appropriately. ",
      dateCreated: "1 July 2021",
    },
    {
      title: "Title 2",
      category: "Category 2",
      content: "Content 2",
      dateCreated: "1 August 2021",
    },
    {
      title: "Title 3",
      category: "Category 3",
      content: "Content 3",
      dateCreated: "1 Sept 2021",
    },
    {
      title: "Title 4",
      category: "Category 3",
      content: "Content 4",
      dateCreated: "1 Sept 2021",
    },
    {
      title: "Title 5",
      category: "Category 3",
      content: "Content 5",
      dateCreated: "1 Sept 2021",
    },
    {
      title: "Title 6",
      category: "Category 3",
      content: "Content 6",
      dateCreated: "1 Sept 2021",
    },
  ];

  // const [announcements, setAnnouncements] = useState([]);

  // useEffect(() => {
  //   getAnnouncements()
  //     .then((data) => {
  //       setAnnouncements(data);
  //     })
  //     .catch((err) => {
  //       message.error(err.message);
  //     });
  // });

  return (
    <>
       <Row gutter={[16, 16]}>
        {announcements.map(({ title, category, content, creationTime }) => (
          <Col span={8}>
            <Card style={{height: '100%', minHeight: '250px'}} bordered={false}>
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
