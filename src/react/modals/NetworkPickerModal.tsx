import {
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { styled } from "styled-components";
import { BackgroundLight } from "../colors";

import { GlobalContext } from "../GlobalContext";
import { Network } from "../types";
import WagyuModal from "./WagyuModal";

const Header = styled.div`
  font-size: 36px;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const SubHeader = styled(Typography)`
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 15px;
`;

const Submit = styled(Button)`
  margin: 35px auto 0;
  margin-top: 35px;
`;

interface NetworkPickerModalParams {
  onClose: () => void;
  showModal: boolean;
}

/**
 * Modal to allow the user to pick the Ethereum Network
 */
const NetworkPickerModal = ({ onClose, showModal }: NetworkPickerModalParams) => {
  const { network, setNetwork } = useContext(GlobalContext);
  const [formNetwork, setFormNetwork] = useState<Network>(Network.LUKSO);

  useEffect(() => {
    if (network) {
      setFormNetwork(network);
    }
  }, [network, showModal]);

  const onNetworkChange = (selected: React.ChangeEvent<HTMLInputElement>) => {
    const selectedNetwork = selected.target.value as Network;

    if (selectedNetwork) {
      setFormNetwork(selectedNetwork);
    }
  };

  const onSubmit = () => {
    if (formNetwork) {
      setNetwork(formNetwork);
    }

    onClose();
  };

  return (
    <WagyuModal
      open={showModal}
    >
      <div style={{ marginBottom: "3rem" }}>
        <Header>Network</Header>
        <FormControl variant="standard" focused style={{ textAlign: "center" }}>
          <RadioGroup aria-label="gender" name="gender1" value={formNetwork} onChange={onNetworkChange}>
            <FormControlLabel value={Network.LUKSO} control={<Radio />} label={'LUKSO Mainnet'} />
            <Divider />
            <SubHeader>Testnets</SubHeader>
            <FormControlLabel value={Network.LUKSO_TESTNET} control={<Radio />} label={'LUKSO Testnet'} />
          </RadioGroup>

          <Submit
            color="primary"
            onClick={onSubmit}
            variant="contained"
            tabIndex={1}
          >
            OK
          </Submit>
        </FormControl>
      </div>
    </WagyuModal>
  )
};

export default NetworkPickerModal;
