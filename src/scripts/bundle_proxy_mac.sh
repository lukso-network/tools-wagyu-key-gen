#!/usr/bin/env bash

# Bash script to bundle the stakingdeposit_proxy application and the associated required files on
# Linux and macOS.

if [ -f ~/.bash_aliases ]; then
    shopt -s expand_aliases
    source ~/.bash_aliases
fi

SCRIPTPATH="$( cd -- "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"

EDCDIR=tools-key-gen-cli

TARGETPACKAGESPATH=$SCRIPTPATH/../../dist/packages
TARGETPACKAGESMACPATH=$SCRIPTPATH/../../dist/packages.mac
ETH2DEPOSITCLIPATH=$SCRIPTPATH/../vendors/$EDCDIR
ETH2REQUIREMENTSPATH=$ETH2DEPOSITCLIPATH/requirements.txt

PYTHONPATH=$TARGETPACKAGESMACPATH:$TARGETPACKAGESPATH:$ETH2DEPOSITCLIPATH:$(python3 -c "import sys;print(':'.join(sys.path))")
echo $PYTHONPATH
export PATH=$TARGETPACKAGESMACPATH/bin:$PATH
DISTBINPATH=$SCRIPTPATH/../../build/bin
DISTWORDSPATH=$SCRIPTPATH/../../build/word_lists
SRCWORDSPATH=$SCRIPTPATH/../vendors/$EDCDIR/staking_deposit/key_handling/key_derivation/word_lists
SRCINTLPATH=$SCRIPTPATH/../vendors/$EDCDIR/staking_deposit/intl
DISTARCHPATH=$SCRIPTPATH/../../.build
DISTARMPATH=$DISTARCHPATH/arm64
DISTX64PATH=$DISTARCHPATH/x64

rm -rf $DISTARCHPATH
rm -rf $TARGETPACKAGESPATH
rm -rf $TARGETPACKAGESMACPATH
mkdir -p $DISTARMPATH
mkdir -p $DISTX64PATH
mkdir -p $DISTBINPATH
mkdir -p $DISTWORDSPATH
mkdir -p $TARGETPACKAGESPATH
mkdir -p $TARGETPACKAGESMACPATH

# Getting all the requirements
echo "Install requirements"
export ARCHFLAGS='-arch arm64 -arch x86_64'

VERSION=$(sed -n -e 's#\(pycryptodome==[^ ]*\).*#\1#gp' $ETH2REQUIREMENTSPATH)
echo $VERSION

python3 -m pip install pip -U

python3 -m pip install -U cython==0.29.33 --no-binary :all:
python3 -m pip install $VERSION --no-binary :all: --target $TARGETPACKAGESMACPATH
python3 -m pip install cytoolz==0.12.2 --no-binary :all: --target $TARGETPACKAGESMACPATH
python3 -m pip install -r ./src/vendors/tools-key-gen-cli/build_configs/macos/requirements.txt --target $TARGETPACKAGESMACPATH
python3 -m pip install -U pyinstaller>=5.12

# Bundling Python stakingdeposit_proxy
PYTHONPATH="$PYTHONPATH" pyinstaller \
    --distpath $DISTX64PATH \
    --target-arch x86_64 \
    --add-data "$SRCINTLPATH:staking_deposit/intl" \
    -p $PYTHONPATH \
    $SCRIPTPATH/stakingdeposit_proxy.py
find $DISTX64PATH -print
PYTHONPATH="$PYTHONPATH" pyinstaller \
    --distpath $DISTARMPATH \
    --target-arch arm64 \
    --add-data "$SRCINTLPATH:staking_deposit/intl" \
    -p $PYTHONPATH \
    $SCRIPTPATH/stakingdeposit_proxy.py
find $DISTX64PATH -print

# Adding word list
cp $SRCWORDSPATH/* $DISTWORDSPATH
