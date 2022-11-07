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

export enum Network {
  MAINNET = "Ethereum Mainnet",
  LUKSO = "LUKSO",
  LUKSO_L16 = "LUKSO L16",
  GOERLI = "Goerli",
  PRATER = "Prater",
  KINTSUGI = "Kintsugi",
  ROPSTEN = "Ropsten",
  KILN = "Kiln",
}
