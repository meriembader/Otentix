const { assert } = require('chai')

describe('Otentix Contract', async () => {
    let nft
    let nftContractAddress
    let tokenId

    // Deploys the Otentix contract and the EternalMarket contract before each test
    beforeEach('Setup Contract', async () => {
        const Otentix = await ethers.getContractFactory('Otentix')
        nft = await Otentix.deploy()
        await nft.deployed()
        nftContractAddress = await nft.address
    })

    // Tests address for the Otentix contract
    it('Should have an address', async () => {
        assert.notEqual(nftContractAddress, 0x0)
        assert.notEqual(nftContractAddress, '')
        assert.notEqual(nftContractAddress, null)
        assert.notEqual(nftContractAddress, undefined)
    })

    // Tests name for the token of Otentix contract
    it('Should have a name', async () => {
        // Returns the name of the token
        const name = await nft.collectionName()

        assert.equal(name, 'Otentix')
    })

    // Tests symbol for the token of Otentix contract
    it('Should have a symbol', async () => {
        // Returns the symbol of the token
        const symbol = await nft.collectionSymbol()

        assert.equal(symbol, 'ENFT')
    })

    // Tests for NFT minting function of Otentix contract using tokenID of the minted NFT
    it('Should be able to mint NFT', async () => {
        // Mints a NFT
        let txn = await nft.createOtentix()
        let tx = await txn.wait()

        // tokenID of the minted NFT
        let event = tx.events[0]
        let value = event.args[2]
        tokenId = value.toNumber()

        assert.equal(tokenId, 0)

        // Mints another NFT
        txn = await nft.createOtentix()
        tx = await txn.wait()

        // tokenID of the minted NFT
        event = tx.events[0]
        value = event.args[2]
        tokenId = value.toNumber()

        assert.equal(tokenId, 1)
    })
})
