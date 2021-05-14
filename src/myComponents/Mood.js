import React, { Component } from "react";
import "antd/dist/antd.css";
import { Modal, Button, Space } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

export default class Mood extends Component {
  info() {
    Modal.confirm({
      title: "Are you confirmed ?",
      icon: <ExclamationCircleOutlined />,
      okText: "Delete",
      cancelText: "Cancel",

      onOk() {},
    });
  }
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.info}>
          Modal
        </Button>
        <Modal />
      </div>
    );
  }
}
