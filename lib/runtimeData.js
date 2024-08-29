const runtimeData = (function () {

    return {

        // Basic information.
        companyName: "DefaultCompany",
        productName: "Dvoechnik",
        productVersion: "1.0",
        sdkVersion: "3.17.14",
        productDescription: "",

        // File references.
        buildURL: "bin",
        loaderURL: "bin/Dvoechnik_vk_0.14_Web_VKontakte.loader.js",
        dataURL: "bin/Dvoechnik_vk_0.14_Web_VKontakte.data.unityweb",
        frameworkURL: "bin/Dvoechnik_vk_0.14_Web_VKontakte.framework.js.unityweb",
        workerURL: "",
        codeURL: "bin/Dvoechnik_vk_0.14_Web_VKontakte.wasm.unityweb",
        symbolsURL: "",
        streamingURL: "streaming",

        // Visual information.
        logoType: "None",
        iconTextureName: "Dva_Icon_256.png",
        backgroundTextureName: "bg.png",

        // Aspect ratio.
        desktopAspectRatio: 0.5625,
        mobileAspectRatio: 0.5625,

        // Debug mode.
        debugMode: false,

        // Prefs.
        prefsContainerTags: [ "json-data" ],

        // Platform specific scripts.
        wrapperScript: "vkontakteWrapper.js",

        // YandexGames.
        yandexGamesSDK: "/sdk.js",

        // Yandex Ads Network.
        yandexGameId: "",
        yandexBannerId: "",
        yandexInterstitialDesktopId: "",
        yandexInterstitialMobileId: "",
        yandexRewardedDesktopId: "",
        yandexRewardedMobileId: "",

        // GameDistribution.
        gameDistributionId: "",
        gameDistributionPrefix: "mirragames_",

    }

})();