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
  MAINNET = "Mainnet",
  LUKSO = "Lukso",
  LUKSO_L16 = "Lukso L16",
  GOERLI = "Goerli",
  PRATER = "Prater",
  KINTSUGI = "Kintsugi",
  ROPSTEN = "Ropsten",
  KILN = "Kiln",
}
