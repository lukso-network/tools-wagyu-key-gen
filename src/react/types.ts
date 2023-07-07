export enum StepKey {
  MnemonicImport,
  MnemonicGeneration,
  KeyConfiguration,
  KeyGeneration,
  Finish,
  BTECConfiguration,
  BTECGeneration,
  FinishBTEC
}

export enum StepSequenceKey {
  MnemonicGeneration = "mnemonicgeneration",
  MnemonicImport = "mnemonicimport",
  BLSToExecutionChangeGeneration = "blstoexecutionchangegeneration",
}

export enum ReuseMnemonicAction {
  RegenerateKeys,
  GenerateBLSToExecutionChange
}

// Networks will be lowercased and passed in as parameters to the deposit-cli
export enum Network {
  LUKSO = "LUKSO",
  LUKSO_TESTNET = "lukso-testnet"
}

// Allow network labels to be separately configured.
export enum NetworkLabels {
  LUKSO = "LUKSO Mainnet",
  LUKSO_TESTNET = "LUKSO Testnet"
}
