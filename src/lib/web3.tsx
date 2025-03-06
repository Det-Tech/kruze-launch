import { Transaction } from "@mysten/sui/transactions";
import { launchpadCoinType, launchpadPackageId, poolInitialVersion, poolObjectId, supplyInitialVersion, supplyObjectId, treasuryInitialVersion, treasuryObjectId } from "../config";

export const create_pool  = async (wallet: any, client: any ) => {    // isg token deposit to contract using admin permission
  try{

      const tx: Transaction = new Transaction();
      const typeArguments = [launchpadCoinType]
  
      tx.moveCall({
          target: `${launchpadPackageId}::ISG::create_pool`,
          arguments: [
          ],  
      }); 
  
      const resData = await wallet.signAndExecuteTransaction({
          transaction: tx,
        },
        {
          execute: ({ bytes, signature }: any) => {
            return client.executeTransactionBlock({
              transactionBlock: bytes,
              signature,
              options: {
                showRawEffects: true,
                showObjectChanges: true,
              },
            });
          },
        }
      );
      console.log("create_pool", resData)
      return true;
  }catch(err) {
      console.log(err)
      return false;
  }
}

export const admin_mint  = async (wallet: any, client: any, amount:any, recipient: any ) => {    // isg token deposit to contract using admin permission
  try{

      const tx: Transaction = new Transaction();
      const typeArguments = [launchpadCoinType]
  
      const treasuryObject = tx.sharedObjectRef({
          initialSharedVersion: treasuryInitialVersion,
          mutable: true,
          objectId: treasuryObjectId
      })

      const supplyObject = tx.sharedObjectRef({
        initialSharedVersion: supplyInitialVersion,
        mutable: true,
        objectId: supplyObjectId
      })

      console.log("mint ")

      tx.moveCall({
          target: `${launchpadPackageId}::ISG::mint`,
          arguments: [
              treasuryObject,
              tx.pure.u64(1_000_000_00),                    
              tx.pure.address(recipient),                     
              supplyObject
          ],  
      }); 
  
      const resData = await wallet.signAndExecuteTransaction({
          transaction: tx,
        },
        {
          execute: ({ bytes, signature }: any) => {
            return client.executeTransactionBlock({
              transactionBlock: bytes,
              signature,
              options: {
                showRawEffects: true,
                showObjectChanges: true,
              },
            });
          },
        }
      );
      console.log("admin mint ", resData);
      return true;
  }catch(err) {
      console.log(err)
      return false;
  }
}

export const add_liquidity  = async (wallet: any, client: any ) => {    // isg token deposit to contract using admin permission
  try{

      const tx: Transaction = new Transaction();
      const typeArguments = [launchpadCoinType]
  
      const treasuryObject = tx.sharedObjectRef({
          initialSharedVersion: treasuryInitialVersion,
          mutable: true,
          objectId: treasuryObjectId
      })

      const supplyObject = tx.sharedObjectRef({
        initialSharedVersion: supplyInitialVersion,
        mutable: true,
        objectId: supplyObjectId
      })

      const poolObject = tx.sharedObjectRef({
        initialSharedVersion: poolInitialVersion,
        mutable: true,
        objectId: poolObjectId
      })

    let cursor = null;
    let coins: any = []
    while (true) {
        const objects: any = await client.getOwnedObjects({
            owner: wallet?.account?.address?.toString()!,
            options: { showType: true, showContent:true, showDisplay:true,  },
            cursor,
        });
        objects.data.map((item: any) => {
                coins.push(item.data);
        })
        cursor = objects.nextCursor;
        if(!objects.hasNextPage){
            break;
        }
    }
    console.log(coins)
    const filtered = coins.filter((item : any)=>item.type.includes(launchpadPackageId))
    const selectedCoin = filtered[0];

      const isg_splitted = tx.splitCoins(selectedCoin.objectId, [
        1 * Number(1_000_000), //1_000_000,
      ]);

      const sui_splitted = tx.splitCoins(tx.gas, [
        0.5 * Number(1_000_000_000), //1_000_000, // 1_000_000_000 this is decimal
      ]);


      tx.moveCall({
          target: `${launchpadPackageId}::ISG::add_liquidity`,
          arguments: [
              poolObject,
              isg_splitted,                     
              sui_splitted
          ],
      }); 
  
      const resData = await wallet.signAndExecuteTransaction({
          transaction: tx,
        },
        {
          execute: ({ bytes, signature }: any) => {
            return client.executeTransactionBlock({
              transactionBlock: bytes,
              signature,
              options: {
                showRawEffects: true,
                showObjectChanges: true,
              },
            });
          },
        }
      );
      console.log("admin add_liquidity ", resData);
      return true;
  }catch(err) {
      console.log(err)
      return false;
  }
}

export const swap_sui_for_isg  = async (wallet: any, client: any  ) => {    // isg token deposit to contract using admin permission
  try{

      const tx: Transaction = new Transaction();

      const poolObject = tx.sharedObjectRef({
        initialSharedVersion: poolInitialVersion,
        mutable: true,
        objectId: poolObjectId
      })

      const sui_splitted = tx.splitCoins(tx.gas, [
        1 * Number(1_000_000), //1_000_000, // 1_000_000_000 this is decimal
      ]);


      tx.moveCall({
          target: `${launchpadPackageId}::ISG::swap_sui_for_isg`,
          arguments: [
              poolObject,
              sui_splitted
          ],
      }); 
  
      const resData = await wallet.signAndExecuteTransaction({
          transaction: tx,
        },
        {
          execute: ({ bytes, signature }: any) => {
            return client.executeTransactionBlock({
              transactionBlock: bytes,
              signature,
              options: {
                showRawEffects: true,
                showObjectChanges: true,
              },
            });
          },
        }
      );
      console.log("admin swap_sui_for_isg ", resData);
      return true;
  }catch(err) {
      console.log(err)
      return false;
  }
}

export const swap_isg_for_sui  = async (wallet: any, client: any ) => {    // isg token deposit to contract using admin permission
  try{

      const tx: Transaction = new Transaction();
      const typeArguments = [launchpadCoinType]
  
      const poolObject = tx.sharedObjectRef({
        initialSharedVersion: poolInitialVersion,
        mutable: true,
        objectId: poolObjectId
      })

      let cursor = null;
      let coins: any = []
      while (true) {
          const objects: any = await client.getOwnedObjects({
              owner: wallet?.account?.address?.toString()!,
              options: { showType: true, showContent:true, showDisplay:true,  },
              cursor,
          });
          objects.data.map((item: any) => {
                  coins.push(item.data);
          })
          cursor = objects.nextCursor;
          if(!objects.hasNextPage){
              break;
          }
      }
      console.log(coins)
      const filtered = coins.filter((item : any)=>item.type.includes(launchpadPackageId))
      const selectedCoin = filtered[0];


      const isg_splitted = tx.splitCoins(selectedCoin.objectId, [
        1 * Number(1_000_00), //111_000_000_000,
      ]);


      tx.moveCall({
          target: `${launchpadPackageId}::ISG::swap_isg_for_sui`,
          arguments: [
              poolObject,
              isg_splitted,                     
          ],
      }); 
  
      const resData = await wallet.signAndExecuteTransaction({
          transaction: tx,
        },
        {
          execute: ({ bytes, signature }: any) => {
            return client.executeTransactionBlock({
              transactionBlock: bytes,
              signature,
              options: {
                showRawEffects: true,
                showObjectChanges: true,
              },
            });
          },
        }
      );
      console.log("admin swap_isg_for_sui ", resData);
      return true;
  }catch(err) {
      console.log(err)
      return false;
  }
}

export const admin_withdraw  = async (wallet: any, client: any ) => {    // isg token deposit to contract using admin permission
  try{

      const tx: Transaction = new Transaction();
      const typeArguments = [launchpadCoinType]
  
      const poolObject = tx.sharedObjectRef({
        initialSharedVersion: poolInitialVersion,
        mutable: true,
        objectId: poolObjectId
      })
      

      tx.moveCall({
          target: `${launchpadPackageId}::ISG::admin_withdraw`,
          arguments: [
              poolObject,
          ],
      }); 
  
      const resData = await wallet.signAndExecuteTransaction({
          transaction: tx,
        },
        {
          execute: ({ bytes, signature }: any) => {
            return client.executeTransactionBlock({
              transactionBlock: bytes,
              signature,
              options: {
                showRawEffects: true,
                showObjectChanges: true,
              },
            });
          },
        }
      );
      console.log("admin swap_isg_for_sui ", resData);
      return true;
  }catch(err) {
      console.log(err)
      return false;
  }
}
