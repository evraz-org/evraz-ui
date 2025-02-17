import {Apis} from "bitsharesjs-ws";
/** This file centralized customization and branding efforts throughout the whole wallet and is meant to facilitate
 *  the process.
 *
 *  @author Stefan Schiessl <stefan.schiessl@blockchainprojectsbv.com>
 */

/**
 * Determine if we are running on testnet or mainnet
 * @private
 */
function _isTestnet() {
    const testnet =
        "39f5e2ede1f8bc1a3a54a7914414e3779e33193f1f5693510e73cb7a87617447"; // just for the record
    const mainnet =
        "4018d7844c78f6a6c41c6a552b898022310fc5dec06da467ee7905a8dad512c8";

    // treat every other chain as testnet
    return Apis.instance().chain_id !== mainnet;
}

/**
 * Wallet name that is used throughout the UI and also in translations
 * @returns {string}
 */
export function getWalletName() {
    return "Evraz";
}

/**
 * URL of this wallet
 * @returns {string}
 */
export function getWalletURL() {
    return "https://evrazdex.org";
}

/**
 * Returns faucet information
 *
 * @returns {{url: string, show: boolean}}
 */
export function getFaucet() {
    return {
        url: "https://faucet-evrazdex.org", // 2017-12-infrastructure worker proposal
        show: true,
        editable: false,
        referrer: "evraz"
    };
}

export function getTestFaucet() {
    // fixme should be solved by introducing _isTestnet into getFaucet and fixing the mess in the Settings when fetching faucet address
    return {
        url: "https://faucet.testnet.bitshares.eu", // operated as a contribution by BitShares EU
        show: true,
        editable: false
    };
}

/**
 * Logo that is used throughout the UI
 * @returns {*}
 */
export function getLogo() {
    return require("assets/evraz_big.png").default;
    // return "/assets/evraz_big.png";
}

export function getSmallLogo() {
    return require("assets/evraz_small.png").default;
}

/**
 * Default set theme for the UI
 * @returns {string}
 */
export function getDefaultTheme() {
    // possible ["darkTheme", "lightTheme", "midnightTheme"]
    return "midnightTheme";
}

/**
 * Default login method. Either "password" (for cloud login mode) or "wallet" (for local wallet mode)
 * @returns {string}
 */
export function getDefaultLogin() {
    // possible: one of "password", "wallet"
    return "password";
}

/**
 * Default units used by the UI
 *
 * @returns {[string,string,string,string,string,string]}
 */
export function getUnits() {
    if (_isTestnet()) {
        return ["TEST"];
    }
    return ["EVRAZ", "BTS", "USD", "CNY", "BTC", "EUR", "GBP", "RUBLE"];
}

export function getDefaultMarket() {
    if (_isTestnet()) {
        return "USD_TEST";
    }
    return "EVRAZ_BTS";
}

/**
 * These are the highlighted bases in "My Markets" of the exchange
 *
 * @returns {[string]}
 */
export function getMyMarketsBases() {
    if (_isTestnet()) {
        return ["TEST"];
    }
    return [
        "EVRAZ",
        "BTS",
        "EUR",
        "RUBLE",
        "GBP",
        "CNY",
        "JPY",
        "XBTSX.BTC",
        "USDIGI",
        "EUROLUX",
        "ALTIN",
        "ALTIN.TRY",
        "ALTIN.RUB",
        "LEPTA"
    ];
}

/**
 * These are the default quotes that are shown after selecting a base
 *
 * @returns {[string]}
 */
export function getMyMarketsQuotes() {
    if (_isTestnet()) {
        return ["TEST"];
    }
    let tokens = {
        nativeTokens: [
            "EVRAZ",
            "BTC",
            "BTC1.0",
            "BTS",
            "CNY",
            "CNY1.0",
            "EUR",
            "EUR1.0",
            "GOLD",
            "GOLD1.0",
            "RUBLE",
            "RUB1.0",
            "SILVER",
            "SILVER1.0",
            "USD",
            "USD1.0",
            "USDIGI",
            "GBP",
            "JPY",
            "EUROLUX",
            "ALTIN",
            "ALTIN.TRY",
            "ALTIN.RUB"
        ],
        gdexTokens: [],
        openledgerTokens: [],
        rudexTokens: [],
        xbtsxTokens: ["XBTSX.BTC", "XBTSX.USDT", "XBTSX.HIVE", "XBTSX.EOS"]
    };

    let allTokens = [];
    for (let type in tokens) {
        allTokens = allTokens.concat(tokens[type]);
    }
    return allTokens;
}

/**
 * The featured markets displayed on the landing page of the UI
 *
 * @returns {list of string tuples}
 */
export function getFeaturedMarkets(quotes = []) {
    if (_isTestnet()) {
        return [["USD", "TEST"]];
    }
    return [
        ["EVRAZ", "BTS"],
        ["EVRAZ", "RUBLE"],
        ["EVRAZ", "EUR"],
        ["EVRAZ", "CNY"],
        ["EVRAZ", "RUDEX.BTC"],
        ["EVRAZ", "XBTSX.BTC"],
        ["EVRAZ", "CRUDE.NGN"],
        ["USD", "BTS"],
        ["USD", "GOLD"],
        ["USD", "URTHR"],
        ["USD", "SKULD"],
        ["USD", "VERTHANDI"],
        ["CNY", "BTS"],
        ["CNY", "USD"],
        ["CNY", "URTHR"],
        ["CNY", "SKULD"],
        ["CNY", "VERTHANDI"],
        ["BTS", "RUBLE"],
        ["BTS", "SILVER"],
        ["BTS", "GOLD"],
        ["BTS", "XBTSX.BTC"],
        ["BTS", "XBTSX.USDT"],
        ["EVRAZ", "BTS"],
        ["EVRAZ", "RUBLE"],
        ["EVRAZ", "EUR"],
        ["EVRAZ", "CNY"],
        ["EVRAZ", "RUDEX.BTC"],
        ["EVRAZ", "XBTSX.BTC"],
        ["EVRAZ", "CRUDE.NGN"]["BTS"],
        ["BTS", "URTHR"],
        ["BTS", "SKULD"],
        ["BTS", "VERTHANDI"]
    ].filter(a => {
        if (!quotes.length) return true;
        return quotes.indexOf(a[0]) !== -1;
    });
}

/**
 * Recognized namespaces of assets
 *
 * @returns {[string,string,string,string,string,string,string]}
 */
export function getAssetNamespaces() {
    if (_isTestnet()) {
        return [];
    }
    return ["XBTSX.", "GDEX.", "IOB.", "PIRATE."];
}

/**
 * These namespaces will be hidden to the user, this may include "bit" for BitAssets
 * @returns {[string,string]}
 */
export function getAssetHideNamespaces() {
    // e..g "XBTSX.", "bit"
    return [];
}

/**
 * Allowed gateways that the user will be able to choose from in Deposit Withdraw modal
 * @param gateway
 * @returns {boolean}
 */
export function allowedGateway(gateway) {
    const allowedGateways = [
        "TRADE",
        "OPEN", // keep to display the warning icon, permanently disabled in gateways.js
        "RUDEX", // keep to display the warning icon, permanently disabled in gateways.js
        "GDEX",
        "PIRATE",
        "XBTSX",
        "IOB",
        "CITADEL", // keep to display the warning icon, permanently disabled in gateways.js
        "BRIDGE", // keep to display the warning icon, permanently disabled in gateways.js
        "SPARKDEX" // keep to display the warning icon, permanently disabled in gateways.js
    ];
    if (!gateway) {
        // answers the question: are any allowed?
        return allowedGateways.length > 0;
    }
    return allowedGateways.indexOf(gateway) >= 0;
}

export function getSupportedLanguages() {
    // not yet supported
}

export function getAllowedLogins() {
    // possible: list containing any combination of ["password", "wallet"]
    return ["password", "wallet"];
}

export function getConfigurationAsset() {
    let assetSymbol = null;
    if (_isTestnet()) {
        assetSymbol = "NOTIFICATIONS";
    } else {
        assetSymbol = "TEST";
    }
    // explanation will be parsed out of the asset description (via split)
    return {
        symbol: assetSymbol,
        explanation:
            "This asset is used for decentralized configuration of the BitShares UI placed under bitshares.org."
    };
}

export function getHiveNewsTag() {
    return "bitshares";
}
