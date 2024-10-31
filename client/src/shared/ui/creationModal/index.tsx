import React from "react";
import { Modal, ModalProps } from "antd";

export const CreationModal = React.memo(function CreationModal({ footer = null, children, ...props }: ModalProps) {
  return (
    <Modal footer={footer} {...props} centered open>
      {children}
    </Modal>
  );
});
