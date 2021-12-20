import sdk from './1-initialize-sdk.js';
import {readFileSync} from "fs"

// Contract Address
const data = "0x8b3B8B5Fc3A572703DFeB1E7c441b8EEbD402D8f";

const bundleDrop = sdk.getBundleDropModule(data);

(async () => {
  try{
    await bundleDrop.createBatch([
      {
        name: "Ultimate Hoe",
        description: "The ultimate tool to cultivate the internet",
        image: readFileSync("scripts/assets/meme.png")
      },
    ])
    console.log('Succefull new nft drop!')
  }catch(err){
    console.error('Failed to create new NFT', err)
  }
})()
