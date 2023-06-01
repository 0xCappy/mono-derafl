# DeRafl!

DeRafl is a decentralised NFT raffle platform built on Ethereum which enables on chain collection royalties.

This mono-repo includes the Next.js front end and backend using AWS Amplify.

## Front-end

Like traditional next.js applications pages are in the /pages folder. Each page is composed one or more features found in the /features folder, and commonly used components and utils in the /common folder.

- Hooks are used for reading from smart contracts in the /hooks folder
- Wagmi is used for contract read/writes
- ConnectKit is used for wallet connections
- Alchemy is used for rpc connection
- Mantine ui component library is used heavily for responsive design and layout
- Mantine custom theme is defined in theme/theme.ts
- Amplify codegen is used for generating graphql operations and models, can be found in /src. Use amplify codegen to generate
- Next api is used to interface with alchemy NFT api in pages/api

## Back-end

Back-end is setup via AWS Amplify. DynamoDB and GraphQL, and Lambda Functions are used.

- Due to the public nature of this application, reads on all data types are public, creates and updates are permissioned via AWS iAM
- Moralis streams are used to send on chain event data via a web-hook set up as a Lambda Function in amplify/backend/function/deraflstreamevent. The Lambda Function is responsible for writing all necessary data to dynamodb
- Schema can be found in amplify/backend/api/derafl/schema.graphql

## Links

Live app https://derafl.com
Testnet https://testnet.derafl.com
User Docs https://docs.derafl.com
Smart contract repo: https://github.com/HellFireLabs/DeRafl
Smart contract audit: https://static1.squarespace.com/static/63fb95393027395e5abc8d08/t/642462b090d4f35fb083a1d4/1680106160774/DeRafl+Contract+Review+March+2023+-+foostudio.pdf