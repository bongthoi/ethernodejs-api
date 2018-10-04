import Web3 from 'web3';
import smartConstract_Config from '../../config/smartcontract_config.json';

/** */
const hostrpc =smartConstract_Config.hostrpc;
const contractAddress =smartConstract_Config.address;
const abi=smartConstract_Config.abi;

/** */
const web3 = new Web3(new Web3.providers.HttpProvider(hostrpc));


/** */
// get the balance of given address
async function getBalance(req, res) {
  // var coinbase = web3.eth.coinbase;
  var ether_balance = web3.eth.getBalance("0xdddc2fb9eecaac48ef901d0f19d94096106d70e9");
  //  console.log("web3="+balance);

   var token=web3.eth.contract(abi).at(contractAddress);
   var token_balance=await token.balanceOf.call("0xdddc2fb9eecaac48ef901d0f19d94096106d70e9");

   console.log("ether_balance="+ether_balance);
   console.log("token_balance="+token_balance);
}


module.exports = {balance: getBalance}