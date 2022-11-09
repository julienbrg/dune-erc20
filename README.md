# DUNE ERC-20

## Install

```shell
npm i
```

## Test

```shell
npx hardhat test
```

## Deploy

Create a `.env` file with your own keys at the root directory.

Deploy on Aurora Testnet:

```shell
npx hardhat run scripts/deploy.ts --network aurora_testnet
```

Deploy on Aurora Mainnet:

```shell
npx hardhat run scripts/deploy.ts --network aurora_mainnet
```

It will create a `store.json` file with the address of the latest contract deployed.

## Transfer

In the `transfer.ts` file, you can modify the amount and the recipient (lines 29 and 32), then:

Testnet:

```shell
npx hardhat run scripts/transfer.ts --network aurora_testnet
```

Mainnet:

```shell
npx hardhat run scripts/transfer.ts --network aurora_mainnet
```

## Aurorascan verification

In `deploy.ts`, you can uncomment the lines 22, 23 and 24 to get your contract verified (Mainnet only). This allows anyone to read the source code and also interact directly using Aurorascan.

## Support

You can contact me via [Element](https://matrix.to/#/@julienbrg:matrix.org), [Telegram](https://t.me/julienbrg), [Twitter](https://twitter.com/julienbrg), [Discord](https://discord.gg/pfkJpEb4xn), or [LinkedIn](https://www.linkedin.com/in/julienberanger/).
