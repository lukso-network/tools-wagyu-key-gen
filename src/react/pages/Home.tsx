import { Button, Container, Grid, Modal, Tooltip, Typography } from "@mui/material";
import { useContext, useEffect, useMemo, useState } from "react";
import { useHistory } from "react-router-dom";
import { paths, tooltips } from "../constants";
import { GlobalContext } from "../GlobalContext";
import { KeyIcon } from "../icons/KeyIcon";
import NetworkPickerModal from "../modals/NetworkPickerModal";
import ReuseMnemonicActionModal from "../modals/ReuseMnemonicActionModal";
// <<<<<<< HEAD
import styled from "styled-components";
// import { Button } from '@material-ui/core';
// import { KeyIcon } from "../components/icons/KeyIcon";
// import { tooltips } from "../constants";
import { Network, StepSequenceKey, ReuseMnemonicAction } from '../types'
// import VersionFooter from "../components/VersionFooter";
import logo from "../../../static/keyVisual.png";


const StyledMuiContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NetworkDiv = styled.div`
  margin-top: 35px;
  margin-right: 35px;
  align-self: flex-end;
  color: gray;
`;

const LandingHeader = styled(Typography)`
  font-size: 36px;
  margin-top: -20px;
  margin-bottom: 20px;
  text-align: center;
`;

const SubHeader = styled(Typography)`
  margin-top: 20px;
  text-align: center;
`;

const BackgroundImage = styled.img`
  z-index: -1;
  position: absolute;
  width: 640px;
  top: -220px;
  left: -300px;
  opacity: 0.2;
`;

const Links = styled.div`
  margin-top: 20px;
`;
const LinksTag = styled.a`
  color: #a3aada;
`;

const InfoLabel = styled.span`
  color: gray;
`;

const OptionsGrid = styled(Grid)`
  margin-top: 20px;
  align-items: center;
`;

const Dotted = styled.span`
  text-decoration-line: underline;
`;

/**
 * Landed page of the application.
 * The user will be able to select a network and choose the primary action
 * they wish to make.
 */
const Home = () => {
  const { network } = useContext(GlobalContext);
  const [wasNetworkModalOpened, setWasNetworkModalOpened] = useState(false);
  const [showNetworkModal, setShowNetworkModal] = useState(false);
  const [showReuseMnemonicModal, setShowReuseMnemonicModal] = useState(false);
  const [createMnemonicSelected, setCreateMnemonicSelected] = useState(false);
  const [useExistingMnemonicSelected, setUseExistingMnemonicSelected] = useState(false);

  let history = useHistory();

  const tabIndex = useMemo(() => showNetworkModal ? -1 : 1, [showNetworkModal]);

  const handleOpenNetworkModal = () => {
    setShowNetworkModal(true);
    setWasNetworkModalOpened(true);
    setShowReuseMnemonicModal(false); // Fixes a bug where sometimes network modal enables reuse modal
  };

  const handleCloseNetworkModal = () => {
    setShowNetworkModal(false);
    if (createMnemonicSelected) {
      handleCreateNewMnemonic();
    } else if (useExistingMnemonicSelected) {
      handleUseExistingMnemonic();
    }
  };

  const handleCreateNewMnemonic = () => {
    setCreateMnemonicSelected(true);

    if (!wasNetworkModalOpened) {
      handleOpenNetworkModal();
    } else {
      history.push(paths.CREATE_MNEMONIC)
    }
  };

  const handleUseExistingMnemonic = () => {
    setUseExistingMnemonicSelected(true);

    if (!wasNetworkModalOpened) {
      handleOpenNetworkModal();
    } else {
      setShowReuseMnemonicModal(true);
    }
  };

  const handleCloseReuseActionModal = () => {
    setShowReuseMnemonicModal(false);
  };

  const handleReuseMnemonicActionSubmit = (action: ReuseMnemonicAction) => {
    setShowReuseMnemonicModal(false);
    if (action === ReuseMnemonicAction.RegenerateKeys) {

      history.push(paths.EXISTING_IMPORT);
    } else if (action === ReuseMnemonicAction.GenerateBLSToExecutionChange) {

      history.push(paths.BTEC_IMPORT);
    }
  };

  return (
    <StyledMuiContainer>
      <BackgroundImage src={logo} />
      <NetworkDiv>
        Select Network: &nbsp;
        <Button
          variant="contained"
          color="primary"
          onClick={handleOpenNetworkModal}
          tabIndex={tabIndex}
        >
          {network}
        </Button>
      </NetworkDiv>

      <LandingHeader variant="h1">LUKSO<br />Wagyu KeyGen</LandingHeader>
      <img src={logo} height="200px" />
      {/* <KeyIcon /> */}
      <SubHeader>
        Your key generator for staking on LUKSO
      </SubHeader>
      <SubHeader>
        You should run this tool {" "}
        <Tooltip title={tooltips.OFFLINE}><Dotted>offline</Dotted></Tooltip> for your own security.
      </SubHeader>

      <Links>

        <InfoLabel>Github:</InfoLabel> <LinksTag href="https://github.com/lukso-network/tools-wagyu-key-gen" target="_blank">github.com/lukso-network/tools-wagyu-key-gen</LinksTag> <br />
        <InfoLabel>Forked from:</InfoLabel> <LinksTag href="https://github.com/stake-house/wagyu-key-gen" target="_blank">github.com/stake-house/wagyu-key-gen</LinksTag>
        <br />
        <InfoLabel>Support:</InfoLabel> <LinksTag href="https://discord.gg/lukso" target="_blank">discord.gg/lukso</LinksTag>

      </Links>

      <OptionsGrid container spacing={2} direction="column">
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={handleCreateNewMnemonic}
            tabIndex={tabIndex}
          >
            Create New Secret Recovery Phrase
          </Button>
        </Grid>
        <Grid item>
          <Tooltip title={tooltips.IMPORT_MNEMONIC}>
            <Button
              style={{ color: "gray" }}
              variant="contained"
              size="small"
              onClick={handleUseExistingMnemonic}
              tabIndex={tabIndex}
            >
              Use Existing Secret Recovery Phrase
            </Button>
          </Tooltip>
        </Grid>
      </OptionsGrid>
      <NetworkPickerModal
        onClose={handleCloseNetworkModal}
        showModal={showNetworkModal}
      />
      <ReuseMnemonicActionModal
        onClose={handleCloseReuseActionModal}
        onSubmit={handleReuseMnemonicActionSubmit}
        showModal={showReuseMnemonicModal}
      />
    </StyledMuiContainer>
  );
};

export default Home;
