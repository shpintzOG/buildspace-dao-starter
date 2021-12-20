import { ethers } from "ethers";
import sdk from './1-initialize-sdk.js';
import { readFileSync } from 'fs'

const data = readFileSync('app.txt', {encoding:'utf8', flag:'r'})

const app = sdk.getAppModule(data);

(async () => {
  try{
    const bundleDropModule = await app.deployBundleDropModule({
      // The collection name
      name: "MemeDAO Membership",
      // A description for the collection
      description: "A DAO for fans of memes",
      // The image that will show up on openSea.
      image: readFileSync("scripts/assets/meme.jpeg"),
      // recipientAddress for sales of nft (no charge = 0x0 address)
      primarySaleRecipientAddress: ethers.constants.AddressZero,
    });

    console.log(`Succufule deployed bundle drop ${bundleDropModule.address}`)
    const metaData = await bundleDropModule.getMetadata();
    console.log('Bundle Drop metadata ', metaData )
  }catch(err){
    console.log('failed bundleDrop', err)
  }

})()