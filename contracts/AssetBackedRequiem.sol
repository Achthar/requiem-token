// SPDX-License-Identifier: MIT
pragma solidity 0.8.14;

import "./proxy/utils/UUPSUpgradeable.sol";
import "./proxy/utils/OwnableUpgradeable.sol";
import "./proxy/ERC20/ERC20PermitUpgradeable.sol";
import "./proxy/ERC20/ERC20BurnableUpgradeable.sol";

/**
 *  Governance token for requiem.finance
 *  - Flexible minting allowed for flexibility
 *  - Total supply cap for better control
 *  - Controllable minters with indivitual caps
 */
contract AssetBackedRequiem is
  ERC20PermitUpgradeable,
  ERC20BurnableUpgradeable,
  UUPSUpgradeable,
  OwnableUpgradeable
{
  uint256 public MAX_TOTAL_SUPPLY = 10_000_000 ether; // 10mn

  mapping(address => uint256) public minters; // minter's address => minter's max cap
  mapping(address => uint256) public minters_minted;

  /* ========== EVENTS ========== */
  event MinterUpdate(address indexed account, uint256 cap);
  event MaxTotalSupplyUpdated(uint256 _newCap);

  /* ========== Modifiers =============== */

  modifier onlyMinter() {
    require(minters[msg.sender] > 0, "Only minter can interact");
    _;
  }

  function name() public pure override returns (string memory) {
    return "Asset Backed Requiem Token";
  }

  function symbol() public pure override returns (string memory) {
    return "abREQ";
  }

  /* ========== MUTATIVE FUNCTIONS ========== */

  function mint(address _recipient, uint256 _amount) public onlyMinter {
    minters_minted[_msgSender()] += _amount;
    require(
      minters[_msgSender()] >= minters_minted[_msgSender()],
      "Minting amount exceeds minter cap"
    );
    _mint(_recipient, _amount);
  }

  function _beforeTokenTransfer(
    address _from,
    address _to,
    uint256 _amount
  ) internal override {
    super._beforeTokenTransfer(_from, _to, _amount);
    if (_from == address(0)) {
      // When minting tokens
      require(
        totalSupply() + _amount <= MAX_TOTAL_SUPPLY,
        "Max total supply exceeded"
      );
    }
    if (_to == address(0)) {
      // When burning tokens
      require(
        MAX_TOTAL_SUPPLY >= _amount,
        "Burn amount exceeds max total supply"
      );
      MAX_TOTAL_SUPPLY -= _amount;
    }
  }

  /* ========== OWNER FUNCTIONS ========== */

  function setMinter(address _account, uint256 _minterCap) external onlyOwner {
    require(_account != address(0), "invalid address");
    require(
      minters_minted[_account] <= _minterCap,
      "Minter already minted a larger amount than new cap"
    );
    minters[_account] = _minterCap;
    emit MinterUpdate(_account, _minterCap);
  }

  function resetMaxTotalSupply(uint256 _newCap) external onlyOwner {
    require(_newCap >= totalSupply(), "_newCap is below current total supply");
    MAX_TOTAL_SUPPLY = _newCap;
    emit MaxTotalSupplyUpdated(_newCap);
  }

  function _authorizeUpgrade(address newImplementation)
    internal
    override
    onlyOwner
  {}
}