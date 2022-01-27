//SPDX-License-Identifier: Unlicense
pragma solidity >=0.7.3;

import "@nibbstack/erc721/src/contracts/tokens/nf-token-metadata.sol";
import "@nibbstack/erc721/src/contracts/ownership/ownable.sol";
// import "./Ownable.sol";
 
contract Otentix is NFTokenMetadata, Ownable {

constructor() {

    nftName = "Otentix NFT";
    nftSymbol = "OTN";
}

function mint(address _to, uint256 _tokenId, string calldata _uri) external onlyOwner {
super._mint(_to, _tokenId);
super._setTokenUri(_tokenId, _uri);

}

}