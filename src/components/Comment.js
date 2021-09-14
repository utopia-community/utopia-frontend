import * as React from "react";
import { Comment, Avatar, Form, Button, List, Input } from "antd";
import moment from "moment";

const { TextArea } = Input;

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? "replies" : "reply"}`}
    itemLayout="horizontal"
    renderItem={(props) => <Comment {...props} />}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
        type="primary"
      >
        Add Comment
      </Button>
    </Form.Item>
  </>
);

const COMMENTS = [
  {
    author: "Enola",
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    content: <p>Comment 1</p>,
    datetime: moment().fromNow(),
  },
  {
    author: "Eric",
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    content: <p>Comment 2</p>,
    datetime: moment().fromNow(),
  },
  {
    author: "Edward",
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    content: <p>Comment 3</p>,
    datetime: moment().fromNow(),
  },
];

const CommentSection = () => {
  const [loading, setLoading] = React.useState(true);
  const [comments, setComments] = React.useState([]);
  const [submitting, setSubmitting] = React.useState(false);
  const [value, setValue] = React.useState("");

  React.useEffect(() => {
    setComments(COMMENTS);
  }, []);

  const handleSubmit = () => {
    if (!value) {
      return;
    }

    setSubmitting(true);

    // Make API call, submit comment to the server
    // fetch("/api/comment", { method: "POST" })
    //   .then((response) => response.json())
    //   .then((res) => {
    //     setSubmitting(false);
    //     if (res.success) {
    //       setValue("");
    //       setComments([
    //         ...comments,
    //         {
    //           author: "Elsa",
    //           avatar:
    //             "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    //           content: <p>{value}</p>,
    //           datetime: moment().fromNow(),
    //         },
    //       ]);
    //     } else {
    //       setError(res.error.message);
    //     }
    //   });

    setTimeout(() => {
      setSubmitting(false);
      setValue("");
      setComments([
        ...comments,
        {
          author: "Elsa",
          avatar:
            "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
          content: <p>{value}</p>,
          datetime: moment().fromNow(),
        },
      ]);
    }, 1000);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      {comments.length > 0 && <CommentList comments={comments} />}
      <Comment
        avatar={
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="Han Solo"
          />
        }
        content={
          <Editor
            onChange={handleChange}
            onSubmit={handleSubmit}
            submitting={submitting}
            value={value}
          />
        }
      />
    </>
  );
};

export default CommentSection;
