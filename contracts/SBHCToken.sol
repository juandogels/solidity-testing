//SPDX-License-Identifier: MIT

pragma solidity ^0.8.6;

/**
 * @dev SBHC literally means simple basic hardcoded
 * This contract is used for basic testing
 */
contract SBHCToken {
    uint256 private totalSupply;
    address private owner;
    string private token;

    constructor() {
        totalSupply = 300000;
        owner = msg.sender;
        token = "SBHC Token";
    }

    function getTotalSupply() public view returns (uint256) {
        return totalSupply;
    }

    function getOwner() public view returns (address) {
        return owner;
    }

    function getToken() public view returns (string memory) {
        return token;
    }
}