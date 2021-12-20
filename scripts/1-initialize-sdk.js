// Import the filesystem module
import fs from 'fs/promises'

import { ThirdwebSDK } from "@3rdweb/sdk";
import ethers from 'ethers';

// import and configure .env file that we use to secure store out env variable
import dotenv from 'dotenv';
dotenv.config();

// Quick checks
if(!process.env.PRIVATE_KEY || process.env.PRIVATE_KEY == ""){
  console.log("🤦🏽‍♂️ private key not found")
}
if(!process.env.WALLET_ADDRESS || process.env.WALLET_ADDRESS == ""){
  console.log("🤦🏽‍♂️ wallet address not found")
}



const sdk = new ThirdwebSDK(
  new ethers.Wallet(
    // Your wallet private key.
    process.env.PRIVATE_KEY,
    // RPC URL
    ethers.getDefaultProvider(process.env.ALCHEMY_API_URL),
  ),
);

(async () => {
  try {
    const apps = await sdk.getApps();
    fs.writeFile('app.txt', apps[0].address);
    console.log(`Your app address is: ${apps[0].address}`);
  }catch (err) {
    console.error(`failed  to get apps from sdk ${err}`);
    process.exit(1);
  }
})()

// export the intialized thirdweb SDK to use in other scripts
export default sdk;