---

# ChaiDapp

ChaiDapp is a decentralized application (DApp) built on the Ethereum blockchain. It allows users to interact with smart contracts to buy chai and view memos from other users. The project is developed using React for the front-end and Solidity for the smart contracts.

## Features

- **Buy Chai**: Users can purchase chai using Ethereum.
- **View Memos**: Users can see memos left by others who bought chai.
- **Blockchain Integration**: Deployed on Ethereum's Sepolia testnet.

## Project Structure

- `contracts/`: Contains the Solidity smart contracts.
- `scripts/`: Deployment scripts using Hardhat.
- `client/src/`: Front-end source code built with React.

## Prerequisites

- Node.js and npm
- Hardhat
- MetaMask (or any Web3 wallet)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/manishojha3/chaidapp.git
   cd chaidapp
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Compile the smart contract:
   ```bash
   npx hardhat compile
   ```

4. Deploy the smart contract:
   ```bash
   npx hardhat run scripts/deploy.js --network sepolia
   ```

5. Start the front-end:
   ```bash
   npm start
   ```

### Smart Contract

Ensure the smart contract is deployed on the Ethereum Sepolia testnet or mainnet. Use Alchemy or Infura to connect the front-end to the deployed contract.

## Environment Variables

Create a `.env` file in the root directory to store sensitive information like the Alchemy API URL and contract address:

```
url: "YOUR_ALCHEMY_API_URL",
accounts: ["Your wallet private key"]
```
---
