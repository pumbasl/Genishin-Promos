import React from 'react';
import { Toast } from 'react-bootstrap';

import { useToaster } from "react-hot-toast";

export default function Notifications() {
    const { toasts } = useToaster();
    return (
      <div
        style={{
          position: 'fixed',
          top: 15,
          right: 0,
        }}
        >
        {toasts.map((toast) => (
          <Toast 
            delay={3000}
            autohide
            key={toast.id}
          >
            <Toast.Header closeButton={false}>
                <strong className="mr-auto">{toast.message.title}</strong>
                <small>{toast.message.time}</small>
            </Toast.Header>
            <Toast.Body>
                {toast.message.body}
            </Toast.Body>
          </Toast>
        ))}
      </div>
    );
};