import React from 'react';
import { Form, Input, Button, message, Modal, Upload, Row, Col } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

class NewRequest extends React.Component {
  state = {
    displayModal: false
  }
 
  handleCancel = () => {
    this.setState({
      displayModal: false,
    })
  }
 
  newOnClick = () => {
    this.setState({
      displayModal: true,
    })
  }
 
  onFinish = (data) => {
    const SERVER_ORIGIN = '';
 
    const newRequestUrl = `${SERVER_ORIGIN}/new_request`;

    const newRequest = (credential) => {
      return fetch(newRequestUrl, {
        method: 'POST',
        header: {
          'Content-Type': 'application/jason',
        },
        credentials: 'include',
        body: JSON.stringify(credential)
      }).then((response) => {
        if(response.status !== 200){
          throw Error('Fail to request');
        }
        return response.json();
      })
    }
    
    newRequest(data)
      .then((data) => {
        this.setState({
          displayModal: false,
        })
        message.success(`Submitted!`);
        this.props.onSuccess();
      }).catch((err) => {
        message.error(err.message);
      })
  }
 
  render = () => {
    return (
      <>
        <Button shape="round" onClick={this.newOnClick} style={{ marginRight: '20px' }}>
        New Request</Button>
        <Modal
          title="New Request"
          visible={this.state.displayModal}
          onCancel={this.handleCancel}
          footer={null}
          destroyOnClose={true}
        >
          <Form
            name="request"
            onFinish={this.onFinish}
            preserve={false}
          >
            <Form.Item
              name="title"
              label= "Title"
              rules={[{ required: true, message: 'Please type the title!' }]}
            >
              <Input/>
            </Form.Item>

            <Form.Item
              name="description"
              label= "Description"
              rules={[{ required: true, message: 'Please type your description!' }]}
            >
              <Input.TextArea autoSize={{ minRows: 7, maxRows: 12 }}/>
            </Form.Item>
            

            <Col>
              <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture"
                className="upload-list-inline"
              >
                <Button icon={<UploadOutlined />}>Upload</Button>
              </Upload>            
            </Col>

            <br/>

            <Col style={{ textAlign: 'right'}}>  
              <Button type="primary" htmlType="submit">
                  Submit</Button>
            </Col>

          </Form>
        </Modal>
      </>
    )
  }
}

export default NewRequest;

