import { useState, useEffect } from "react";
import { Card, Button, message, Table, Tag } from "antd";
import { getAllRequests } from "../utils";

// Define columns
const columns = [
  {
    title: "Date created",
    dataIndex: "creationTime",
    sorter: (a, b) => new Date(a.date_created) - new Date(b.date_created),
    width: "10%",
  },
  {
    title: "Requestor",
    dataIndex: "emailId",
    width: "10%",
  },
  {
    title: "Category",
    dataIndex: "category",
    width: "10%",
  },
  {
    title: "Description",
    dataIndex: "content",
    width: "40%",
  },
  {
    title: "Status",
    dataIndex: "status",
    width: "15%",
    sorter: (a, b) => a.status.localeCompare(b.status),
    render: (status) => {
      let color = "pink";
      if (status === "Completed") {
        color = "green";
      } else if (status === "In progress") {
        color = "orange";
      }
      return (
        <Tag color={color} key={status}>
          {status.toUpperCase()}
        </Tag>
      );
    },
  },
  {
    title: "Action",
    width: "15%",
    dataIndex: "status",
    render: (status) => {
      return (
        <>
          {(() => {
            switch (status) {
              case "Open":
                return <Button type="primary">In progress</Button>;
              case "In progress":
                return <Button type="primary">Completed</Button>;
              case "Completed":
                return <>-</>;
              default:
                return <>-</>;
            }
          })()}
        </>
      );
    },
  },
];

// All requests visible by Admin
const RequestAdmin = () => {
  const [allRequests, setAllRequests] = useState([]);

  //   // event handler for when user closes or completes the New Request form
  //   const [newRequestForm, setNewRequestForm] = useState(false);
  //   const handleCloseModal = () => setNewRequestForm(false);

  useEffect(() => {
    getAllRequests()
      .then((data) => {
        setAllRequests(data);
      })
      .catch((err) => {
        message.error(err.message);
      });
  }, []);

  return (
    <>
      {/* display New Request modal when newRequestForm == true (when user clicks on New Request button)
      {newRequestForm && (
        <NewRequest
          displayModal={newRequestForm}
          onSuccess={handleCloseModal}
          onCancel={handleCloseModal}
        />
      )} */}

      <Card title="Requests">
        <Table
          columns={columns}
          dataSource={allRequests}
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

export default RequestAdmin;
