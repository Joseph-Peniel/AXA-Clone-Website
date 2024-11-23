import { useEffect } from "react";

const ExternalScripts = () => {
    useEffect(() => {
        // Function to dynamically load scripts
        const loadScript = (src, async = true, defer = true) => {
            const script = document.createElement("script");
            script.src = src;
            script.async = async;

            // Use the defer parameter if it's passed to the function
            if (defer) {
                script.defer = true;
            }

            document.body.appendChild(script);
        };

        // Load your scripts here
        loadScript("/js/jquery-3.5.1.min.js?v=ULd4lQnIEYbgH9nzngxN2FUC5Xo");
        loadScript("/bundles/site.min.js?v=dd0dNc7YcTyk6fDvXIcg_3E9HuE", false, true);
        loadScript("https://www.google.com/recaptcha/api.js");
        loadScript("https://www.googletagmanager.com/gtag/js?id=G-NWSWLTS78X", true, true);

        // Other initialization code if needed
        window.dataLayer = window.dataLayer || [];
        function gtag() {
            window.dataLayer.push(arguments);
        }
        gtag("js", new Date());
        gtag("config", "G-NWSWLTS78X");
    }, []);

    return null; // Component doesn't render anything
};

export default ExternalScripts;
