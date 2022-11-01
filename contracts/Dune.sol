// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/// @custom:security-contact julien@strat.cc
contract Dune is ERC20 {
    constructor() ERC20("Dune", "DUNE") {}

    function mint(address to, uint256 amount) public {
        _mint(to, amount);
    }
}