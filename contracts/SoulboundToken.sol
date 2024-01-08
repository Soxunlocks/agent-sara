// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract SoulboundToken is ERC721, Ownable {
    using Strings for uint256;

    uint256 private _tokenIds;
    mapping(uint256 => string) private _tokenURIs;

    constructor(string memory name, string memory symbol) ERC721(name, symbol) {}

    function _setTokenURI(uint256 tokenId, string memory _tokenURI) internal virtual {
        require(_exists(tokenId), "SoulboundToken: URI set of nonexistent token");
        _tokenURIs[tokenId] = _tokenURI;
    }

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        require(_exists(tokenId), "SoulboundToken: URI query for nonexistent token");
        string memory _tokenURI = _tokenURIs[tokenId];
        return _tokenURI;
    }

    function mint(address recipient, string memory uri) public onlyOwner returns (uint256) {
        _tokenIds++;
        uint256 newItemId = _tokenIds;

        _mint(recipient, newItemId);
        _setTokenURI(newItemId, uri);
        
        return newItemId;
    }

    // Override functions to prevent token from being transferred
    function _transfer(address from, address to, uint256 tokenId) internal override {
        require(false, "SoulboundToken: token transfer disabled");
    }

    function _beforeTokenTransfer(address from, address to, uint256 tokenId) internal override {
        require(from == address(0), "SoulboundToken: token transfer disabled");
    }
}