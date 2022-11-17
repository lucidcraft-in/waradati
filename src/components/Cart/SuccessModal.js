import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';

export default function SuccessModal({ show, order }) {
 
  return (
    <Modal show={show} >
      <Modal.Body>
        {' '}
        <Result
          status="success"
          title="Order placed successfully"
          subTitle={`Order number: ${order?.createdOrder?._id} , We received your order and will begin processing its soon.`}
          extra={[
            <Link to="/">
              <Button type="primary" key="console">
                Go to home
              </Button>
            </Link>,
          ]}
        />
      </Modal.Body>
    </Modal>
  );
}
