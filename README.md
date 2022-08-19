
# Med Chain - Patient-Led Health Transformation
Empowering patient to have control of their medical data, they should be able to grant or revoke access to the data as per their needs. They should be aware about who is access this data. 
Med chain gives them the power to share theur records with the doctors in their medical network.
Using blockchain we have created a secure and reliable network.

Medchain is also trying to change the monetization of medical data in current healthcare system by introducing telemedicine market in the near future, where patients and doctors will be able to interact with each other and patients will be incentivized for their transparency by various research lab and insurance companies that will use their data for their own research.





## Running


Install hyperledger in root folder
```bash
  curl -sSL https://bit.ly/2ysbOFE | bash -s -- 2.2.0 1.4.9
```

Create Channel using test-network/network.sh

```bash
./network.sh up createChannel -s couchdb -ca
```

Install Chaincode on both organisations

```bash
./network.sh deployCC -ccn basic -ccp ../patient-data/chaincode-typescript/ -ccl typescript
```

Adding peer config
```
export PATH=${PWD}/../bin:$PATH
export FABRIC_CFG_PATH=$PWD/../config/
export CORE_PEER_TLS_ENABLED=true
export CORE_PEER_LOCALMSPID="Org1MSP"
export CORE_PEER_TLS_ROOTCERT_FILE=${PWD}/organizations/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt
export CORE_PEER_MSPCONFIGPATH=${PWD}/organizations/peerOrganizations/org1.example.com/users/Admin@org1.example.com/msp
export CORE_PEER_ADDRESS=localhost:7051
```

Initialize chaincode to check if everything runs

```
peer chaincode invoke -o localhost:7050 --ordererTLSHostnameOverride orderer.example.com --tls --cafile "${PWD}/organizations/ordererOrganizations/example.com/orderers/orderer.example.com/msp/tlscacerts/tlsca.example.com-cert.pem" -C mychannel -n basic --peerAddresses localhost:7051 --tlsRootCertFiles "${PWD}/organizations/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt" --peerAddresses localhost:9051 --tlsRootCertFiles "${PWD}/organizations/peerOrganizations/org2.example.com/peers/peer0.org2.example.com/tls/ca.crt" -c '{"function":"InitLedger","Args":[]}'
```

Running backend patient-data/application/backend
```
npm i
npm start
```

Running front-end patient-data/application/frontend

change the backend url in the env file as per your server config
```
npm i
npm start
```
## Author
- [@Tarandeep100](https://github.com/Tarandeep100/)

## Architecture

![Architecture](https://raw.githubusercontent.com/tarandeep100/HyperLedgerMedicalData/main/Architecture.drawio.png)

## State Diagram

![State Diagram](https://raw.githubusercontent.com/tarandeep100/HyperLedgerMedicalData/main/State%20Diagram.jpg)

![State Diagram Encryption/Decryption](https://raw.githubusercontent.com/tarandeep100/HyperLedgerMedicalData/main/State%20Diagram%20EncryptDecrypt.drawio.png)


## ScreenShots

![Patient ](https://raw.githubusercontent.com/tarandeep100/HyperLedgerMedicalData/main/Patient.jpg)
![Hospital ](https://raw.githubusercontent.com/tarandeep100/HyperLedgerMedicalData/main/Hospital.jpg)
![Doctor ](https://raw.githubusercontent.com/tarandeep100/HyperLedgerMedicalData/main/Doctor.jpg)


