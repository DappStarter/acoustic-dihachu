require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture bread tail tragic educate ranch remain minor half arch sure tunnel'; 
let testAccounts = [
"0x77ab0611ad504a912da65f2a134ed5dcd59780afbc3d83b88b27c871686ce8a8",
"0x50bdd78176132329db572d8d7b5643b86f3a18cc305910bbc554096152560e86",
"0x2cc6b6d15ffbbd10cd567b32d6a161307fed42457fd599ddb8e9363abe9b5d01",
"0x2c0830b1beca7ab293a2797999d8148489dffa33b90dcfc028e5774198480375",
"0xd85b806e395830ad3934e8f94643b3de477d879d549c19137cf9d737047f7008",
"0xfc1b02e7a4dfa02f6c32290845ba860e9c1fa641fb526a91658bde303ab33faa",
"0xdad4dab1796ac14fc9e052aab4030f1357d1674c0c8fece73c25052dd11aaa7c",
"0xbe8edeceddf352d73ce8372e8d231684bce8e00936dfcd147b8f71466c7d7a2a",
"0x9d939e652cf2398802b11b357c695e037f1726af25aad29dfcabec9fb48108ec",
"0x5037a7506e0fb916b85fd4f91eaf75daa4ebec215e77db679bf18544b8961ad1"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
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
