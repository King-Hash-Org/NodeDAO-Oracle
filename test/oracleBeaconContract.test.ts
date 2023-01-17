/**
 * desc:
 * @author renshiwei
 * Date: 2023/1/14 15:32
 **/
import {ethers} from 'ethers'
import {describe, jest, test} from '@jest/globals'
import * as oracleContract from '../src/contracts/oracle'

describe("oracleBeaconContract test", () => {
    jest.setTimeout(30000);

    test("expectedEpochId", async () => {
        await oracleContract.getExpectedEpochId().then((epoch: ethers.BigNumber) => {
            console.log("epoch:%i", epoch);
        })

    });

    test("isQuorum", async () => {
        await oracleContract.isQuorum().then((isQuorum: boolean) => {
            console.log(isQuorum);
        })
    });

    test("isReportBeacon", async () => {
        const oracleMemberAddress = "0x892e7c8C5E716e17891ABf9395a0de1f2fc84786";
        await oracleContract.isReportBeacon(oracleMemberAddress).then((isReportBeacon: boolean) => {
            console.log(isReportBeacon);
        })
    });

    test("reportBeacon", async () => {

        let epochId: ethers.BigNumber = ethers.BigNumber.from(0);
        await oracleContract.getExpectedEpochId().then((epoch: ethers.BigNumber) => {
            epochId = epoch;
        })
        const beaconBalance = ethers.BigNumber.from(ethers.utils.parseEther("66.43"));
        const beaconValidators = 2;
        const validatorRankingRoot = "0x58d40378452cab5f3f177e4a36e706087da75f9a745e076b93959d25883efce7";

        await oracleContract.reportBeacon(epochId, beaconBalance, beaconValidators, validatorRankingRoot).then((res: any) => {
            console.log(res);
        })

    }, 30000);

});


describe("vNFTContract test", () => {

    test("get all pubkeys", async () => {
        await oracleContract.getPubkeys().then((pubkeys: string[]) => {
            console.log("pubkeys:", pubkeys);
        })
    });

    test("tokenIdOfValidator", async () => {
        const pubkey = "0x";
        await oracleContract.tokenIdOfValidator(pubkey).then((tokenId: number) => {
            console.log("tokenId:%i", tokenId);
        })
    });

});