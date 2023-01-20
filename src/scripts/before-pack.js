const { copyFile } = require("original-fs");

module.exports = async (buildResult) => {
  console.log(buildResult);
  const { electronPlatformName, appOutDir } = context;
  if (electronPlatformName !== "darwin") {
    return;
  }
  const { arch } = context;
  copyFile(
    resolve(
      __dirname,
      "../../build",
      arch === "x86_64" ? "bin_x86" : "bin_arm",
      "eth2deposit_proxy"
    ),
    resolve(__dirname, "../../build/bin/eth2deposit_proxy")
  );
};
