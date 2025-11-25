import { Modal, ModalProps } from "@mui/material";
import React from "react";
import { styled } from "styled-components";
import { BackgroundLight } from "../colors";

interface WagyuModalParams {
  children: React.ReactNode;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  padding-left: 40px;
  padding-right: 40px;
  width: fit-content;
  min-width: 350px;
  max-width: 450px;
  background: rgba(27, 38, 44, 0.95);
  border-radius: 20px;
  align-items: center;
  background: ${BackgroundLight};
  margin: auto;
  margin-top: 150px;
`;

/**
 * Wrapper for modal usages to keep consistent styling.
 */
const WagyuModal = ({ children, className, onClose, open}: WagyuModalParams & ModalProps) => (
  <Modal onClose={onClose} open={open}>
    <Container className={`${className || ""}`}>
      {children}
    </Container>
  </Modal>
);

export default WagyuModal;
