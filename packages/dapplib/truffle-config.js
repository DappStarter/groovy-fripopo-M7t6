require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess nature swift undo name rebel situate come hunt lock slot gas'; 
let testAccounts = [
"0xf63e5c046533a69c8e80ab98bd7692f516204c87d9c15183b24f147837e22563",
"0x16088449999476d405c65b057329d5fc958d34f3dc412962e08c36632ef19912",
"0x179a1748ad32d54775cc63f473f066d44f1fe6c43f618fd676d52991685533cb",
"0x1927457a2017c444070d00ad7731982db3eea42e86b03c736a0f2425e0ec5bb4",
"0x2945b2bc7a8bf81c1692c153077d3c983805d7dc58e05ca36f7882c3c12ffe58",
"0x201c98e60c1fb06d4033c227d9d34ee3bf0130b165359049ca9c44a218940cbe",
"0x0ffb3a575bb046ade7318970d998855bd404fd013e286cec89ac82fb32f97aac",
"0x9e6552ba05e516ed3015c4dc8c288e3c3f0539bb4089c4cfa709899e5ccad764",
"0xdaa3106116b20cd7e25dcf4e207360361efa90aaa2cdb2776ec1af3a48e4a7f9",
"0xe26b198dac49a6b8c020a01e391fe0054fd176a16096efacd91829447a2ddc32"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

