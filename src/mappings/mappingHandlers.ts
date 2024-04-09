import {
  CosmosMessage,
} from "@subql/types-cosmos";

type Analog = {
  type: string;
  sender: string;
  contract: string;
  msg: any;
};


export async function handleMessage(
  msg: CosmosMessage<Analog>
): Promise<void> {
  // Example https://www.mintscan.io/neutron/txs/156FE31585BD75E06EE337CEA908C37EA0434CC49943B4860E7AABE2475B6B01?height=1437614
  logger.info(`New Airdrop Claim at block ${msg.msg.decodedMsg.contract.toString()}`);

}
