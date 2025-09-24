export const pairsData = {
    "0": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 5,
        "feedId": "0xff61491a931112ddf1bd8147cd1b641375f79f5825126d665480874634fd0ace",
        "attributes": {
          "symbol": "Crypto.ETH/USD",
          "asset_type": "Crypto",
          "is_open": true,
          "next_open": 0,
          "next_close": 0,
          "schedule": "America/New_York;O,O,O,O,O,O,O;"
        }
      },
      "backupFeed": {
        "maxDeviationP": 1.5,
        "feedId": "0x71041dddad3595F9CEd3DcCFBe3D1F4b0a16Bb70"
      },
      "spreadP": 0.01,
      "pnlSpreadP": 0.01,
      "leverages": {
        "minLeverage": 1,
        "maxLeverage": 75,
        "pnlMinLeverage": 75,
        "pnlMaxLeverage": 500
      },
      "priceImpactMultiplier": 1.2,
      "skewImpactMultiplier": 0.25,
      "groupIndex": 0,
      "feeIndex": 0,
      "values": {
        "maxGainP": 2500,
        "maxSlP": 80,
        "maxLongOiP": 50,
        "maxShortOiP": 50,
        "groupOpenInterestPercentageP": 100,
        "maxWalletOIP": 50,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 100,
        "maxWalletOI": 50
      },
      "from": "ETH",
      "to": "USD",
      "timer": {
        "numTiers": 1,
        "positionSizeToThresholdTierMap": {
          "0": 0
        },
        "thresholdTierToTimerMap": {
          "0": 0
        }
      },
      "openInterest": {
        "long": 2706433.47,
        "short": 2613914.34
      },
      "marginFee": {
        "long": 0.0017123287671232876,
        "short": 0.0017123287671232876
      },
      "pairOI": 5320347.81,
      "pairMaxOI": 29792273.54,
      "maxWalletOI": 47880439.62,
      "pairParams": {
        "onePercentDepthAbove": 22569455.024,
        "onePercentDepthBelow": 32869730.128
      },
      "blockOILimit": 2500000,
      "storagePairParams": {
        "posSpreadCap": 2,
        "negSpreadCap": 25,
        "isPnlTypeAllowed": 1,
        "pnlPriceImpactMultiplier": 1.2,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 2,
        "pnlNegSpreadCap": 5,
        "minBorrowFee": 15
      },
      "openFeeP": 0.045,
      "closeFeeP": 0.045,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 10,
      "pnlFees": {
        "numTiers": 10,
        "tierP": [
          1,
          5,
          25,
          50,
          100,
          250,
          500,
          1500,
          2500,
          3000
        ],
        "feesP": [
          80,
          50,
          45,
          37.5,
          27.5,
          25,
          25,
          22.5,
          15,
          2.5
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 8,
        "2": 8,
        "3": 8
      },
      "skewEqParams": [
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 0,
      "pairSpreadP": 0.01,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 10,
      "pairMinLeverage": 1
    },
    "1": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 5,
        "feedId": "0xe62df6c8b4a85fe1a67db44dc12de5db330f7ac66b72dc658afedf0f4a415b43",
        "attributes": {
          "symbol": "Crypto.BTC/USD",
          "asset_type": "Crypto",
          "is_open": true,
          "next_open": 0,
          "next_close": 0,
          "schedule": "America/New_York;O,O,O,O,O,O,O;"
        }
      },
      "backupFeed": {
        "maxDeviationP": 1.5,
        "feedId": "0xCCADC697c55bbB68dc5bCdf8d3CBe83CdD4E071E"
      },
      "spreadP": 0,
      "pnlSpreadP": 0.01,
      "leverages": {
        "minLeverage": 1,
        "maxLeverage": 75,
        "pnlMinLeverage": 75,
        "pnlMaxLeverage": 500
      },
      "priceImpactMultiplier": 0,
      "skewImpactMultiplier": 0,
      "groupIndex": 0,
      "feeIndex": 1,
      "values": {
        "maxGainP": 2500,
        "maxSlP": 80,
        "maxLongOiP": 50,
        "maxShortOiP": 50,
        "groupOpenInterestPercentageP": 100,
        "maxWalletOIP": 50,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 100,
        "maxWalletOI": 50
      },
      "from": "BTC",
      "to": "USD",
      "timer": {
        "numTiers": 1,
        "positionSizeToThresholdTierMap": {
          "0": 0
        },
        "thresholdTierToTimerMap": {
          "0": 0
        }
      },
      "openInterest": {
        "long": 2657708.45,
        "short": 2516728.53
      },
      "marginFee": {
        "long": 0.0017123287671232876,
        "short": 0.0017123287671232876
      },
      "pairOI": 5174436.98,
      "pairMaxOI": 29792273.54,
      "maxWalletOI": 47880439.62,
      "pairParams": {
        "onePercentDepthAbove": 22660827.864,
        "onePercentDepthBelow": 23247337.208
      },
      "blockOILimit": 2500000,
      "storagePairParams": {
        "posSpreadCap": 2,
        "negSpreadCap": 25,
        "isPnlTypeAllowed": 1,
        "pnlPriceImpactMultiplier": 1.2,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 2,
        "pnlNegSpreadCap": 5,
        "minBorrowFee": 15
      },
      "openFeeP": 0.045,
      "closeFeeP": 0.045,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 10,
      "pnlFees": {
        "numTiers": 10,
        "tierP": [
          1,
          5,
          25,
          50,
          100,
          250,
          500,
          1500,
          2500,
          3000
        ],
        "feesP": [
          80,
          50,
          45,
          37.5,
          27.5,
          25,
          25,
          22.5,
          15,
          2.5
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 8,
        "2": 8,
        "3": 8
      },
      "skewEqParams": [
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 1,
      "pairSpreadP": 0,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 10,
      "pairMinLeverage": 1
    },
    "2": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 5,
        "feedId": "0xef0d8b6fda2ceba41da15d4095d1da392a0d2f8ed0c6c7bc0f4cfac8c280b56d",
        "attributes": {
          "symbol": "Crypto.SOL/USD",
          "asset_type": "Crypto",
          "is_open": true,
          "next_open": 0,
          "next_close": 0,
          "schedule": "America/New_York;O,O,O,O,O,O,O;"
        }
      },
      "backupFeed": {
        "maxDeviationP": 1.5,
        "feedId": "0x975043adBb80fc32276CbF9Bbcfd4A601a12462D"
      },
      "spreadP": 0.02,
      "pnlSpreadP": 0.01,
      "leverages": {
        "minLeverage": 1,
        "maxLeverage": 75,
        "pnlMinLeverage": 75,
        "pnlMaxLeverage": 500
      },
      "priceImpactMultiplier": 1.2,
      "skewImpactMultiplier": 0.25,
      "groupIndex": 1,
      "feeIndex": 2,
      "values": {
        "maxGainP": 2500,
        "maxSlP": 80,
        "maxLongOiP": 50,
        "maxShortOiP": 50,
        "groupOpenInterestPercentageP": 100,
        "maxWalletOIP": 50,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 100,
        "maxWalletOI": 50
      },
      "from": "SOL",
      "to": "USD",
      "timer": {
        "numTiers": 1,
        "positionSizeToThresholdTierMap": {
          "0": 0
        },
        "thresholdTierToTimerMap": {
          "0": 0
        }
      },
      "openInterest": {
        "long": 755985.33,
        "short": 723955.94
      },
      "marginFee": {
        "long": 0.0017123287671232876,
        "short": 0.0017123287671232876
      },
      "pairOI": 1479941.26,
      "pairMaxOI": 13832127,
      "maxWalletOI": 47880439.62,
      "pairParams": {
        "onePercentDepthAbove": 20094317.912,
        "onePercentDepthBelow": 18597077.992
      },
      "blockOILimit": 2500000,
      "storagePairParams": {
        "posSpreadCap": 2,
        "negSpreadCap": 50,
        "isPnlTypeAllowed": 1,
        "pnlPriceImpactMultiplier": 1.2,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 2,
        "pnlNegSpreadCap": 5,
        "minBorrowFee": 15
      },
      "openFeeP": 0.045,
      "closeFeeP": 0.045,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 10,
      "pnlFees": {
        "numTiers": 10,
        "tierP": [
          1,
          5,
          25,
          50,
          100,
          250,
          500,
          1500,
          2500,
          3000
        ],
        "feesP": [
          80,
          50,
          45,
          37.5,
          27.5,
          25,
          25,
          22.5,
          15,
          2.5
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 8,
        "2": 8,
        "3": 8
      },
      "skewEqParams": [
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 2,
      "pairSpreadP": 0.02,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 10,
      "pairMinLeverage": 1
    },
    "3": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 5,
        "feedId": "0x2f95862b045670cd22bee3114c39763a4a08beeb663b145d283c31d7d1101c4f",
        "attributes": {
          "symbol": "Crypto.BNB/USD",
          "asset_type": "Crypto",
          "is_open": true,
          "next_open": 0,
          "next_close": 0,
          "schedule": "America/New_York;O,O,O,O,O,O,O;"
        }
      },
      "backupFeed": {
        "maxDeviationP": 0,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.05,
      "pnlSpreadP": 0.04,
      "leverages": {
        "minLeverage": 1,
        "maxLeverage": 40,
        "pnlMinLeverage": 1,
        "pnlMaxLeverage": 50
      },
      "priceImpactMultiplier": 1.2,
      "skewImpactMultiplier": 0.1,
      "groupIndex": 1,
      "feeIndex": 3,
      "values": {
        "maxGainP": 500,
        "maxSlP": 80,
        "maxLongOiP": 75,
        "maxShortOiP": 75,
        "groupOpenInterestPercentageP": 35,
        "maxWalletOIP": 15,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 35,
        "maxWalletOI": 15
      },
      "from": "BNB",
      "to": "USD",
      "timer": {
        "numTiers": 2,
        "positionSizeToThresholdTierMap": {
          "0": 0,
          "1": 5000
        },
        "thresholdTierToTimerMap": {
          "0": 0,
          "1": 180
        }
      },
      "openInterest": {
        "long": 269055.34,
        "short": 32590.92
      },
      "marginFee": {
        "long": 0.00228310502283105,
        "short": 0.00228310502283105
      },
      "pairOI": 301646.26,
      "pairMaxOI": 4841244.45,
      "maxWalletOI": 14364131.89,
      "pairParams": {
        "onePercentDepthAbove": 4592629.32,
        "onePercentDepthBelow": 3876515.256
      },
      "blockOILimit": 2500000,
      "storagePairParams": {
        "posSpreadCap": 5,
        "negSpreadCap": 100000,
        "isPnlTypeAllowed": 0,
        "pnlPriceImpactMultiplier": 0,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 0,
        "minBorrowFee": 20
      },
      "openFeeP": 0.045,
      "closeFeeP": 0.045,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 10,
      "pnlFees": {
        "numTiers": 10,
        "tierP": [
          1,
          5,
          25,
          50,
          100,
          250,
          500,
          1500,
          2500,
          3000
        ],
        "feesP": [
          80,
          50,
          45,
          37.5,
          27.5,
          25,
          25,
          22.5,
          15,
          2.5
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 10,
        "2": 10,
        "3": 10
      },
      "skewEqParams": [
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 3,
      "pairSpreadP": 0.05,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 10,
      "pairMinLeverage": 1
    },
    "4": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 5,
        "feedId": "0x3fa4252848f9f0a1480be62745a4629d9eb1322aebab8a791e344b3b9c1adcf5",
        "attributes": {
          "symbol": "Crypto.ARB/USD",
          "asset_type": "Crypto",
          "is_open": true,
          "next_open": 0,
          "next_close": 0,
          "schedule": "America/New_York;O,O,O,O,O,O,O;"
        }
      },
      "backupFeed": {
        "maxDeviationP": 0,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.05,
      "pnlSpreadP": 0.04,
      "leverages": {
        "minLeverage": 1,
        "maxLeverage": 40,
        "pnlMinLeverage": 1,
        "pnlMaxLeverage": 50
      },
      "priceImpactMultiplier": 1.2,
      "skewImpactMultiplier": 0.1,
      "groupIndex": 1,
      "feeIndex": 4,
      "values": {
        "maxGainP": 500,
        "maxSlP": 80,
        "maxLongOiP": 75,
        "maxShortOiP": 75,
        "groupOpenInterestPercentageP": 35,
        "maxWalletOIP": 15,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 35,
        "maxWalletOI": 15
      },
      "from": "ARB",
      "to": "USD",
      "timer": {
        "numTiers": 2,
        "positionSizeToThresholdTierMap": {
          "0": 0,
          "1": 50000
        },
        "thresholdTierToTimerMap": {
          "0": 0,
          "1": 180
        }
      },
      "openInterest": {
        "long": 7940.13,
        "short": 6691.76
      },
      "marginFee": {
        "long": 0.00228310502283105,
        "short": 0.00228310502283105
      },
      "pairOI": 14631.89,
      "pairMaxOI": 4841244.45,
      "maxWalletOI": 14364131.89,
      "pairParams": {
        "onePercentDepthAbove": 1062882.544,
        "onePercentDepthBelow": 776808.24
      },
      "blockOILimit": 2500000,
      "storagePairParams": {
        "posSpreadCap": 5,
        "negSpreadCap": 100000,
        "isPnlTypeAllowed": 0,
        "pnlPriceImpactMultiplier": 0,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 0,
        "minBorrowFee": 20
      },
      "openFeeP": 0.045,
      "closeFeeP": 0.045,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 10,
      "pnlFees": {
        "numTiers": 10,
        "tierP": [
          1,
          5,
          25,
          50,
          100,
          250,
          500,
          1500,
          2500,
          3000
        ],
        "feesP": [
          80,
          50,
          45,
          37.5,
          27.5,
          25,
          25,
          22.5,
          15,
          2.5
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 10,
        "2": 10,
        "3": 10
      },
      "skewEqParams": [
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 4,
      "pairSpreadP": 0.05,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 10,
      "pairMinLeverage": 1
    },
    "5": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 5,
        "feedId": "0xdcef50dd0a4cd2dcc17e45df1676dcb336a11a61c69df7a0299b0150c672d25c",
        "attributes": {
          "symbol": "Crypto.DOGE/USD",
          "asset_type": "Crypto",
          "is_open": true,
          "next_open": 0,
          "next_close": 0,
          "schedule": "America/New_York;O,O,O,O,O,O,O;"
        }
      },
      "backupFeed": {
        "maxDeviationP": 0,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.05,
      "pnlSpreadP": 0.02,
      "leverages": {
        "minLeverage": 1,
        "maxLeverage": 40,
        "pnlMinLeverage": 75,
        "pnlMaxLeverage": 250
      },
      "priceImpactMultiplier": 1.2,
      "skewImpactMultiplier": 0.1,
      "groupIndex": 1,
      "feeIndex": 5,
      "values": {
        "maxGainP": 2500,
        "maxSlP": 80,
        "maxLongOiP": 75,
        "maxShortOiP": 75,
        "groupOpenInterestPercentageP": 35,
        "maxWalletOIP": 50,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 35,
        "maxWalletOI": 50
      },
      "from": "DOGE",
      "to": "USD",
      "timer": {
        "numTiers": 1,
        "positionSizeToThresholdTierMap": {
          "0": 0
        },
        "thresholdTierToTimerMap": {
          "0": 0
        }
      },
      "openInterest": {
        "long": 26459.71,
        "short": 28049.98
      },
      "marginFee": {
        "long": 0.00228310502283105,
        "short": 0.00228310502283105
      },
      "pairOI": 54509.7,
      "pairMaxOI": 4841244.45,
      "maxWalletOI": 47880439.62,
      "pairParams": {
        "onePercentDepthAbove": 18178263.08,
        "onePercentDepthBelow": 13604725.8
      },
      "blockOILimit": 2500000,
      "storagePairParams": {
        "posSpreadCap": 2,
        "negSpreadCap": 100000,
        "isPnlTypeAllowed": 1,
        "pnlPriceImpactMultiplier": 1.2,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 10,
        "minBorrowFee": 20
      },
      "openFeeP": 0.045,
      "closeFeeP": 0.045,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 10,
      "pnlFees": {
        "numTiers": 10,
        "tierP": [
          1,
          5,
          25,
          50,
          100,
          250,
          500,
          1500,
          2500,
          3000
        ],
        "feesP": [
          80,
          50,
          45,
          37.5,
          27.5,
          25,
          25,
          22.5,
          15,
          2.5
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 3,
        "2": 3,
        "3": 3
      },
      "skewEqParams": [
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 5,
      "pairSpreadP": 0.05,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 10,
      "pairMinLeverage": 1
    },
    "6": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 5,
        "feedId": "0x93da3352f9f1d105fdfe4971cfa80e9dd777bfc5d0f683ebb6e1294b92137bb7",
        "attributes": {
          "symbol": "Crypto.AVAX/USD",
          "asset_type": "Crypto",
          "is_open": true,
          "next_open": 0,
          "next_close": 0,
          "schedule": "America/New_York;O,O,O,O,O,O,O;"
        }
      },
      "backupFeed": {
        "maxDeviationP": 0,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.05,
      "pnlSpreadP": 0.04,
      "leverages": {
        "minLeverage": 1,
        "maxLeverage": 40,
        "pnlMinLeverage": 1,
        "pnlMaxLeverage": 50
      },
      "priceImpactMultiplier": 1.2,
      "skewImpactMultiplier": 0.1,
      "groupIndex": 1,
      "feeIndex": 6,
      "values": {
        "maxGainP": 500,
        "maxSlP": 80,
        "maxLongOiP": 75,
        "maxShortOiP": 75,
        "groupOpenInterestPercentageP": 35,
        "maxWalletOIP": 15,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 35,
        "maxWalletOI": 15
      },
      "from": "AVAX",
      "to": "USD",
      "timer": {
        "numTiers": 2,
        "positionSizeToThresholdTierMap": {
          "0": 0,
          "1": 50000
        },
        "thresholdTierToTimerMap": {
          "0": 0,
          "1": 180
        }
      },
      "openInterest": {
        "long": 59382.95,
        "short": 48659.5
      },
      "marginFee": {
        "long": 0.00228310502283105,
        "short": 0.00228310502283105
      },
      "pairOI": 108042.45,
      "pairMaxOI": 4841244.45,
      "maxWalletOI": 14364131.89,
      "pairParams": {
        "onePercentDepthAbove": 2973809.608,
        "onePercentDepthBelow": 2225309.96
      },
      "blockOILimit": 2500000,
      "storagePairParams": {
        "posSpreadCap": 5,
        "negSpreadCap": 100000,
        "isPnlTypeAllowed": 0,
        "pnlPriceImpactMultiplier": 0,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 0,
        "minBorrowFee": 20
      },
      "openFeeP": 0.045,
      "closeFeeP": 0.045,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 10,
      "pnlFees": {
        "numTiers": 10,
        "tierP": [
          1,
          5,
          25,
          50,
          100,
          250,
          500,
          1500,
          2500,
          3000
        ],
        "feesP": [
          80,
          50,
          45,
          37.5,
          27.5,
          25,
          25,
          22.5,
          15,
          2.5
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 10,
        "2": 10,
        "3": 10
      },
      "skewEqParams": [
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 6,
      "pairSpreadP": 0.05,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 10,
      "pairMinLeverage": 1
    },
    "7": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 5,
        "feedId": "0x385f64d993f7b77d8182ed5003d97c60aa3361f3cecfe711544d2d59165e9bdf",
        "attributes": {
          "symbol": "Crypto.OP/USD",
          "asset_type": "Crypto",
          "is_open": true,
          "next_open": 0,
          "next_close": 0,
          "schedule": "America/New_York;O,O,O,O,O,O,O;"
        }
      },
      "backupFeed": {
        "maxDeviationP": 1.5,
        "feedId": "0x3E3A6bD129A63564FE7abde85FA67c3950569060"
      },
      "spreadP": 0.05,
      "pnlSpreadP": 0.04,
      "leverages": {
        "minLeverage": 1,
        "maxLeverage": 40,
        "pnlMinLeverage": 1,
        "pnlMaxLeverage": 50
      },
      "priceImpactMultiplier": 1.2,
      "skewImpactMultiplier": 0.1,
      "groupIndex": 1,
      "feeIndex": 7,
      "values": {
        "maxGainP": 500,
        "maxSlP": 80,
        "maxLongOiP": 75,
        "maxShortOiP": 75,
        "groupOpenInterestPercentageP": 35,
        "maxWalletOIP": 15,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 35,
        "maxWalletOI": 15
      },
      "from": "OP",
      "to": "USD",
      "timer": {
        "numTiers": 2,
        "positionSizeToThresholdTierMap": {
          "0": 0,
          "1": 50000
        },
        "thresholdTierToTimerMap": {
          "0": 0,
          "1": 180
        }
      },
      "openInterest": {
        "long": 6156.6,
        "short": 4456.55
      },
      "marginFee": {
        "long": 0.00228310502283105,
        "short": 0.00228310502283105
      },
      "pairOI": 10613.15,
      "pairMaxOI": 4841244.45,
      "maxWalletOI": 14364131.89,
      "pairParams": {
        "onePercentDepthAbove": 767520.312,
        "onePercentDepthBelow": 543683.392
      },
      "blockOILimit": 2500000,
      "storagePairParams": {
        "posSpreadCap": 5,
        "negSpreadCap": 100000,
        "isPnlTypeAllowed": 0,
        "pnlPriceImpactMultiplier": 0,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 0,
        "minBorrowFee": 20
      },
      "openFeeP": 0.045,
      "closeFeeP": 0.045,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 10,
      "pnlFees": {
        "numTiers": 10,
        "tierP": [
          1,
          5,
          25,
          50,
          100,
          250,
          500,
          1500,
          2500,
          3000
        ],
        "feesP": [
          80,
          50,
          45,
          37.5,
          27.5,
          25,
          25,
          22.5,
          15,
          2.5
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 10,
        "2": 10,
        "3": 10
      },
      "skewEqParams": [
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 7,
      "pairSpreadP": 0.05,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 10,
      "pairMinLeverage": 1
    },
    "8": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 5,
        "feedId": "0xffd11c5a1cfd42f80afb2df4d9f264c15f956d68153335374ec10722edd70472",
        "attributes": {
          "symbol": "Crypto.POL/USD",
          "asset_type": "Crypto",
          "is_open": true,
          "next_open": 0,
          "next_close": 0,
          "schedule": "America/New_York;O,O,O,O,O,O,O;"
        }
      },
      "backupFeed": {
        "maxDeviationP": 0,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.05,
      "pnlSpreadP": 0.04,
      "leverages": {
        "minLeverage": 1,
        "maxLeverage": 40,
        "pnlMinLeverage": 1,
        "pnlMaxLeverage": 50
      },
      "priceImpactMultiplier": 1.2,
      "skewImpactMultiplier": 0.1,
      "groupIndex": 1,
      "feeIndex": 8,
      "values": {
        "maxGainP": 500,
        "maxSlP": 80,
        "maxLongOiP": 75,
        "maxShortOiP": 75,
        "groupOpenInterestPercentageP": 35,
        "maxWalletOIP": 15,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 35,
        "maxWalletOI": 15
      },
      "from": "POL",
      "to": "USD",
      "timer": {
        "numTiers": 2,
        "positionSizeToThresholdTierMap": {
          "0": 0,
          "1": 50000
        },
        "thresholdTierToTimerMap": {
          "0": 0,
          "1": 180
        }
      },
      "openInterest": {
        "long": 4015.07,
        "short": 4097.72
      },
      "marginFee": {
        "long": 0.00228310502283105,
        "short": 0.00228310502283105
      },
      "pairOI": 8112.79,
      "pairMaxOI": 4841244.45,
      "maxWalletOI": 14364131.89,
      "pairParams": {
        "onePercentDepthAbove": 333120.016,
        "onePercentDepthBelow": 226597.552
      },
      "blockOILimit": 2500000,
      "storagePairParams": {
        "posSpreadCap": 5,
        "negSpreadCap": 100000,
        "isPnlTypeAllowed": 0,
        "pnlPriceImpactMultiplier": 0,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 0,
        "minBorrowFee": 20
      },
      "openFeeP": 0.045,
      "closeFeeP": 0.045,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 10,
      "pnlFees": {
        "numTiers": 10,
        "tierP": [
          1,
          5,
          25,
          50,
          100,
          250,
          500,
          1500,
          2500,
          3000
        ],
        "feesP": [
          80,
          50,
          45,
          37.5,
          27.5,
          25,
          25,
          22.5,
          15,
          2.5
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 10,
        "2": 10,
        "3": 10
      },
      "skewEqParams": [
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 8,
      "pairSpreadP": 0.05,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 10,
      "pairMinLeverage": 1
    },
    "9": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 5,
        "feedId": "0x09f7c1d7dfbb7df2b8fe3d3d87ee94a2259d212da4f30c1f0540d066dfa44723",
        "attributes": {
          "symbol": "Crypto.TIA/USD",
          "asset_type": "Crypto",
          "is_open": true,
          "next_open": 0,
          "next_close": 0,
          "schedule": "America/New_York;O,O,O,O,O,O,O;"
        }
      },
      "backupFeed": {
        "maxDeviationP": 0,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.05,
      "pnlSpreadP": 0.06,
      "leverages": {
        "minLeverage": 1,
        "maxLeverage": 40,
        "pnlMinLeverage": 1,
        "pnlMaxLeverage": 25
      },
      "priceImpactMultiplier": 1.2,
      "skewImpactMultiplier": 0.1,
      "groupIndex": 1,
      "feeIndex": 9,
      "values": {
        "maxGainP": 500,
        "maxSlP": 80,
        "maxLongOiP": 75,
        "maxShortOiP": 75,
        "groupOpenInterestPercentageP": 35,
        "maxWalletOIP": 15,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 35,
        "maxWalletOI": 15
      },
      "from": "TIA",
      "to": "USD",
      "timer": {
        "numTiers": 2,
        "positionSizeToThresholdTierMap": {
          "0": 0,
          "1": 50000
        },
        "thresholdTierToTimerMap": {
          "0": 0,
          "1": 180
        }
      },
      "openInterest": {
        "long": 1336.03,
        "short": 0
      },
      "marginFee": {
        "long": 0.00228310502283105,
        "short": 0.00228310502283105
      },
      "pairOI": 1336.03,
      "pairMaxOI": 4841244.45,
      "maxWalletOI": 14364131.89,
      "pairParams": {
        "onePercentDepthAbove": 644969.024,
        "onePercentDepthBelow": 311600.08
      },
      "blockOILimit": 2500000,
      "storagePairParams": {
        "posSpreadCap": 5,
        "negSpreadCap": 100000,
        "isPnlTypeAllowed": 0,
        "pnlPriceImpactMultiplier": 0,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 0,
        "minBorrowFee": 20
      },
      "openFeeP": 0.045,
      "closeFeeP": 0.045,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 10,
      "pnlFees": {
        "numTiers": 10,
        "tierP": [
          1,
          5,
          25,
          50,
          100,
          250,
          500,
          1500,
          2500,
          3000
        ],
        "feesP": [
          80,
          50,
          45,
          37.5,
          27.5,
          25,
          25,
          22.5,
          15,
          2.5
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 10,
        "2": 10,
        "3": 10
      },
      "skewEqParams": [
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 9,
      "pairSpreadP": 0.05,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 10,
      "pairMinLeverage": 1
    },
    "10": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 5,
        "feedId": "0x53614f1cb0c031d4af66c04cb9c756234adad0e1cee85303795091499a4084eb",
        "attributes": {
          "symbol": "Crypto.SEI/USD",
          "asset_type": "Crypto",
          "is_open": true,
          "next_open": 0,
          "next_close": 0,
          "schedule": "America/New_York;O,O,O,O,O,O,O;"
        }
      },
      "backupFeed": {
        "maxDeviationP": 0,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.05,
      "pnlSpreadP": 0.06,
      "leverages": {
        "minLeverage": 1,
        "maxLeverage": 40,
        "pnlMinLeverage": 1,
        "pnlMaxLeverage": 25
      },
      "priceImpactMultiplier": 1.2,
      "skewImpactMultiplier": 0.1,
      "groupIndex": 1,
      "feeIndex": 10,
      "values": {
        "maxGainP": 500,
        "maxSlP": 80,
        "maxLongOiP": 75,
        "maxShortOiP": 75,
        "groupOpenInterestPercentageP": 35,
        "maxWalletOIP": 15,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 35,
        "maxWalletOI": 15
      },
      "from": "SEI",
      "to": "USD",
      "timer": {
        "numTiers": 2,
        "positionSizeToThresholdTierMap": {
          "0": 0,
          "1": 50000
        },
        "thresholdTierToTimerMap": {
          "0": 0,
          "1": 180
        }
      },
      "openInterest": {
        "long": 12378.71,
        "short": 11674.32
      },
      "marginFee": {
        "long": 0.00228310502283105,
        "short": 0.00228310502283105
      },
      "pairOI": 24053.02,
      "pairMaxOI": 4841244.45,
      "maxWalletOI": 14364131.89,
      "pairParams": {
        "onePercentDepthAbove": 499395.96,
        "onePercentDepthBelow": 416563.584
      },
      "blockOILimit": 2500000,
      "storagePairParams": {
        "posSpreadCap": 5,
        "negSpreadCap": 100000,
        "isPnlTypeAllowed": 0,
        "pnlPriceImpactMultiplier": 0,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 0,
        "minBorrowFee": 20
      },
      "openFeeP": 0.045,
      "closeFeeP": 0.045,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 10,
      "pnlFees": {
        "numTiers": 10,
        "tierP": [
          1,
          5,
          25,
          50,
          100,
          250,
          500,
          1500,
          2500,
          3000
        ],
        "feesP": [
          80,
          50,
          45,
          37.5,
          27.5,
          25,
          25,
          22.5,
          15,
          2.5
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 10,
        "2": 10,
        "3": 10
      },
      "skewEqParams": [
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 10,
      "pairSpreadP": 0.05,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 10,
      "pairMinLeverage": 1
    },
    "11": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 5,
        "feedId": "0xa995d00bb36a63cef7fd2c287dc105fc8f3d93779f062f09551b0af3e81ec30b",
        "attributes": {
          "symbol": "FX.EUR/USD",
          "asset_type": "FX",
          "is_open": true,
          "next_open": 1759093200,
          "next_close": 1758920400,
          "schedule": "America/New_York;O,O,O,O,0000-1700,C,1700-2400;1224/0000-1700,1225/1700-2400,1231/0000-1700,0101/1700-2400"
        }
      },
      "backupFeed": {
        "maxDeviationP": 0,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0,
      "pnlSpreadP": 0,
      "leverages": {
        "minLeverage": 1,
        "maxLeverage": 500,
        "pnlMinLeverage": 1,
        "pnlMaxLeverage": 500
      },
      "priceImpactMultiplier": 0,
      "skewImpactMultiplier": 0,
      "groupIndex": 2,
      "feeIndex": 11,
      "values": {
        "maxGainP": 500,
        "maxSlP": 80,
        "maxLongOiP": 50,
        "maxShortOiP": 50,
        "groupOpenInterestPercentageP": 70,
        "maxWalletOIP": 15,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 70,
        "maxWalletOI": 15
      },
      "from": "EUR",
      "to": "USD",
      "timer": {
        "numTiers": 1,
        "positionSizeToThresholdTierMap": {
          "0": 0
        },
        "thresholdTierToTimerMap": {
          "0": 0
        }
      },
      "openInterest": {
        "long": 272180.16,
        "short": 95144.61
      },
      "marginFee": {
        "long": 0.0005707762557077625,
        "short": 0.0005707762557077625
      },
      "pairOI": 367324.77,
      "pairMaxOI": 6703261.55,
      "maxWalletOI": 14364131.89,
      "pairParams": {
        "onePercentDepthAbove": 10000000,
        "onePercentDepthBelow": 10000000
      },
      "blockOILimit": 2500000,
      "storagePairParams": {
        "posSpreadCap": 2,
        "negSpreadCap": 25,
        "isPnlTypeAllowed": 0,
        "pnlPriceImpactMultiplier": 0,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 0,
        "minBorrowFee": 5
      },
      "openFeeP": 0.03,
      "closeFeeP": 0,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 750,
      "pnlFees": {
        "numTiers": 9,
        "tierP": [
          0.5,
          1,
          2,
          5,
          10,
          20,
          50,
          100,
          500
        ],
        "feesP": [
          80,
          80,
          60,
          50,
          40,
          30,
          20,
          20,
          20
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 10,
        "2": 10,
        "3": 10
      },
      "skewEqParams": [
        [
          0,
          300
        ],
        [
          0,
          300
        ],
        [
          0,
          300
        ],
        [
          0,
          300
        ],
        [
          0,
          300
        ],
        [
          0,
          300
        ],
        [
          0,
          300
        ],
        [
          0,
          300
        ],
        [
          0,
          300
        ],
        [
          0,
          300
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 55,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 55,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 11,
      "pairSpreadP": 0,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 750,
      "pairMinLeverage": 1
    },
    "12": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 5,
        "feedId": "0xef2c98c804ba503c6a707e38be4dfbb16683775f195b091252bf24693042fd52",
        "attributes": {
          "symbol": "FX.USD/JPY",
          "asset_type": "FX",
          "is_open": true,
          "next_open": 1759093200,
          "next_close": 1758920400,
          "schedule": "America/New_York;O,O,O,O,0000-1700,C,1700-2400;1224/0000-1700,1225/1700-2400,1231/0000-1700,0101/1700-2400"
        }
      },
      "backupFeed": {
        "maxDeviationP": 0,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0,
      "pnlSpreadP": 0.02,
      "leverages": {
        "minLeverage": 1,
        "maxLeverage": 500,
        "pnlMinLeverage": 200,
        "pnlMaxLeverage": 1000
      },
      "priceImpactMultiplier": 0,
      "skewImpactMultiplier": 0,
      "groupIndex": 2,
      "feeIndex": 12,
      "values": {
        "maxGainP": 2500,
        "maxSlP": 80,
        "maxLongOiP": 50,
        "maxShortOiP": 50,
        "groupOpenInterestPercentageP": 70,
        "maxWalletOIP": 50,
        "isUSDCAligned": true,
        "groupOpenInterestPecentage": 70,
        "maxWalletOI": 50
      },
      "from": "USD",
      "to": "JPY",
      "timer": {
        "numTiers": 1,
        "positionSizeToThresholdTierMap": {
          "0": 0
        },
        "thresholdTierToTimerMap": {
          "0": 0
        }
      },
      "openInterest": {
        "long": 371498.25,
        "short": 355717.86
      },
      "marginFee": {
        "long": 0.0005707762557077625,
        "short": 0.0005707762557077625
      },
      "pairOI": 727216.11,
      "pairMaxOI": 6703261.55,
      "maxWalletOI": 47880439.62,
      "pairParams": {
        "onePercentDepthAbove": 10000000,
        "onePercentDepthBelow": 10000000
      },
      "blockOILimit": 2500000,
      "storagePairParams": {
        "posSpreadCap": 2,
        "negSpreadCap": 25,
        "isPnlTypeAllowed": 1,
        "pnlPriceImpactMultiplier": 1.2,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 2,
        "pnlNegSpreadCap": 5,
        "minBorrowFee": 5
      },
      "openFeeP": 0.03,
      "closeFeeP": 0,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 750,
      "pnlFees": {
        "numTiers": 9,
        "tierP": [
          0.5,
          1,
          2,
          5,
          10,
          20,
          50,
          100,
          500
        ],
        "feesP": [
          80,
          80,
          60,
          50,
          40,
          30,
          20,
          20,
          20
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 5,
        "2": 5,
        "3": 5
      },
      "skewEqParams": [
        [
          0,
          300
        ],
        [
          0,
          300
        ],
        [
          0,
          300
        ],
        [
          0,
          300
        ],
        [
          0,
          300
        ],
        [
          0,
          300
        ],
        [
          0,
          300
        ],
        [
          0,
          300
        ],
        [
          0,
          300
        ],
        [
          0,
          300
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 12,
      "pairSpreadP": 0,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 750,
      "pairMinLeverage": 1
    },
    "13": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 5,
        "feedId": "0x84c2dde9633d93d1bcad84e7dc41c9d56578b7ec52fabedc1f335d673df0a7c1",
        "attributes": {
          "symbol": "FX.GBP/USD",
          "asset_type": "FX",
          "is_open": true,
          "next_open": 1759093200,
          "next_close": 1758920400,
          "schedule": "America/New_York;O,O,O,O,0000-1700,C,1700-2400;1224/0000-1700,1225/1700-2400,1231/0000-1700,0101/1700-2400"
        }
      },
      "backupFeed": {
        "maxDeviationP": 0,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0,
      "pnlSpreadP": 0,
      "leverages": {
        "minLeverage": 1,
        "maxLeverage": 500,
        "pnlMinLeverage": 1,
        "pnlMaxLeverage": 500
      },
      "priceImpactMultiplier": 0,
      "skewImpactMultiplier": 0,
      "groupIndex": 2,
      "feeIndex": 13,
      "values": {
        "maxGainP": 500,
        "maxSlP": 80,
        "maxLongOiP": 50,
        "maxShortOiP": 50,
        "groupOpenInterestPercentageP": 70,
        "maxWalletOIP": 15,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 70,
        "maxWalletOI": 15
      },
      "from": "GBP",
      "to": "USD",
      "timer": {
        "numTiers": 1,
        "positionSizeToThresholdTierMap": {
          "0": 0
        },
        "thresholdTierToTimerMap": {
          "0": 0
        }
      },
      "openInterest": {
        "long": 79791.01,
        "short": 111937.15
      },
      "marginFee": {
        "long": 0.0005707762557077625,
        "short": 0.0005707762557077625
      },
      "pairOI": 191728.16,
      "pairMaxOI": 6703261.55,
      "maxWalletOI": 14364131.89,
      "pairParams": {
        "onePercentDepthAbove": 10000000,
        "onePercentDepthBelow": 10000000
      },
      "blockOILimit": 2500000,
      "storagePairParams": {
        "posSpreadCap": 2.5,
        "negSpreadCap": 25,
        "isPnlTypeAllowed": 0,
        "pnlPriceImpactMultiplier": 0,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 0,
        "minBorrowFee": 5
      },
      "openFeeP": 0.03,
      "closeFeeP": 0,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 750,
      "pnlFees": {
        "numTiers": 9,
        "tierP": [
          0.5,
          1,
          2,
          5,
          10,
          20,
          50,
          100,
          500
        ],
        "feesP": [
          80,
          80,
          60,
          50,
          40,
          30,
          20,
          20,
          20
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 10,
        "2": 10,
        "3": 10
      },
      "skewEqParams": [
        [
          0,
          300
        ],
        [
          0,
          300
        ],
        [
          0,
          300
        ],
        [
          0,
          300
        ],
        [
          0,
          300
        ],
        [
          0,
          300
        ],
        [
          0,
          300
        ],
        [
          0,
          300
        ],
        [
          0,
          300
        ],
        [
          0,
          300
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 55,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 55,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 13,
      "pairSpreadP": 0,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 750,
      "pairMinLeverage": 1
    },
    "14": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 5,
        "feedId": "0x3112b03a41c910ed446852aacf67118cb1bec67b2cd0b9a214c58cc0eaa2ecca",
        "attributes": {
          "symbol": "FX.USD/CAD",
          "asset_type": "FX",
          "is_open": true,
          "next_open": 1759093200,
          "next_close": 1758920400,
          "schedule": "America/New_York;O,O,O,O,0000-1700,C,1700-2400;1224/0000-1700,1225/1700-2400,1231/0000-1700,0101/1700-2400"
        }
      },
      "backupFeed": {
        "maxDeviationP": 0,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.01,
      "pnlSpreadP": 0.01,
      "leverages": {
        "minLeverage": 1,
        "maxLeverage": 75,
        "pnlMinLeverage": 1,
        "pnlMaxLeverage": 75
      },
      "priceImpactMultiplier": 0,
      "skewImpactMultiplier": 0,
      "groupIndex": 2,
      "feeIndex": 14,
      "values": {
        "maxGainP": 500,
        "maxSlP": 80,
        "maxLongOiP": 50,
        "maxShortOiP": 50,
        "groupOpenInterestPercentageP": 50,
        "maxWalletOIP": 15,
        "isUSDCAligned": true,
        "groupOpenInterestPecentage": 50,
        "maxWalletOI": 15
      },
      "from": "USD",
      "to": "CAD",
      "timer": {
        "numTiers": 1,
        "positionSizeToThresholdTierMap": {
          "0": 0
        },
        "thresholdTierToTimerMap": {
          "0": 0
        }
      },
      "openInterest": {
        "long": 1542.99,
        "short": 43115.49
      },
      "marginFee": {
        "long": 0.0005707762557077625,
        "short": 0.0005707762557077625
      },
      "pairOI": 44658.48,
      "pairMaxOI": 4788043.96,
      "maxWalletOI": 14364131.89,
      "pairParams": {
        "onePercentDepthAbove": 10000000,
        "onePercentDepthBelow": 10000000
      },
      "blockOILimit": 2500000,
      "storagePairParams": {
        "posSpreadCap": 2.5,
        "negSpreadCap": 25,
        "isPnlTypeAllowed": 0,
        "pnlPriceImpactMultiplier": 0,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 0,
        "minBorrowFee": 5
      },
      "openFeeP": 0.03,
      "closeFeeP": 0,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 750,
      "pnlFees": {
        "numTiers": 9,
        "tierP": [
          0.5,
          1,
          2,
          5,
          10,
          20,
          50,
          100,
          500
        ],
        "feesP": [
          80,
          80,
          60,
          50,
          40,
          30,
          20,
          20,
          20
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 5,
        "2": 5,
        "3": 5
      },
      "skewEqParams": [
        [
          -5,
          500
        ],
        [
          -5,
          500
        ],
        [
          -5,
          500
        ],
        [
          -5,
          500
        ],
        [
          0,
          300
        ],
        [
          0,
          300
        ],
        [
          -5,
          600
        ],
        [
          -5,
          600
        ],
        [
          -5,
          600
        ],
        [
          -5,
          600
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 55,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 55,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 14,
      "pairSpreadP": 0.01,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 750,
      "pairMinLeverage": 1
    },
    "15": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 5,
        "feedId": "0x0b1e3297e69f162877b577b0d6a47a0d63b2392bc8499e6540da4187a63e28f8",
        "attributes": {
          "symbol": "FX.USD/CHF",
          "asset_type": "FX",
          "is_open": true,
          "next_open": 1759093200,
          "next_close": 1758920400,
          "schedule": "America/New_York;O,O,O,O,0000-1700,C,1700-2400;1224/0000-1700,1225/1700-2400,1231/0000-1700,0101/1700-2400"
        }
      },
      "backupFeed": {
        "maxDeviationP": 0,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.01,
      "pnlSpreadP": 0.01,
      "leverages": {
        "minLeverage": 1,
        "maxLeverage": 75,
        "pnlMinLeverage": 1,
        "pnlMaxLeverage": 75
      },
      "priceImpactMultiplier": 0,
      "skewImpactMultiplier": 0,
      "groupIndex": 2,
      "feeIndex": 15,
      "values": {
        "maxGainP": 500,
        "maxSlP": 80,
        "maxLongOiP": 50,
        "maxShortOiP": 50,
        "groupOpenInterestPercentageP": 50,
        "maxWalletOIP": 15,
        "isUSDCAligned": true,
        "groupOpenInterestPecentage": 50,
        "maxWalletOI": 15
      },
      "from": "USD",
      "to": "CHF",
      "timer": {
        "numTiers": 1,
        "positionSizeToThresholdTierMap": {
          "0": 0
        },
        "thresholdTierToTimerMap": {
          "0": 0
        }
      },
      "openInterest": {
        "long": 32315.87,
        "short": 41134.22
      },
      "marginFee": {
        "long": 0.0005707762557077625,
        "short": 0.0005707762557077625
      },
      "pairOI": 73450.09,
      "pairMaxOI": 4788043.96,
      "maxWalletOI": 14364131.89,
      "pairParams": {
        "onePercentDepthAbove": 10000000,
        "onePercentDepthBelow": 10000000
      },
      "blockOILimit": 2500000,
      "storagePairParams": {
        "posSpreadCap": 2.5,
        "negSpreadCap": 25,
        "isPnlTypeAllowed": 0,
        "pnlPriceImpactMultiplier": 0,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 0,
        "minBorrowFee": 5
      },
      "openFeeP": 0.03,
      "closeFeeP": 0,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 750,
      "pnlFees": {
        "numTiers": 9,
        "tierP": [
          0.5,
          1,
          2,
          5,
          10,
          20,
          50,
          100,
          500
        ],
        "feesP": [
          80,
          80,
          60,
          50,
          40,
          30,
          20,
          20,
          20
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 5,
        "2": 5,
        "3": 5
      },
      "skewEqParams": [
        [
          -5,
          500
        ],
        [
          -5,
          500
        ],
        [
          -5,
          500
        ],
        [
          -5,
          500
        ],
        [
          0,
          300
        ],
        [
          0,
          300
        ],
        [
          -5,
          600
        ],
        [
          -5,
          600
        ],
        [
          -5,
          600
        ],
        [
          -5,
          600
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 55,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 55,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 15,
      "pairSpreadP": 0.01,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 750,
      "pairMinLeverage": 1
    },
    "16": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 5,
        "feedId": "0x8ccb376aa871517e807358d4e3cf0bc7fe4950474dbe6c9ffc21ef64e43fc676",
        "attributes": {
          "symbol": "FX.USD/SEK",
          "asset_type": "FX",
          "is_open": true,
          "next_open": 1759093200,
          "next_close": 1758920400,
          "schedule": "America/New_York;O,O,O,O,0000-1700,C,1700-2400;1224/0000-1700,1225/1700-2400,1231/0000-1700,0101/1700-2400"
        }
      },
      "backupFeed": {
        "maxDeviationP": 0,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.01,
      "pnlSpreadP": 0.01,
      "leverages": {
        "minLeverage": 1,
        "maxLeverage": 75,
        "pnlMinLeverage": 1,
        "pnlMaxLeverage": 75
      },
      "priceImpactMultiplier": 0,
      "skewImpactMultiplier": 0,
      "groupIndex": 2,
      "feeIndex": 16,
      "values": {
        "maxGainP": 500,
        "maxSlP": 80,
        "maxLongOiP": 50,
        "maxShortOiP": 50,
        "groupOpenInterestPercentageP": 30,
        "maxWalletOIP": 15,
        "isUSDCAligned": true,
        "groupOpenInterestPecentage": 30,
        "maxWalletOI": 15
      },
      "from": "USD",
      "to": "SEK",
      "timer": {
        "numTiers": 1,
        "positionSizeToThresholdTierMap": {
          "0": 0
        },
        "thresholdTierToTimerMap": {
          "0": 0
        }
      },
      "openInterest": {
        "long": 0.3,
        "short": 21780
      },
      "marginFee": {
        "long": 0.0005707762557077625,
        "short": 0.0005707762557077625
      },
      "pairOI": 21780.3,
      "pairMaxOI": 2872826.38,
      "maxWalletOI": 14364131.89,
      "pairParams": {
        "onePercentDepthAbove": 10000000,
        "onePercentDepthBelow": 10000000
      },
      "blockOILimit": 2500000,
      "storagePairParams": {
        "posSpreadCap": 2.5,
        "negSpreadCap": 25,
        "isPnlTypeAllowed": 0,
        "pnlPriceImpactMultiplier": 0,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 0,
        "minBorrowFee": 5
      },
      "openFeeP": 0.03,
      "closeFeeP": 0,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 750,
      "pnlFees": {
        "numTiers": 9,
        "tierP": [
          0.5,
          1,
          2,
          5,
          10,
          20,
          50,
          100,
          500
        ],
        "feesP": [
          80,
          80,
          60,
          50,
          40,
          30,
          20,
          20,
          20
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 5,
        "2": 5,
        "3": 5
      },
      "skewEqParams": [
        [
          -5,
          500
        ],
        [
          -5,
          500
        ],
        [
          -5,
          500
        ],
        [
          -5,
          500
        ],
        [
          0,
          300
        ],
        [
          0,
          300
        ],
        [
          -5,
          600
        ],
        [
          -5,
          600
        ],
        [
          -5,
          600
        ],
        [
          -5,
          600
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 55,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 55,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 16,
      "pairSpreadP": 0.01,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 750,
      "pairMinLeverage": 1
    },
    "17": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 5,
        "feedId": "0x67a6f93030420c1c9e3fe37c1ab6b77966af82f995944a9fefce357a22854a80",
        "attributes": {
          "symbol": "FX.AUD/USD",
          "asset_type": "FX",
          "is_open": true,
          "next_open": 1759093200,
          "next_close": 1758920400,
          "schedule": "America/New_York;O,O,O,O,0000-1700,C,1700-2400;1224/0000-1700,1225/1700-2400,1231/0000-1700,0101/1700-2400"
        }
      },
      "backupFeed": {
        "maxDeviationP": 0,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.01,
      "pnlSpreadP": 0.01,
      "leverages": {
        "minLeverage": 1,
        "maxLeverage": 75,
        "pnlMinLeverage": 1,
        "pnlMaxLeverage": 75
      },
      "priceImpactMultiplier": 0,
      "skewImpactMultiplier": 0,
      "groupIndex": 2,
      "feeIndex": 17,
      "values": {
        "maxGainP": 500,
        "maxSlP": 80,
        "maxLongOiP": 50,
        "maxShortOiP": 50,
        "groupOpenInterestPercentageP": 30,
        "maxWalletOIP": 15,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 30,
        "maxWalletOI": 15
      },
      "from": "AUD",
      "to": "USD",
      "timer": {
        "numTiers": 1,
        "positionSizeToThresholdTierMap": {
          "0": 0
        },
        "thresholdTierToTimerMap": {
          "0": 0
        }
      },
      "openInterest": {
        "long": 2332.93,
        "short": 30899.11
      },
      "marginFee": {
        "long": 0.0005707762557077625,
        "short": 0.0005707762557077625
      },
      "pairOI": 33232.04,
      "pairMaxOI": 2872826.38,
      "maxWalletOI": 14364131.89,
      "pairParams": {
        "onePercentDepthAbove": 10000000,
        "onePercentDepthBelow": 10000000
      },
      "blockOILimit": 2500000,
      "storagePairParams": {
        "posSpreadCap": 2.5,
        "negSpreadCap": 25,
        "isPnlTypeAllowed": 0,
        "pnlPriceImpactMultiplier": 0,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 0,
        "minBorrowFee": 5
      },
      "openFeeP": 0.09,
      "closeFeeP": 0,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 750,
      "pnlFees": {
        "numTiers": 9,
        "tierP": [
          0.5,
          1,
          2,
          5,
          10,
          20,
          50,
          100,
          500
        ],
        "feesP": [
          80,
          80,
          60,
          50,
          40,
          30,
          20,
          20,
          20
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 5,
        "2": 5,
        "3": 5
      },
      "skewEqParams": [
        [
          -15,
          1500
        ],
        [
          -15,
          1500
        ],
        [
          -15,
          1500
        ],
        [
          -15,
          1500
        ],
        [
          0,
          900
        ],
        [
          0,
          900
        ],
        [
          -15,
          1800
        ],
        [
          -15,
          1800
        ],
        [
          -15,
          1800
        ],
        [
          -15,
          1800
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 55,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 55,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 17,
      "pairSpreadP": 0.01,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 750,
      "pairMinLeverage": 1
    },
    "18": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 5,
        "feedId": "0x92eea8ba1b00078cdc2ef6f64f091f262e8c7d0576ee4677572f314ebfafa4c7",
        "attributes": {
          "symbol": "FX.NZD/USD",
          "asset_type": "FX",
          "is_open": true,
          "next_open": 1759093200,
          "next_close": 1758920400,
          "schedule": "America/New_York;O,O,O,O,0000-1700,C,1700-2400;1224/0000-1700,1225/1700-2400,1231/0000-1700,0101/1700-2400"
        }
      },
      "backupFeed": {
        "maxDeviationP": 0,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.01,
      "pnlSpreadP": 0.01,
      "leverages": {
        "minLeverage": 1,
        "maxLeverage": 75,
        "pnlMinLeverage": 1,
        "pnlMaxLeverage": 75
      },
      "priceImpactMultiplier": 0,
      "skewImpactMultiplier": 0,
      "groupIndex": 2,
      "feeIndex": 18,
      "values": {
        "maxGainP": 500,
        "maxSlP": 80,
        "maxLongOiP": 50,
        "maxShortOiP": 50,
        "groupOpenInterestPercentageP": 30,
        "maxWalletOIP": 15,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 30,
        "maxWalletOI": 15
      },
      "from": "NZD",
      "to": "USD",
      "timer": {
        "numTiers": 1,
        "positionSizeToThresholdTierMap": {
          "0": 0
        },
        "thresholdTierToTimerMap": {
          "0": 0
        }
      },
      "openInterest": {
        "long": 31631.04,
        "short": 40378.09
      },
      "marginFee": {
        "long": 0.0005707762557077625,
        "short": 0.0005707762557077625
      },
      "pairOI": 72009.13,
      "pairMaxOI": 2872826.38,
      "maxWalletOI": 14364131.89,
      "pairParams": {
        "onePercentDepthAbove": 10000000,
        "onePercentDepthBelow": 10000000
      },
      "blockOILimit": 2500000,
      "storagePairParams": {
        "posSpreadCap": 2.5,
        "negSpreadCap": 25,
        "isPnlTypeAllowed": 0,
        "pnlPriceImpactMultiplier": 0,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 0,
        "minBorrowFee": 5
      },
      "openFeeP": 0.09,
      "closeFeeP": 0,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 750,
      "pnlFees": {
        "numTiers": 9,
        "tierP": [
          0.5,
          1,
          2,
          5,
          10,
          20,
          50,
          100,
          500
        ],
        "feesP": [
          80,
          80,
          60,
          50,
          40,
          30,
          20,
          20,
          20
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 5,
        "2": 5,
        "3": 5
      },
      "skewEqParams": [
        [
          -15,
          1500
        ],
        [
          -15,
          1500
        ],
        [
          -15,
          1500
        ],
        [
          -15,
          1500
        ],
        [
          0,
          900
        ],
        [
          0,
          900
        ],
        [
          -15,
          1800
        ],
        [
          -15,
          1800
        ],
        [
          -15,
          1800
        ],
        [
          -15,
          1800
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 55,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 55,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 18,
      "pairSpreadP": 0.01,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 750,
      "pairMinLeverage": 1
    },
    "19": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 5,
        "feedId": "0x396a969a9c1480fa15ed50bc59149e2c0075a72fe8f458ed941ddec48bdb4918",
        "attributes": {
          "symbol": "FX.USD/SGD",
          "asset_type": "FX",
          "is_open": true,
          "next_open": 1759093200,
          "next_close": 1758920400,
          "schedule": "America/New_York;O,O,O,O,0000-1700,C,1700-2400;1224/0000-1700,1225/1700-2400,1231/0000-1700,0101/1700-2400"
        }
      },
      "backupFeed": {
        "maxDeviationP": 0,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.01,
      "pnlSpreadP": 0.01,
      "leverages": {
        "minLeverage": 1,
        "maxLeverage": 75,
        "pnlMinLeverage": 1,
        "pnlMaxLeverage": 75
      },
      "priceImpactMultiplier": 0,
      "skewImpactMultiplier": 0,
      "groupIndex": 2,
      "feeIndex": 19,
      "values": {
        "maxGainP": 500,
        "maxSlP": 80,
        "maxLongOiP": 75,
        "maxShortOiP": 75,
        "groupOpenInterestPercentageP": 30,
        "maxWalletOIP": 15,
        "isUSDCAligned": true,
        "groupOpenInterestPecentage": 30,
        "maxWalletOI": 15
      },
      "from": "USD",
      "to": "SGD",
      "timer": {
        "numTiers": 1,
        "positionSizeToThresholdTierMap": {
          "0": 0
        },
        "thresholdTierToTimerMap": {
          "0": 0
        }
      },
      "openInterest": {
        "long": 3767.68,
        "short": 0
      },
      "marginFee": {
        "long": 0.0005707762557077625,
        "short": 0.0005707762557077625
      },
      "pairOI": 3767.68,
      "pairMaxOI": 2872826.38,
      "maxWalletOI": 14364131.89,
      "pairParams": {
        "onePercentDepthAbove": 10000000,
        "onePercentDepthBelow": 10000000
      },
      "blockOILimit": 2500000,
      "storagePairParams": {
        "posSpreadCap": 2.5,
        "negSpreadCap": 25,
        "isPnlTypeAllowed": 0,
        "pnlPriceImpactMultiplier": 0,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 0,
        "minBorrowFee": 5
      },
      "openFeeP": 0.03,
      "closeFeeP": 0,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 750,
      "pnlFees": {
        "numTiers": 9,
        "tierP": [
          0.5,
          1,
          2,
          5,
          10,
          20,
          50,
          100,
          500
        ],
        "feesP": [
          80,
          80,
          60,
          50,
          40,
          30,
          20,
          20,
          20
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 5,
        "2": 5,
        "3": 5
      },
      "skewEqParams": [
        [
          -5,
          500
        ],
        [
          -5,
          500
        ],
        [
          -5,
          500
        ],
        [
          -5,
          500
        ],
        [
          0,
          300
        ],
        [
          0,
          300
        ],
        [
          -5,
          600
        ],
        [
          -5,
          600
        ],
        [
          -5,
          600
        ],
        [
          -5,
          600
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 55,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 55,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 19,
      "pairSpreadP": 0.01,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 750,
      "pairMinLeverage": 1
    },
    "20": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 5,
        "feedId": "0xf2fb02c32b055c805e7238d628e5e9dadef274376114eb1f012337cabe93871e",
        "attributes": {
          "symbol": "Metal.XAG/USD",
          "asset_type": "Metal",
          "is_open": true,
          "next_open": 1758751200,
          "next_close": 1758747600,
          "schedule": "America/New_York;0000-1700&1800-2400,0000-1700&1800-2400,0000-1700&1800-2400,0000-1700&1800-2400,0000-1700,C,1800-2400;0619/1800-2400,0704/0000-1300,0901/0000-1430&1800-2400"
        }
      },
      "backupFeed": {
        "maxDeviationP": 0,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.02,
      "pnlSpreadP": 0.02,
      "leverages": {
        "minLeverage": 1,
        "maxLeverage": 50,
        "pnlMinLeverage": 1,
        "pnlMaxLeverage": 50
      },
      "priceImpactMultiplier": 0,
      "skewImpactMultiplier": 0,
      "groupIndex": 3,
      "feeIndex": 20,
      "values": {
        "maxGainP": 500,
        "maxSlP": 80,
        "maxLongOiP": 100,
        "maxShortOiP": 100,
        "groupOpenInterestPercentageP": 70,
        "maxWalletOIP": 15,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 70,
        "maxWalletOI": 15
      },
      "from": "XAG",
      "to": "USD",
      "timer": {
        "numTiers": 1,
        "positionSizeToThresholdTierMap": {
          "0": 0
        },
        "thresholdTierToTimerMap": {
          "0": 0
        }
      },
      "openInterest": {
        "long": 187524.63,
        "short": 2195.57
      },
      "marginFee": {
        "long": 0.0009783,
        "short": 0.0008561643835616438
      },
      "pairOI": 189720.21,
      "pairMaxOI": 2234420.52,
      "maxWalletOI": 14364131.89,
      "pairParams": {
        "onePercentDepthAbove": 1000000,
        "onePercentDepthBelow": 1000000
      },
      "blockOILimit": 2500000,
      "storagePairParams": {
        "posSpreadCap": 2.5,
        "negSpreadCap": 25,
        "isPnlTypeAllowed": 0,
        "pnlPriceImpactMultiplier": 0,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 0,
        "minBorrowFee": 7.5
      },
      "openFeeP": 0.08,
      "closeFeeP": 0,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 300,
      "pnlFees": {
        "numTiers": 9,
        "tierP": [
          0.5,
          1,
          2,
          5,
          10,
          20,
          50,
          100,
          500
        ],
        "feesP": [
          80,
          80,
          60,
          50,
          40,
          30,
          20,
          20,
          20
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 0,
        "2": 0,
        "3": 0
      },
      "skewEqParams": [
        [
          -5,
          800
        ],
        [
          -5,
          800
        ],
        [
          -5,
          800
        ],
        [
          -5,
          800
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          -5,
          900
        ],
        [
          -5,
          900
        ],
        [
          -5,
          900
        ],
        [
          -5,
          900
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 55,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 55,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 20,
      "pairSpreadP": 0.02,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 300,
      "pairMinLeverage": 1
    },
    "21": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 5,
        "feedId": "0x765d2ba906dbc32ca17cc11f5310a89e9ee1f6420508c63861f2f8ba4ee34bb2",
        "attributes": {
          "symbol": "Metal.XAU/USD",
          "asset_type": "Metal",
          "is_open": true,
          "next_open": 1758751200,
          "next_close": 1758747600,
          "schedule": "America/New_York;0000-1700&1800-2400,0000-1700&1800-2400,0000-1700&1800-2400,0000-1700&1800-2400,0000-1700,C,1800-2400;0619/1800-2400,0704/0000-1300,0901/0000-1430&1800-2400"
        }
      },
      "backupFeed": {
        "maxDeviationP": 0,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.01,
      "pnlSpreadP": 0.02,
      "leverages": {
        "minLeverage": 1,
        "maxLeverage": 100,
        "pnlMinLeverage": 1,
        "pnlMaxLeverage": 50
      },
      "priceImpactMultiplier": 0,
      "skewImpactMultiplier": 0,
      "groupIndex": 3,
      "feeIndex": 21,
      "values": {
        "maxGainP": 500,
        "maxSlP": 80,
        "maxLongOiP": 100,
        "maxShortOiP": 100,
        "groupOpenInterestPercentageP": 100,
        "maxWalletOIP": 15,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 100,
        "maxWalletOI": 15
      },
      "from": "XAU",
      "to": "USD",
      "timer": {
        "numTiers": 1,
        "positionSizeToThresholdTierMap": {
          "0": 0
        },
        "thresholdTierToTimerMap": {
          "0": 0
        }
      },
      "openInterest": {
        "long": 193591.71,
        "short": 156285.99
      },
      "marginFee": {
        "long": 0.0008561643835616438,
        "short": 0.0008561643835616438
      },
      "pairOI": 349877.7,
      "pairMaxOI": 3192029.31,
      "maxWalletOI": 14364131.89,
      "pairParams": {
        "onePercentDepthAbove": 1000000,
        "onePercentDepthBelow": 1000000
      },
      "blockOILimit": 2500000,
      "storagePairParams": {
        "posSpreadCap": 2.5,
        "negSpreadCap": 25,
        "isPnlTypeAllowed": 0,
        "pnlPriceImpactMultiplier": 0,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 0,
        "minBorrowFee": 7.5
      },
      "openFeeP": 0.08,
      "closeFeeP": 0,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 300,
      "pnlFees": {
        "numTiers": 9,
        "tierP": [
          0.5,
          1,
          2,
          5,
          10,
          20,
          50,
          100,
          500
        ],
        "feesP": [
          80,
          80,
          60,
          50,
          40,
          30,
          20,
          20,
          20
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 10,
        "2": 10,
        "3": 10
      },
      "skewEqParams": [
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 53,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 53,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 21,
      "pairSpreadP": 0.01,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 300,
      "pairMinLeverage": 1
    },
    "22": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 5,
        "feedId": "0xf0d57deca57b3da2fe63a493f4c25925fdfd8edf834b20f93e1f84dbd1504d4a",
        "attributes": {
          "symbol": "Crypto.SHIB/USD",
          "asset_type": "Crypto",
          "is_open": true,
          "next_open": 0,
          "next_close": 0,
          "schedule": "America/New_York;O,O,O,O,O,O,O;"
        }
      },
      "backupFeed": {
        "maxDeviationP": 0,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.02,
      "pnlSpreadP": 0.02,
      "leverages": {
        "minLeverage": 1,
        "maxLeverage": 75,
        "pnlMinLeverage": 75,
        "pnlMaxLeverage": 250
      },
      "priceImpactMultiplier": 1.2,
      "skewImpactMultiplier": 0.1,
      "groupIndex": 4,
      "feeIndex": 22,
      "values": {
        "maxGainP": 2500,
        "maxSlP": 80,
        "maxLongOiP": 50,
        "maxShortOiP": 50,
        "groupOpenInterestPercentageP": 75,
        "maxWalletOIP": 50,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 75,
        "maxWalletOI": 50
      },
      "from": "SHIB",
      "to": "USD",
      "timer": {
        "numTiers": 1,
        "positionSizeToThresholdTierMap": {
          "0": 0
        },
        "thresholdTierToTimerMap": {
          "0": 0
        }
      },
      "openInterest": {
        "long": 30344.02,
        "short": 29650
      },
      "marginFee": {
        "long": 0.00228310502283105,
        "short": 0.00228310502283105
      },
      "pairOI": 59994.02,
      "pairMaxOI": 3192029.31,
      "maxWalletOI": 47880439.62,
      "pairParams": {
        "onePercentDepthAbove": 3278045.736,
        "onePercentDepthBelow": 2703523.136
      },
      "blockOILimit": 2500000,
      "storagePairParams": {
        "posSpreadCap": 2,
        "negSpreadCap": 100000,
        "isPnlTypeAllowed": 1,
        "pnlPriceImpactMultiplier": 1.2,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 10,
        "minBorrowFee": 20
      },
      "openFeeP": 0.045,
      "closeFeeP": 0.045,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 10,
      "pnlFees": {
        "numTiers": 10,
        "tierP": [
          1,
          5,
          25,
          50,
          100,
          250,
          500,
          1500,
          2500,
          3000
        ],
        "feesP": [
          80,
          50,
          45,
          37.5,
          27.5,
          25,
          25,
          22.5,
          15,
          2.5
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 3,
        "2": 3,
        "3": 3
      },
      "skewEqParams": [
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 22,
      "pairSpreadP": 0.02,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 10,
      "pairMinLeverage": 1
    },
    "23": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 5,
        "feedId": "0xd69731a2e74ac1ce884fc3890f7ee324b6deb66147055249568869ed700882e4",
        "attributes": {
          "symbol": "Crypto.PEPE/USD",
          "asset_type": "Crypto",
          "is_open": true,
          "next_open": 0,
          "next_close": 0,
          "schedule": "America/New_York;O,O,O,O,O,O,O;"
        }
      },
      "backupFeed": {
        "maxDeviationP": 0,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.02,
      "pnlSpreadP": 0.02,
      "leverages": {
        "minLeverage": 1,
        "maxLeverage": 75,
        "pnlMinLeverage": 75,
        "pnlMaxLeverage": 250
      },
      "priceImpactMultiplier": 1.2,
      "skewImpactMultiplier": 0.1,
      "groupIndex": 4,
      "feeIndex": 23,
      "values": {
        "maxGainP": 2500,
        "maxSlP": 80,
        "maxLongOiP": 50,
        "maxShortOiP": 50,
        "groupOpenInterestPercentageP": 75,
        "maxWalletOIP": 50,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 75,
        "maxWalletOI": 50
      },
      "from": "PEPE",
      "to": "USD",
      "timer": {
        "numTiers": 1,
        "positionSizeToThresholdTierMap": {
          "0": 0
        },
        "thresholdTierToTimerMap": {
          "0": 0
        }
      },
      "openInterest": {
        "long": 48107.37,
        "short": 47150
      },
      "marginFee": {
        "long": 0.00228310502283105,
        "short": 0.00228310502283105
      },
      "pairOI": 95257.37,
      "pairMaxOI": 3192029.31,
      "maxWalletOI": 47880439.62,
      "pairParams": {
        "onePercentDepthAbove": 5746773.976,
        "onePercentDepthBelow": 3910138.624
      },
      "blockOILimit": 2500000,
      "storagePairParams": {
        "posSpreadCap": 2,
        "negSpreadCap": 100000,
        "isPnlTypeAllowed": 1,
        "pnlPriceImpactMultiplier": 1.2,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 10,
        "minBorrowFee": 20
      },
      "openFeeP": 0.045,
      "closeFeeP": 0.045,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 10,
      "pnlFees": {
        "numTiers": 10,
        "tierP": [
          1,
          5,
          25,
          50,
          100,
          250,
          500,
          1500,
          2500,
          3000
        ],
        "feesP": [
          80,
          50,
          45,
          37.5,
          27.5,
          25,
          25,
          22.5,
          15,
          2.5
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 3,
        "2": 3,
        "3": 3
      },
      "skewEqParams": [
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 23,
      "pairSpreadP": 0.02,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 10,
      "pairMinLeverage": 1
    },
    "24": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 5,
        "feedId": "0x72b021217ca3fe68922a19aaf990109cb9d84e9ad004b4d2025ad6f529314419",
        "attributes": {
          "symbol": "Crypto.BONK/USD",
          "asset_type": "Crypto",
          "is_open": true,
          "next_open": 0,
          "next_close": 0,
          "schedule": "America/New_York;O,O,O,O,O,O,O;"
        }
      },
      "backupFeed": {
        "maxDeviationP": 0,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.02,
      "pnlSpreadP": 0.02,
      "leverages": {
        "minLeverage": 1,
        "maxLeverage": 75,
        "pnlMinLeverage": 75,
        "pnlMaxLeverage": 250
      },
      "priceImpactMultiplier": 1.2,
      "skewImpactMultiplier": 0.1,
      "groupIndex": 4,
      "feeIndex": 24,
      "values": {
        "maxGainP": 2500,
        "maxSlP": 80,
        "maxLongOiP": 50,
        "maxShortOiP": 50,
        "groupOpenInterestPercentageP": 75,
        "maxWalletOIP": 50,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 75,
        "maxWalletOI": 50
      },
      "from": "BONK",
      "to": "USD",
      "timer": {
        "numTiers": 1,
        "positionSizeToThresholdTierMap": {
          "0": 0
        },
        "thresholdTierToTimerMap": {
          "0": 0
        }
      },
      "openInterest": {
        "long": 12838.09,
        "short": 12580
      },
      "marginFee": {
        "long": 0.00228310502283105,
        "short": 0.00228310502283105
      },
      "pairOI": 25418.09,
      "pairMaxOI": 3192029.31,
      "maxWalletOI": 47880439.62,
      "pairParams": {
        "onePercentDepthAbove": 2558229.152,
        "onePercentDepthBelow": 1822101
      },
      "blockOILimit": 2500000,
      "storagePairParams": {
        "posSpreadCap": 2,
        "negSpreadCap": 100000,
        "isPnlTypeAllowed": 1,
        "pnlPriceImpactMultiplier": 1.2,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 10,
        "minBorrowFee": 20
      },
      "openFeeP": 0.045,
      "closeFeeP": 0.045,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 10,
      "pnlFees": {
        "numTiers": 10,
        "tierP": [
          1,
          5,
          25,
          50,
          100,
          250,
          500,
          1500,
          2500,
          3000
        ],
        "feesP": [
          80,
          50,
          45,
          37.5,
          27.5,
          25,
          25,
          22.5,
          15,
          2.5
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 3,
        "2": 3,
        "3": 3
      },
      "skewEqParams": [
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 24,
      "pairSpreadP": 0.02,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 10,
      "pairMinLeverage": 1
    },
    "25": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 5,
        "feedId": "0x4ca4beeca86f0d164160323817a4e42b10010a724c2217c6ee41b54cd4cc61fc",
        "attributes": {
          "symbol": "Crypto.WIF/USD",
          "asset_type": "Crypto",
          "is_open": true,
          "next_open": 0,
          "next_close": 0,
          "schedule": "America/New_York;O,O,O,O,O,O,O;"
        }
      },
      "backupFeed": {
        "maxDeviationP": 0,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.02,
      "pnlSpreadP": 0.02,
      "leverages": {
        "minLeverage": 1,
        "maxLeverage": 75,
        "pnlMinLeverage": 75,
        "pnlMaxLeverage": 250
      },
      "priceImpactMultiplier": 1.2,
      "skewImpactMultiplier": 0.1,
      "groupIndex": 4,
      "feeIndex": 25,
      "values": {
        "maxGainP": 2500,
        "maxSlP": 80,
        "maxLongOiP": 50,
        "maxShortOiP": 50,
        "groupOpenInterestPercentageP": 75,
        "maxWalletOIP": 50,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 75,
        "maxWalletOI": 50
      },
      "from": "WIF",
      "to": "USD",
      "timer": {
        "numTiers": 1,
        "positionSizeToThresholdTierMap": {
          "0": 0
        },
        "thresholdTierToTimerMap": {
          "0": 0
        }
      },
      "openInterest": {
        "long": 18055.63,
        "short": 18094.85
      },
      "marginFee": {
        "long": 0.00228310502283105,
        "short": 0.00228310502283105
      },
      "pairOI": 36150.47,
      "pairMaxOI": 3192029.31,
      "maxWalletOI": 47880439.62,
      "pairParams": {
        "onePercentDepthAbove": 2869898.408,
        "onePercentDepthBelow": 2264586.448
      },
      "blockOILimit": 2500000,
      "storagePairParams": {
        "posSpreadCap": 2,
        "negSpreadCap": 100000,
        "isPnlTypeAllowed": 1,
        "pnlPriceImpactMultiplier": 1.2,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 10,
        "minBorrowFee": 20
      },
      "openFeeP": 0.045,
      "closeFeeP": 0.045,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 10,
      "pnlFees": {
        "numTiers": 10,
        "tierP": [
          1,
          5,
          25,
          50,
          100,
          250,
          500,
          1500,
          2500,
          3000
        ],
        "feesP": [
          80,
          50,
          45,
          37.5,
          27.5,
          25,
          25,
          22.5,
          15,
          2.5
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 3,
        "2": 3,
        "3": 3
      },
      "skewEqParams": [
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 25,
      "pairSpreadP": 0.02,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 10,
      "pairMinLeverage": 1
    },
    "26": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 5,
        "feedId": "0x3d4a2bd9535be6ce8059d75eadeba507b043257321aa544717c56fa19b49e35d",
        "attributes": {
          "symbol": "Crypto.RENDER/USD",
          "asset_type": "Crypto",
          "is_open": true,
          "next_open": 0,
          "next_close": 0,
          "schedule": "America/New_York;O,O,O,O,O,O,O;"
        }
      },
      "backupFeed": {
        "maxDeviationP": 0,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.05,
      "pnlSpreadP": 0.1,
      "leverages": {
        "minLeverage": 1,
        "maxLeverage": 25,
        "pnlMinLeverage": 1,
        "pnlMaxLeverage": 25
      },
      "priceImpactMultiplier": 1.2,
      "skewImpactMultiplier": 0.1,
      "groupIndex": 5,
      "feeIndex": 26,
      "values": {
        "maxGainP": 500,
        "maxSlP": 80,
        "maxLongOiP": 100,
        "maxShortOiP": 100,
        "groupOpenInterestPercentageP": 20,
        "maxWalletOIP": 15,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 20,
        "maxWalletOI": 15
      },
      "from": "RENDER",
      "to": "USD",
      "timer": {
        "numTiers": 2,
        "positionSizeToThresholdTierMap": {
          "0": 0,
          "1": 50000
        },
        "thresholdTierToTimerMap": {
          "0": 0,
          "1": 180
        }
      },
      "openInterest": {
        "long": 349.22,
        "short": 0
      },
      "marginFee": {
        "long": 0.00228310502283105,
        "short": 0.00228310502283105
      },
      "pairOI": 349.22,
      "pairMaxOI": 1702415.63,
      "maxWalletOI": 14364131.89,
      "pairParams": {
        "onePercentDepthAbove": 301362.576,
        "onePercentDepthBelow": 210255.936
      },
      "blockOILimit": 2500000,
      "storagePairParams": {
        "posSpreadCap": 5,
        "negSpreadCap": 100000,
        "isPnlTypeAllowed": 0,
        "pnlPriceImpactMultiplier": 0,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 0,
        "minBorrowFee": 20
      },
      "openFeeP": 0.045,
      "closeFeeP": 0.045,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 10,
      "pnlFees": {
        "numTiers": 10,
        "tierP": [
          1,
          5,
          25,
          50,
          100,
          250,
          500,
          1500,
          2500,
          3000
        ],
        "feesP": [
          80,
          50,
          45,
          37.5,
          27.5,
          25,
          25,
          22.5,
          15,
          2.5
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 10,
        "2": 10,
        "3": 10
      },
      "skewEqParams": [
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 26,
      "pairSpreadP": 0.05,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 10,
      "pairMinLeverage": 1
    },
    "27": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 5,
        "feedId": "0xd6835ad1f773de4a378115eb6824bd0c0e42d84d1c84d9750e853fb6b6c7794a",
        "attributes": {
          "symbol": "Crypto.WLD/USD",
          "asset_type": "Crypto",
          "is_open": true,
          "next_open": 0,
          "next_close": 0,
          "schedule": "America/New_York;O,O,O,O,O,O,O;"
        }
      },
      "backupFeed": {
        "maxDeviationP": 0,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.05,
      "pnlSpreadP": 0.1,
      "leverages": {
        "minLeverage": 1,
        "maxLeverage": 25,
        "pnlMinLeverage": 1,
        "pnlMaxLeverage": 25
      },
      "priceImpactMultiplier": 1.2,
      "skewImpactMultiplier": 0.1,
      "groupIndex": 5,
      "feeIndex": 27,
      "values": {
        "maxGainP": 500,
        "maxSlP": 80,
        "maxLongOiP": 100,
        "maxShortOiP": 100,
        "groupOpenInterestPercentageP": 20,
        "maxWalletOIP": 15,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 20,
        "maxWalletOI": 15
      },
      "from": "WLD",
      "to": "USD",
      "timer": {
        "numTiers": 2,
        "positionSizeToThresholdTierMap": {
          "0": 0,
          "1": 50000
        },
        "thresholdTierToTimerMap": {
          "0": 0,
          "1": 180
        }
      },
      "openInterest": {
        "long": 198.5,
        "short": 0
      },
      "marginFee": {
        "long": 0.00228310502283105,
        "short": 0.00228310502283105
      },
      "pairOI": 198.5,
      "pairMaxOI": 1702415.63,
      "maxWalletOI": 14364131.89,
      "pairParams": {
        "onePercentDepthAbove": 838789.64,
        "onePercentDepthBelow": 727459.088
      },
      "blockOILimit": 2500000,
      "storagePairParams": {
        "posSpreadCap": 5,
        "negSpreadCap": 100000,
        "isPnlTypeAllowed": 0,
        "pnlPriceImpactMultiplier": 0,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 0,
        "minBorrowFee": 20
      },
      "openFeeP": 0.045,
      "closeFeeP": 0.045,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 10,
      "pnlFees": {
        "numTiers": 10,
        "tierP": [
          1,
          5,
          25,
          50,
          100,
          250,
          500,
          1500,
          2500,
          3000
        ],
        "feesP": [
          80,
          50,
          45,
          37.5,
          27.5,
          25,
          25,
          22.5,
          15,
          2.5
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 10,
        "2": 10,
        "3": 10
      },
      "skewEqParams": [
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 27,
      "pairSpreadP": 0.05,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 10,
      "pairMinLeverage": 1
    },
    "28": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 1,
        "feedId": "0xb98e7ae8af2d298d2651eb21ab5b8b5738212e13efb43bd0dfbce7a74ba4b5d0",
        "attributes": {
          "symbol": "",
          "asset_type": "",
          "is_open": false,
          "next_open": 0,
          "next_close": 0,
          "schedule": "America/New_York;O,O,O,O,O,O,O;"
        }
      },
      "backupFeed": {
        "maxDeviationP": 2,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.01,
      "pnlSpreadP": 0.01,
      "leverages": {
        "minLeverage": 2,
        "maxLeverage": 100,
        "pnlMinLeverage": 2,
        "pnlMaxLeverage": 100
      },
      "priceImpactMultiplier": 1.2,
      "skewImpactMultiplier": 0.25,
      "groupIndex": 0,
      "feeIndex": 28,
      "values": {
        "maxGainP": 500,
        "maxSlP": 80,
        "maxLongOiP": 100,
        "maxShortOiP": 100,
        "groupOpenInterestPercentageP": 100,
        "maxWalletOIP": 50,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 100,
        "maxWalletOI": 50
      },
      "from": "FET",
      "to": "USD",
      "timer": {
        "numTiers": 3,
        "positionSizeToThresholdTierMap": {
          "0": 0,
          "1": 10000,
          "2": 50000
        },
        "thresholdTierToTimerMap": {
          "0": 180,
          "1": 600,
          "2": 900
        }
      },
      "openInterest": {
        "long": 994.86,
        "short": 0
      },
      "marginFee": {
        "long": 0.01080846,
        "short": 0
      },
      "pairOI": 994.86,
      "pairMaxOI": 29792273.54,
      "maxWalletOI": 47880439.62,
      "pairParams": {
        "onePercentDepthAbove": 98536.333333,
        "onePercentDepthBelow": 96122
      },
      "blockOILimit": 2500000,
      "storagePairParams": {
        "posSpreadCap": 2.5,
        "negSpreadCap": 25,
        "isPnlTypeAllowed": 0,
        "pnlPriceImpactMultiplier": 0,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 0,
        "minBorrowFee": 0
      },
      "openFeeP": 0.08,
      "closeFeeP": 0.06,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 10,
      "pnlFees": {
        "numTiers": 9,
        "tierP": [
          0.5,
          1,
          2,
          5,
          10,
          20,
          50,
          100,
          500
        ],
        "feesP": [
          80,
          80,
          60,
          50,
          40,
          30,
          20,
          20,
          20
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 10,
        "2": 10,
        "3": 10
      },
      "skewEqParams": [
        [
          0,
          800
        ],
        [
          0,
          800
        ],
        [
          0,
          800
        ],
        [
          0,
          800
        ],
        [
          0,
          800
        ],
        [
          0,
          800
        ],
        [
          0,
          800
        ],
        [
          0,
          800
        ],
        [
          0,
          800
        ],
        [
          0,
          800
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "isPairListed": false,
      "index": 28,
      "pairSpreadP": 0.01,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 10,
      "pairMinLeverage": 2
    },
    "29": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 5,
        "feedId": "0x7677dd124dee46cfcd46ff03cf405fb0ed94b1f49efbea3444aadbda939a7ad3",
        "attributes": {
          "symbol": "Crypto.ARKM/USD",
          "asset_type": "Crypto",
          "is_open": true,
          "next_open": 0,
          "next_close": 0,
          "schedule": "America/New_York;O,O,O,O,O,O,O;"
        }
      },
      "backupFeed": {
        "maxDeviationP": 0,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.05,
      "pnlSpreadP": 0.1,
      "leverages": {
        "minLeverage": 1,
        "maxLeverage": 25,
        "pnlMinLeverage": 1,
        "pnlMaxLeverage": 25
      },
      "priceImpactMultiplier": 1.2,
      "skewImpactMultiplier": 0.1,
      "groupIndex": 5,
      "feeIndex": 29,
      "values": {
        "maxGainP": 500,
        "maxSlP": 80,
        "maxLongOiP": 100,
        "maxShortOiP": 100,
        "groupOpenInterestPercentageP": 20,
        "maxWalletOIP": 15,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 20,
        "maxWalletOI": 15
      },
      "from": "ARKM",
      "to": "USD",
      "timer": {
        "numTiers": 2,
        "positionSizeToThresholdTierMap": {
          "0": 0,
          "1": 50000
        },
        "thresholdTierToTimerMap": {
          "0": 0,
          "1": 180
        }
      },
      "openInterest": {
        "long": 206.78,
        "short": 0
      },
      "marginFee": {
        "long": 0.00228310502283105,
        "short": 0.00228310502283105
      },
      "pairOI": 206.78,
      "pairMaxOI": 1702415.63,
      "maxWalletOI": 14364131.89,
      "pairParams": {
        "onePercentDepthAbove": 154918.624,
        "onePercentDepthBelow": 119830.384
      },
      "blockOILimit": 2500000,
      "storagePairParams": {
        "posSpreadCap": 5,
        "negSpreadCap": 100000,
        "isPnlTypeAllowed": 0,
        "pnlPriceImpactMultiplier": 0,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 0,
        "minBorrowFee": 20
      },
      "openFeeP": 0.045,
      "closeFeeP": 0.045,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 10,
      "pnlFees": {
        "numTiers": 10,
        "tierP": [
          1,
          5,
          25,
          50,
          100,
          250,
          500,
          1500,
          2500,
          3000
        ],
        "feesP": [
          80,
          50,
          45,
          37.5,
          27.5,
          25,
          25,
          22.5,
          15,
          2.5
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 10,
        "2": 10,
        "3": 10
      },
      "skewEqParams": [
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 29,
      "pairSpreadP": 0.05,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 10,
      "pairMinLeverage": 1
    },
    "30": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 5,
        "feedId": "0x9a4df90b25497f66b1afb012467e316e801ca3d839456db028892fe8c70c8016",
        "attributes": {
          "symbol": "Crypto.PENDLE/USD",
          "asset_type": "Crypto",
          "is_open": true,
          "next_open": 0,
          "next_close": 0,
          "schedule": "America/New_York;O,O,O,O,O,O,O;"
        }
      },
      "backupFeed": {
        "maxDeviationP": 0,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.05,
      "pnlSpreadP": 0.1,
      "leverages": {
        "minLeverage": 1,
        "maxLeverage": 25,
        "pnlMinLeverage": 1,
        "pnlMaxLeverage": 25
      },
      "priceImpactMultiplier": 1.2,
      "skewImpactMultiplier": 0.1,
      "groupIndex": 5,
      "feeIndex": 30,
      "values": {
        "maxGainP": 500,
        "maxSlP": 80,
        "maxLongOiP": 100,
        "maxShortOiP": 100,
        "groupOpenInterestPercentageP": 20,
        "maxWalletOIP": 15,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 20,
        "maxWalletOI": 15
      },
      "from": "PENDLE",
      "to": "USD",
      "timer": {
        "numTiers": 2,
        "positionSizeToThresholdTierMap": {
          "0": 0,
          "1": 50000
        },
        "thresholdTierToTimerMap": {
          "0": 0,
          "1": 180
        }
      },
      "openInterest": {
        "long": 8001.9,
        "short": 6547.01
      },
      "marginFee": {
        "long": 0.00228310502283105,
        "short": 0.00228310502283105
      },
      "pairOI": 14548.92,
      "pairMaxOI": 1702415.63,
      "maxWalletOI": 14364131.89,
      "pairParams": {
        "onePercentDepthAbove": 275955.712,
        "onePercentDepthBelow": 185020.296
      },
      "blockOILimit": 2500000,
      "storagePairParams": {
        "posSpreadCap": 5,
        "negSpreadCap": 100000,
        "isPnlTypeAllowed": 0,
        "pnlPriceImpactMultiplier": 0,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 0,
        "minBorrowFee": 20
      },
      "openFeeP": 0.045,
      "closeFeeP": 0.045,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 10,
      "pnlFees": {
        "numTiers": 10,
        "tierP": [
          1,
          5,
          25,
          50,
          100,
          250,
          500,
          1500,
          2500,
          3000
        ],
        "feesP": [
          80,
          50,
          45,
          37.5,
          27.5,
          25,
          25,
          22.5,
          15,
          2.5
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 10,
        "2": 10,
        "3": 10
      },
      "skewEqParams": [
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 30,
      "pairSpreadP": 0.05,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 10,
      "pairMinLeverage": 1
    },
    "31": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 5,
        "feedId": "0xd40472610abe56d36d065a0cf889fc8f1dd9f3b7f2a478231a5fc6df07ea5ce3",
        "attributes": {
          "symbol": "Crypto.ONDO/USD",
          "asset_type": "Crypto",
          "is_open": true,
          "next_open": 0,
          "next_close": 0,
          "schedule": "America/New_York;O,O,O,O,O,O,O;"
        }
      },
      "backupFeed": {
        "maxDeviationP": 0,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.05,
      "pnlSpreadP": 0.1,
      "leverages": {
        "minLeverage": 1,
        "maxLeverage": 25,
        "pnlMinLeverage": 1,
        "pnlMaxLeverage": 25
      },
      "priceImpactMultiplier": 1.2,
      "skewImpactMultiplier": 0.1,
      "groupIndex": 5,
      "feeIndex": 31,
      "values": {
        "maxGainP": 500,
        "maxSlP": 80,
        "maxLongOiP": 100,
        "maxShortOiP": 100,
        "groupOpenInterestPercentageP": 20,
        "maxWalletOIP": 15,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 20,
        "maxWalletOI": 15
      },
      "from": "ONDO",
      "to": "USD",
      "timer": {
        "numTiers": 2,
        "positionSizeToThresholdTierMap": {
          "0": 0,
          "1": 50000
        },
        "thresholdTierToTimerMap": {
          "0": 0,
          "1": 180
        }
      },
      "openInterest": {
        "long": 66176.02,
        "short": 56697.85
      },
      "marginFee": {
        "long": 0.00228310502283105,
        "short": 0.00228310502283105
      },
      "pairOI": 122873.87,
      "pairMaxOI": 1702415.63,
      "maxWalletOI": 14364131.89,
      "pairParams": {
        "onePercentDepthAbove": 1495181.28,
        "onePercentDepthBelow": 725519.976
      },
      "blockOILimit": 2500000,
      "storagePairParams": {
        "posSpreadCap": 5,
        "negSpreadCap": 100000,
        "isPnlTypeAllowed": 0,
        "pnlPriceImpactMultiplier": 0,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 0,
        "minBorrowFee": 20
      },
      "openFeeP": 0.045,
      "closeFeeP": 0.045,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 10,
      "pnlFees": {
        "numTiers": 10,
        "tierP": [
          1,
          5,
          25,
          50,
          100,
          250,
          500,
          1500,
          2500,
          3000
        ],
        "feesP": [
          80,
          50,
          45,
          37.5,
          27.5,
          25,
          25,
          22.5,
          15,
          2.5
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 10,
        "2": 10,
        "3": 10
      },
      "skewEqParams": [
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 31,
      "pairSpreadP": 0.05,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 10,
      "pairMinLeverage": 1
    },
    "32": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 1,
        "feedId": "0xe417fb7d1edcfe70283c608fa9f14d11ebf4d1b3ecf2e97e42a110f7fb649843",
        "attributes": {
          "symbol": "",
          "asset_type": "",
          "is_open": false,
          "next_open": 0,
          "next_close": 0,
          "schedule": "America/New_York;O,O,O,O,O,O,O;"
        }
      },
      "backupFeed": {
        "maxDeviationP": 2,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.01,
      "pnlSpreadP": 0.01,
      "leverages": {
        "minLeverage": 2,
        "maxLeverage": 100,
        "pnlMinLeverage": 2,
        "pnlMaxLeverage": 100
      },
      "priceImpactMultiplier": 1.2,
      "skewImpactMultiplier": 0.25,
      "groupIndex": 0,
      "feeIndex": 32,
      "values": {
        "maxGainP": 500,
        "maxSlP": 80,
        "maxLongOiP": 100,
        "maxShortOiP": 100,
        "groupOpenInterestPercentageP": 30,
        "maxWalletOIP": 15,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 30,
        "maxWalletOI": 15
      },
      "from": "",
      "to": "",
      "timer": {
        "numTiers": 3,
        "positionSizeToThresholdTierMap": {
          "0": 0,
          "1": 10000,
          "2": 50000
        },
        "thresholdTierToTimerMap": {
          "0": 180,
          "1": 600,
          "2": 900
        }
      },
      "openInterest": {
        "long": 0,
        "short": 0
      },
      "marginFee": {
        "long": 0,
        "short": 0
      },
      "pairOI": 0,
      "pairMaxOI": 8937682.06,
      "maxWalletOI": 14364131.89,
      "pairParams": {
        "onePercentDepthAbove": 39476,
        "onePercentDepthBelow": 28946
      },
      "blockOILimit": 2500000,
      "storagePairParams": {
        "posSpreadCap": 2.5,
        "negSpreadCap": 25,
        "isPnlTypeAllowed": 0,
        "pnlPriceImpactMultiplier": 0,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 0,
        "minBorrowFee": 0
      },
      "openFeeP": 0.08,
      "closeFeeP": 0.08,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 200,
      "pnlFees": {
        "numTiers": 9,
        "tierP": [
          0.5,
          1,
          2,
          5,
          10,
          20,
          50,
          100,
          500
        ],
        "feesP": [
          80,
          80,
          60,
          50,
          40,
          30,
          20,
          20,
          20
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 10,
        "2": 10,
        "3": 10
      },
      "skewEqParams": [
        [
          0,
          800
        ],
        [
          0,
          800
        ],
        [
          0,
          800
        ],
        [
          0,
          800
        ],
        [
          0,
          800
        ],
        [
          0,
          800
        ],
        [
          0,
          800
        ],
        [
          0,
          800
        ],
        [
          0,
          800
        ],
        [
          0,
          800
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "isPairListed": false,
      "index": 32,
      "pairSpreadP": 0.01,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 200,
      "pairMinLeverage": 2
    },
    "33": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 5,
        "feedId": "0xa9f3b2a89c6f85a6c20a9518abde39b944e839ca49a0c92307c65974d3f14a57",
        "attributes": {
          "symbol": "Crypto.DYM/USD",
          "asset_type": "Crypto",
          "is_open": true,
          "next_open": 0,
          "next_close": 0,
          "schedule": "America/New_York;O,O,O,O,O,O,O;"
        }
      },
      "backupFeed": {
        "maxDeviationP": 0,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.05,
      "pnlSpreadP": 0.1,
      "leverages": {
        "minLeverage": 1,
        "maxLeverage": 25,
        "pnlMinLeverage": 1,
        "pnlMaxLeverage": 25
      },
      "priceImpactMultiplier": 1.2,
      "skewImpactMultiplier": 0.1,
      "groupIndex": 5,
      "feeIndex": 33,
      "values": {
        "maxGainP": 500,
        "maxSlP": 80,
        "maxLongOiP": 100,
        "maxShortOiP": 100,
        "groupOpenInterestPercentageP": 20,
        "maxWalletOIP": 15,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 20,
        "maxWalletOI": 15
      },
      "from": "DYM",
      "to": "USD",
      "timer": {
        "numTiers": 2,
        "positionSizeToThresholdTierMap": {
          "0": 0,
          "1": 50000
        },
        "thresholdTierToTimerMap": {
          "0": 0,
          "1": 180
        }
      },
      "openInterest": {
        "long": 0,
        "short": 0
      },
      "marginFee": {
        "long": 0.00228310502283105,
        "short": 0.00228310502283105
      },
      "pairOI": 0,
      "pairMaxOI": 1702415.63,
      "maxWalletOI": 14364131.89,
      "pairParams": {
        "onePercentDepthAbove": 81467.992,
        "onePercentDepthBelow": 26344.616
      },
      "blockOILimit": 2500000,
      "storagePairParams": {
        "posSpreadCap": 5,
        "negSpreadCap": 100000,
        "isPnlTypeAllowed": 0,
        "pnlPriceImpactMultiplier": 0,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 0,
        "minBorrowFee": 20
      },
      "openFeeP": 0.045,
      "closeFeeP": 0.045,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 10,
      "pnlFees": {
        "numTiers": 10,
        "tierP": [
          1,
          5,
          25,
          50,
          100,
          250,
          500,
          1500,
          2500,
          3000
        ],
        "feesP": [
          80,
          50,
          45,
          37.5,
          27.5,
          25,
          25,
          22.5,
          15,
          2.5
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 10,
        "2": 10,
        "3": 10
      },
      "skewEqParams": [
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 33,
      "pairSpreadP": 0.05,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 10,
      "pairMinLeverage": 1
    },
    "34": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 5,
        "feedId": "0x193c739db502aadcef37c2589738b1e37bdb257d58cf1ab3c7ebc8e6df4e3ec0",
        "attributes": {
          "symbol": "Crypto.ORDI/USD",
          "asset_type": "Crypto",
          "is_open": true,
          "next_open": 0,
          "next_close": 0,
          "schedule": "America/New_York;O,O,O,O,O,O,O;"
        }
      },
      "backupFeed": {
        "maxDeviationP": 0,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.05,
      "pnlSpreadP": 0.06,
      "leverages": {
        "minLeverage": 1,
        "maxLeverage": 25,
        "pnlMinLeverage": 1,
        "pnlMaxLeverage": 25
      },
      "priceImpactMultiplier": 1.2,
      "skewImpactMultiplier": 0.1,
      "groupIndex": 0,
      "feeIndex": 34,
      "values": {
        "maxGainP": 500,
        "maxSlP": 80,
        "maxLongOiP": 100,
        "maxShortOiP": 100,
        "groupOpenInterestPercentageP": 1,
        "maxWalletOIP": 15,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 1,
        "maxWalletOI": 15
      },
      "from": "ORDI",
      "to": "USD",
      "timer": {
        "numTiers": 2,
        "positionSizeToThresholdTierMap": {
          "0": 0,
          "1": 50000
        },
        "thresholdTierToTimerMap": {
          "0": 0,
          "1": 180
        }
      },
      "openInterest": {
        "long": 25762.87,
        "short": 0
      },
      "marginFee": {
        "long": 0.00228310502283105,
        "short": 0.00228310502283105
      },
      "pairOI": 25762.87,
      "pairMaxOI": 297922.74,
      "maxWalletOI": 14364131.89,
      "pairParams": {
        "onePercentDepthAbove": 232837,
        "onePercentDepthBelow": 218883.632
      },
      "blockOILimit": 2500000,
      "storagePairParams": {
        "posSpreadCap": 5,
        "negSpreadCap": 100000,
        "isPnlTypeAllowed": 0,
        "pnlPriceImpactMultiplier": 0,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 0,
        "minBorrowFee": 20
      },
      "openFeeP": 0.045,
      "closeFeeP": 0.045,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 10,
      "pnlFees": {
        "numTiers": 10,
        "tierP": [
          1,
          5,
          25,
          50,
          100,
          250,
          500,
          1500,
          2500,
          3000
        ],
        "feesP": [
          80,
          50,
          45,
          37.5,
          27.5,
          25,
          25,
          22.5,
          15,
          2.5
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 10,
        "2": 10,
        "3": 10
      },
      "skewEqParams": [
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 34,
      "pairSpreadP": 0.05,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 10,
      "pairMinLeverage": 1
    },
    "35": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 5,
        "feedId": "0xec7a775f46379b5e943c3526b1c8d54cd49749176b0b98e02dde68d1bd335c17",
        "attributes": {
          "symbol": "Crypto.STX/USD",
          "asset_type": "Crypto",
          "is_open": true,
          "next_open": 0,
          "next_close": 0,
          "schedule": "America/New_York;O,O,O,O,O,O,O;"
        }
      },
      "backupFeed": {
        "maxDeviationP": 0,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.05,
      "pnlSpreadP": 0.08,
      "leverages": {
        "minLeverage": 1,
        "maxLeverage": 25,
        "pnlMinLeverage": 1,
        "pnlMaxLeverage": 25
      },
      "priceImpactMultiplier": 1.2,
      "skewImpactMultiplier": 0.1,
      "groupIndex": 0,
      "feeIndex": 35,
      "values": {
        "maxGainP": 500,
        "maxSlP": 80,
        "maxLongOiP": 100,
        "maxShortOiP": 100,
        "groupOpenInterestPercentageP": 1,
        "maxWalletOIP": 15,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 1,
        "maxWalletOI": 15
      },
      "from": "STX",
      "to": "USD",
      "timer": {
        "numTiers": 2,
        "positionSizeToThresholdTierMap": {
          "0": 0,
          "1": 50000
        },
        "thresholdTierToTimerMap": {
          "0": 0,
          "1": 180
        }
      },
      "openInterest": {
        "long": 101.81,
        "short": 0
      },
      "marginFee": {
        "long": 0.00228310502283105,
        "short": 0.00228310502283105
      },
      "pairOI": 101.81,
      "pairMaxOI": 297922.74,
      "maxWalletOI": 14364131.89,
      "pairParams": {
        "onePercentDepthAbove": 179272.432,
        "onePercentDepthBelow": 135103.024
      },
      "blockOILimit": 2500000,
      "storagePairParams": {
        "posSpreadCap": 5,
        "negSpreadCap": 100000,
        "isPnlTypeAllowed": 0,
        "pnlPriceImpactMultiplier": 0,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 0,
        "minBorrowFee": 20
      },
      "openFeeP": 0.045,
      "closeFeeP": 0.045,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 10,
      "pnlFees": {
        "numTiers": 10,
        "tierP": [
          1,
          5,
          25,
          50,
          100,
          250,
          500,
          1500,
          2500,
          3000
        ],
        "feesP": [
          80,
          50,
          45,
          37.5,
          27.5,
          25,
          25,
          22.5,
          15,
          2.5
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 10,
        "2": 10,
        "3": 10
      },
      "skewEqParams": [
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 35,
      "pairSpreadP": 0.05,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 10,
      "pairMinLeverage": 1
    },
    "36": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 5,
        "feedId": "0xb7910ba7322db020416fcac28b48c01212fd9cc8fbcbaf7d30477ed8605f6bd4",
        "attributes": {
          "symbol": "Crypto.ENA/USD",
          "asset_type": "Crypto",
          "is_open": true,
          "next_open": 0,
          "next_close": 0,
          "schedule": "America/New_York;O,O,O,O,O,O,O;"
        }
      },
      "backupFeed": {
        "maxDeviationP": 0,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.05,
      "pnlSpreadP": 0.06,
      "leverages": {
        "minLeverage": 1,
        "maxLeverage": 40,
        "pnlMinLeverage": 1,
        "pnlMaxLeverage": 25
      },
      "priceImpactMultiplier": 1.2,
      "skewImpactMultiplier": 0.1,
      "groupIndex": 1,
      "feeIndex": 36,
      "values": {
        "maxGainP": 500,
        "maxSlP": 80,
        "maxLongOiP": 75,
        "maxShortOiP": 75,
        "groupOpenInterestPercentageP": 35,
        "maxWalletOIP": 15,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 35,
        "maxWalletOI": 15
      },
      "from": "ENA",
      "to": "USD",
      "timer": {
        "numTiers": 2,
        "positionSizeToThresholdTierMap": {
          "0": 0,
          "1": 50000
        },
        "thresholdTierToTimerMap": {
          "0": 0,
          "1": 180
        }
      },
      "openInterest": {
        "long": 49786.5,
        "short": 43318.59
      },
      "marginFee": {
        "long": 0.00228310502283105,
        "short": 0.00228310502283105
      },
      "pairOI": 93105.09,
      "pairMaxOI": 4841244.45,
      "maxWalletOI": 14364131.89,
      "pairParams": {
        "onePercentDepthAbove": 1560185.96,
        "onePercentDepthBelow": 1079680.088
      },
      "blockOILimit": 2500000,
      "storagePairParams": {
        "posSpreadCap": 5,
        "negSpreadCap": 100000,
        "isPnlTypeAllowed": 0,
        "pnlPriceImpactMultiplier": 0,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 0,
        "minBorrowFee": 20
      },
      "openFeeP": 0.045,
      "closeFeeP": 0.045,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 10,
      "pnlFees": {
        "numTiers": 10,
        "tierP": [
          1,
          5,
          25,
          50,
          100,
          250,
          500,
          1500,
          2500,
          3000
        ],
        "feesP": [
          80,
          50,
          45,
          37.5,
          27.5,
          25,
          25,
          22.5,
          15,
          2.5
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 10,
        "2": 10,
        "3": 10
      },
      "skewEqParams": [
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 36,
      "pairSpreadP": 0.05,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 10,
      "pairMinLeverage": 1
    },
    "37": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 5,
        "feedId": "0x9db37f4d5654aad3e37e2e14ffd8d53265fb3026d1d8f91146539eebaa2ef45f",
        "attributes": {
          "symbol": "Crypto.AERO/USD",
          "asset_type": "Crypto",
          "is_open": true,
          "next_open": 0,
          "next_close": 0,
          "schedule": "America/New_York;O,O,O,O,O,O,O;"
        }
      },
      "backupFeed": {
        "maxDeviationP": 0,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.05,
      "pnlSpreadP": 0.1,
      "leverages": {
        "minLeverage": 1,
        "maxLeverage": 25,
        "pnlMinLeverage": 1,
        "pnlMaxLeverage": 25
      },
      "priceImpactMultiplier": 1.2,
      "skewImpactMultiplier": 0.1,
      "groupIndex": 5,
      "feeIndex": 37,
      "values": {
        "maxGainP": 500,
        "maxSlP": 80,
        "maxLongOiP": 100,
        "maxShortOiP": 100,
        "groupOpenInterestPercentageP": 10,
        "maxWalletOIP": 15,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 10,
        "maxWalletOI": 15
      },
      "from": "AERO",
      "to": "USD",
      "timer": {
        "numTiers": 2,
        "positionSizeToThresholdTierMap": {
          "0": 0,
          "1": 50000
        },
        "thresholdTierToTimerMap": {
          "0": 0,
          "1": 180
        }
      },
      "openInterest": {
        "long": 120708.07,
        "short": 1197.54
      },
      "marginFee": {
        "long": 0.00228310502283105,
        "short": 0.00228310502283105
      },
      "pairOI": 121905.61,
      "pairMaxOI": 851207.82,
      "maxWalletOI": 14364131.89,
      "pairParams": {
        "onePercentDepthAbove": 112518.872,
        "onePercentDepthBelow": 74360.864
      },
      "blockOILimit": 2500000,
      "storagePairParams": {
        "posSpreadCap": 5,
        "negSpreadCap": 100000,
        "isPnlTypeAllowed": 0,
        "pnlPriceImpactMultiplier": 0,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 0,
        "minBorrowFee": 20
      },
      "openFeeP": 0.045,
      "closeFeeP": 0.045,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 10,
      "pnlFees": {
        "numTiers": 10,
        "tierP": [
          1,
          5,
          25,
          50,
          100,
          250,
          500,
          1500,
          2500,
          3000
        ],
        "feesP": [
          80,
          50,
          45,
          37.5,
          27.5,
          25,
          25,
          22.5,
          15,
          2.5
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 10,
        "2": 10,
        "3": 10
      },
      "skewEqParams": [
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 55,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 55,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 37,
      "pairSpreadP": 0.05,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 10,
      "pairMinLeverage": 1
    },
    "38": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 5,
        "feedId": "0xb27578a9654246cb0a2950842b92330e9ace141c52b63829cc72d5c45a5a595a",
        "attributes": {
          "symbol": "Crypto.ETHFI/USD",
          "asset_type": "Crypto",
          "is_open": true,
          "next_open": 0,
          "next_close": 0,
          "schedule": "America/New_York;O,O,O,O,O,O,O;"
        }
      },
      "backupFeed": {
        "maxDeviationP": 0,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.05,
      "pnlSpreadP": 0.1,
      "leverages": {
        "minLeverage": 1,
        "maxLeverage": 25,
        "pnlMinLeverage": 1,
        "pnlMaxLeverage": 25
      },
      "priceImpactMultiplier": 1.2,
      "skewImpactMultiplier": 0.1,
      "groupIndex": 5,
      "feeIndex": 38,
      "values": {
        "maxGainP": 500,
        "maxSlP": 80,
        "maxLongOiP": 100,
        "maxShortOiP": 100,
        "groupOpenInterestPercentageP": 20,
        "maxWalletOIP": 15,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 20,
        "maxWalletOI": 15
      },
      "from": "ETHFI",
      "to": "USD",
      "timer": {
        "numTiers": 2,
        "positionSizeToThresholdTierMap": {
          "0": 0,
          "1": 50000
        },
        "thresholdTierToTimerMap": {
          "0": 0,
          "1": 180
        }
      },
      "openInterest": {
        "long": 2758.97,
        "short": 0
      },
      "marginFee": {
        "long": 0.00228310502283105,
        "short": 0.00228310502283105
      },
      "pairOI": 2758.97,
      "pairMaxOI": 1702415.63,
      "maxWalletOI": 14364131.89,
      "pairParams": {
        "onePercentDepthAbove": 200000,
        "onePercentDepthBelow": 200000
      },
      "blockOILimit": 2500000,
      "storagePairParams": {
        "posSpreadCap": 5,
        "negSpreadCap": 100000,
        "isPnlTypeAllowed": 0,
        "pnlPriceImpactMultiplier": 0,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 0,
        "minBorrowFee": 20
      },
      "openFeeP": 0.045,
      "closeFeeP": 0.045,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 10,
      "pnlFees": {
        "numTiers": 10,
        "tierP": [
          1,
          5,
          25,
          50,
          100,
          250,
          500,
          1500,
          2500,
          3000
        ],
        "feesP": [
          80,
          50,
          45,
          37.5,
          27.5,
          25,
          25,
          22.5,
          15,
          2.5
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 10,
        "2": 10,
        "3": 10
      },
      "skewEqParams": [
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 38,
      "pairSpreadP": 0.05,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 10,
      "pairMinLeverage": 1
    },
    "39": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 5,
        "feedId": "0x0a0408d619e9380abad35060f9192039ed5042fa6f82301d0e48bb52be830996",
        "attributes": {
          "symbol": "Crypto.JUP/USD",
          "asset_type": "Crypto",
          "is_open": true,
          "next_open": 0,
          "next_close": 0,
          "schedule": "America/New_York;O,O,O,O,O,O,O;"
        }
      },
      "backupFeed": {
        "maxDeviationP": 0,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.05,
      "pnlSpreadP": 0.1,
      "leverages": {
        "minLeverage": 1,
        "maxLeverage": 25,
        "pnlMinLeverage": 1,
        "pnlMaxLeverage": 25
      },
      "priceImpactMultiplier": 1.2,
      "skewImpactMultiplier": 0.1,
      "groupIndex": 5,
      "feeIndex": 39,
      "values": {
        "maxGainP": 500,
        "maxSlP": 80,
        "maxLongOiP": 100,
        "maxShortOiP": 100,
        "groupOpenInterestPercentageP": 20,
        "maxWalletOIP": 15,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 20,
        "maxWalletOI": 15
      },
      "from": "JUP",
      "to": "USD",
      "timer": {
        "numTiers": 2,
        "positionSizeToThresholdTierMap": {
          "0": 0,
          "1": 50000
        },
        "thresholdTierToTimerMap": {
          "0": 0,
          "1": 180
        }
      },
      "openInterest": {
        "long": 38724.32,
        "short": 32875.37
      },
      "marginFee": {
        "long": 0.00228310502283105,
        "short": 0.00228310502283105
      },
      "pairOI": 71599.69,
      "pairMaxOI": 1702415.63,
      "maxWalletOI": 14364131.89,
      "pairParams": {
        "onePercentDepthAbove": 356287.44,
        "onePercentDepthBelow": 245344.544
      },
      "blockOILimit": 2500000,
      "storagePairParams": {
        "posSpreadCap": 5,
        "negSpreadCap": 100000,
        "isPnlTypeAllowed": 0,
        "pnlPriceImpactMultiplier": 0,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 0,
        "minBorrowFee": 20
      },
      "openFeeP": 0.045,
      "closeFeeP": 0.045,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 10,
      "pnlFees": {
        "numTiers": 10,
        "tierP": [
          1,
          5,
          25,
          50,
          100,
          250,
          500,
          1500,
          2500,
          3000
        ],
        "feesP": [
          80,
          50,
          45,
          37.5,
          27.5,
          25,
          25,
          22.5,
          15,
          2.5
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 10,
        "2": 10,
        "3": 10
      },
      "skewEqParams": [
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 39,
      "pairSpreadP": 0.05,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 10,
      "pairMinLeverage": 1
    },
    "40": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 5,
        "feedId": "0x9df307038f76e26ba0f9aaa1d5eefce919bf5b7b282d0ad247d4f77ffb506ede",
        "attributes": {
          "symbol": "Crypto.REZ/USD",
          "asset_type": "Crypto",
          "is_open": true,
          "next_open": 0,
          "next_close": 0,
          "schedule": "America/New_York;O,O,O,O,O,O,O;"
        }
      },
      "backupFeed": {
        "maxDeviationP": 0,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.05,
      "pnlSpreadP": 0.1,
      "leverages": {
        "minLeverage": 1,
        "maxLeverage": 25,
        "pnlMinLeverage": 1,
        "pnlMaxLeverage": 25
      },
      "priceImpactMultiplier": 1.2,
      "skewImpactMultiplier": 0.1,
      "groupIndex": 5,
      "feeIndex": 40,
      "values": {
        "maxGainP": 500,
        "maxSlP": 80,
        "maxLongOiP": 100,
        "maxShortOiP": 100,
        "groupOpenInterestPercentageP": 20,
        "maxWalletOIP": 15,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 20,
        "maxWalletOI": 15
      },
      "from": "REZ",
      "to": "USD",
      "timer": {
        "numTiers": 2,
        "positionSizeToThresholdTierMap": {
          "0": 0,
          "1": 50000
        },
        "thresholdTierToTimerMap": {
          "0": 0,
          "1": 180
        }
      },
      "openInterest": {
        "long": 0,
        "short": 0
      },
      "marginFee": {
        "long": 0.00228310502283105,
        "short": 0.00228310502283105
      },
      "pairOI": 0,
      "pairMaxOI": 1702415.63,
      "maxWalletOI": 14364131.89,
      "pairParams": {
        "onePercentDepthAbove": 32285.328,
        "onePercentDepthBelow": 27318.272
      },
      "blockOILimit": 2500000,
      "storagePairParams": {
        "posSpreadCap": 5,
        "negSpreadCap": 100000,
        "isPnlTypeAllowed": 0,
        "pnlPriceImpactMultiplier": 0,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 0,
        "minBorrowFee": 20
      },
      "openFeeP": 0.045,
      "closeFeeP": 0.045,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 10,
      "pnlFees": {
        "numTiers": 10,
        "tierP": [
          1,
          5,
          25,
          50,
          100,
          250,
          500,
          1500,
          2500,
          3000
        ],
        "feesP": [
          80,
          50,
          45,
          37.5,
          27.5,
          25,
          25,
          22.5,
          15,
          2.5
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 10,
        "2": 10,
        "3": 10
      },
      "skewEqParams": [
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 40,
      "pairSpreadP": 0.05,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 10,
      "pairMinLeverage": 1
    },
    "41": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 5,
        "feedId": "0x8ac0c70fff57e9aefdf5edf44b51d62c2d433653cbb2cf5cc06bb115af04d221",
        "attributes": {
          "symbol": "Crypto.LINK/USD",
          "asset_type": "Crypto",
          "is_open": true,
          "next_open": 0,
          "next_close": 0,
          "schedule": "America/New_York;O,O,O,O,O,O,O;"
        }
      },
      "backupFeed": {
        "maxDeviationP": 0,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.05,
      "pnlSpreadP": 0.04,
      "leverages": {
        "minLeverage": 1,
        "maxLeverage": 40,
        "pnlMinLeverage": 1,
        "pnlMaxLeverage": 50
      },
      "priceImpactMultiplier": 1.2,
      "skewImpactMultiplier": 0.1,
      "groupIndex": 1,
      "feeIndex": 41,
      "values": {
        "maxGainP": 500,
        "maxSlP": 80,
        "maxLongOiP": 75,
        "maxShortOiP": 75,
        "groupOpenInterestPercentageP": 35,
        "maxWalletOIP": 15,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 35,
        "maxWalletOI": 15
      },
      "from": "LINK",
      "to": "USD",
      "timer": {
        "numTiers": 2,
        "positionSizeToThresholdTierMap": {
          "0": 0,
          "1": 50000
        },
        "thresholdTierToTimerMap": {
          "0": 0,
          "1": 180
        }
      },
      "openInterest": {
        "long": 265355.95,
        "short": 78334.98
      },
      "marginFee": {
        "long": 0.00228310502283105,
        "short": 0.00228310502283105
      },
      "pairOI": 343690.93,
      "pairMaxOI": 4841244.45,
      "maxWalletOI": 14364131.89,
      "pairParams": {
        "onePercentDepthAbove": 2273929.264,
        "onePercentDepthBelow": 2022204.784
      },
      "blockOILimit": 2500000,
      "storagePairParams": {
        "posSpreadCap": 5,
        "negSpreadCap": 100000,
        "isPnlTypeAllowed": 0,
        "pnlPriceImpactMultiplier": 0,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 0,
        "minBorrowFee": 20
      },
      "openFeeP": 0.045,
      "closeFeeP": 0.045,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 10,
      "pnlFees": {
        "numTiers": 10,
        "tierP": [
          1,
          5,
          25,
          50,
          100,
          250,
          500,
          1500,
          2500,
          3000
        ],
        "feesP": [
          80,
          50,
          45,
          37.5,
          27.5,
          25,
          25,
          22.5,
          15,
          2.5
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 10,
        "2": 10,
        "3": 10
      },
      "skewEqParams": [
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 41,
      "pairSpreadP": 0.05,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 10,
      "pairMinLeverage": 1
    },
    "42": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 5,
        "feedId": "0xc63e2a7f37a04e5e614c07238bedb25dcc38927fba8fe890597a593c0b2fa4ad",
        "attributes": {
          "symbol": "Crypto.LDO/USD",
          "asset_type": "Crypto",
          "is_open": true,
          "next_open": 0,
          "next_close": 0,
          "schedule": "America/New_York;O,O,O,O,O,O,O;"
        }
      },
      "backupFeed": {
        "maxDeviationP": 0,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.05,
      "pnlSpreadP": 0.06,
      "leverages": {
        "minLeverage": 1,
        "maxLeverage": 40,
        "pnlMinLeverage": 1,
        "pnlMaxLeverage": 25
      },
      "priceImpactMultiplier": 1.2,
      "skewImpactMultiplier": 0.1,
      "groupIndex": 1,
      "feeIndex": 42,
      "values": {
        "maxGainP": 500,
        "maxSlP": 80,
        "maxLongOiP": 75,
        "maxShortOiP": 75,
        "groupOpenInterestPercentageP": 35,
        "maxWalletOIP": 15,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 35,
        "maxWalletOI": 15
      },
      "from": "LDO",
      "to": "USD",
      "timer": {
        "numTiers": 2,
        "positionSizeToThresholdTierMap": {
          "0": 0,
          "1": 50000
        },
        "thresholdTierToTimerMap": {
          "0": 0,
          "1": 180
        }
      },
      "openInterest": {
        "long": 1327.96,
        "short": 239.27
      },
      "marginFee": {
        "long": 0.00228310502283105,
        "short": 0.00228310502283105
      },
      "pairOI": 1567.23,
      "pairMaxOI": 4841244.45,
      "maxWalletOI": 14364131.89,
      "pairParams": {
        "onePercentDepthAbove": 476743.872,
        "onePercentDepthBelow": 350351.544
      },
      "blockOILimit": 2500000,
      "storagePairParams": {
        "posSpreadCap": 5,
        "negSpreadCap": 100000,
        "isPnlTypeAllowed": 0,
        "pnlPriceImpactMultiplier": 0,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 0,
        "minBorrowFee": 20
      },
      "openFeeP": 0.045,
      "closeFeeP": 0.045,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 10,
      "pnlFees": {
        "numTiers": 10,
        "tierP": [
          1,
          5,
          25,
          50,
          100,
          250,
          500,
          1500,
          2500,
          3000
        ],
        "feesP": [
          80,
          50,
          45,
          37.5,
          27.5,
          25,
          25,
          22.5,
          15,
          2.5
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 10,
        "2": 10,
        "3": 10
      },
      "skewEqParams": [
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 42,
      "pairSpreadP": 0.05,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 10,
      "pairMinLeverage": 1
    },
    "43": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 5,
        "feedId": "0xc415de8d2eba7db216527dff4b60e8f3a5311c740dadb233e13e12547e226750",
        "attributes": {
          "symbol": "Crypto.NEAR/USD",
          "asset_type": "Crypto",
          "is_open": true,
          "next_open": 0,
          "next_close": 0,
          "schedule": "America/New_York;O,O,O,O,O,O,O;"
        }
      },
      "backupFeed": {
        "maxDeviationP": 0,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.05,
      "pnlSpreadP": 0.04,
      "leverages": {
        "minLeverage": 1,
        "maxLeverage": 40,
        "pnlMinLeverage": 1,
        "pnlMaxLeverage": 40
      },
      "priceImpactMultiplier": 1.2,
      "skewImpactMultiplier": 0.1,
      "groupIndex": 1,
      "feeIndex": 43,
      "values": {
        "maxGainP": 500,
        "maxSlP": 80,
        "maxLongOiP": 75,
        "maxShortOiP": 75,
        "groupOpenInterestPercentageP": 35,
        "maxWalletOIP": 15,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 35,
        "maxWalletOI": 15
      },
      "from": "NEAR",
      "to": "USD",
      "timer": {
        "numTiers": 2,
        "positionSizeToThresholdTierMap": {
          "0": 0,
          "1": 50000
        },
        "thresholdTierToTimerMap": {
          "0": 0,
          "1": 180
        }
      },
      "openInterest": {
        "long": 26422.31,
        "short": 21457
      },
      "marginFee": {
        "long": 0.00228310502283105,
        "short": 0.00228310502283105
      },
      "pairOI": 47879.31,
      "pairMaxOI": 4841244.45,
      "maxWalletOI": 14364131.89,
      "pairParams": {
        "onePercentDepthAbove": 1113837.872,
        "onePercentDepthBelow": 778773.736
      },
      "blockOILimit": 2500000,
      "storagePairParams": {
        "posSpreadCap": 5,
        "negSpreadCap": 100000,
        "isPnlTypeAllowed": 0,
        "pnlPriceImpactMultiplier": 0,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 0,
        "minBorrowFee": 20
      },
      "openFeeP": 0.045,
      "closeFeeP": 0.045,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 10,
      "pnlFees": {
        "numTiers": 10,
        "tierP": [
          1,
          5,
          25,
          50,
          100,
          250,
          500,
          1500,
          2500,
          3000
        ],
        "feesP": [
          80,
          50,
          45,
          37.5,
          27.5,
          25,
          25,
          22.5,
          15,
          2.5
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 10,
        "2": 10,
        "3": 10
      },
      "skewEqParams": [
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 43,
      "pairSpreadP": 0.05,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 10,
      "pairMinLeverage": 1
    },
    "44": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 5,
        "feedId": "0x7a5bc1d2b56ad029048cd63964b3ad2776eadf812edc1a43a31406cb54bff592",
        "attributes": {
          "symbol": "Crypto.INJ/USD",
          "asset_type": "Crypto",
          "is_open": true,
          "next_open": 0,
          "next_close": 0,
          "schedule": "America/New_York;O,O,O,O,O,O,O;"
        }
      },
      "backupFeed": {
        "maxDeviationP": 0,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.05,
      "pnlSpreadP": 0.06,
      "leverages": {
        "minLeverage": 1,
        "maxLeverage": 40,
        "pnlMinLeverage": 1,
        "pnlMaxLeverage": 25
      },
      "priceImpactMultiplier": 1.2,
      "skewImpactMultiplier": 0.1,
      "groupIndex": 1,
      "feeIndex": 44,
      "values": {
        "maxGainP": 500,
        "maxSlP": 80,
        "maxLongOiP": 75,
        "maxShortOiP": 75,
        "groupOpenInterestPercentageP": 35,
        "maxWalletOIP": 15,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 35,
        "maxWalletOI": 15
      },
      "from": "INJ",
      "to": "USD",
      "timer": {
        "numTiers": 2,
        "positionSizeToThresholdTierMap": {
          "0": 0,
          "1": 50000
        },
        "thresholdTierToTimerMap": {
          "0": 0,
          "1": 180
        }
      },
      "openInterest": {
        "long": 4870.32,
        "short": 0
      },
      "marginFee": {
        "long": 0.00228310502283105,
        "short": 0.00228310502283105
      },
      "pairOI": 4870.32,
      "pairMaxOI": 4841244.45,
      "maxWalletOI": 14364131.89,
      "pairParams": {
        "onePercentDepthAbove": 498759.336,
        "onePercentDepthBelow": 356472.16
      },
      "blockOILimit": 2500000,
      "storagePairParams": {
        "posSpreadCap": 5,
        "negSpreadCap": 100000,
        "isPnlTypeAllowed": 0,
        "pnlPriceImpactMultiplier": 0,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 0,
        "minBorrowFee": 20
      },
      "openFeeP": 0.045,
      "closeFeeP": 0.045,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 10,
      "pnlFees": {
        "numTiers": 10,
        "tierP": [
          1,
          5,
          25,
          50,
          100,
          250,
          500,
          1500,
          2500,
          3000
        ],
        "feesP": [
          80,
          50,
          45,
          37.5,
          27.5,
          25,
          25,
          22.5,
          15,
          2.5
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 10,
        "2": 10,
        "3": 10
      },
      "skewEqParams": [
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 44,
      "pairSpreadP": 0.05,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 10,
      "pairMinLeverage": 1
    },
    "45": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 5,
        "feedId": "0xcc03dc09298fb447e0bf9afdb760d5b24340fd2167fd33d8967dd8f9a141a2e8",
        "attributes": {
          "symbol": "Crypto.ZK/USD",
          "asset_type": "Crypto",
          "is_open": true,
          "next_open": 0,
          "next_close": 0,
          "schedule": "America/New_York;O,O,O,O,O,O,O;"
        }
      },
      "backupFeed": {
        "maxDeviationP": 0,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.05,
      "pnlSpreadP": 0.06,
      "leverages": {
        "minLeverage": 1,
        "maxLeverage": 40,
        "pnlMinLeverage": 1,
        "pnlMaxLeverage": 25
      },
      "priceImpactMultiplier": 1.2,
      "skewImpactMultiplier": 0.1,
      "groupIndex": 1,
      "feeIndex": 45,
      "values": {
        "maxGainP": 500,
        "maxSlP": 80,
        "maxLongOiP": 75,
        "maxShortOiP": 75,
        "groupOpenInterestPercentageP": 35,
        "maxWalletOIP": 15,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 35,
        "maxWalletOI": 15
      },
      "from": "ZK",
      "to": "USD",
      "timer": {
        "numTiers": 2,
        "positionSizeToThresholdTierMap": {
          "0": 0,
          "1": 50000
        },
        "thresholdTierToTimerMap": {
          "0": 0,
          "1": 180
        }
      },
      "openInterest": {
        "long": 8874.52,
        "short": 7522.61
      },
      "marginFee": {
        "long": 0.00228310502283105,
        "short": 0.00228310502283105
      },
      "pairOI": 16397.13,
      "pairMaxOI": 4841244.45,
      "maxWalletOI": 14364131.89,
      "pairParams": {
        "onePercentDepthAbove": 75077.232,
        "onePercentDepthBelow": 71351.568
      },
      "blockOILimit": 2500000,
      "storagePairParams": {
        "posSpreadCap": 5,
        "negSpreadCap": 100000,
        "isPnlTypeAllowed": 0,
        "pnlPriceImpactMultiplier": 0,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 0,
        "minBorrowFee": 20
      },
      "openFeeP": 0.045,
      "closeFeeP": 0.045,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 10,
      "pnlFees": {
        "numTiers": 10,
        "tierP": [
          1,
          5,
          25,
          50,
          100,
          250,
          500,
          1500,
          2500,
          3000
        ],
        "feesP": [
          80,
          50,
          45,
          37.5,
          27.5,
          25,
          25,
          22.5,
          15,
          2.5
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 10,
        "2": 10,
        "3": 10
      },
      "skewEqParams": [
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 45,
      "pairSpreadP": 0.05,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 10,
      "pairMinLeverage": 1
    },
    "46": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 5,
        "feedId": "0x3bd860bea28bf982fa06bcf358118064bb114086cc03993bd76197eaab0b8018",
        "attributes": {
          "symbol": "Crypto.ZRO/USD",
          "asset_type": "Crypto",
          "is_open": true,
          "next_open": 0,
          "next_close": 0,
          "schedule": "America/New_York;O,O,O,O,O,O,O;"
        }
      },
      "backupFeed": {
        "maxDeviationP": 0,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.05,
      "pnlSpreadP": 0.06,
      "leverages": {
        "minLeverage": 1,
        "maxLeverage": 40,
        "pnlMinLeverage": 1,
        "pnlMaxLeverage": 25
      },
      "priceImpactMultiplier": 1.2,
      "skewImpactMultiplier": 0.1,
      "groupIndex": 1,
      "feeIndex": 46,
      "values": {
        "maxGainP": 500,
        "maxSlP": 80,
        "maxLongOiP": 75,
        "maxShortOiP": 75,
        "groupOpenInterestPercentageP": 35,
        "maxWalletOIP": 15,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 35,
        "maxWalletOI": 15
      },
      "from": "ZRO",
      "to": "USD",
      "timer": {
        "numTiers": 2,
        "positionSizeToThresholdTierMap": {
          "0": 0,
          "1": 50000
        },
        "thresholdTierToTimerMap": {
          "0": 0,
          "1": 180
        }
      },
      "openInterest": {
        "long": 4864.99,
        "short": 4164.17
      },
      "marginFee": {
        "long": 0.00228310502283105,
        "short": 0.00228310502283105
      },
      "pairOI": 9029.16,
      "pairMaxOI": 4841244.45,
      "maxWalletOI": 14364131.89,
      "pairParams": {
        "onePercentDepthAbove": 147405.648,
        "onePercentDepthBelow": 146564.168
      },
      "blockOILimit": 2500000,
      "storagePairParams": {
        "posSpreadCap": 5,
        "negSpreadCap": 100000,
        "isPnlTypeAllowed": 0,
        "pnlPriceImpactMultiplier": 0,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 0,
        "minBorrowFee": 20
      },
      "openFeeP": 0.045,
      "closeFeeP": 0.045,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 10,
      "pnlFees": {
        "numTiers": 10,
        "tierP": [
          1,
          5,
          25,
          50,
          100,
          250,
          500,
          1500,
          2500,
          3000
        ],
        "feesP": [
          80,
          50,
          45,
          37.5,
          27.5,
          25,
          25,
          22.5,
          15,
          2.5
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 10,
        "2": 10,
        "3": 10
      },
      "skewEqParams": [
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 46,
      "pairSpreadP": 0.05,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 10,
      "pairMinLeverage": 1
    },
    "47": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 1,
        "feedId": "0x057345a7e9ef0f36dca8ad1c4e5788808b85f3084cc7b0d8cb29ac5012d88f0d",
        "attributes": {
          "symbol": "",
          "asset_type": "",
          "is_open": false,
          "next_open": 0,
          "next_close": 0,
          "schedule": "America/New_York;O,O,O,O,O,O,O;"
        }
      },
      "backupFeed": {
        "maxDeviationP": 2,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.01,
      "pnlSpreadP": 0.01,
      "leverages": {
        "minLeverage": 2,
        "maxLeverage": 40,
        "pnlMinLeverage": 2,
        "pnlMaxLeverage": 40
      },
      "priceImpactMultiplier": 1.2,
      "skewImpactMultiplier": 0.25,
      "groupIndex": 0,
      "feeIndex": 47,
      "values": {
        "maxGainP": 500,
        "maxSlP": 80,
        "maxLongOiP": 100,
        "maxShortOiP": 100,
        "groupOpenInterestPercentageP": 100,
        "maxWalletOIP": 50,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 100,
        "maxWalletOI": 50
      },
      "from": "",
      "to": "",
      "timer": {
        "numTiers": 3,
        "positionSizeToThresholdTierMap": {
          "0": 0,
          "1": 10000,
          "2": 50000
        },
        "thresholdTierToTimerMap": {
          "0": 180,
          "1": 600,
          "2": 900
        }
      },
      "openInterest": {
        "long": 0,
        "short": 0
      },
      "marginFee": {
        "long": 0,
        "short": 0
      },
      "pairOI": 0,
      "pairMaxOI": 29792273.54,
      "maxWalletOI": 47880439.62,
      "pairParams": {
        "onePercentDepthAbove": 2178.5,
        "onePercentDepthBelow": 1.5
      },
      "blockOILimit": 2500000,
      "storagePairParams": {
        "posSpreadCap": 2.5,
        "negSpreadCap": 25,
        "isPnlTypeAllowed": 0,
        "pnlPriceImpactMultiplier": 0,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 0,
        "minBorrowFee": 0
      },
      "openFeeP": 0.08,
      "closeFeeP": 0.06,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 10,
      "pnlFees": {
        "numTiers": 9,
        "tierP": [
          0.5,
          1,
          2,
          5,
          10,
          20,
          50,
          100,
          500
        ],
        "feesP": [
          80,
          80,
          60,
          50,
          40,
          30,
          20,
          20,
          20
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 10,
        "2": 10,
        "3": 10
      },
      "skewEqParams": [
        [
          0,
          800
        ],
        [
          0,
          800
        ],
        [
          0,
          800
        ],
        [
          0,
          800
        ],
        [
          0,
          800
        ],
        [
          0,
          800
        ],
        [
          0,
          800
        ],
        [
          0,
          800
        ],
        [
          0,
          800
        ],
        [
          0,
          800
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "isPairListed": false,
      "index": 47,
      "pairSpreadP": 0.01,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 10,
      "pairMinLeverage": 2
    },
    "48": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 5,
        "feedId": "0x2b9ab1e972a281585084148ba1389800799bd4be63b957507db1349314e47445",
        "attributes": {
          "symbol": "Crypto.AAVE/USD",
          "asset_type": "Crypto",
          "is_open": true,
          "next_open": 0,
          "next_close": 0,
          "schedule": "America/New_York;O,O,O,O,O,O,O;"
        }
      },
      "backupFeed": {
        "maxDeviationP": 0,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.05,
      "pnlSpreadP": 0.04,
      "leverages": {
        "minLeverage": 1,
        "maxLeverage": 40,
        "pnlMinLeverage": 1,
        "pnlMaxLeverage": 40
      },
      "priceImpactMultiplier": 1.2,
      "skewImpactMultiplier": 0.1,
      "groupIndex": 1,
      "feeIndex": 48,
      "values": {
        "maxGainP": 500,
        "maxSlP": 80,
        "maxLongOiP": 75,
        "maxShortOiP": 75,
        "groupOpenInterestPercentageP": 35,
        "maxWalletOIP": 15,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 35,
        "maxWalletOI": 15
      },
      "from": "AAVE",
      "to": "USD",
      "timer": {
        "numTiers": 2,
        "positionSizeToThresholdTierMap": {
          "0": 0,
          "1": 50000
        },
        "thresholdTierToTimerMap": {
          "0": 0,
          "1": 180
        }
      },
      "openInterest": {
        "long": 28418.61,
        "short": 28346.64
      },
      "marginFee": {
        "long": 0.00228310502283105,
        "short": 0.00228310502283105
      },
      "pairOI": 56765.25,
      "pairMaxOI": 4841244.45,
      "maxWalletOI": 14364131.89,
      "pairParams": {
        "onePercentDepthAbove": 1693896.296,
        "onePercentDepthBelow": 1148548.28
      },
      "blockOILimit": 2500000,
      "storagePairParams": {
        "posSpreadCap": 5,
        "negSpreadCap": 100000,
        "isPnlTypeAllowed": 0,
        "pnlPriceImpactMultiplier": 0,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 0,
        "minBorrowFee": 20
      },
      "openFeeP": 0.045,
      "closeFeeP": 0.045,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 10,
      "pnlFees": {
        "numTiers": 10,
        "tierP": [
          1,
          5,
          25,
          50,
          100,
          250,
          500,
          1500,
          2500,
          3000
        ],
        "feesP": [
          80,
          50,
          45,
          37.5,
          27.5,
          25,
          25,
          22.5,
          15,
          2.5
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 10,
        "2": 10,
        "3": 10
      },
      "skewEqParams": [
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 48,
      "pairSpreadP": 0.05,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 10,
      "pairMinLeverage": 1
    },
    "49": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 5,
        "feedId": "0x23d7315113f5b1d3ba7a83604c44b94d79f4fd69af77f804fc7f920a6dc65744",
        "attributes": {
          "symbol": "Crypto.SUI/USD",
          "asset_type": "Crypto",
          "is_open": true,
          "next_open": 0,
          "next_close": 0,
          "schedule": "America/New_York;O,O,O,O,O,O,O;"
        }
      },
      "backupFeed": {
        "maxDeviationP": 0,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.05,
      "pnlSpreadP": 0.06,
      "leverages": {
        "minLeverage": 1,
        "maxLeverage": 40,
        "pnlMinLeverage": 1,
        "pnlMaxLeverage": 25
      },
      "priceImpactMultiplier": 1.2,
      "skewImpactMultiplier": 0.1,
      "groupIndex": 1,
      "feeIndex": 49,
      "values": {
        "maxGainP": 500,
        "maxSlP": 80,
        "maxLongOiP": 75,
        "maxShortOiP": 75,
        "groupOpenInterestPercentageP": 35,
        "maxWalletOIP": 15,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 35,
        "maxWalletOI": 15
      },
      "from": "SUI",
      "to": "USD",
      "timer": {
        "numTiers": 2,
        "positionSizeToThresholdTierMap": {
          "0": 0,
          "1": 50000
        },
        "thresholdTierToTimerMap": {
          "0": 0,
          "1": 180
        }
      },
      "openInterest": {
        "long": 161422.14,
        "short": 105908.02
      },
      "marginFee": {
        "long": 0.00228310502283105,
        "short": 0.00228310502283105
      },
      "pairOI": 267330.16,
      "pairMaxOI": 4841244.45,
      "maxWalletOI": 14364131.89,
      "pairParams": {
        "onePercentDepthAbove": 3082766.992,
        "onePercentDepthBelow": 2185310.12
      },
      "blockOILimit": 2500000,
      "storagePairParams": {
        "posSpreadCap": 5,
        "negSpreadCap": 100000,
        "isPnlTypeAllowed": 0,
        "pnlPriceImpactMultiplier": 0,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 0,
        "minBorrowFee": 20
      },
      "openFeeP": 0.045,
      "closeFeeP": 0.045,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 10,
      "pnlFees": {
        "numTiers": 10,
        "tierP": [
          1,
          5,
          25,
          50,
          100,
          250,
          500,
          1500,
          2500,
          3000
        ],
        "feesP": [
          80,
          50,
          45,
          37.5,
          27.5,
          25,
          25,
          22.5,
          15,
          2.5
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 10,
        "2": 10,
        "3": 10
      },
      "skewEqParams": [
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 49,
      "pairSpreadP": 0.05,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 10,
      "pairMinLeverage": 1
    },
    "50": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 5,
        "feedId": "0x410f41de235f2db824e562ea7ab2d3d3d4ff048316c61d629c0b93f58584e1af",
        "attributes": {
          "symbol": "Crypto.TAO/USD",
          "asset_type": "Crypto",
          "is_open": true,
          "next_open": 0,
          "next_close": 0,
          "schedule": "America/New_York;O,O,O,O,O,O,O;"
        }
      },
      "backupFeed": {
        "maxDeviationP": 0,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.05,
      "pnlSpreadP": 0.1,
      "leverages": {
        "minLeverage": 1,
        "maxLeverage": 25,
        "pnlMinLeverage": 1,
        "pnlMaxLeverage": 25
      },
      "priceImpactMultiplier": 1.2,
      "skewImpactMultiplier": 0.1,
      "groupIndex": 5,
      "feeIndex": 50,
      "values": {
        "maxGainP": 500,
        "maxSlP": 80,
        "maxLongOiP": 100,
        "maxShortOiP": 100,
        "groupOpenInterestPercentageP": 20,
        "maxWalletOIP": 15,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 20,
        "maxWalletOI": 15
      },
      "from": "TAO",
      "to": "USD",
      "timer": {
        "numTiers": 2,
        "positionSizeToThresholdTierMap": {
          "0": 0,
          "1": 50000
        },
        "thresholdTierToTimerMap": {
          "0": 0,
          "1": 180
        }
      },
      "openInterest": {
        "long": 6470.85,
        "short": 4592
      },
      "marginFee": {
        "long": 0.00228310502283105,
        "short": 0.00228310502283105
      },
      "pairOI": 11062.84,
      "pairMaxOI": 1702415.63,
      "maxWalletOI": 14364131.89,
      "pairParams": {
        "onePercentDepthAbove": 488046.184,
        "onePercentDepthBelow": 386965.936
      },
      "blockOILimit": 2500000,
      "storagePairParams": {
        "posSpreadCap": 5,
        "negSpreadCap": 100000,
        "isPnlTypeAllowed": 0,
        "pnlPriceImpactMultiplier": 0,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 0,
        "minBorrowFee": 20
      },
      "openFeeP": 0.045,
      "closeFeeP": 0.045,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 10,
      "pnlFees": {
        "numTiers": 10,
        "tierP": [
          1,
          5,
          25,
          50,
          100,
          250,
          500,
          1500,
          2500,
          3000
        ],
        "feesP": [
          80,
          50,
          45,
          37.5,
          27.5,
          25,
          25,
          22.5,
          15,
          2.5
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 10,
        "2": 10,
        "3": 10
      },
      "skewEqParams": [
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 50,
      "pairSpreadP": 0.05,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 10,
      "pairMinLeverage": 1
    },
    "51": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 5,
        "feedId": "0xc65db025687356496e8653d0d6608eec64ce2d96e2e28c530e574f0e4f712380",
        "attributes": {
          "symbol": "Crypto.EIGEN/USD",
          "asset_type": "Crypto",
          "is_open": true,
          "next_open": 0,
          "next_close": 0,
          "schedule": "America/New_York;O,O,O,O,O,O,O;"
        }
      },
      "backupFeed": {
        "maxDeviationP": 0,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.05,
      "pnlSpreadP": 0.06,
      "leverages": {
        "minLeverage": 1,
        "maxLeverage": 40,
        "pnlMinLeverage": 1,
        "pnlMaxLeverage": 25
      },
      "priceImpactMultiplier": 1.2,
      "skewImpactMultiplier": 0.1,
      "groupIndex": 1,
      "feeIndex": 51,
      "values": {
        "maxGainP": 500,
        "maxSlP": 80,
        "maxLongOiP": 75,
        "maxShortOiP": 75,
        "groupOpenInterestPercentageP": 35,
        "maxWalletOIP": 15,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 35,
        "maxWalletOI": 15
      },
      "from": "EIGEN",
      "to": "USD",
      "timer": {
        "numTiers": 2,
        "positionSizeToThresholdTierMap": {
          "0": 0,
          "1": 50000
        },
        "thresholdTierToTimerMap": {
          "0": 0,
          "1": 180
        }
      },
      "openInterest": {
        "long": 21409.56,
        "short": 21232.25
      },
      "marginFee": {
        "long": 0.00228310502283105,
        "short": 0.00228310502283105
      },
      "pairOI": 42641.81,
      "pairMaxOI": 4841244.45,
      "maxWalletOI": 14364131.89,
      "pairParams": {
        "onePercentDepthAbove": 281756.552,
        "onePercentDepthBelow": 242486.784
      },
      "blockOILimit": 2500000,
      "storagePairParams": {
        "posSpreadCap": 5,
        "negSpreadCap": 100000,
        "isPnlTypeAllowed": 0,
        "pnlPriceImpactMultiplier": 0,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 0,
        "minBorrowFee": 20
      },
      "openFeeP": 0.045,
      "closeFeeP": 0.045,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 10,
      "pnlFees": {
        "numTiers": 10,
        "tierP": [
          1,
          5,
          25,
          50,
          100,
          250,
          500,
          1500,
          2500,
          3000
        ],
        "feesP": [
          80,
          50,
          45,
          37.5,
          27.5,
          25,
          25,
          22.5,
          15,
          2.5
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 10,
        "2": 10,
        "3": 10
      },
      "skewEqParams": [
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 51,
      "pairSpreadP": 0.05,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 10,
      "pairMinLeverage": 1
    },
    "52": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 5,
        "feedId": "0x032a2eba1c2635bf973e95fb62b2c0705c1be2603b9572cc8d5edeaf8744e058",
        "attributes": {
          "symbol": "FX.USD/TRY",
          "asset_type": "FX",
          "is_open": true,
          "next_open": 1758751200,
          "next_close": 1758747600,
          "schedule": "America/New_York;0000-1700&1800-2400,0000-1700&1800-2400,0000-1700&1800-2400,0000-1700&1800-2400,0000-1700,C,1800-2400;1224/0000-1700,1225/1800-2400,1231/0000-1700,0101/1800-2400"
        }
      },
      "backupFeed": {
        "maxDeviationP": 0,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.03,
      "pnlSpreadP": 0.03,
      "leverages": {
        "minLeverage": 2,
        "maxLeverage": 500,
        "pnlMinLeverage": 2,
        "pnlMaxLeverage": 500
      },
      "priceImpactMultiplier": 0,
      "skewImpactMultiplier": 0,
      "groupIndex": 2,
      "feeIndex": 52,
      "values": {
        "maxGainP": 500,
        "maxSlP": 80,
        "maxLongOiP": 100,
        "maxShortOiP": 100,
        "groupOpenInterestPercentageP": 10,
        "maxWalletOIP": 50,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 10,
        "maxWalletOI": 50
      },
      "from": "USD",
      "to": "TRY",
      "timer": {
        "numTiers": 3,
        "positionSizeToThresholdTierMap": {
          "0": 0,
          "1": 10000,
          "2": 50000
        },
        "thresholdTierToTimerMap": {
          "0": 180,
          "1": 300,
          "2": 600
        }
      },
      "openInterest": {
        "long": 477309.32,
        "short": 1186.39
      },
      "marginFee": {
        "long": 0.0025227,
        "short": 0.0011199600000000001
      },
      "pairOI": 478495.71,
      "pairMaxOI": 957608.79,
      "maxWalletOI": 47880439.62,
      "pairParams": {
        "onePercentDepthAbove": 10000000,
        "onePercentDepthBelow": 10000000
      },
      "blockOILimit": 2500000,
      "storagePairParams": {
        "posSpreadCap": 2.5,
        "negSpreadCap": 25,
        "isPnlTypeAllowed": 0,
        "pnlPriceImpactMultiplier": 0,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 0,
        "minBorrowFee": 5
      },
      "openFeeP": 0.03,
      "closeFeeP": 0,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 300,
      "pnlFees": {
        "numTiers": 9,
        "tierP": [
          0.5,
          1,
          2,
          5,
          10,
          20,
          50,
          100,
          500
        ],
        "feesP": [
          80,
          80,
          60,
          50,
          40,
          30,
          20,
          20,
          20
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 5,
        "2": 5,
        "3": 5
      },
      "skewEqParams": [
        [
          -5,
          500
        ],
        [
          -5,
          500
        ],
        [
          -5,
          500
        ],
        [
          -5,
          500
        ],
        [
          0,
          300
        ],
        [
          0,
          300
        ],
        [
          -5,
          600
        ],
        [
          -5,
          600
        ],
        [
          -5,
          600
        ],
        [
          -5,
          600
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 55,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 55,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 52,
      "pairSpreadP": 0.03,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 300,
      "pairMinLeverage": 2
    },
    "53": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 5,
        "feedId": "0x9b5729efe3d68e537cdcb2ca70444dea5f06e1660b562632609757076d0b9448",
        "attributes": {
          "symbol": "Crypto.BRETT/USD",
          "asset_type": "Crypto",
          "is_open": true,
          "next_open": 0,
          "next_close": 0,
          "schedule": "America/New_York;O,O,O,O,O,O,O;"
        }
      },
      "backupFeed": {
        "maxDeviationP": 0,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.05,
      "pnlSpreadP": 0.06,
      "leverages": {
        "minLeverage": 1,
        "maxLeverage": 10,
        "pnlMinLeverage": 1,
        "pnlMaxLeverage": 25
      },
      "priceImpactMultiplier": 1.2,
      "skewImpactMultiplier": 1,
      "groupIndex": 4,
      "feeIndex": 53,
      "values": {
        "maxGainP": 500,
        "maxSlP": 80,
        "maxLongOiP": 100,
        "maxShortOiP": 100,
        "groupOpenInterestPercentageP": 15,
        "maxWalletOIP": 50,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 15,
        "maxWalletOI": 50
      },
      "from": "BRETT",
      "to": "USD",
      "timer": {
        "numTiers": 2,
        "positionSizeToThresholdTierMap": {
          "0": 0,
          "1": 50000
        },
        "thresholdTierToTimerMap": {
          "0": 0,
          "1": 180
        }
      },
      "openInterest": {
        "long": 26339.84,
        "short": 0
      },
      "marginFee": {
        "long": 0.003424657534246575,
        "short": 0.003424657534246575
      },
      "pairOI": 26339.84,
      "pairMaxOI": 638405.86,
      "maxWalletOI": 47880439.62,
      "pairParams": {
        "onePercentDepthAbove": 88986.424,
        "onePercentDepthBelow": 63631.128
      },
      "blockOILimit": 2500000,
      "storagePairParams": {
        "posSpreadCap": 5,
        "negSpreadCap": 100000,
        "isPnlTypeAllowed": 0,
        "pnlPriceImpactMultiplier": 0,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 0,
        "minBorrowFee": 30
      },
      "openFeeP": 0.045,
      "closeFeeP": 0.045,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 10,
      "pnlFees": {
        "numTiers": 10,
        "tierP": [
          1,
          5,
          25,
          50,
          100,
          250,
          500,
          1500,
          2500,
          3000
        ],
        "feesP": [
          80,
          50,
          45,
          37.5,
          27.5,
          25,
          25,
          22.5,
          15,
          2.5
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 5,
        "2": 5,
        "3": 5
      },
      "skewEqParams": [
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 53,
      "pairSpreadP": 0.05,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 10,
      "pairMinLeverage": 1
    },
    "54": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 5,
        "feedId": "0xb9312a7ee50e189ef045aa3c7842e099b061bd9bdc99ac645956c3b660dc8cce",
        "attributes": {
          "symbol": "Crypto.POPCAT/USD",
          "asset_type": "Crypto",
          "is_open": true,
          "next_open": 0,
          "next_close": 0,
          "schedule": "America/New_York;O,O,O,O,O,O,O;"
        }
      },
      "backupFeed": {
        "maxDeviationP": 0,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.05,
      "pnlSpreadP": 0.06,
      "leverages": {
        "minLeverage": 1,
        "maxLeverage": 10,
        "pnlMinLeverage": 1,
        "pnlMaxLeverage": 25
      },
      "priceImpactMultiplier": 1.2,
      "skewImpactMultiplier": 1,
      "groupIndex": 4,
      "feeIndex": 54,
      "values": {
        "maxGainP": 500,
        "maxSlP": 80,
        "maxLongOiP": 100,
        "maxShortOiP": 100,
        "groupOpenInterestPercentageP": 30,
        "maxWalletOIP": 50,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 30,
        "maxWalletOI": 50
      },
      "from": "POPCAT",
      "to": "USD",
      "timer": {
        "numTiers": 2,
        "positionSizeToThresholdTierMap": {
          "0": 0,
          "1": 50000
        },
        "thresholdTierToTimerMap": {
          "0": 0,
          "1": 180
        }
      },
      "openInterest": {
        "long": 165.79,
        "short": 0
      },
      "marginFee": {
        "long": 0.003424657534246575,
        "short": 0.003424657534246575
      },
      "pairOI": 165.79,
      "pairMaxOI": 1276811.72,
      "maxWalletOI": 47880439.62,
      "pairParams": {
        "onePercentDepthAbove": 219760.88,
        "onePercentDepthBelow": 184488.392
      },
      "blockOILimit": 2500000,
      "storagePairParams": {
        "posSpreadCap": 5,
        "negSpreadCap": 100000,
        "isPnlTypeAllowed": 0,
        "pnlPriceImpactMultiplier": 0,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 0,
        "minBorrowFee": 30
      },
      "openFeeP": 0.045,
      "closeFeeP": 0.045,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 10,
      "pnlFees": {
        "numTiers": 10,
        "tierP": [
          1,
          5,
          25,
          50,
          100,
          250,
          500,
          1500,
          2500,
          3000
        ],
        "feesP": [
          80,
          50,
          45,
          37.5,
          27.5,
          25,
          25,
          22.5,
          15,
          2.5
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 5,
        "2": 5,
        "3": 5
      },
      "skewEqParams": [
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 54,
      "pairSpreadP": 0.05,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 10,
      "pairMinLeverage": 1
    },
    "55": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 5,
        "feedId": "0xf7731dc812590214d3eb4343bfb13d1b4cfa9b1d4e020644b5d5d8e07d60c66c",
        "attributes": {
          "symbol": "Crypto.GOAT/USD",
          "asset_type": "Crypto",
          "is_open": true,
          "next_open": 0,
          "next_close": 0,
          "schedule": "America/New_York;O,O,O,O,O,O,O;"
        }
      },
      "backupFeed": {
        "maxDeviationP": 0,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.05,
      "pnlSpreadP": 0.06,
      "leverages": {
        "minLeverage": 1,
        "maxLeverage": 5,
        "pnlMinLeverage": 1,
        "pnlMaxLeverage": 25
      },
      "priceImpactMultiplier": 1.2,
      "skewImpactMultiplier": 1,
      "groupIndex": 4,
      "feeIndex": 55,
      "values": {
        "maxGainP": 500,
        "maxSlP": 80,
        "maxLongOiP": 100,
        "maxShortOiP": 100,
        "groupOpenInterestPercentageP": 15,
        "maxWalletOIP": 50,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 15,
        "maxWalletOI": 50
      },
      "from": "GOAT",
      "to": "USD",
      "timer": {
        "numTiers": 2,
        "positionSizeToThresholdTierMap": {
          "0": 0,
          "1": 50000
        },
        "thresholdTierToTimerMap": {
          "0": 0,
          "1": 180
        }
      },
      "openInterest": {
        "long": 0,
        "short": 0
      },
      "marginFee": {
        "long": 0.003424657534246575,
        "short": 0.003424657534246575
      },
      "pairOI": 0,
      "pairMaxOI": 638405.86,
      "maxWalletOI": 47880439.62,
      "pairParams": {
        "onePercentDepthAbove": 110924.624,
        "onePercentDepthBelow": 64827.184
      },
      "blockOILimit": 2500000,
      "storagePairParams": {
        "posSpreadCap": 5,
        "negSpreadCap": 100000,
        "isPnlTypeAllowed": 0,
        "pnlPriceImpactMultiplier": 0,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 0,
        "minBorrowFee": 30
      },
      "openFeeP": 0.045,
      "closeFeeP": 0.045,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 10,
      "pnlFees": {
        "numTiers": 10,
        "tierP": [
          1,
          5,
          25,
          50,
          100,
          250,
          500,
          1500,
          2500,
          3000
        ],
        "feesP": [
          80,
          50,
          45,
          37.5,
          27.5,
          25,
          25,
          22.5,
          15,
          2.5
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 5,
        "2": 5,
        "3": 5
      },
      "skewEqParams": [
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 55,
      "pairSpreadP": 0.05,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 10,
      "pairMinLeverage": 1
    },
    "56": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 5,
        "feedId": "0x15add95022ae13563a11992e727c91bdb6b55bc183d9d747436c80a483d8c864",
        "attributes": {
          "symbol": "Crypto.APE/USD",
          "asset_type": "Crypto",
          "is_open": true,
          "next_open": 0,
          "next_close": 0,
          "schedule": "America/New_York;O,O,O,O,O,O,O;"
        }
      },
      "backupFeed": {
        "maxDeviationP": 0,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.05,
      "pnlSpreadP": 0.06,
      "leverages": {
        "minLeverage": 1,
        "maxLeverage": 15,
        "pnlMinLeverage": 1,
        "pnlMaxLeverage": 25
      },
      "priceImpactMultiplier": 1.2,
      "skewImpactMultiplier": 1,
      "groupIndex": 4,
      "feeIndex": 56,
      "values": {
        "maxGainP": 500,
        "maxSlP": 80,
        "maxLongOiP": 100,
        "maxShortOiP": 100,
        "groupOpenInterestPercentageP": 15,
        "maxWalletOIP": 50,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 15,
        "maxWalletOI": 50
      },
      "from": "APE",
      "to": "USD",
      "timer": {
        "numTiers": 2,
        "positionSizeToThresholdTierMap": {
          "0": 0,
          "1": 50000
        },
        "thresholdTierToTimerMap": {
          "0": 0,
          "1": 180
        }
      },
      "openInterest": {
        "long": 49.89,
        "short": 0
      },
      "marginFee": {
        "long": 0.003424657534246575,
        "short": 0.003424657534246575
      },
      "pairOI": 49.89,
      "pairMaxOI": 638405.86,
      "maxWalletOI": 47880439.62,
      "pairParams": {
        "onePercentDepthAbove": 448616.92,
        "onePercentDepthBelow": 341502.48
      },
      "blockOILimit": 2500000,
      "storagePairParams": {
        "posSpreadCap": 5,
        "negSpreadCap": 100000,
        "isPnlTypeAllowed": 0,
        "pnlPriceImpactMultiplier": 0,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 0,
        "minBorrowFee": 30
      },
      "openFeeP": 0.045,
      "closeFeeP": 0.045,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 10,
      "pnlFees": {
        "numTiers": 10,
        "tierP": [
          1,
          5,
          25,
          50,
          100,
          250,
          500,
          1500,
          2500,
          3000
        ],
        "feesP": [
          80,
          50,
          45,
          37.5,
          27.5,
          25,
          25,
          22.5,
          15,
          2.5
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 5,
        "2": 5,
        "3": 5
      },
      "skewEqParams": [
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 56,
      "pairSpreadP": 0.05,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 10,
      "pairMinLeverage": 1
    },
    "57": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 5,
        "feedId": "0x03ae4db29ed4ae33d323568895aa00337e658e348b37509f5372ae51f0af00d5",
        "attributes": {
          "symbol": "Crypto.APT/USD",
          "asset_type": "Crypto",
          "is_open": true,
          "next_open": 0,
          "next_close": 0,
          "schedule": "America/New_York;O,O,O,O,O,O,O;"
        }
      },
      "backupFeed": {
        "maxDeviationP": 0,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.05,
      "pnlSpreadP": 0.06,
      "leverages": {
        "minLeverage": 1,
        "maxLeverage": 15,
        "pnlMinLeverage": 1,
        "pnlMaxLeverage": 25
      },
      "priceImpactMultiplier": 1.2,
      "skewImpactMultiplier": 0.1,
      "groupIndex": 1,
      "feeIndex": 57,
      "values": {
        "maxGainP": 500,
        "maxSlP": 80,
        "maxLongOiP": 75,
        "maxShortOiP": 75,
        "groupOpenInterestPercentageP": 35,
        "maxWalletOIP": 50,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 35,
        "maxWalletOI": 50
      },
      "from": "APT",
      "to": "USD",
      "timer": {
        "numTiers": 2,
        "positionSizeToThresholdTierMap": {
          "0": 0,
          "1": 50000
        },
        "thresholdTierToTimerMap": {
          "0": 0,
          "1": 180
        }
      },
      "openInterest": {
        "long": 25876.9,
        "short": 21172.01
      },
      "marginFee": {
        "long": 0.00228310502283105,
        "short": 0.00228310502283105
      },
      "pairOI": 47048.91,
      "pairMaxOI": 4841244.45,
      "maxWalletOI": 47880439.62,
      "pairParams": {
        "onePercentDepthAbove": 833724.848,
        "onePercentDepthBelow": 727935.496
      },
      "blockOILimit": 2500000,
      "storagePairParams": {
        "posSpreadCap": 5,
        "negSpreadCap": 100000,
        "isPnlTypeAllowed": 0,
        "pnlPriceImpactMultiplier": 0,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 0,
        "minBorrowFee": 20
      },
      "openFeeP": 0.045,
      "closeFeeP": 0.045,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 10,
      "pnlFees": {
        "numTiers": 10,
        "tierP": [
          1,
          5,
          25,
          50,
          100,
          250,
          500,
          1500,
          2500,
          3000
        ],
        "feesP": [
          80,
          50,
          45,
          37.5,
          27.5,
          25,
          25,
          22.5,
          15,
          2.5
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 5,
        "2": 5,
        "3": 5
      },
      "skewEqParams": [
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 57,
      "pairSpreadP": 0.05,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 10,
      "pairMinLeverage": 1
    },
    "58": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 5,
        "feedId": "0xd98869edbb4a0d2803dc1054405bceb1ddc546bfc9a3d0e31bb0e0448e6181e1",
        "attributes": {
          "symbol": "Crypto.CHILLGUY/USD",
          "asset_type": "Crypto",
          "is_open": true,
          "next_open": 0,
          "next_close": 0,
          "schedule": "America/New_York;O,O,O,O,O,O,O;"
        }
      },
      "backupFeed": {
        "maxDeviationP": 0,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.05,
      "pnlSpreadP": 0.06,
      "leverages": {
        "minLeverage": 1,
        "maxLeverage": 5,
        "pnlMinLeverage": 1,
        "pnlMaxLeverage": 25
      },
      "priceImpactMultiplier": 1.2,
      "skewImpactMultiplier": 1,
      "groupIndex": 4,
      "feeIndex": 58,
      "values": {
        "maxGainP": 500,
        "maxSlP": 80,
        "maxLongOiP": 100,
        "maxShortOiP": 100,
        "groupOpenInterestPercentageP": 15,
        "maxWalletOIP": 50,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 15,
        "maxWalletOI": 50
      },
      "from": "CHILLGUY",
      "to": "USD",
      "timer": {
        "numTiers": 2,
        "positionSizeToThresholdTierMap": {
          "0": 0,
          "1": 50000
        },
        "thresholdTierToTimerMap": {
          "0": 0,
          "1": 180
        }
      },
      "openInterest": {
        "long": 0,
        "short": 39.97
      },
      "marginFee": {
        "long": 0.003424657534246575,
        "short": 0.003424657534246575
      },
      "pairOI": 39.97,
      "pairMaxOI": 638405.86,
      "maxWalletOI": 47880439.62,
      "pairParams": {
        "onePercentDepthAbove": 43201.672,
        "onePercentDepthBelow": 36689.584
      },
      "blockOILimit": 2500000,
      "storagePairParams": {
        "posSpreadCap": 5,
        "negSpreadCap": 100000,
        "isPnlTypeAllowed": 0,
        "pnlPriceImpactMultiplier": 0,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 0,
        "minBorrowFee": 30
      },
      "openFeeP": 0.045,
      "closeFeeP": 0.045,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 10,
      "pnlFees": {
        "numTiers": 10,
        "tierP": [
          1,
          5,
          25,
          50,
          100,
          250,
          500,
          1500,
          2500,
          3000
        ],
        "feesP": [
          80,
          50,
          45,
          37.5,
          27.5,
          25,
          25,
          22.5,
          15,
          2.5
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 5,
        "2": 5,
        "3": 5
      },
      "skewEqParams": [
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 58,
      "pairSpreadP": 0.05,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 10,
      "pairMinLeverage": 1
    },
    "59": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 5,
        "feedId": "0xec5d399846a9209f3fe5881d70aae9268c94339ff9817e8d18ff19fa05eea1c8",
        "attributes": {
          "symbol": "Crypto.XRP/USD",
          "asset_type": "Crypto",
          "is_open": true,
          "next_open": 0,
          "next_close": 0,
          "schedule": "America/New_York;O,O,O,O,O,O,O;"
        }
      },
      "backupFeed": {
        "maxDeviationP": 0,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.05,
      "pnlSpreadP": 0.01,
      "leverages": {
        "minLeverage": 1,
        "maxLeverage": 75,
        "pnlMinLeverage": 75,
        "pnlMaxLeverage": 500
      },
      "priceImpactMultiplier": 1.2,
      "skewImpactMultiplier": 0.1,
      "groupIndex": 1,
      "feeIndex": 59,
      "values": {
        "maxGainP": 2500,
        "maxSlP": 80,
        "maxLongOiP": 50,
        "maxShortOiP": 50,
        "groupOpenInterestPercentageP": 60,
        "maxWalletOIP": 50,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 60,
        "maxWalletOI": 50
      },
      "from": "XRP",
      "to": "USD",
      "timer": {
        "numTiers": 1,
        "positionSizeToThresholdTierMap": {
          "0": 0
        },
        "thresholdTierToTimerMap": {
          "0": 0
        }
      },
      "openInterest": {
        "long": 676189.64,
        "short": 714197.32
      },
      "marginFee": {
        "long": 0.003424657534246575,
        "short": 0.003424657534246575
      },
      "pairOI": 1390386.96,
      "pairMaxOI": 8299276.2,
      "maxWalletOI": 47880439.62,
      "pairParams": {
        "onePercentDepthAbove": 10410770.04,
        "onePercentDepthBelow": 9152417.36
      },
      "blockOILimit": 2500000,
      "storagePairParams": {
        "posSpreadCap": 2,
        "negSpreadCap": 50,
        "isPnlTypeAllowed": 1,
        "pnlPriceImpactMultiplier": 1.2,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 5,
        "minBorrowFee": 30
      },
      "openFeeP": 0.045,
      "closeFeeP": 0.045,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 10,
      "pnlFees": {
        "numTiers": 10,
        "tierP": [
          1,
          5,
          25,
          50,
          100,
          250,
          500,
          1500,
          2500,
          3000
        ],
        "feesP": [
          80,
          50,
          45,
          37.5,
          27.5,
          25,
          25,
          22.5,
          15,
          2.5
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 8,
        "2": 8,
        "3": 8
      },
      "skewEqParams": [
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 59,
      "pairSpreadP": 0.05,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 10,
      "pairMinLeverage": 1
    },
    "60": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 5,
        "feedId": "0x879551021853eec7a7dc827578e8e69da7e4fa8148339aa0d3d5296405be4b1a",
        "attributes": {
          "symbol": "Crypto.TRUMP/USD",
          "asset_type": "Crypto",
          "is_open": true,
          "next_open": 0,
          "next_close": 0,
          "schedule": "America/New_York;O,O,O,O,O,O,O;"
        }
      },
      "backupFeed": {
        "maxDeviationP": 0,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.02,
      "pnlSpreadP": 0.04,
      "leverages": {
        "minLeverage": 1,
        "maxLeverage": 25,
        "pnlMinLeverage": 1,
        "pnlMaxLeverage": 25
      },
      "priceImpactMultiplier": 1.2,
      "skewImpactMultiplier": 0.1,
      "groupIndex": 4,
      "feeIndex": 60,
      "values": {
        "maxGainP": 1000,
        "maxSlP": 80,
        "maxLongOiP": 50,
        "maxShortOiP": 50,
        "groupOpenInterestPercentageP": 75,
        "maxWalletOIP": 50,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 75,
        "maxWalletOI": 50
      },
      "from": "TRUMP",
      "to": "USD",
      "timer": {
        "numTiers": 2,
        "positionSizeToThresholdTierMap": {
          "0": 0,
          "1": 50000
        },
        "thresholdTierToTimerMap": {
          "0": 0,
          "1": 180
        }
      },
      "openInterest": {
        "long": 5364.47,
        "short": 5250
      },
      "marginFee": {
        "long": 0.00228310502283105,
        "short": 0.00228310502283105
      },
      "pairOI": 10614.47,
      "pairMaxOI": 3192029.31,
      "maxWalletOI": 47880439.62,
      "pairParams": {
        "onePercentDepthAbove": 1747733.44,
        "onePercentDepthBelow": 3210133.8
      },
      "blockOILimit": 2500000,
      "storagePairParams": {
        "posSpreadCap": 2,
        "negSpreadCap": 100000,
        "isPnlTypeAllowed": 0,
        "pnlPriceImpactMultiplier": 0,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 0,
        "minBorrowFee": 20
      },
      "openFeeP": 0.045,
      "closeFeeP": 0.045,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 10,
      "pnlFees": {
        "numTiers": 10,
        "tierP": [
          1,
          5,
          25,
          50,
          100,
          250,
          500,
          1500,
          2500,
          3000
        ],
        "feesP": [
          80,
          50,
          45,
          37.5,
          27.5,
          25,
          25,
          22.5,
          15,
          2.5
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 5,
        "2": 5,
        "3": 5
      },
      "skewEqParams": [
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 60,
      "pairSpreadP": 0.02,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 10,
      "pairMinLeverage": 1
    },
    "61": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 5,
        "feedId": "0x58cd29ef0e714c5affc44f269b2c1899a52da4169d7acc147b9da692e6953608",
        "attributes": {
          "symbol": "Crypto.FARTCOIN/USD",
          "asset_type": "Crypto",
          "is_open": true,
          "next_open": 0,
          "next_close": 0,
          "schedule": "America/New_York;O,O,O,O,O,O,O;"
        }
      },
      "backupFeed": {
        "maxDeviationP": 0,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.02,
      "pnlSpreadP": 0.02,
      "leverages": {
        "minLeverage": 1,
        "maxLeverage": 75,
        "pnlMinLeverage": 75,
        "pnlMaxLeverage": 250
      },
      "priceImpactMultiplier": 1.2,
      "skewImpactMultiplier": 0.1,
      "groupIndex": 4,
      "feeIndex": 61,
      "values": {
        "maxGainP": 2500,
        "maxSlP": 80,
        "maxLongOiP": 50,
        "maxShortOiP": 50,
        "groupOpenInterestPercentageP": 75,
        "maxWalletOIP": 50,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 75,
        "maxWalletOI": 50
      },
      "from": "FARTCOIN",
      "to": "USD",
      "timer": {
        "numTiers": 1,
        "positionSizeToThresholdTierMap": {
          "0": 0
        },
        "thresholdTierToTimerMap": {
          "0": 0
        }
      },
      "openInterest": {
        "long": 84656.4,
        "short": 83816.85
      },
      "marginFee": {
        "long": 0.00228310502283105,
        "short": 0.00228310502283105
      },
      "pairOI": 168473.25,
      "pairMaxOI": 3192029.31,
      "maxWalletOI": 47880439.62,
      "pairParams": {
        "onePercentDepthAbove": 630960.336,
        "onePercentDepthBelow": 504891.152
      },
      "blockOILimit": 2500000,
      "storagePairParams": {
        "posSpreadCap": 2,
        "negSpreadCap": 100000,
        "isPnlTypeAllowed": 1,
        "pnlPriceImpactMultiplier": 1.2,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 10,
        "minBorrowFee": 20
      },
      "openFeeP": 0.045,
      "closeFeeP": 0.045,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 10,
      "pnlFees": {
        "numTiers": 10,
        "tierP": [
          1,
          5,
          25,
          50,
          100,
          250,
          500,
          1500,
          2500,
          3000
        ],
        "feesP": [
          80,
          50,
          45,
          37.5,
          27.5,
          25,
          25,
          22.5,
          15,
          2.5
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 5,
        "2": 5,
        "3": 5
      },
      "skewEqParams": [
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 61,
      "pairSpreadP": 0.02,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 10,
      "pairMinLeverage": 1
    },
    "62": {
      "feed": {
        "maxOpenDeviationP": 1.5,
        "maxCloseDeviationP": 5,
        "feedId": "0x4279e31cc369bbcc2faf022b382b080e32a8e689ff20fbc530d2a603eb6cd98b",
        "attributes": {
          "symbol": "Crypto.HYPE/USD",
          "asset_type": "Crypto",
          "is_open": true,
          "next_open": 0,
          "next_close": 0,
          "schedule": "America/New_York;O,O,O,O,O,O,O;"
        }
      },
      "backupFeed": {
        "maxDeviationP": 0,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.02,
      "pnlSpreadP": 0.02,
      "leverages": {
        "minLeverage": 1,
        "maxLeverage": 75,
        "pnlMinLeverage": 75,
        "pnlMaxLeverage": 250
      },
      "priceImpactMultiplier": 1.2,
      "skewImpactMultiplier": 0.1,
      "groupIndex": 5,
      "feeIndex": 62,
      "values": {
        "maxGainP": 2500,
        "maxSlP": 80,
        "maxLongOiP": 50,
        "maxShortOiP": 50,
        "groupOpenInterestPercentageP": 50,
        "maxWalletOIP": 50,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 50,
        "maxWalletOI": 50
      },
      "from": "HYPE",
      "to": "USD",
      "timer": {
        "numTiers": 1,
        "positionSizeToThresholdTierMap": {
          "0": 0
        },
        "thresholdTierToTimerMap": {
          "0": 0
        }
      },
      "openInterest": {
        "long": 412311.79,
        "short": 632656.68
      },
      "marginFee": {
        "long": 0.00228310502283105,
        "short": 0.00228310502283105
      },
      "pairOI": 1044968.47,
      "pairMaxOI": 4256039.08,
      "maxWalletOI": 47880439.62,
      "pairParams": {
        "onePercentDepthAbove": 1589187.496,
        "onePercentDepthBelow": 1190499.136
      },
      "blockOILimit": 2500000,
      "storagePairParams": {
        "posSpreadCap": 5,
        "negSpreadCap": 50,
        "isPnlTypeAllowed": 1,
        "pnlPriceImpactMultiplier": 1.2,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 10,
        "minBorrowFee": 20
      },
      "openFeeP": 0.045,
      "closeFeeP": 0.045,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 10,
      "pnlFees": {
        "numTiers": 10,
        "tierP": [
          1,
          5,
          25,
          50,
          100,
          250,
          500,
          1500,
          2500,
          3000
        ],
        "feesP": [
          80,
          50,
          45,
          37.5,
          27.5,
          25,
          25,
          22.5,
          15,
          2.5
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 5,
        "2": 5,
        "3": 5
      },
      "skewEqParams": [
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 62,
      "pairSpreadP": 0.02,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 10,
      "pairMinLeverage": 1
    },
    "63": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 5,
        "feedId": "0x962088abcfdbdb6e30db2e340c8cf887d9efb311b1f2f17b155a63dbb6d40265",
        "attributes": {
          "symbol": "Crypto.BERA/USD",
          "asset_type": "Crypto",
          "is_open": true,
          "next_open": 0,
          "next_close": 0,
          "schedule": "America/New_York;O,O,O,O,O,O,O;"
        }
      },
      "backupFeed": {
        "maxDeviationP": 0,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.05,
      "pnlSpreadP": 0.04,
      "leverages": {
        "minLeverage": 1,
        "maxLeverage": 10,
        "pnlMinLeverage": 1,
        "pnlMaxLeverage": 25
      },
      "priceImpactMultiplier": 1.2,
      "skewImpactMultiplier": 0.1,
      "groupIndex": 5,
      "feeIndex": 63,
      "values": {
        "maxGainP": 1000,
        "maxSlP": 80,
        "maxLongOiP": 50,
        "maxShortOiP": 50,
        "groupOpenInterestPercentageP": 20,
        "maxWalletOIP": 15,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 20,
        "maxWalletOI": 15
      },
      "from": "BERA",
      "to": "USD",
      "timer": {
        "numTiers": 2,
        "positionSizeToThresholdTierMap": {
          "0": 0,
          "1": 50000
        },
        "thresholdTierToTimerMap": {
          "0": 0,
          "1": 180
        }
      },
      "openInterest": {
        "long": 9448.05,
        "short": 11098.91
      },
      "marginFee": {
        "long": 0.00228310502283105,
        "short": 0.00228310502283105
      },
      "pairOI": 20546.96,
      "pairMaxOI": 1702415.63,
      "maxWalletOI": 14364131.89,
      "pairParams": {
        "onePercentDepthAbove": 177432.096,
        "onePercentDepthBelow": 163797.776
      },
      "blockOILimit": 2500000,
      "storagePairParams": {
        "posSpreadCap": 2,
        "negSpreadCap": 100000,
        "isPnlTypeAllowed": 0,
        "pnlPriceImpactMultiplier": 0,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 0,
        "minBorrowFee": 20
      },
      "openFeeP": 0.045,
      "closeFeeP": 0.045,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 10,
      "pnlFees": {
        "numTiers": 10,
        "tierP": [
          1,
          5,
          25,
          50,
          100,
          250,
          500,
          1500,
          2500,
          3000
        ],
        "feesP": [
          80,
          50,
          45,
          37.5,
          27.5,
          25,
          25,
          22.5,
          15,
          2.5
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 10,
        "2": 10,
        "3": 10
      },
      "skewEqParams": [
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 63,
      "pairSpreadP": 0.05,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 10,
      "pairMinLeverage": 1
    },
    "64": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 5,
        "feedId": "0x7302dee641a08507c297a7b0c8b3efa74a48a3baa6c040acab1e5209692b7e59",
        "attributes": {
          "symbol": "Crypto.KAITO/USD",
          "asset_type": "Crypto",
          "is_open": true,
          "next_open": 0,
          "next_close": 0,
          "schedule": "America/New_York;O,O,O,O,O,O,O;"
        }
      },
      "backupFeed": {
        "maxDeviationP": 0,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.05,
      "pnlSpreadP": 0.1,
      "leverages": {
        "minLeverage": 1,
        "maxLeverage": 10,
        "pnlMinLeverage": 1,
        "pnlMaxLeverage": 25
      },
      "priceImpactMultiplier": 1.2,
      "skewImpactMultiplier": 0.1,
      "groupIndex": 5,
      "feeIndex": 64,
      "values": {
        "maxGainP": 500,
        "maxSlP": 80,
        "maxLongOiP": 100,
        "maxShortOiP": 100,
        "groupOpenInterestPercentageP": 20,
        "maxWalletOIP": 50,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 20,
        "maxWalletOI": 50
      },
      "from": "KAITO",
      "to": "USD",
      "timer": {
        "numTiers": 2,
        "positionSizeToThresholdTierMap": {
          "0": 0,
          "1": 50000
        },
        "thresholdTierToTimerMap": {
          "0": 0,
          "1": 180
        }
      },
      "openInterest": {
        "long": 11769.28,
        "short": 14384.67
      },
      "marginFee": {
        "long": 0.00228310502283105,
        "short": 0.00228310502283105
      },
      "pairOI": 26153.95,
      "pairMaxOI": 1702415.63,
      "maxWalletOI": 47880439.62,
      "pairParams": {
        "onePercentDepthAbove": 137978,
        "onePercentDepthBelow": 102038.392
      },
      "blockOILimit": 2500000,
      "storagePairParams": {
        "posSpreadCap": 5,
        "negSpreadCap": 100000,
        "isPnlTypeAllowed": 0,
        "pnlPriceImpactMultiplier": 0,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 0,
        "minBorrowFee": 20
      },
      "openFeeP": 0.045,
      "closeFeeP": 0.045,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 10,
      "pnlFees": {
        "numTiers": 10,
        "tierP": [
          1,
          5,
          25,
          50,
          100,
          250,
          500,
          1500,
          2500,
          3000
        ],
        "feesP": [
          80,
          50,
          45,
          37.5,
          27.5,
          25,
          25,
          22.5,
          15,
          2.5
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 10,
        "2": 10,
        "3": 10
      },
      "skewEqParams": [
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 64,
      "pairSpreadP": 0.05,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 10,
      "pairMinLeverage": 1
    },
    "65": {
      "feed": {
        "maxOpenDeviationP": 1.5,
        "maxCloseDeviationP": 5,
        "feedId": "0x925ca92ff005ae943c158e3563f59698ce7e75c5a8c8dd43303a0a154887b3e6",
        "attributes": {
          "symbol": "Commodities.USOILSPOT",
          "asset_type": "Commodities",
          "is_open": true,
          "next_open": 1758751200,
          "next_close": 1758747600,
          "schedule": "GMT;0000-2100&2200-2400,0000-2100&2200-2400,0000-2100&2200-2400,0000-2100&2200-2400,0000-2045,C,2200-2400;0619/0000-1830&2200-2400,0901/0000-1830&2200-2400"
        }
      },
      "backupFeed": {
        "maxDeviationP": 0,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.03,
      "pnlSpreadP": 0.03,
      "leverages": {
        "minLeverage": 1,
        "maxLeverage": 50,
        "pnlMinLeverage": 1,
        "pnlMaxLeverage": 20
      },
      "priceImpactMultiplier": 0,
      "skewImpactMultiplier": 0,
      "groupIndex": 3,
      "feeIndex": 65,
      "values": {
        "maxGainP": 500,
        "maxSlP": 80,
        "maxLongOiP": 100,
        "maxShortOiP": 100,
        "groupOpenInterestPercentageP": 70,
        "maxWalletOIP": 15,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 70,
        "maxWalletOI": 15
      },
      "from": "USOILSPOT",
      "to": "USD",
      "timer": {
        "numTiers": 1,
        "positionSizeToThresholdTierMap": {
          "0": 0
        },
        "thresholdTierToTimerMap": {
          "0": 60
        }
      },
      "openInterest": {
        "long": 68691.38,
        "short": 12138.47
      },
      "marginFee": {
        "long": 0.0008561643835616438,
        "short": 0.0008561643835616438
      },
      "pairOI": 80829.84,
      "pairMaxOI": 2234420.52,
      "maxWalletOI": 14364131.89,
      "pairParams": {
        "onePercentDepthAbove": 1000000,
        "onePercentDepthBelow": 1000000
      },
      "blockOILimit": 2500000,
      "storagePairParams": {
        "posSpreadCap": 2.5,
        "negSpreadCap": 25,
        "isPnlTypeAllowed": 0,
        "pnlPriceImpactMultiplier": 0,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 0,
        "minBorrowFee": 7.5
      },
      "openFeeP": 0.08,
      "closeFeeP": 0,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 300,
      "pnlFees": {
        "numTiers": 9,
        "tierP": [
          0.5,
          1,
          2,
          5,
          10,
          20,
          50,
          100,
          500
        ],
        "feesP": [
          80,
          80,
          60,
          50,
          40,
          30,
          20,
          20,
          20
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 0,
        "2": 0,
        "3": 0
      },
      "skewEqParams": [
        [
          0,
          800
        ],
        [
          0,
          800
        ],
        [
          0,
          800
        ],
        [
          0,
          800
        ],
        [
          0,
          800
        ],
        [
          0,
          800
        ],
        [
          0,
          800
        ],
        [
          0,
          800
        ],
        [
          0,
          800
        ],
        [
          0,
          800
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 55,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 55,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 65,
      "pairSpreadP": 0.03,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 300,
      "pairMinLeverage": 1
    },
    "66": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 5,
        "feedId": "0xeef52e09c878ad41f6a81803e3640fe04dceea727de894edd4ea117e2e332e66",
        "attributes": {
          "symbol": "FX.USD/CNH",
          "asset_type": "FX",
          "is_open": true,
          "next_open": 1758751200,
          "next_close": 1758747600,
          "schedule": "America/New_York;0000-1700&1800-2400,0000-1700&1800-2400,0000-1700&1800-2400,0000-1700&1800-2400,0000-1700,C,1800-2400;1224/0000-1700,1225/1800-2400,1231/0000-1700,0101/1800-2400"
        }
      },
      "backupFeed": {
        "maxDeviationP": 0,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.03,
      "pnlSpreadP": 0.03,
      "leverages": {
        "minLeverage": 2,
        "maxLeverage": 50,
        "pnlMinLeverage": 2,
        "pnlMaxLeverage": 500
      },
      "priceImpactMultiplier": 0,
      "skewImpactMultiplier": 0,
      "groupIndex": 2,
      "feeIndex": 66,
      "values": {
        "maxGainP": 500,
        "maxSlP": 80,
        "maxLongOiP": 50,
        "maxShortOiP": 50,
        "groupOpenInterestPercentageP": 30,
        "maxWalletOIP": 15,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 30,
        "maxWalletOI": 15
      },
      "from": "USD",
      "to": "CNH",
      "timer": {
        "numTiers": 3,
        "positionSizeToThresholdTierMap": {
          "0": 0,
          "1": 10000,
          "2": 50000
        },
        "thresholdTierToTimerMap": {
          "0": 180,
          "1": 300,
          "2": 600
        }
      },
      "openInterest": {
        "long": 0,
        "short": 299.7
      },
      "marginFee": {
        "long": 0.0005707762557077625,
        "short": 0.0005707762557077625
      },
      "pairOI": 299.7,
      "pairMaxOI": 2872826.38,
      "maxWalletOI": 14364131.89,
      "pairParams": {
        "onePercentDepthAbove": 1000000,
        "onePercentDepthBelow": 1000000
      },
      "blockOILimit": 2500000,
      "storagePairParams": {
        "posSpreadCap": 2.5,
        "negSpreadCap": 25,
        "isPnlTypeAllowed": 0,
        "pnlPriceImpactMultiplier": 0,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 0,
        "minBorrowFee": 5
      },
      "openFeeP": 0.03,
      "closeFeeP": 0,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 300,
      "pnlFees": {
        "numTiers": 9,
        "tierP": [
          0.5,
          1,
          2,
          5,
          10,
          20,
          50,
          100,
          500
        ],
        "feesP": [
          80,
          80,
          60,
          50,
          40,
          30,
          20,
          20,
          20
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 5,
        "2": 5,
        "3": 5
      },
      "skewEqParams": [
        [
          -5,
          500
        ],
        [
          -5,
          500
        ],
        [
          -5,
          500
        ],
        [
          -5,
          500
        ],
        [
          0,
          300
        ],
        [
          0,
          300
        ],
        [
          -5,
          600
        ],
        [
          -5,
          600
        ],
        [
          -5,
          600
        ],
        [
          -5,
          600
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 55,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 55,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 66,
      "pairSpreadP": 0.03,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 300,
      "pairMinLeverage": 2
    },
    "67": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 5,
        "feedId": "0x0ac0f9a2886fc2dd708bc66cc2cea359052ce89d324f45d95fadbc6c4fcf1809",
        "attributes": {
          "symbol": "FX.USD/INR",
          "asset_type": "FX",
          "is_open": true,
          "next_open": 1758751200,
          "next_close": 1758747600,
          "schedule": "America/New_York;0000-1700&1800-2400,0000-1700&1800-2400,0000-1700&1800-2400,0000-1700&1800-2400,0000-1700,C,1800-2400;1224/0000-1700,1225/1800-2400,1231/0000-1700,0101/1800-2400"
        }
      },
      "backupFeed": {
        "maxDeviationP": 0,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.03,
      "pnlSpreadP": 0.03,
      "leverages": {
        "minLeverage": 2,
        "maxLeverage": 50,
        "pnlMinLeverage": 2,
        "pnlMaxLeverage": 500
      },
      "priceImpactMultiplier": 0,
      "skewImpactMultiplier": 0,
      "groupIndex": 2,
      "feeIndex": 67,
      "values": {
        "maxGainP": 500,
        "maxSlP": 80,
        "maxLongOiP": 75,
        "maxShortOiP": 75,
        "groupOpenInterestPercentageP": 30,
        "maxWalletOIP": 15,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 30,
        "maxWalletOI": 15
      },
      "from": "USD",
      "to": "INR",
      "timer": {
        "numTiers": 3,
        "positionSizeToThresholdTierMap": {
          "0": 0,
          "1": 10000,
          "2": 50000
        },
        "thresholdTierToTimerMap": {
          "0": 180,
          "1": 300,
          "2": 600
        }
      },
      "openInterest": {
        "long": 699.22,
        "short": 5622.33
      },
      "marginFee": {
        "long": 0.0005707762557077625,
        "short": 0.0005707762557077625
      },
      "pairOI": 6321.55,
      "pairMaxOI": 2872826.38,
      "maxWalletOI": 14364131.89,
      "pairParams": {
        "onePercentDepthAbove": 1000000,
        "onePercentDepthBelow": 1000000
      },
      "blockOILimit": 2500000,
      "storagePairParams": {
        "posSpreadCap": 2.5,
        "negSpreadCap": 25,
        "isPnlTypeAllowed": 0,
        "pnlPriceImpactMultiplier": 0,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 0,
        "minBorrowFee": 5
      },
      "openFeeP": 0.03,
      "closeFeeP": 0,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 300,
      "pnlFees": {
        "numTiers": 9,
        "tierP": [
          0.5,
          1,
          2,
          5,
          10,
          20,
          50,
          100,
          500
        ],
        "feesP": [
          80,
          80,
          60,
          50,
          40,
          30,
          20,
          20,
          20
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 5,
        "2": 5,
        "3": 5
      },
      "skewEqParams": [
        [
          -5,
          500
        ],
        [
          -5,
          500
        ],
        [
          -5,
          500
        ],
        [
          -5,
          500
        ],
        [
          0,
          300
        ],
        [
          0,
          300
        ],
        [
          -5,
          600
        ],
        [
          -5,
          600
        ],
        [
          -5,
          600
        ],
        [
          -5,
          600
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 55,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 55,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 67,
      "pairSpreadP": 0.03,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 300,
      "pairMinLeverage": 2
    },
    "68": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 5,
        "feedId": "0xe539120487c29b4defdf9a53d337316ea022a2688978a468f9efd847201be7e3",
        "attributes": {
          "symbol": "",
          "asset_type": "",
          "is_open": false,
          "next_open": 0,
          "next_close": 0,
          "schedule": "America/New_York;O,O,O,O,O,O,O;"
        }
      },
      "backupFeed": {
        "maxDeviationP": 0,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.01,
      "pnlSpreadP": 0.01,
      "leverages": {
        "minLeverage": 2,
        "maxLeverage": 50,
        "pnlMinLeverage": 2,
        "pnlMaxLeverage": 500
      },
      "priceImpactMultiplier": 0,
      "skewImpactMultiplier": 0,
      "groupIndex": 2,
      "feeIndex": 68,
      "values": {
        "maxGainP": 500,
        "maxSlP": 80,
        "maxLongOiP": 50,
        "maxShortOiP": 50,
        "groupOpenInterestPercentageP": 20,
        "maxWalletOIP": 15,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 20,
        "maxWalletOI": 15
      },
      "from": "USD",
      "to": "KRW",
      "timer": {
        "numTiers": 3,
        "positionSizeToThresholdTierMap": {
          "0": 0,
          "1": 10000,
          "2": 50000
        },
        "thresholdTierToTimerMap": {
          "0": 180,
          "1": 600,
          "2": 900
        }
      },
      "openInterest": {
        "long": 0,
        "short": 0
      },
      "marginFee": {
        "long": 0.0005707762557077625,
        "short": 0.0005707762557077625
      },
      "pairOI": 0,
      "pairMaxOI": 1915217.58,
      "maxWalletOI": 14364131.89,
      "pairParams": {
        "onePercentDepthAbove": 1000000,
        "onePercentDepthBelow": 1000000
      },
      "blockOILimit": 2500000,
      "storagePairParams": {
        "posSpreadCap": 2.5,
        "negSpreadCap": 25,
        "isPnlTypeAllowed": 0,
        "pnlPriceImpactMultiplier": 0,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 0,
        "minBorrowFee": 5
      },
      "openFeeP": 0.03,
      "closeFeeP": 0,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 300,
      "pnlFees": {
        "numTiers": 9,
        "tierP": [
          0.5,
          1,
          2,
          5,
          10,
          20,
          50,
          100,
          500
        ],
        "feesP": [
          80,
          80,
          60,
          50,
          40,
          30,
          20,
          20,
          20
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 0,
        "2": 0,
        "3": 0
      },
      "skewEqParams": [
        [
          -5,
          500
        ],
        [
          -5,
          500
        ],
        [
          -5,
          500
        ],
        [
          -5,
          500
        ],
        [
          0,
          300
        ],
        [
          0,
          300
        ],
        [
          -5,
          600
        ],
        [
          -5,
          600
        ],
        [
          -5,
          600
        ],
        [
          -5,
          600
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 55,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 55,
        "2": 70,
        "3": 80
      },
      "isPairListed": false,
      "index": 68,
      "pairSpreadP": 0.01,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 300,
      "pairMinLeverage": 2
    },
    "69": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 5,
        "feedId": "0xe13b1c1ffb32f34e1be9545583f01ef385fde7f42ee66049d30570dc866b77ca",
        "attributes": {
          "symbol": "FX.USD/MXN",
          "asset_type": "FX",
          "is_open": true,
          "next_open": 1758751200,
          "next_close": 1758747600,
          "schedule": "America/New_York;0000-1700&1800-2400,0000-1700&1800-2400,0000-1700&1800-2400,0000-1700&1800-2400,0000-1700,C,1800-2400;1224/0000-1700,1225/1800-2400,1231/0000-1700,0101/1800-2400"
        }
      },
      "backupFeed": {
        "maxDeviationP": 0,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.03,
      "pnlSpreadP": 0.03,
      "leverages": {
        "minLeverage": 2,
        "maxLeverage": 50,
        "pnlMinLeverage": 2,
        "pnlMaxLeverage": 500
      },
      "priceImpactMultiplier": 0,
      "skewImpactMultiplier": 0,
      "groupIndex": 2,
      "feeIndex": 69,
      "values": {
        "maxGainP": 500,
        "maxSlP": 80,
        "maxLongOiP": 50,
        "maxShortOiP": 50,
        "groupOpenInterestPercentageP": 10,
        "maxWalletOIP": 15,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 10,
        "maxWalletOI": 15
      },
      "from": "USD",
      "to": "MXN",
      "timer": {
        "numTiers": 3,
        "positionSizeToThresholdTierMap": {
          "0": 0,
          "1": 10000,
          "2": 50000
        },
        "thresholdTierToTimerMap": {
          "0": 180,
          "1": 300,
          "2": 600
        }
      },
      "openInterest": {
        "long": 0,
        "short": 22356.13
      },
      "marginFee": {
        "long": 0.0005707762557077625,
        "short": 0.00060516
      },
      "pairOI": 22356.13,
      "pairMaxOI": 957608.79,
      "maxWalletOI": 14364131.89,
      "pairParams": {
        "onePercentDepthAbove": 1000000,
        "onePercentDepthBelow": 1000000
      },
      "blockOILimit": 2500000,
      "storagePairParams": {
        "posSpreadCap": 2.5,
        "negSpreadCap": 25,
        "isPnlTypeAllowed": 0,
        "pnlPriceImpactMultiplier": 0,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 0,
        "minBorrowFee": 5
      },
      "openFeeP": 0.03,
      "closeFeeP": 0,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 300,
      "pnlFees": {
        "numTiers": 9,
        "tierP": [
          0.5,
          1,
          2,
          5,
          10,
          20,
          50,
          100,
          500
        ],
        "feesP": [
          80,
          80,
          60,
          50,
          40,
          30,
          20,
          20,
          20
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 5,
        "2": 5,
        "3": 5
      },
      "skewEqParams": [
        [
          -5,
          500
        ],
        [
          -5,
          500
        ],
        [
          -5,
          500
        ],
        [
          -5,
          500
        ],
        [
          0,
          300
        ],
        [
          0,
          300
        ],
        [
          -5,
          600
        ],
        [
          -5,
          600
        ],
        [
          -5,
          600
        ],
        [
          -5,
          600
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 55,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 55,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 69,
      "pairSpreadP": 0.03,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 300,
      "pairMinLeverage": 2
    },
    "70": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 5,
        "feedId": "0x389d889017db82bf42141f23b61b8de938a4e2d156e36312175bebf797f493f1",
        "attributes": {
          "symbol": "FX.USD/ZAR",
          "asset_type": "FX",
          "is_open": true,
          "next_open": 1758751200,
          "next_close": 1758747600,
          "schedule": "America/New_York;0000-1700&1800-2400,0000-1700&1800-2400,0000-1700&1800-2400,0000-1700&1800-2400,0000-1700,C,1800-2400;1224/0000-1700,1225/1800-2400,1231/0000-1700,0101/1800-2400"
        }
      },
      "backupFeed": {
        "maxDeviationP": 0,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.03,
      "pnlSpreadP": 0.03,
      "leverages": {
        "minLeverage": 2,
        "maxLeverage": 50,
        "pnlMinLeverage": 2,
        "pnlMaxLeverage": 500
      },
      "priceImpactMultiplier": 0,
      "skewImpactMultiplier": 0,
      "groupIndex": 2,
      "feeIndex": 70,
      "values": {
        "maxGainP": 500,
        "maxSlP": 80,
        "maxLongOiP": 50,
        "maxShortOiP": 50,
        "groupOpenInterestPercentageP": 10,
        "maxWalletOIP": 15,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 10,
        "maxWalletOI": 15
      },
      "from": "USD",
      "to": "ZAR",
      "timer": {
        "numTiers": 3,
        "positionSizeToThresholdTierMap": {
          "0": 0,
          "1": 10000,
          "2": 50000
        },
        "thresholdTierToTimerMap": {
          "0": 180,
          "1": 300,
          "2": 600
        }
      },
      "openInterest": {
        "long": 0,
        "short": 0
      },
      "marginFee": {
        "long": 0.0005707762557077625,
        "short": 0.0005707762557077625
      },
      "pairOI": 0,
      "pairMaxOI": 957608.79,
      "maxWalletOI": 14364131.89,
      "pairParams": {
        "onePercentDepthAbove": 1000000,
        "onePercentDepthBelow": 1000000
      },
      "blockOILimit": 2500000,
      "storagePairParams": {
        "posSpreadCap": 2.5,
        "negSpreadCap": 25,
        "isPnlTypeAllowed": 0,
        "pnlPriceImpactMultiplier": 0,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 0,
        "minBorrowFee": 5
      },
      "openFeeP": 0.03,
      "closeFeeP": 0,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 300,
      "pnlFees": {
        "numTiers": 9,
        "tierP": [
          0.5,
          1,
          2,
          5,
          10,
          20,
          50,
          100,
          500
        ],
        "feesP": [
          80,
          80,
          60,
          50,
          40,
          30,
          20,
          20,
          20
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 5,
        "2": 5,
        "3": 5
      },
      "skewEqParams": [
        [
          -5,
          500
        ],
        [
          -5,
          500
        ],
        [
          -5,
          500
        ],
        [
          -5,
          500
        ],
        [
          0,
          300
        ],
        [
          0,
          300
        ],
        [
          -5,
          600
        ],
        [
          -5,
          600
        ],
        [
          -5,
          600
        ],
        [
          -5,
          600
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 55,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 55,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 70,
      "pairSpreadP": 0.03,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 300,
      "pairMinLeverage": 2
    },
    "71": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 5,
        "feedId": "0xbed3097008b9b5e3c93bec20be79cb43986b85a996475589351a21e67bae9b61",
        "attributes": {
          "symbol": "Crypto.PENGU/USD",
          "asset_type": "Crypto",
          "is_open": true,
          "next_open": 0,
          "next_close": 0,
          "schedule": "America/New_York;O,O,O,O,O,O,O;"
        }
      },
      "backupFeed": {
        "maxDeviationP": 0,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.05,
      "pnlSpreadP": 0.06,
      "leverages": {
        "minLeverage": 1,
        "maxLeverage": 25,
        "pnlMinLeverage": 1,
        "pnlMaxLeverage": 25
      },
      "priceImpactMultiplier": 1.2,
      "skewImpactMultiplier": 1,
      "groupIndex": 4,
      "feeIndex": 71,
      "values": {
        "maxGainP": 500,
        "maxSlP": 80,
        "maxLongOiP": 50,
        "maxShortOiP": 50,
        "groupOpenInterestPercentageP": 60,
        "maxWalletOIP": 15,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 60,
        "maxWalletOI": 15
      },
      "from": "PENGU",
      "to": "USD",
      "timer": {
        "numTiers": 2,
        "positionSizeToThresholdTierMap": {
          "0": 0,
          "1": 50000
        },
        "thresholdTierToTimerMap": {
          "0": 0,
          "1": 180
        }
      },
      "openInterest": {
        "long": 11037.32,
        "short": 13978.81
      },
      "marginFee": {
        "long": 0.00228310502283105,
        "short": 0.00228310502283105
      },
      "pairOI": 25016.13,
      "pairMaxOI": 2553623.45,
      "maxWalletOI": 14364131.89,
      "pairParams": {
        "onePercentDepthAbove": 1769552.824,
        "onePercentDepthBelow": 1066252.808
      },
      "blockOILimit": 2500000,
      "storagePairParams": {
        "posSpreadCap": 5,
        "negSpreadCap": 100000,
        "isPnlTypeAllowed": 0,
        "pnlPriceImpactMultiplier": 0,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 0,
        "minBorrowFee": 20
      },
      "openFeeP": 0.045,
      "closeFeeP": 0.045,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 10,
      "pnlFees": {
        "numTiers": 10,
        "tierP": [
          1,
          5,
          25,
          50,
          100,
          250,
          500,
          1500,
          2500,
          3000
        ],
        "feesP": [
          80,
          50,
          45,
          37.5,
          27.5,
          25,
          25,
          22.5,
          15,
          2.5
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 5,
        "2": 5,
        "3": 5
      },
      "skewEqParams": [
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 71,
      "pairSpreadP": 0.05,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 10,
      "pairMinLeverage": 1
    },
    "72": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 5,
        "feedId": "0x8132e3eb1dac3e56939a16ff83848d194345f6688bff97eb1c8bd462d558802b",
        "attributes": {
          "symbol": "Crypto.VIRTUAL/USD",
          "asset_type": "Crypto",
          "is_open": true,
          "next_open": 0,
          "next_close": 0,
          "schedule": "America/New_York;O,O,O,O,O,O,O;"
        }
      },
      "backupFeed": {
        "maxDeviationP": 0,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.05,
      "pnlSpreadP": 0.1,
      "leverages": {
        "minLeverage": 1,
        "maxLeverage": 25,
        "pnlMinLeverage": 1,
        "pnlMaxLeverage": 25
      },
      "priceImpactMultiplier": 1.2,
      "skewImpactMultiplier": 1,
      "groupIndex": 5,
      "feeIndex": 72,
      "values": {
        "maxGainP": 500,
        "maxSlP": 80,
        "maxLongOiP": 100,
        "maxShortOiP": 100,
        "groupOpenInterestPercentageP": 50,
        "maxWalletOIP": 15,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 50,
        "maxWalletOI": 15
      },
      "from": "VIRTUAL",
      "to": "USD",
      "timer": {
        "numTiers": 2,
        "positionSizeToThresholdTierMap": {
          "0": 0,
          "1": 50000
        },
        "thresholdTierToTimerMap": {
          "0": 0,
          "1": 180
        }
      },
      "openInterest": {
        "long": 25287.67,
        "short": 25448.55
      },
      "marginFee": {
        "long": 0.00228310502283105,
        "short": 0.00228310502283105
      },
      "pairOI": 50736.22,
      "pairMaxOI": 4256039.08,
      "maxWalletOI": 14364131.89,
      "pairParams": {
        "onePercentDepthAbove": 313237.856,
        "onePercentDepthBelow": 216399.304
      },
      "blockOILimit": 2500000,
      "storagePairParams": {
        "posSpreadCap": 5,
        "negSpreadCap": 100000,
        "isPnlTypeAllowed": 0,
        "pnlPriceImpactMultiplier": 0,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 0,
        "minBorrowFee": 20
      },
      "openFeeP": 0.045,
      "closeFeeP": 0.045,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 10,
      "pnlFees": {
        "numTiers": 10,
        "tierP": [
          1,
          5,
          25,
          50,
          100,
          250,
          500,
          1500,
          2500,
          3000
        ],
        "feesP": [
          80,
          50,
          45,
          37.5,
          27.5,
          25,
          25,
          22.5,
          15,
          2.5
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 10,
        "2": 10,
        "3": 10
      },
      "skewEqParams": [
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 72,
      "pairSpreadP": 0.05,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 10,
      "pairMinLeverage": 1
    },
    "73": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 5,
        "feedId": "0xd2db4dbf1aea74e0f666b0e8f73b9580d407f5e5cf931940b06dc633d7a95906",
        "attributes": {
          "symbol": "FX.USD/BRL",
          "asset_type": "FX",
          "is_open": true,
          "next_open": 1758801600,
          "next_close": 1758747600,
          "schedule": "America/New_York;0800-1700,0800-1700,0800-1700,0800-1700,0800-1700,C,C;1225/C,0101/C"
        }
      },
      "backupFeed": {
        "maxDeviationP": 0,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.03,
      "pnlSpreadP": 0.03,
      "leverages": {
        "minLeverage": 2,
        "maxLeverage": 50,
        "pnlMinLeverage": 2,
        "pnlMaxLeverage": 500
      },
      "priceImpactMultiplier": 0,
      "skewImpactMultiplier": 0,
      "groupIndex": 2,
      "feeIndex": 73,
      "values": {
        "maxGainP": 500,
        "maxSlP": 80,
        "maxLongOiP": 50,
        "maxShortOiP": 50,
        "groupOpenInterestPercentageP": 10,
        "maxWalletOIP": 50,
        "isUSDCAligned": true,
        "groupOpenInterestPecentage": 10,
        "maxWalletOI": 50
      },
      "from": "USD",
      "to": "BRL",
      "timer": {
        "numTiers": 3,
        "positionSizeToThresholdTierMap": {
          "0": 0,
          "1": 10000,
          "2": 50000
        },
        "thresholdTierToTimerMap": {
          "0": 180,
          "1": 300,
          "2": 600
        }
      },
      "openInterest": {
        "long": 163726.18,
        "short": 96000
      },
      "marginFee": {
        "long": 0.0006759,
        "short": 0.00070812
      },
      "pairOI": 259726.18,
      "pairMaxOI": 957608.79,
      "maxWalletOI": 47880439.62,
      "pairParams": {
        "onePercentDepthAbove": 1000000,
        "onePercentDepthBelow": 1000000
      },
      "blockOILimit": 2500000,
      "storagePairParams": {
        "posSpreadCap": 2.5,
        "negSpreadCap": 25,
        "isPnlTypeAllowed": 0,
        "pnlPriceImpactMultiplier": 0,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 0,
        "minBorrowFee": 5
      },
      "openFeeP": 0.03,
      "closeFeeP": 0,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 300,
      "pnlFees": {
        "numTiers": 9,
        "tierP": [
          0.5,
          1,
          2,
          5,
          10,
          20,
          50,
          100,
          500
        ],
        "feesP": [
          80,
          80,
          60,
          50,
          40,
          30,
          20,
          20,
          20
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 5,
        "2": 5,
        "3": 5
      },
      "skewEqParams": [
        [
          -5,
          500
        ],
        [
          -5,
          500
        ],
        [
          -5,
          500
        ],
        [
          -5,
          500
        ],
        [
          0,
          300
        ],
        [
          0,
          300
        ],
        [
          -5,
          600
        ],
        [
          -5,
          600
        ],
        [
          -5,
          600
        ],
        [
          -5,
          600
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 55,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 55,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 73,
      "pairSpreadP": 0.03,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 300,
      "pairMinLeverage": 2
    },
    "74": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 5,
        "feedId": "0x6693afcd49878bbd622e46bd805e7177932cf6ab0b1c91b135d71151b9207433",
        "attributes": {
          "symbol": "FX.USD/IDR",
          "asset_type": "FX",
          "is_open": true,
          "next_open": 1758751200,
          "next_close": 1758747600,
          "schedule": "America/New_York;0000-1700&1800-2400,0000-1700&1800-2400,0000-1700&1800-2400,0000-1700&1800-2400,0000-1700,C,1800-2400;1224/0000-1700,1225/1800-2400,1231/0000-1700,0101/1800-2400"
        }
      },
      "backupFeed": {
        "maxDeviationP": 0,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.03,
      "pnlSpreadP": 0.03,
      "leverages": {
        "minLeverage": 2,
        "maxLeverage": 50,
        "pnlMinLeverage": 2,
        "pnlMaxLeverage": 500
      },
      "priceImpactMultiplier": 0,
      "skewImpactMultiplier": 0,
      "groupIndex": 2,
      "feeIndex": 74,
      "values": {
        "maxGainP": 500,
        "maxSlP": 80,
        "maxLongOiP": 50,
        "maxShortOiP": 50,
        "groupOpenInterestPercentageP": 10,
        "maxWalletOIP": 50,
        "isUSDCAligned": true,
        "groupOpenInterestPecentage": 10,
        "maxWalletOI": 50
      },
      "from": "USD",
      "to": "IDR",
      "timer": {
        "numTiers": 3,
        "positionSizeToThresholdTierMap": {
          "0": 0,
          "1": 10000,
          "2": 50000
        },
        "thresholdTierToTimerMap": {
          "0": 180,
          "1": 300,
          "2": 600
        }
      },
      "openInterest": {
        "long": 0,
        "short": 0
      },
      "marginFee": {
        "long": 0.0005707762557077625,
        "short": 0.0005707762557077625
      },
      "pairOI": 0,
      "pairMaxOI": 957608.79,
      "maxWalletOI": 47880439.62,
      "pairParams": {
        "onePercentDepthAbove": 1000000,
        "onePercentDepthBelow": 1000000
      },
      "blockOILimit": 2500000,
      "storagePairParams": {
        "posSpreadCap": 2.5,
        "negSpreadCap": 25,
        "isPnlTypeAllowed": 0,
        "pnlPriceImpactMultiplier": 0,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 0,
        "minBorrowFee": 5
      },
      "openFeeP": 0.03,
      "closeFeeP": 0,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 300,
      "pnlFees": {
        "numTiers": 9,
        "tierP": [
          0.5,
          1,
          2,
          5,
          10,
          20,
          50,
          100,
          500
        ],
        "feesP": [
          80,
          80,
          60,
          50,
          40,
          30,
          20,
          20,
          20
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 5,
        "2": 5,
        "3": 5
      },
      "skewEqParams": [
        [
          -5,
          500
        ],
        [
          -5,
          500
        ],
        [
          -5,
          500
        ],
        [
          -5,
          500
        ],
        [
          0,
          300
        ],
        [
          0,
          300
        ],
        [
          -5,
          600
        ],
        [
          -5,
          600
        ],
        [
          -5,
          600
        ],
        [
          -5,
          600
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 55,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 55,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 74,
      "pairSpreadP": 0.03,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 300,
      "pairMinLeverage": 2
    },
    "75": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 15,
        "feedId": "0x7a01fca212788bba7c5bf8c9efd576a8a722f070d2c17596ff7bb609b8d5c3b9",
        "attributes": {
          "symbol": "Crypto.PUMP/USD",
          "asset_type": "Crypto",
          "is_open": true,
          "next_open": 0,
          "next_close": 0,
          "schedule": "America/New_York;O,O,O,O,O,O,O;"
        }
      },
      "backupFeed": {
        "maxDeviationP": 1,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.05,
      "pnlSpreadP": 0,
      "leverages": {
        "minLeverage": 1,
        "maxLeverage": 5,
        "pnlMinLeverage": 1,
        "pnlMaxLeverage": 50
      },
      "priceImpactMultiplier": 1.2,
      "skewImpactMultiplier": 1,
      "groupIndex": 4,
      "feeIndex": 75,
      "values": {
        "maxGainP": 500,
        "maxSlP": 80,
        "maxLongOiP": 100,
        "maxShortOiP": 100,
        "groupOpenInterestPercentageP": 15,
        "maxWalletOIP": 50,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 15,
        "maxWalletOI": 50
      },
      "from": "PUMP",
      "to": "USD",
      "timer": {
        "numTiers": 2,
        "positionSizeToThresholdTierMap": {
          "0": 0,
          "1": 50000
        },
        "thresholdTierToTimerMap": {
          "0": 0,
          "1": 180
        }
      },
      "openInterest": {
        "long": 38059.56,
        "short": 29476.93
      },
      "marginFee": {
        "long": 0.00228310502283105,
        "short": 0.00228310502283105
      },
      "pairOI": 67536.49,
      "pairMaxOI": 638405.86,
      "maxWalletOI": 47880439.62,
      "pairParams": {
        "onePercentDepthAbove": 100000,
        "onePercentDepthBelow": 100000
      },
      "blockOILimit": 2500000,
      "storagePairParams": {
        "posSpreadCap": 5,
        "negSpreadCap": 100000,
        "isPnlTypeAllowed": 0,
        "pnlPriceImpactMultiplier": 0,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 0,
        "minBorrowFee": 20
      },
      "openFeeP": 0.045,
      "closeFeeP": 0.045,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 200,
      "pnlFees": {
        "numTiers": 10,
        "tierP": [
          1,
          5,
          25,
          50,
          100,
          250,
          500,
          1500,
          2500,
          3000
        ],
        "feesP": [
          80,
          50,
          45,
          37.5,
          27.5,
          25,
          25,
          22.5,
          15,
          2.5
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 5,
        "2": 5,
        "3": 5
      },
      "skewEqParams": [
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 75,
      "pairSpreadP": 0.05,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 200,
      "pairMinLeverage": 1
    },
    "76": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 15,
        "feedId": "0x93eacee7286be62044cd8dfbdfdf1bea8f52a3ca6e0f512f4a05bd383f5666b1",
        "attributes": {
          "symbol": "Crypto.ZORA/USD",
          "asset_type": "Crypto",
          "is_open": true,
          "next_open": 0,
          "next_close": 0,
          "schedule": "America/New_York;O,O,O,O,O,O,O;"
        }
      },
      "backupFeed": {
        "maxDeviationP": 1,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.05,
      "pnlSpreadP": 0,
      "leverages": {
        "minLeverage": 1,
        "maxLeverage": 25,
        "pnlMinLeverage": 1,
        "pnlMaxLeverage": 25
      },
      "priceImpactMultiplier": 1.2,
      "skewImpactMultiplier": 0.1,
      "groupIndex": 5,
      "feeIndex": 76,
      "values": {
        "maxGainP": 500,
        "maxSlP": 80,
        "maxLongOiP": 50,
        "maxShortOiP": 50,
        "groupOpenInterestPercentageP": 50,
        "maxWalletOIP": 50,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 50,
        "maxWalletOI": 50
      },
      "from": "ZORA",
      "to": "USD",
      "timer": {
        "numTiers": 2,
        "positionSizeToThresholdTierMap": {
          "0": 0,
          "1": 50000
        },
        "thresholdTierToTimerMap": {
          "0": 0,
          "1": 180
        }
      },
      "openInterest": {
        "long": 26208.91,
        "short": 75411.3
      },
      "marginFee": {
        "long": 0.00275544,
        "short": 0.01117404
      },
      "pairOI": 101620.21,
      "pairMaxOI": 4256039.08,
      "maxWalletOI": 47880439.62,
      "pairParams": {
        "onePercentDepthAbove": 300000,
        "onePercentDepthBelow": 300000
      },
      "blockOILimit": 2500000,
      "storagePairParams": {
        "posSpreadCap": 5,
        "negSpreadCap": 100000,
        "isPnlTypeAllowed": 0,
        "pnlPriceImpactMultiplier": 0,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 0,
        "minBorrowFee": 20
      },
      "openFeeP": 0.045,
      "closeFeeP": 0.045,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 10,
      "pnlFees": {
        "numTiers": 10,
        "tierP": [
          1,
          5,
          25,
          50,
          100,
          250,
          500,
          1500,
          2500,
          3000
        ],
        "feesP": [
          80,
          50,
          45,
          37.5,
          27.5,
          25,
          25,
          22.5,
          15,
          2.5
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 5,
        "2": 5,
        "3": 5
      },
      "skewEqParams": [
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 76,
      "pairSpreadP": 0.05,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 10,
      "pairMinLeverage": 1
    },
    "77": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 15,
        "feedId": "0x489f02f2f13584026d63fd397c80ed3b414a2820c4d43da0306fc007fcd5a8e0",
        "attributes": {
          "symbol": "FX.USD/TWD",
          "asset_type": "FX",
          "is_open": true,
          "next_open": 1758751200,
          "next_close": 1758747600,
          "schedule": "America/New_York;0000-1700&1800-2400,0000-1700&1800-2400,0000-1700&1800-2400,0000-1700&1800-2400,0000-1700,C,1800-2400;1224/0000-1700,1225/1800-2400,1231/0000-1700,0101/1800-2400"
        }
      },
      "backupFeed": {
        "maxDeviationP": 1,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.03,
      "pnlSpreadP": 0,
      "leverages": {
        "minLeverage": 2,
        "maxLeverage": 50,
        "pnlMinLeverage": 2,
        "pnlMaxLeverage": 50
      },
      "priceImpactMultiplier": 0,
      "skewImpactMultiplier": 0,
      "groupIndex": 2,
      "feeIndex": 77,
      "values": {
        "maxGainP": 500,
        "maxSlP": 80,
        "maxLongOiP": 50,
        "maxShortOiP": 50,
        "groupOpenInterestPercentageP": 10,
        "maxWalletOIP": 50,
        "isUSDCAligned": true,
        "groupOpenInterestPecentage": 10,
        "maxWalletOI": 50
      },
      "from": "USD",
      "to": "TWD",
      "timer": {
        "numTiers": 3,
        "positionSizeToThresholdTierMap": {
          "0": 0,
          "1": 10000,
          "2": 50000
        },
        "thresholdTierToTimerMap": {
          "0": 180,
          "1": 300,
          "2": 600
        }
      },
      "openInterest": {
        "long": 45.52,
        "short": 0
      },
      "marginFee": {
        "long": 0.00058392,
        "short": 0.0005707762557077625
      },
      "pairOI": 45.52,
      "pairMaxOI": 957608.79,
      "maxWalletOI": 47880439.62,
      "pairParams": {
        "onePercentDepthAbove": 100000,
        "onePercentDepthBelow": 100000
      },
      "blockOILimit": 2500000,
      "storagePairParams": {
        "posSpreadCap": 2.5,
        "negSpreadCap": 25,
        "isPnlTypeAllowed": 0,
        "pnlPriceImpactMultiplier": 0,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 0,
        "minBorrowFee": 5
      },
      "openFeeP": 0.045,
      "closeFeeP": 0.045,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 10,
      "pnlFees": {
        "numTiers": 10,
        "tierP": [
          1,
          5,
          25,
          50,
          100,
          250,
          500,
          1500,
          2500,
          3000
        ],
        "feesP": [
          80,
          50,
          45,
          37.5,
          27.5,
          25,
          25,
          22.5,
          15,
          2.5
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 10,
        "2": 10,
        "3": 10
      },
      "skewEqParams": [
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 77,
      "pairSpreadP": 0.03,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 10,
      "pairMinLeverage": 2
    },
    "78": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 15,
        "feedId": "0x19e09bb805456ada3979a7d1cbb4b6d63babc3a0f8e8a9509f68afa5c4c11cd5",
        "attributes": {
          "symbol": "Equity.US.SPY/USD",
          "asset_type": "Equity",
          "is_open": true,
          "next_open": 1758807000,
          "next_close": 1758744000,
          "schedule": "America/New_York;0930-1600,0930-1600,0930-1600,0930-1600,0930-1600,C,C;0526/C,0619/C,0703/0930-1300,0704/C,0901/C"
        }
      },
      "backupFeed": {
        "maxDeviationP": 1,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.02,
      "pnlSpreadP": 0,
      "leverages": {
        "minLeverage": 1,
        "maxLeverage": 100,
        "pnlMinLeverage": 1,
        "pnlMaxLeverage": 100
      },
      "priceImpactMultiplier": 0,
      "skewImpactMultiplier": 0,
      "groupIndex": 6,
      "feeIndex": 78,
      "values": {
        "maxGainP": 1000,
        "maxSlP": 80,
        "maxLongOiP": 50,
        "maxShortOiP": 50,
        "groupOpenInterestPercentageP": 50,
        "maxWalletOIP": 50,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 50,
        "maxWalletOI": 50
      },
      "from": "SPY",
      "to": "USD",
      "timer": {
        "numTiers": 1,
        "positionSizeToThresholdTierMap": {
          "0": 0
        },
        "thresholdTierToTimerMap": {
          "0": 0
        }
      },
      "openInterest": {
        "long": 1575993.5,
        "short": 2074355.47
      },
      "marginFee": {
        "long": 0.0005707762557077625,
        "short": 0.0005707762557077625
      },
      "pairOI": 3650348.98,
      "pairMaxOI": 18620170.96,
      "maxWalletOI": 47880439.62,
      "pairParams": {
        "onePercentDepthAbove": 100000,
        "onePercentDepthBelow": 100000
      },
      "blockOILimit": 5000000,
      "storagePairParams": {
        "posSpreadCap": 0,
        "negSpreadCap": 100000,
        "isPnlTypeAllowed": 0,
        "pnlPriceImpactMultiplier": 0,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 0,
        "minBorrowFee": 5
      },
      "openFeeP": 0.06,
      "closeFeeP": 0,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 10,
      "pnlFees": {
        "numTiers": 10,
        "tierP": [
          1,
          5,
          25,
          50,
          100,
          250,
          500,
          1500,
          2500,
          3000
        ],
        "feesP": [
          80,
          50,
          45,
          37.5,
          27.5,
          25,
          25,
          22.5,
          15,
          2.5
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 10,
        "2": 10,
        "3": 10
      },
      "skewEqParams": [
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 78,
      "pairSpreadP": 0.02,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 10,
      "pairMinLeverage": 1
    },
    "79": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 15,
        "feedId": "0x9695e2b96ea7b3859da9ed25b7a46a920a776e2fdae19a7bcfdf2b219230452d",
        "attributes": {
          "symbol": "Equity.US.QQQ/USD",
          "asset_type": "Equity",
          "is_open": true,
          "next_open": 1758807000,
          "next_close": 1758744000,
          "schedule": "America/New_York;0930-1600,0930-1600,0930-1600,0930-1600,0930-1600,C,C;0526/C,0619/C,0703/0930-1300,0704/C,0901/C"
        }
      },
      "backupFeed": {
        "maxDeviationP": 1,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.02,
      "pnlSpreadP": 0,
      "leverages": {
        "minLeverage": 1,
        "maxLeverage": 100,
        "pnlMinLeverage": 1,
        "pnlMaxLeverage": 100
      },
      "priceImpactMultiplier": 0,
      "skewImpactMultiplier": 0,
      "groupIndex": 6,
      "feeIndex": 79,
      "values": {
        "maxGainP": 1000,
        "maxSlP": 80,
        "maxLongOiP": 50,
        "maxShortOiP": 50,
        "groupOpenInterestPercentageP": 50,
        "maxWalletOIP": 50,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 50,
        "maxWalletOI": 50
      },
      "from": "QQQ",
      "to": "USD",
      "timer": {
        "numTiers": 1,
        "positionSizeToThresholdTierMap": {
          "0": 0
        },
        "thresholdTierToTimerMap": {
          "0": 0
        }
      },
      "openInterest": {
        "long": 3141235.35,
        "short": 3137989.9
      },
      "marginFee": {
        "long": 0.0005707762557077625,
        "short": 0.0005707762557077625
      },
      "pairOI": 6279225.25,
      "pairMaxOI": 18620170.96,
      "maxWalletOI": 47880439.62,
      "pairParams": {
        "onePercentDepthAbove": 100000,
        "onePercentDepthBelow": 100000
      },
      "blockOILimit": 5000000,
      "storagePairParams": {
        "posSpreadCap": 0,
        "negSpreadCap": 100000,
        "isPnlTypeAllowed": 0,
        "pnlPriceImpactMultiplier": 0,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 0,
        "minBorrowFee": 5
      },
      "openFeeP": 0.06,
      "closeFeeP": 0,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 10,
      "pnlFees": {
        "numTiers": 10,
        "tierP": [
          1,
          5,
          25,
          50,
          100,
          250,
          500,
          1500,
          2500,
          3000
        ],
        "feesP": [
          80,
          50,
          45,
          37.5,
          27.5,
          25,
          25,
          22.5,
          15,
          2.5
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 10,
        "2": 10,
        "3": 10
      },
      "skewEqParams": [
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 79,
      "pairSpreadP": 0.02,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 10,
      "pairMinLeverage": 1
    },
    "80": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 15,
        "feedId": "0xfee33f2a978bf32dd6b662b65ba8083c6773b494f8401194ec1870c640860245",
        "attributes": {
          "symbol": "Equity.US.COIN/USD",
          "asset_type": "Equity",
          "is_open": true,
          "next_open": 1758807000,
          "next_close": 1758744000,
          "schedule": "America/New_York;0930-1600,0930-1600,0930-1600,0930-1600,0930-1600,C,C;0526/C,0619/C,0703/0930-1300,0704/C,0901/C"
        }
      },
      "backupFeed": {
        "maxDeviationP": 1,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.05,
      "pnlSpreadP": 0,
      "leverages": {
        "minLeverage": 1,
        "maxLeverage": 25,
        "pnlMinLeverage": 1,
        "pnlMaxLeverage": 100
      },
      "priceImpactMultiplier": 0,
      "skewImpactMultiplier": 0,
      "groupIndex": 6,
      "feeIndex": 80,
      "values": {
        "maxGainP": 1000,
        "maxSlP": 80,
        "maxLongOiP": 50,
        "maxShortOiP": 50,
        "groupOpenInterestPercentageP": 8,
        "maxWalletOIP": 50,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 8,
        "maxWalletOI": 50
      },
      "from": "COIN",
      "to": "USD",
      "timer": {
        "numTiers": 1,
        "positionSizeToThresholdTierMap": {
          "0": 0
        },
        "thresholdTierToTimerMap": {
          "0": 0
        }
      },
      "openInterest": {
        "long": 255773.54,
        "short": 205644.53
      },
      "marginFee": {
        "long": 0.001141552511415525,
        "short": 0.001141552511415525
      },
      "pairOI": 461418.08,
      "pairMaxOI": 2979227.35,
      "maxWalletOI": 47880439.62,
      "pairParams": {
        "onePercentDepthAbove": 100000,
        "onePercentDepthBelow": 100000
      },
      "blockOILimit": 5000000,
      "storagePairParams": {
        "posSpreadCap": 0,
        "negSpreadCap": 100000,
        "isPnlTypeAllowed": 0,
        "pnlPriceImpactMultiplier": 0,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 0,
        "minBorrowFee": 10
      },
      "openFeeP": 0.06,
      "closeFeeP": 0,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 10,
      "pnlFees": {
        "numTiers": 10,
        "tierP": [
          1,
          5,
          25,
          50,
          100,
          250,
          500,
          1500,
          2500,
          3000
        ],
        "feesP": [
          80,
          50,
          45,
          37.5,
          27.5,
          25,
          25,
          22.5,
          15,
          2.5
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 5,
        "2": 5,
        "3": 5
      },
      "skewEqParams": [
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 80,
      "pairSpreadP": 0.05,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 10,
      "pairMinLeverage": 1
    },
    "81": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 15,
        "feedId": "0xb1073854ed24cbc755dc527418f52b7d271f6cc967bbf8d8129112b18860a593",
        "attributes": {
          "symbol": "Equity.US.NVDA/USD",
          "asset_type": "Equity",
          "is_open": true,
          "next_open": 1758807000,
          "next_close": 1758744000,
          "schedule": "America/New_York;0930-1600,0930-1600,0930-1600,0930-1600,0930-1600,C,C;0526/C,0619/C,0703/0930-1300,0704/C,0901/C"
        }
      },
      "backupFeed": {
        "maxDeviationP": 1,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.05,
      "pnlSpreadP": 0,
      "leverages": {
        "minLeverage": 1,
        "maxLeverage": 25,
        "pnlMinLeverage": 1,
        "pnlMaxLeverage": 25
      },
      "priceImpactMultiplier": 0,
      "skewImpactMultiplier": 0,
      "groupIndex": 6,
      "feeIndex": 81,
      "values": {
        "maxGainP": 1000,
        "maxSlP": 80,
        "maxLongOiP": 50,
        "maxShortOiP": 50,
        "groupOpenInterestPercentageP": 8,
        "maxWalletOIP": 50,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 8,
        "maxWalletOI": 50
      },
      "from": "NVDA",
      "to": "USD",
      "timer": {
        "numTiers": 1,
        "positionSizeToThresholdTierMap": {
          "0": 0
        },
        "thresholdTierToTimerMap": {
          "0": 0
        }
      },
      "openInterest": {
        "long": 11686.39,
        "short": 11933.98
      },
      "marginFee": {
        "long": 0.001141552511415525,
        "short": 0.001141552511415525
      },
      "pairOI": 23620.37,
      "pairMaxOI": 2979227.35,
      "maxWalletOI": 47880439.62,
      "pairParams": {
        "onePercentDepthAbove": 100000,
        "onePercentDepthBelow": 100000
      },
      "blockOILimit": 5000000,
      "storagePairParams": {
        "posSpreadCap": 0,
        "negSpreadCap": 100000,
        "isPnlTypeAllowed": 0,
        "pnlPriceImpactMultiplier": 0,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 0,
        "minBorrowFee": 10
      },
      "openFeeP": 0.06,
      "closeFeeP": 0,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 10,
      "pnlFees": {
        "numTiers": 10,
        "tierP": [
          1,
          5,
          25,
          50,
          100,
          250,
          500,
          1500,
          2500,
          3000
        ],
        "feesP": [
          80,
          50,
          45,
          37.5,
          27.5,
          25,
          25,
          22.5,
          15,
          2.5
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 5,
        "2": 5,
        "3": 5
      },
      "skewEqParams": [
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 81,
      "pairSpreadP": 0.05,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 10,
      "pairMinLeverage": 1
    },
    "82": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 15,
        "feedId": "0x49f6b65cb1de6b10eaf75e7c03ca029c306d0357e91b5311b175084a5ad55688",
        "attributes": {
          "symbol": "Equity.US.AAPL/USD",
          "asset_type": "Equity",
          "is_open": true,
          "next_open": 1758807000,
          "next_close": 1758744000,
          "schedule": "America/New_York;0930-1600,0930-1600,0930-1600,0930-1600,0930-1600,C,C;0526/C,0619/C,0703/0930-1300,0704/C,0901/C"
        }
      },
      "backupFeed": {
        "maxDeviationP": 1,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.05,
      "pnlSpreadP": 0,
      "leverages": {
        "minLeverage": 1,
        "maxLeverage": 25,
        "pnlMinLeverage": 1,
        "pnlMaxLeverage": 25
      },
      "priceImpactMultiplier": 0,
      "skewImpactMultiplier": 0,
      "groupIndex": 6,
      "feeIndex": 82,
      "values": {
        "maxGainP": 1000,
        "maxSlP": 80,
        "maxLongOiP": 50,
        "maxShortOiP": 50,
        "groupOpenInterestPercentageP": 8,
        "maxWalletOIP": 50,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 8,
        "maxWalletOI": 50
      },
      "from": "AAPL",
      "to": "USD",
      "timer": {
        "numTiers": 1,
        "positionSizeToThresholdTierMap": {
          "0": 0
        },
        "thresholdTierToTimerMap": {
          "0": 0
        }
      },
      "openInterest": {
        "long": 1623.38,
        "short": 1639.74
      },
      "marginFee": {
        "long": 0.001141552511415525,
        "short": 0.001141552511415525
      },
      "pairOI": 3263.11,
      "pairMaxOI": 2979227.35,
      "maxWalletOI": 47880439.62,
      "pairParams": {
        "onePercentDepthAbove": 100000,
        "onePercentDepthBelow": 100000
      },
      "blockOILimit": 5000000,
      "storagePairParams": {
        "posSpreadCap": 0,
        "negSpreadCap": 100000,
        "isPnlTypeAllowed": 0,
        "pnlPriceImpactMultiplier": 0,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 0,
        "minBorrowFee": 10
      },
      "openFeeP": 0.06,
      "closeFeeP": 0,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 10,
      "pnlFees": {
        "numTiers": 10,
        "tierP": [
          1,
          5,
          25,
          50,
          100,
          250,
          500,
          1500,
          2500,
          3000
        ],
        "feesP": [
          80,
          50,
          45,
          37.5,
          27.5,
          25,
          25,
          22.5,
          15,
          2.5
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 5,
        "2": 5,
        "3": 5
      },
      "skewEqParams": [
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 82,
      "pairSpreadP": 0.05,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 10,
      "pairMinLeverage": 1
    },
    "83": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 15,
        "feedId": "0xb5d0e0fa58a1f8b81498ae670ce93c872d14434b72c364885d4fa1b257cbb07a",
        "attributes": {
          "symbol": "Equity.US.AMZN/USD",
          "asset_type": "Equity",
          "is_open": true,
          "next_open": 1758807000,
          "next_close": 1758744000,
          "schedule": "America/New_York;0930-1600,0930-1600,0930-1600,0930-1600,0930-1600,C,C;0526/C,0619/C,0703/0930-1300,0704/C,0901/C"
        }
      },
      "backupFeed": {
        "maxDeviationP": 1,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.05,
      "pnlSpreadP": 0,
      "leverages": {
        "minLeverage": 1,
        "maxLeverage": 25,
        "pnlMinLeverage": 1,
        "pnlMaxLeverage": 25
      },
      "priceImpactMultiplier": 0,
      "skewImpactMultiplier": 0,
      "groupIndex": 6,
      "feeIndex": 83,
      "values": {
        "maxGainP": 1000,
        "maxSlP": 80,
        "maxLongOiP": 50,
        "maxShortOiP": 50,
        "groupOpenInterestPercentageP": 8,
        "maxWalletOIP": 50,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 8,
        "maxWalletOI": 50
      },
      "from": "AMZN",
      "to": "USD",
      "timer": {
        "numTiers": 1,
        "positionSizeToThresholdTierMap": {
          "0": 0
        },
        "thresholdTierToTimerMap": {
          "0": 0
        }
      },
      "openInterest": {
        "long": 7055.89,
        "short": 7887.61
      },
      "marginFee": {
        "long": 0.001141552511415525,
        "short": 0.001141552511415525
      },
      "pairOI": 14943.5,
      "pairMaxOI": 2979227.35,
      "maxWalletOI": 47880439.62,
      "pairParams": {
        "onePercentDepthAbove": 100000,
        "onePercentDepthBelow": 100000
      },
      "blockOILimit": 5000000,
      "storagePairParams": {
        "posSpreadCap": 0,
        "negSpreadCap": 100000,
        "isPnlTypeAllowed": 0,
        "pnlPriceImpactMultiplier": 0,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 0,
        "minBorrowFee": 10
      },
      "openFeeP": 0.06,
      "closeFeeP": 0,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 10,
      "pnlFees": {
        "numTiers": 10,
        "tierP": [
          1,
          5,
          25,
          50,
          100,
          250,
          500,
          1500,
          2500,
          3000
        ],
        "feesP": [
          80,
          50,
          45,
          37.5,
          27.5,
          25,
          25,
          22.5,
          15,
          2.5
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 5,
        "2": 5,
        "3": 5
      },
      "skewEqParams": [
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 83,
      "pairSpreadP": 0.05,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 10,
      "pairMinLeverage": 1
    },
    "84": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 15,
        "feedId": "0xd0ca23c1cc005e004ccf1db5bf76aeb6a49218f43dac3d4b275e92de12ded4d1",
        "attributes": {
          "symbol": "Equity.US.MSFT/USD",
          "asset_type": "Equity",
          "is_open": true,
          "next_open": 1758807000,
          "next_close": 1758744000,
          "schedule": "America/New_York;0930-1600,0930-1600,0930-1600,0930-1600,0930-1600,C,C;0526/C,0619/C,0703/0930-1300,0704/C,0901/C"
        }
      },
      "backupFeed": {
        "maxDeviationP": 1,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.05,
      "pnlSpreadP": 0,
      "leverages": {
        "minLeverage": 1,
        "maxLeverage": 25,
        "pnlMinLeverage": 1,
        "pnlMaxLeverage": 25
      },
      "priceImpactMultiplier": 0,
      "skewImpactMultiplier": 0,
      "groupIndex": 6,
      "feeIndex": 84,
      "values": {
        "maxGainP": 1000,
        "maxSlP": 80,
        "maxLongOiP": 50,
        "maxShortOiP": 50,
        "groupOpenInterestPercentageP": 8,
        "maxWalletOIP": 50,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 8,
        "maxWalletOI": 50
      },
      "from": "MSFT",
      "to": "USD",
      "timer": {
        "numTiers": 1,
        "positionSizeToThresholdTierMap": {
          "0": 0
        },
        "thresholdTierToTimerMap": {
          "0": 0
        }
      },
      "openInterest": {
        "long": 1609.33,
        "short": 1176.94
      },
      "marginFee": {
        "long": 0.001141552511415525,
        "short": 0.001141552511415525
      },
      "pairOI": 2786.26,
      "pairMaxOI": 2979227.35,
      "maxWalletOI": 47880439.62,
      "pairParams": {
        "onePercentDepthAbove": 100000,
        "onePercentDepthBelow": 100000
      },
      "blockOILimit": 5000000,
      "storagePairParams": {
        "posSpreadCap": 0,
        "negSpreadCap": 100000,
        "isPnlTypeAllowed": 0,
        "pnlPriceImpactMultiplier": 0,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 0,
        "minBorrowFee": 10
      },
      "openFeeP": 0.06,
      "closeFeeP": 0,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 10,
      "pnlFees": {
        "numTiers": 10,
        "tierP": [
          1,
          5,
          25,
          50,
          100,
          250,
          500,
          1500,
          2500,
          3000
        ],
        "feesP": [
          80,
          50,
          45,
          37.5,
          27.5,
          25,
          25,
          22.5,
          15,
          2.5
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 5,
        "2": 5,
        "3": 5
      },
      "skewEqParams": [
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 84,
      "pairSpreadP": 0.05,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 10,
      "pairMinLeverage": 1
    },
    "85": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 15,
        "feedId": "0x78a3e3b8e676a8f73c439f5d749737034b139bbbe899ba5775216fba596607fe",
        "attributes": {
          "symbol": "Equity.US.META/USD",
          "asset_type": "Equity",
          "is_open": true,
          "next_open": 1758807000,
          "next_close": 1758744000,
          "schedule": "America/New_York;0930-1600,0930-1600,0930-1600,0930-1600,0930-1600,C,C;0526/C,0619/C,0703/0930-1300,0704/C,0901/C"
        }
      },
      "backupFeed": {
        "maxDeviationP": 1,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.05,
      "pnlSpreadP": 0,
      "leverages": {
        "minLeverage": 1,
        "maxLeverage": 25,
        "pnlMinLeverage": 1,
        "pnlMaxLeverage": 25
      },
      "priceImpactMultiplier": 0,
      "skewImpactMultiplier": 0,
      "groupIndex": 6,
      "feeIndex": 85,
      "values": {
        "maxGainP": 1000,
        "maxSlP": 80,
        "maxLongOiP": 50,
        "maxShortOiP": 50,
        "groupOpenInterestPercentageP": 8,
        "maxWalletOIP": 50,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 8,
        "maxWalletOI": 50
      },
      "from": "META",
      "to": "USD",
      "timer": {
        "numTiers": 1,
        "positionSizeToThresholdTierMap": {
          "0": 0
        },
        "thresholdTierToTimerMap": {
          "0": 0
        }
      },
      "openInterest": {
        "long": 827.71,
        "short": 1075.16
      },
      "marginFee": {
        "long": 0.001141552511415525,
        "short": 0.001141552511415525
      },
      "pairOI": 1902.87,
      "pairMaxOI": 2979227.35,
      "maxWalletOI": 47880439.62,
      "pairParams": {
        "onePercentDepthAbove": 100000,
        "onePercentDepthBelow": 100000
      },
      "blockOILimit": 5000000,
      "storagePairParams": {
        "posSpreadCap": 0,
        "negSpreadCap": 100000,
        "isPnlTypeAllowed": 0,
        "pnlPriceImpactMultiplier": 0,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 0,
        "minBorrowFee": 10
      },
      "openFeeP": 0.06,
      "closeFeeP": 0,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 10,
      "pnlFees": {
        "numTiers": 10,
        "tierP": [
          1,
          5,
          25,
          50,
          100,
          250,
          500,
          1500,
          2500,
          3000
        ],
        "feesP": [
          80,
          50,
          45,
          37.5,
          27.5,
          25,
          25,
          22.5,
          15,
          2.5
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 5,
        "2": 5,
        "3": 5
      },
      "skewEqParams": [
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 85,
      "pairSpreadP": 0.05,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 10,
      "pairMinLeverage": 1
    },
    "86": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 15,
        "feedId": "0x16dad506d7db8da01c87581c87ca897a012a153557d4d578c3b9c9e1bc0632f1",
        "attributes": {
          "symbol": "Equity.US.TSLA/USD",
          "asset_type": "Equity",
          "is_open": true,
          "next_open": 1758807000,
          "next_close": 1758744000,
          "schedule": "America/New_York;0930-1600,0930-1600,0930-1600,0930-1600,0930-1600,C,C;0526/C,0619/C,0703/0930-1300,0704/C,0901/C"
        }
      },
      "backupFeed": {
        "maxDeviationP": 1,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.05,
      "pnlSpreadP": 0,
      "leverages": {
        "minLeverage": 1,
        "maxLeverage": 25,
        "pnlMinLeverage": 1,
        "pnlMaxLeverage": 25
      },
      "priceImpactMultiplier": 0,
      "skewImpactMultiplier": 0,
      "groupIndex": 6,
      "feeIndex": 86,
      "values": {
        "maxGainP": 1000,
        "maxSlP": 80,
        "maxLongOiP": 50,
        "maxShortOiP": 50,
        "groupOpenInterestPercentageP": 8,
        "maxWalletOIP": 50,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 8,
        "maxWalletOI": 50
      },
      "from": "TSLA",
      "to": "USD",
      "timer": {
        "numTiers": 1,
        "positionSizeToThresholdTierMap": {
          "0": 0
        },
        "thresholdTierToTimerMap": {
          "0": 0
        }
      },
      "openInterest": {
        "long": 54284.54,
        "short": 58472.87
      },
      "marginFee": {
        "long": 0.001141552511415525,
        "short": 0.001141552511415525
      },
      "pairOI": 112757.41,
      "pairMaxOI": 2979227.35,
      "maxWalletOI": 47880439.62,
      "pairParams": {
        "onePercentDepthAbove": 100000,
        "onePercentDepthBelow": 100000
      },
      "blockOILimit": 5000000,
      "storagePairParams": {
        "posSpreadCap": 0,
        "negSpreadCap": 100000,
        "isPnlTypeAllowed": 0,
        "pnlPriceImpactMultiplier": 0,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 0,
        "minBorrowFee": 10
      },
      "openFeeP": 0.06,
      "closeFeeP": 0,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 10,
      "pnlFees": {
        "numTiers": 10,
        "tierP": [
          1,
          5,
          25,
          50,
          100,
          250,
          500,
          1500,
          2500,
          3000
        ],
        "feesP": [
          80,
          50,
          45,
          37.5,
          27.5,
          25,
          25,
          22.5,
          15,
          2.5
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 5,
        "2": 5,
        "3": 5
      },
      "skewEqParams": [
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 86,
      "pairSpreadP": 0.05,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 10,
      "pairMinLeverage": 1
    },
    "87": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 15,
        "feedId": "0xe65ff435be42630439c96396653a342829e877e2aafaeaf1a10d0ee5fd2cf3f2",
        "attributes": {
          "symbol": "Equity.US.GOOG/USD",
          "asset_type": "Equity",
          "is_open": true,
          "next_open": 1758807000,
          "next_close": 1758744000,
          "schedule": "America/New_York;0930-1600,0930-1600,0930-1600,0930-1600,0930-1600,C,C;0526/C,0619/C,0703/0930-1300,0704/C,0901/C"
        }
      },
      "backupFeed": {
        "maxDeviationP": 1,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.05,
      "pnlSpreadP": 0,
      "leverages": {
        "minLeverage": 1,
        "maxLeverage": 25,
        "pnlMinLeverage": 1,
        "pnlMaxLeverage": 25
      },
      "priceImpactMultiplier": 0,
      "skewImpactMultiplier": 0,
      "groupIndex": 6,
      "feeIndex": 87,
      "values": {
        "maxGainP": 1000,
        "maxSlP": 80,
        "maxLongOiP": 50,
        "maxShortOiP": 50,
        "groupOpenInterestPercentageP": 8,
        "maxWalletOIP": 50,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 8,
        "maxWalletOI": 50
      },
      "from": "GOOG",
      "to": "USD",
      "timer": {
        "numTiers": 1,
        "positionSizeToThresholdTierMap": {
          "0": 0
        },
        "thresholdTierToTimerMap": {
          "0": 0
        }
      },
      "openInterest": {
        "long": 10078.9,
        "short": 13054.73
      },
      "marginFee": {
        "long": 0.001141552511415525,
        "short": 0.001141552511415525
      },
      "pairOI": 23133.63,
      "pairMaxOI": 2979227.35,
      "maxWalletOI": 47880439.62,
      "pairParams": {
        "onePercentDepthAbove": 100000,
        "onePercentDepthBelow": 100000
      },
      "blockOILimit": 5000000,
      "storagePairParams": {
        "posSpreadCap": 0,
        "negSpreadCap": 100000,
        "isPnlTypeAllowed": 0,
        "pnlPriceImpactMultiplier": 0,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 0,
        "minBorrowFee": 10
      },
      "openFeeP": 0.06,
      "closeFeeP": 0,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 10,
      "pnlFees": {
        "numTiers": 10,
        "tierP": [
          1,
          5,
          25,
          50,
          100,
          250,
          500,
          1500,
          2500,
          3000
        ],
        "feesP": [
          80,
          50,
          45,
          37.5,
          27.5,
          25,
          25,
          22.5,
          15,
          2.5
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 5,
        "2": 5,
        "3": 5
      },
      "skewEqParams": [
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 87,
      "pairSpreadP": 0.05,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 10,
      "pairMinLeverage": 1
    },
    "88": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 15,
        "feedId": "0xc4aa2587b3d35cd526b8e7827f78399d16c7861f719331869c07e5fa499606d0",
        "attributes": {
          "symbol": "Crypto.AVNT/USD",
          "asset_type": "Crypto",
          "is_open": true,
          "next_open": 0,
          "next_close": 0,
          "schedule": "America/New_York;O,O,O,O,O,O,O;"
        }
      },
      "backupFeed": {
        "maxDeviationP": 0,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.05,
      "pnlSpreadP": 0,
      "leverages": {
        "minLeverage": 1,
        "maxLeverage": 25,
        "pnlMinLeverage": 1,
        "pnlMaxLeverage": 25
      },
      "priceImpactMultiplier": 1.2,
      "skewImpactMultiplier": 0.1,
      "groupIndex": 5,
      "feeIndex": 88,
      "values": {
        "maxGainP": 500,
        "maxSlP": 80,
        "maxLongOiP": 50,
        "maxShortOiP": 50,
        "groupOpenInterestPercentageP": 50,
        "maxWalletOIP": 50,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 50,
        "maxWalletOI": 50
      },
      "from": "AVNT",
      "to": "USD",
      "timer": {
        "numTiers": 2,
        "positionSizeToThresholdTierMap": {
          "0": 0,
          "1": 50000
        },
        "thresholdTierToTimerMap": {
          "0": 0,
          "1": 180
        }
      },
      "openInterest": {
        "long": 2092373.45,
        "short": 1393576.91
      },
      "marginFee": {
        "long": 0.00228310502283105,
        "short": 0.00228310502283105
      },
      "pairOI": 3485950.36,
      "pairMaxOI": 4256039.08,
      "maxWalletOI": 47880439.62,
      "pairParams": {
        "onePercentDepthAbove": 300000,
        "onePercentDepthBelow": 300000
      },
      "blockOILimit": 5000000,
      "storagePairParams": {
        "posSpreadCap": 5,
        "negSpreadCap": 100000,
        "isPnlTypeAllowed": 0,
        "pnlPriceImpactMultiplier": 0,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 0,
        "minBorrowFee": 20
      },
      "openFeeP": 0.045,
      "closeFeeP": 0.045,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 10,
      "pnlFees": {
        "numTiers": 10,
        "tierP": [
          1,
          5,
          25,
          50,
          100,
          250,
          500,
          1500,
          2500,
          3000
        ],
        "feesP": [
          80,
          50,
          45,
          37.5,
          27.5,
          25,
          25,
          22.5,
          15,
          2.5
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 5,
        "2": 5,
        "3": 5
      },
      "skewEqParams": [
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ],
        [
          0,
          450
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 88,
      "pairSpreadP": 0.05,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 10,
      "pairMinLeverage": 1
    },
    "89": {
      "feed": {
        "maxOpenDeviationP": 1,
        "maxCloseDeviationP": 15,
        "feedId": "0xa903b5a82cb572397e3d47595d2889cf80513f5b4cf7a36b513ae10cc8b1e338",
        "attributes": {
          "symbol": "Crypto.ASTER/USD",
          "asset_type": "Crypto",
          "is_open": true,
          "next_open": 0,
          "next_close": 0,
          "schedule": "America/New_York;O,O,O,O,O,O,O;"
        }
      },
      "backupFeed": {
        "maxDeviationP": 1,
        "feedId": "0x0000000000000000000000000000000000000000"
      },
      "spreadP": 0.05,
      "pnlSpreadP": 0,
      "leverages": {
        "minLeverage": 1,
        "maxLeverage": 25,
        "pnlMinLeverage": 1,
        "pnlMaxLeverage": 25
      },
      "priceImpactMultiplier": 1.2,
      "skewImpactMultiplier": 0.1,
      "groupIndex": 5,
      "feeIndex": 89,
      "values": {
        "maxGainP": 500,
        "maxSlP": 80,
        "maxLongOiP": 50,
        "maxShortOiP": 50,
        "groupOpenInterestPercentageP": 20,
        "maxWalletOIP": 50,
        "isUSDCAligned": false,
        "groupOpenInterestPecentage": 20,
        "maxWalletOI": 50
      },
      "from": "ASTER",
      "to": "USD",
      "timer": {
        "numTiers": 2,
        "positionSizeToThresholdTierMap": {
          "0": 0,
          "1": 50000
        },
        "thresholdTierToTimerMap": {
          "0": 0,
          "1": 180
        }
      },
      "openInterest": {
        "long": 175955.46,
        "short": 177292.58
      },
      "marginFee": {
        "long": 0.00228310502283105,
        "short": 0.00228310502283105
      },
      "pairOI": 353248.04,
      "pairMaxOI": 1702415.63,
      "maxWalletOI": 47880439.62,
      "pairParams": {
        "onePercentDepthAbove": 300000,
        "onePercentDepthBelow": 300000
      },
      "blockOILimit": 0,
      "storagePairParams": {
        "posSpreadCap": 5,
        "negSpreadCap": 100000,
        "isPnlTypeAllowed": 0,
        "pnlPriceImpactMultiplier": 0,
        "pnlSkewImpactMultiplier": 0,
        "pnlPosSpreadCap": 0,
        "pnlNegSpreadCap": 0,
        "minBorrowFee": 20
      },
      "openFeeP": 0.06,
      "closeFeeP": 0.06,
      "limitOrderFeeP": 0.01,
      "minLevPosUSDC": 10,
      "pnlFees": {
        "numTiers": 10,
        "tierP": [
          1,
          5,
          25,
          50,
          100,
          250,
          500,
          1500,
          2500,
          3000
        ],
        "feesP": [
          80,
          50,
          45,
          37.5,
          27.5,
          25,
          25,
          22.5,
          15,
          2.5
        ]
      },
      "lossProtectionMultiplier": {
        "0": 0,
        "1": 10,
        "2": 10,
        "3": 10
      },
      "skewEqParams": [
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ],
        [
          0,
          600
        ]
      ],
      "longSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "shortSkewConfig": {
        "0": 0,
        "1": 50,
        "2": 70,
        "3": 80
      },
      "isPairListed": true,
      "index": 89,
      "pairSpreadP": 0.05,
      "pairLimitOrderFeeP": 0.01,
      "pairMinLevPosUSDC": 10,
      "pairMinLeverage": 1
    }
}

export const pairs = Object.entries(pairsData).map(([index, data]) => ({
  pair_index: parseInt(index),
  symbol: data.feed.attributes.symbol,
  asset_type: data.feed.attributes.asset_type,
  is_open: data.feed.attributes.is_open,
  ...data
}));

export function findPairIndex(from: string, to: string = "USD"): number {
  const pair = pairs.find(
    (p) =>
      p.from.toUpperCase() === from.toUpperCase() &&
      p.to.toUpperCase() === to.toUpperCase()
  );

  if (!pair) {
    throw new Error(`Pair ${from}/${to} not found in available pairs`);
  }

  return pair.pair_index;
}

export function getAvailablePairs(): Array<{
  from: string;
  to: string;
  pairIndex: number;
  type: string;
}> {
  return pairs.map(p => ({
    from: p.from,
    to: p.to,
    pairIndex: p.pair_index,
    type: p.asset_type
  }));
}