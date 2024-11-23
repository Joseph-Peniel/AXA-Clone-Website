import { useEffect } from "react";

const ExternalScripts = () => {
    useEffect(() => {
        const loadScript = (src, async = true, defer = true) => {
            return new Promise((resolve, reject) => {
                const script = document.createElement("script");
                script.src = src;
                script.async = async;
                if (defer) script.defer = true;

                script.onload = resolve; // Resolve the promise when the script loads
                script.onerror = reject; // Reject the promise if there's an error

                document.body.appendChild(script);
            });
        };

        const loadScripts = async () => {
            try {
                // Load your scripts
                await loadScript("/js/jquery-3.5.1.min.js?v=ULd4lQnIEYbgH9nzngxN2FUC5Xo");
                await loadScript("/bundles/site.min.js?v=dd0dNc7YcTyk6fDvXIcg_3E9HuE", false, true);
                await loadScript(
                    "/js/jquery.validate.min.js?v=1ZGaNpE8gOg97XVUwNqTZ9gP-O0",
                    false,
                    true
                );
                await loadScript(
                    "/js/jquery.validate.unobtrusive.min.js?v=dEP7O_E2xB_EfOvPRF_MfTbLyww",
                    false,
                    true
                );
                await loadScript("https://www.google.com/recaptcha/api.js", false, true);
                await loadScript("https://code.jquery.com/jquery-3.6.0.min.js", false, true);
                await loadScript(
                    "/js/custom/blog-post.js?v=efR4S1ifLSbyi30Vk0jsm5xRNmE",
                    false,
                    true
                );
                await loadScript(
                    "/js/custom/slick.min.js?v=9BR6bkV3vqt65Ny3hyZ-f-0BZ0g",
                    false,
                    true
                );
                await loadScript(
                    "/js/custom/service-worker-registration.js?v=7LeOrzZvCidSmQeUTTlACVlNu-8",
                    false,
                    true
                );
                // Load Google Tag Manager
                await loadScript(`https://www.googletagmanager.com/gtm.js?id=GTM-5S89G3P`, true);
                // Load Google Analytics
                await loadScript(`https://www.googletagmanager.com/gtag/js?id=G-NWSWLTS78X`, true);

                // Additional scripts with onload handling
                const fundYieldScript = document.createElement("script");
                fundYieldScript.src = "/bundles/site.min.js?v=dd0dNc7YcTyk6fDvXIcg_3E9HuE";
                fundYieldScript.defer = true;
                fundYieldScript.onload = () => {
                    if (typeof FundYield === "function") {
                        FundYield();
                    }
                };
                document.body.appendChild(fundYieldScript);

                // Load additional scripts as needed...
                setTimeout(() => {
                    const smartechScript = document.createElement("script");
                    smartechScript.src = "//tw.netcore.co.in/smartechclient.js";
                    smartechScript.defer = true;
                    smartechScript.onload = () => {
                        smartech("create", "ADGMOT35CHFLVDHBJNIG50K9696IVRIH8USKNPU5ADDPBE68QM5G");
                        smartech("register", "cecb2c3329b1da3140e4bdd4bfb9208e");
                        smartech("identify", "");
                        smartech("dispatch", 1, {});
                    };
                    document.body.appendChild(smartechScript);
                }, 10000);

                // Live chat loading
                const liveChatScript = document.createElement("script");
                liveChatScript.src = "https://cdn.livechatinc.com/tracking.js";
                liveChatScript.defer = true;
                document.body.appendChild(liveChatScript);
            } catch (error) {
                console.error("Error loading scripts:", error);
            }
        };

        loadScripts();

        // Cleanup function to remove scripts when component unmounts (if necessary)
        return () => {
            // Optionally, you can remove scripts if they should not persist
        };
    }, []);

    return null; // This component does not render anything
};

export default ExternalScripts;
