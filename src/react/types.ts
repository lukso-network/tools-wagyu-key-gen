export enum StepKey {
  MnemonicImport,
  MnemonicGeneration,
  KeyConfiguration,
  KeyGeneration,
  Finish,
}

export enum StepSequenceKey {
  MnemonicGeneration = "mnemonicgeneration",
  MnemonicImport = "mnemonicimport",
}

// Networks will be lowercased and passed in as parameters to the deposit-cli
export enum Network {
  LUKSO = "LUKSO",
  LUKSO_TESTNET = "lukso-testnet",
  LUKSO_L16 = "l16",
  LUKSO_2022 = "l2022",
  LUKSO_3030 = "l3030",
}

// Allow network labels to be separately configured.
export enum NetworkLabels {
  LUKSO = "LUKSO Mainnet",
  LUKSO_TESTNET = "LUKSO Testnet",
  LUKSO_L16 = "LUKSO L16",
  LUKSO_2022 = "LUKSO L2022",
  LUKSO_3030 = "LUKSO L3030",
}
