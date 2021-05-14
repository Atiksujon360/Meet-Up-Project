import React, { Component } from "react";
import "antd/dist/antd.css";
import { Card, Button, Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

export default class Todo extends Component {
  deleteHandler() {
    Modal.confirm({
      title: "Are you confirmed ?",
      icon: <ExclamationCircleOutlined />,
      okText: "Delete",
      cancelText: "Cancel",

      onOk() {},
    });
  }
  render() {
    const { text } = this.props;
    return (
      <div className="center">
        <Card>
          <h1>{text}</h1>
          <div style={{ float: "right" }}>
            <Button onClick={this.deleteHandler} type="primary" danger>
              Delete
            </Button>
          </div>
        </Card>
      </div>
    );
  }
}
