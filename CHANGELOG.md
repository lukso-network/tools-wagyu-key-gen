# Changelog

## [1.8.4](https://github.com/lukso-network/tools-wagyu-key-gen/compare/v1.8.3...v1.8.4) (2024-06-07)


### Bug Fixes

* Update cli to version=v2.5.8 commit=6e0ad5c ([00d16d5](https://github.com/lukso-network/tools-wagyu-key-gen/commit/00d16d5c5c5f473393f03567931bd6ae4746390d))

## [1.8.3](https://github.com/lukso-network/tools-wagyu-key-gen/compare/v1.8.2...v1.8.3) (2023-08-23)


### Bug Fixes

* Affix cython to specific version ([8c0a0bf](https://github.com/lukso-network/tools-wagyu-key-gen/commit/8c0a0bf1e6a00decf2dd46d4bb40d33ae386805d))
* Allow 2000 keys to be created. ([616a3c6](https://github.com/lukso-network/tools-wagyu-key-gen/commit/616a3c613833e9168e20e51a9532a703ab4afa11))
* Attempt to revert to 3.11.3 (maybe they fixed allowing revert) ([fd3482f](https://github.com/lukso-network/tools-wagyu-key-gen/commit/fd3482f12071443d9a62912a1902e6e4f5590cbb))
* Attempt with 3.11.4 which works locally on M2 ([5a370fb](https://github.com/lukso-network/tools-wagyu-key-gen/commit/5a370fbcffa4522c63796bc2da9fb227accd9636))
* MacOS works, working on ubuntu and windows ([3ef2010](https://github.com/lukso-network/tools-wagyu-key-gen/commit/3ef20105251d5401b7c16691d13b2187b439eb05))
* Migrate some of the python hacks from the cli ([d5bb14d](https://github.com/lukso-network/tools-wagyu-key-gen/commit/d5bb14d458f98d45e646370e42f95e1f2911d8d5))
* Pull in updated cli ([54c4bc1](https://github.com/lukso-network/tools-wagyu-key-gen/commit/54c4bc1627827deeee5da33ea8e2601186cb2d51))
* Remove unused and incomplete network definition from cli ([c9dd8ae](https://github.com/lukso-network/tools-wagyu-key-gen/commit/c9dd8aebc207373c9fe4a56346660988c3d80e58))
* Revert and retest all builds one more time. ([802ae1a](https://github.com/lukso-network/tools-wagyu-key-gen/commit/802ae1a3f12842031deb6d3d5141fe9678996780))
* Test running gui compile using cli build_configs. ([4404ebf](https://github.com/lukso-network/tools-wagyu-key-gen/commit/4404ebfddc694aeff19a589ccd92de2a6e13930f))
* Update CLI ([aa74c37](https://github.com/lukso-network/tools-wagyu-key-gen/commit/aa74c372b1bd6558b0d94d18caa48aaa25f5b1ae))
* Update cli to version=v2.5.4 commit=2b4dcb1 ([9f85adb](https://github.com/lukso-network/tools-wagyu-key-gen/commit/9f85adb008349bebd9ffa6c1bd50bdfbc62048b8))
* Update cli to version=v2.5.5 commit=a2a7f37 ([f211e1d](https://github.com/lukso-network/tools-wagyu-key-gen/commit/f211e1d002c8f66e27976480f4181783a31223fb))
* Update cli to version=v2.5.6 commit=7fda7d3 ([9252f63](https://github.com/lukso-network/tools-wagyu-key-gen/commit/9252f63c8eff5ad91c7e7c77db66cdd3218ba7fd))
* Update to latest CLI with new fixes. ([56adbda](https://github.com/lukso-network/tools-wagyu-key-gen/commit/56adbda6d390786a08538c19a50126272fc85fb7))
* Upgrade pyinstaller and adjust --target for universal build ([81f22a3](https://github.com/lukso-network/tools-wagyu-key-gen/commit/81f22a35cce3abac7b353dfeb0ba8f385a70893b))

## [1.8.2](https://github.com/lukso-network/tools-wagyu-key-gen/compare/v1.8.1...v1.8.2) (2023-05-13)


### Bug Fixes

* More python fixes required due to pip and setuptools (with pyinstaller) ([#43](https://github.com/lukso-network/tools-wagyu-key-gen/issues/43)) ([71a0acb](https://github.com/lukso-network/tools-wagyu-key-gen/commit/71a0acb5fcc8eecd126d4452c64670bf3393214a))

## [1.8.1](https://github.com/lukso-network/tools-wagyu-key-gen/compare/v1.8.0...v1.8.1) (2023-05-09)


### Bug Fixes

* Match python install to new branch (somehow it's not working in recent change again) ([6c2c561](https://github.com/lukso-network/tools-wagyu-key-gen/commit/6c2c561d2dc946b1aa89b46fe908423c9b4ea52d))
* Merge remote repo version from develop ([ed1f0c3](https://github.com/lukso-network/tools-wagyu-key-gen/commit/ed1f0c309311c9bbf69570a95b893826e6427f44))
* Need to install cytoolz from source ([54b4e72](https://github.com/lukso-network/tools-wagyu-key-gen/commit/54b4e720b5fd40e6339a00389b14cbc9aefe0c94))
* Temporary point to different upstream for tools-key-gen-cli ([4906f7d](https://github.com/lukso-network/tools-wagyu-key-gen/commit/4906f7d188b4271bb2939732394a1c2138fafc05))
* Try again by forcing universal local build of cython ([da17739](https://github.com/lukso-network/tools-wagyu-key-gen/commit/da1773947b1749f9fae122fd58a1bb65ac674af7))
* Try again with new nocytoolz requirement ([17a0bcc](https://github.com/lukso-network/tools-wagyu-key-gen/commit/17a0bcc682b9668a105bf3941a185d64765bed90))
* Update cli to version=v2.5.3 commit=ae554a7 ([e61eb07](https://github.com/lukso-network/tools-wagyu-key-gen/commit/e61eb07fd3d55369445b925e6a1a192e2db5d43f))
* Update to working temporary build of cli ([e7118f1](https://github.com/lukso-network/tools-wagyu-key-gen/commit/e7118f1e11ea4817c3d75be55cb6afa942b69795))

## [1.8.0](https://github.com/lukso-network/tools-wagyu-key-gen/compare/v1.7.9...v1.8.0) (2023-04-17)


### Features

* Add comment about submodule usage. ([913e452](https://github.com/lukso-network/tools-wagyu-key-gen/commit/913e452eab69b5c909af8daa580348b1a99ae861))


### Bug Fixes

* fixed submodule version ([8e8ee7a](https://github.com/lukso-network/tools-wagyu-key-gen/commit/8e8ee7a95418dee41d95069dbdb9324b33b3098e))
* Merge python build repairs from upstream merge (pip3 is no longer compatible with universal build) ([2e658a8](https://github.com/lukso-network/tools-wagyu-key-gen/commit/2e658a8aa484280ed98bc92164644f43fbb3c71e))

## [1.7.9](https://github.com/lukso-network/tools-wagyu-key-gen/compare/v1.7.8...v1.7.9) (2023-04-14)


### Bug Fixes

* key text ([2a9b853](https://github.com/lukso-network/tools-wagyu-key-gen/commit/2a9b853e8c8e2caf43cd4c343087d5b4af4f1ad0))
* Repair readme ([a37a92c](https://github.com/lukso-network/tools-wagyu-key-gen/commit/a37a92c3640ea62ee2853d9c0dd6da7d1f6139ed))

## [1.7.8](https://github.com/lukso-network/tools-wagyu-key-gen/compare/v1.7.7...v1.7.8) (2023-04-13)


### Bug Fixes

* Remove unused networks ([0cc518c](https://github.com/lukso-network/tools-wagyu-key-gen/commit/0cc518c21605793d28d6c1f1a96509a40abbcbdc))
* Update cli to version=v2.5.2 commit=2324dd4 ([986a903](https://github.com/lukso-network/tools-wagyu-key-gen/commit/986a9038442fdf38fe70fba42c56d514535daf34))

## [1.7.7](https://github.com/lukso-network/tools-wagyu-key-gen/compare/v1.7.6...v1.7.7) (2023-03-28)


### Bug Fixes

* Update cli to version=v2.5.1 commit=22d8156 ([23530b4](https://github.com/lukso-network/tools-wagyu-key-gen/commit/23530b4b4d6cf4922326b26674f331f3e6487b41))

## [1.7.6](https://github.com/lukso-network/tools-wagyu-key-gen/compare/v1.7.5...v1.7.6) (2023-03-28)


### Bug Fixes

* Add testnet items and network labels. ([#28](https://github.com/lukso-network/tools-wagyu-key-gen/issues/28)) ([d86c3e5](https://github.com/lukso-network/tools-wagyu-key-gen/commit/d86c3e5c00dda3c135222fb952e3b2d3d9a7b190))
* made eth1 key required ([1c23055](https://github.com/lukso-network/tools-wagyu-key-gen/commit/1c23055e025699f8dcf146a3588daf307de114fb))
* Redo the way we package and run the python binary to allow a real universal2 build ([#26](https://github.com/lukso-network/tools-wagyu-key-gen/issues/26)) ([59abc48](https://github.com/lukso-network/tools-wagyu-key-gen/commit/59abc48e1b08b1e5a55c179c9448851f2bc08682))
* Update cli to version=v2.5.0 commit=b451b54 ([b2cb2ea](https://github.com/lukso-network/tools-wagyu-key-gen/commit/b2cb2ea19d374b1a57adfa9786dadaa63fa8232e))

## [1.7.5](https://github.com/lukso-network/tools-wagyu-key-gen/compare/v1.7.4...v1.7.5) (2023-02-27)


### Bug Fixes

* Debugging the failed release introduced typo in find command line for logging ([#24](https://github.com/lukso-network/tools-wagyu-key-gen/issues/24)) ([ef71968](https://github.com/lukso-network/tools-wagyu-key-gen/commit/ef71968fb3af26e9e1973d51d3a3f266903cf26d))

## [1.7.4](https://github.com/lukso-network/tools-wagyu-key-gen/compare/v1.7.3...v1.7.4) (2023-02-27)


### Bug Fixes

* Reattempt release, because there is now a 404 during the assets upload ([#22](https://github.com/lukso-network/tools-wagyu-key-gen/issues/22)) ([c047995](https://github.com/lukso-network/tools-wagyu-key-gen/commit/c047995e0091cea0158e667eb3b0794508015da8))

## [1.7.3](https://github.com/lukso-network/tools-wagyu-key-gen/compare/v1.7.2...v1.7.3) (2023-02-27)


### Bug Fixes

* Change cli repo name ([#20](https://github.com/lukso-network/tools-wagyu-key-gen/issues/20)) ([65fd560](https://github.com/lukso-network/tools-wagyu-key-gen/commit/65fd560f11606cb333fe3d2343ac932993ff9dae))
* Update cli to version=v2.4.7 commit=13b3c47 ([4563b77](https://github.com/lukso-network/tools-wagyu-key-gen/commit/4563b77cee86f1108ac16029f42869bf2ab7ed85))

## [1.7.2](https://github.com/lukso-network/tools-wagyu-key-gen/compare/v1.7.1...v1.7.2) (2023-01-27)


### Bug Fixes

* Change layering in GUI UI to allow buttons to always be clickable ([#18](https://github.com/lukso-network/tools-wagyu-key-gen/issues/18)) ([2589f2b](https://github.com/lukso-network/tools-wagyu-key-gen/commit/2589f2b54854310296eaead4c91a5737038f750b))
* Update cli to version=v2.4.6 commit=febbe2f ([2443e8a](https://github.com/lukso-network/tools-wagyu-key-gen/commit/2443e8a142583bcf441cc5aea483507ea428141a))

## [1.7.1](https://github.com/lukso-network/tools-wagyu-key-gen/compare/v1.7.0...v1.7.1) (2023-01-23)


### Bug Fixes

* Add actual tag into menu since tag is not always available ([#16](https://github.com/lukso-network/tools-wagyu-key-gen/issues/16)) ([0778fcb](https://github.com/lukso-network/tools-wagyu-key-gen/commit/0778fcb731c4fdadf784ca6e1c00447ef99bdec8))
* Create universal build for mac ([#15](https://github.com/lukso-network/tools-wagyu-key-gen/issues/15)) ([083c866](https://github.com/lukso-network/tools-wagyu-key-gen/commit/083c86666191b21a7561d3c4934923b86878a9e6))
* Repair weird -.zip.zip extension ([fbfe422](https://github.com/lukso-network/tools-wagyu-key-gen/commit/fbfe422816382ebc09505228912ed3f9a71fc2af))
* Update cli to version=v2.4.5 commit=7a7a5c1 ([0c7abe1](https://github.com/lukso-network/tools-wagyu-key-gen/commit/0c7abe17ad3343c6f5f028f4a028f512e9ccc5c4))

## [1.7.0](https://github.com/lukso-network/tools-wagyu-key-gen/compare/v1.6.4...v1.7.0) (2023-01-20)


### Features

* Added LUKSO 2022 testnet ([adf4af7](https://github.com/lukso-network/tools-wagyu-key-gen/commit/adf4af77c494cb6f585223ac76d0b52489c6c7e2))


### Bug Fixes

* Reformat version text on UI ([#12](https://github.com/lukso-network/tools-wagyu-key-gen/issues/12)) ([81476a7](https://github.com/lukso-network/tools-wagyu-key-gen/commit/81476a79485e4ab0ccb777977e5ee74b40083449))
* Switch to latest for unbuntu and mac so this always builds going forward. ([#14](https://github.com/lukso-network/tools-wagyu-key-gen/issues/14)) ([03068f4](https://github.com/lukso-network/tools-wagyu-key-gen/commit/03068f4dda3da2b22795a631985625a7ec583ecc))
* Update cli to version=v2.4.4 commit=6bd7c96 ([d5daaa4](https://github.com/lukso-network/tools-wagyu-key-gen/commit/d5daaa48264d5327e2c35f63664cc5e6bc10680f))
* Version 2.4.4 of CLI ([00663cf](https://github.com/lukso-network/tools-wagyu-key-gen/commit/00663cff6766b10373719e716570d775b472d326))

## [1.6.4](https://github.com/lukso-network/tools-wagyu-key-gen/compare/v1.6.3...v1.6.4) (2022-12-15)


### Bug Fixes

* Add entitlement and some more debugging ([75a6fd3](https://github.com/lukso-network/tools-wagyu-key-gen/commit/75a6fd32a590a64fc4d7177660d07346aed248f1))
* Add notorization step ([5a11ca0](https://github.com/lukso-network/tools-wagyu-key-gen/commit/5a11ca0d4433bdcde779b9fa42f64d9781f853f1))
* Finalize new electron-notarize ([184d284](https://github.com/lukso-network/tools-wagyu-key-gen/commit/184d284665360fb40f21c1a4353f214533d11016))
* Force add entitlements.map.plist ([b986160](https://github.com/lukso-network/tools-wagyu-key-gen/commit/b9861600246aa02360a114b1a13aa977c21afcca))
* It's not picking up entitlements. ([7541c2e](https://github.com/lukso-network/tools-wagyu-key-gen/commit/7541c2ec2806613fd9a5e287eee954a2623c55c7))
* Make an arm64 and x64 build ([a2cd255](https://github.com/lukso-network/tools-wagyu-key-gen/commit/a2cd25509d73e91a1d0ac853ad20fe886926c2e1))
* Move icons. ([c2a92fd](https://github.com/lukso-network/tools-wagyu-key-gen/commit/c2a92fdc7898ef14feda6590a61603467dfd1445))
* Recover icon directly into build folder. ([3f4de51](https://github.com/lukso-network/tools-wagyu-key-gen/commit/3f4de51f7de626781cf5bbf58aff887f05ff26fd))
* Swap account and password ([b62e3f2](https://github.com/lukso-network/tools-wagyu-key-gen/commit/b62e3f2a63cd73c66f739dcd564eb9a37bdd402c))
* Upgrade electron to allow full mac notarization ([96dbee5](https://github.com/lukso-network/tools-wagyu-key-gen/commit/96dbee5cd2eb6a9cc521a4ff54c4b99e80334368))

## [1.6.3](https://github.com/lukso-network/tools-wagyu-key-gen/compare/v1.6.2...v1.6.3) (2022-12-13)


### Bug Fixes

* Rebuild with an empty commit ([44770dd](https://github.com/lukso-network/tools-wagyu-key-gen/commit/44770dd1c8d577cedbe3118264f41e29fd138084))

## [1.6.2](https://github.com/lukso-network/tools-wagyu-key-gen/compare/v1.6.1...v1.6.2) (2022-12-13)


### Bug Fixes

* Add icns resource. Upgrade to latest CLI commit ([b7a7134](https://github.com/lukso-network/tools-wagyu-key-gen/commit/b7a713438e66f19a3668151fc6558d3eb05b3f08))
* Update cli to version=v2.4.2 commit=56c072a ([4ddb3bb](https://github.com/lukso-network/tools-wagyu-key-gen/commit/4ddb3bb2e97dc439182203fd7ee31df36e6ccca0))
* Update cli to version=v2.4.3 commit=bd2ac94 ([d4c8c59](https://github.com/lukso-network/tools-wagyu-key-gen/commit/d4c8c594e44f8aeb2bcf5964facc40b16e4a45a4))

## [1.6.1](https://github.com/lukso-network/tools-wagyu-key-gen/compare/v1.6.0...v1.6.1) (2022-12-02)


### Bug Fixes

* Merge to main and not master ([4e81037](https://github.com/lukso-network/tools-wagyu-key-gen/commit/4e810370921ef4dcf5e1c92a90d037a381964742))

## [1.6.0](https://github.com/lukso-network/tools-wagyu-key-gen/compare/v1.5.0...v1.6.0) (2022-12-02)


### Features

* Apply LUKSO network changes ([99de14c](https://github.com/lukso-network/tools-wagyu-key-gen/commit/99de14ca9e0552ded185f19c50356b382b8813bf))
