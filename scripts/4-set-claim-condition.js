import sdk from "./1-initialize-sdk.js";

// Contract address of bundle drop
const bundleDrop = sdk.getBundleDropModule("0x8b3B8B5Fc3A572703DFeB1E7c441b8EEbD402D8f");

(async () => {

  try{

    const claimConditionFactory = bundleDrop.getClaimConditionFactory();
    // specify condition
    claimConditionFactory.newClaimPhase({
      startTime: new Date(),
      maxQuantity: 50_000,
      maxQuantityPerTransaction: 1,

    })
    await bundleDrop.setClaimCondition(0, claimConditionFactory)
    console.log("claim condition set")


  }catch(err){
    console.error("failed to set claim", err)
  }

})()