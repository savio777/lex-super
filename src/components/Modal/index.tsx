import React from "react";
import { Modal, ScrollView } from "react-native";

import {
  CenteredView,
  ModalView,
  Title,
  ContainerButtons,
  Button,
  TitleButton,
} from "./styles";

interface Props {
  open?: boolean;
  title?: string;
  send(): void;
  cancel(): void;
  textClose?: string;
  textSend?: string;
  smallHeight?: boolean;
  // close(): void
}

const ModalCustom: React.FC<Props> = ({
  children,
  open,
  title,
  send,
  cancel,
  textClose,
  textSend,
  smallHeight,
}) => (
  <Modal
    visible={open}
    animationType="slide"
    transparent
    onRequestClose={cancel}
  >
    <CenteredView>
      <ModalView smallHeight={smallHeight}>
        <Title>{title}</Title>
        <ScrollView
          persistentScrollbar={true}
          contentContainerStyle={{ flexGrow: 1, minWidth: "100%" }}
        >
          {children}
        </ScrollView>
        <ContainerButtons>
          <Button main={false} onPress={cancel}>
            <TitleButton main={false}>{textClose}</TitleButton>
          </Button>
          <Button main onPress={send}>
            {/*nameIcon && <Icon name={nameIcon} color="#000" size={18} />*/}
            <TitleButton main>{textSend}</TitleButton>
          </Button>
        </ContainerButtons>
      </ModalView>
    </CenteredView>
  </Modal>
);

ModalCustom.defaultProps = {
  open: false,
  title: "",
  textClose: "CANCELAR",
  textSend: "ENVIAR",
  smallHeight: false,
  /*
  nameIcon: 'send',
  close: () => {},
  send: () => {},
  cancel: () => {},
  */
};

export default ModalCustom;
