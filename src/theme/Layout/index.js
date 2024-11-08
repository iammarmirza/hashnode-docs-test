/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { useCallback, useEffect, useState } from "react";
import clsx from "clsx";
import ErrorBoundary from "@docusaurus/ErrorBoundary";
import { PageMetadata, ThemeClassNames } from "@docusaurus/theme-common";
import { useKeyboardNavigation } from "@docusaurus/theme-common/internal";
import SkipToContent from "@theme/SkipToContent";
import AnnouncementBar from "@theme/AnnouncementBar";
import Navbar from "@theme/Navbar";
import Footer from "@theme/Footer";
import LayoutProvider from "@theme/Layout/Provider";
import ErrorPageContent from "@theme/ErrorPageContent";
import styles from "./styles.module.css";
import { useLocation } from "@docusaurus/router";
import Head from "@docusaurus/Head";
import ChatBot from "../../components/chat-bot";
import classes from "../../css/cookieModal.module.css";

const TrackingScripts = (
  <>
    {/* //googletagmanager */}
    <script
      strategy="lazyOnload"
      src={`https://www.googletagmanager.com/gtag/js?id=G-L6EYV9EXDM`}
    />
    <script strategy="lazyOnload">
      {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){
                      dataLayer.push(arguments);
                      console.log(dataLayer);
                    }
                    gtag('js', new Date());
                    gtag('config', 'G-L6EYV9EXDM', {
                      page_path: window.location.pathname,
                    });
                    `}
    </script>
    {/* //googletagmanager */}

    {/* koala */}
    <script>
      {`!function(t){if(window.ko)return;window.ko=[],["identify","track","removeListeners","open","on","off","qualify","ready"].forEach(function(t){ko[t]=function(){var n=[].slice.call(arguments);return n.unshift(t),ko.push(n),ko}});var n=document.createElement("script");n.async=!0,n.setAttribute("src","https://cdn.getkoala.com/v1/pk_f417bb286f6a6344028f07b8d9feee3c4cc2/sdk.js"),(document.body || document.head).appendChild(n)}();`}
    </script>
    {/* koala */}

    {/* clarity */}
    <script type="text/javascript">
      {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "m7prpqoc2k");`}
    </script>
    {/* clarity */}

    <script>{`!function () {var reb2b = window.reb2b = window.reb2b || [];if (reb2b.invoked) return;reb2b.invoked = true;reb2b.methods = ["identify", "collect"];reb2b.factory = function (method) {return function () {var args = Array.prototype.slice.call(arguments);args.unshift(method);reb2b.push(args);return reb2b;};};for (var i = 0; i < reb2b.methods.length; i++) {var key = reb2b.methods[i];reb2b[key] = reb2b.factory(key);}reb2b.load = function (key) {var script = document.createElement("script");script.type = "text/javascript";script.async = true;script.src = "https://s3-us-west-2.amazonaws.com/b2bjsstore/b/" + key + "/reb2b.js.gz";var first = document.getElementsByTagName("script")[0];first.parentNode.insertBefore(script, first);};reb2b.SNIPPET_VERSION = "1.0.1";reb2b.load("Y4O7Z0HYVPNX");}();`}</script>

    {/* cd-relay */}
    <script>
      {`
        (function() {
          if (typeof window === 'undefined') return;
          if (typeof window.signals !== 'undefined') return;
          var script = document.createElement('script');
          script.src = 'https://cdn.cr-relay.com/v1/site/26fd34dd-d66c-438d-9687-488baf2483da/signals.js';
          script.async = true;
          window.signals = Object.assign(
            [],
            ['page', 'identify', 'form'].reduce(function (acc, method){
              acc[method] = function () {
                signals.push([method, arguments]);
                return signals;
              };
            return acc;
            }, {})
          );
          document.head.appendChild(script);
        })();`}
    </script>
    {/* cd-relay */}
  </>
);

const CookieConsentModal = (props) => {
  return (
    <div className={classes.container}>
      <div style={{ fontWeight: 600 }}>Cookies Policy</div>
      <div style={{ fontSize: "1rem" }}>
        This website uses cookies to enhance your browsing experience and
        analyze traffic. By clicking "Accept" you consent to the use of cookies
        for these purposes.
      </div>
      <div
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          marginTop: 10,
          display: "flex",
          gap: 16,
        }}
      >
        <button
          className={styles.consentModalDeclineBtn}
          onClick={props.onConsentDeclined}
          style={{ background: "white" }}
        >
          Decline
        </button>
        <button
          className={styles.consentModalAcceptBtn}
          onClick={props.onConsentGiven}
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default function Layout(props) {
  const {
    children,
    noFooter,
    wrapperClassName,
    // Not really layout-related, but kept for convenience/retro-compatibility
    title,
    description,
    pageImage,
  } = props;
  useKeyboardNavigation();

  const location = useLocation();

  const [consentGiven, setConsentGiven] = useState(null);
  const [consentAsked, setConsentAsked] = useState(null);

  useEffect(() => {
    const consentAsked = localStorage?.getItem("consentAsked") || false;
    const storedConsent = localStorage?.getItem("storedConsent") || false;
    setConsentGiven(storedConsent === "true" ? true : false);
    setConsentAsked(consentAsked === "true" ? true : false);
  }, []);

  const onConsentGiven = useCallback(() => {
    setConsentGiven(true);
    setConsentAsked(true);
    localStorage?.setItem("consentAsked", "true");
    localStorage?.setItem("storedConsent", "true");
  }, []);

  const onConsentDeclined = useCallback(() => {
    setConsentGiven(false);
    setConsentAsked(true);
    localStorage?.setItem("consentAsked", "true");
    localStorage?.setItem("storedConsent", "false");
  }, []);

  return (
    <>
      <Head>{consentGiven && TrackingScripts}</Head>
      <LayoutProvider>
        <PageMetadata
          title={title}
          description={description}
          image={pageImage}
        />

        <SkipToContent />

        <AnnouncementBar />

        <Navbar />

        <div
          className={clsx(
            ThemeClassNames.wrapper.main,
            styles.mainWrapper,
            wrapperClassName
          )}
        >
          <ErrorBoundary
            fallback={(params) => <ErrorPageContent {...params} />}
          >
            {consentAsked === false && (
              <CookieConsentModal
                onConsentGiven={onConsentGiven}
                onConsentDeclined={onConsentDeclined}
              />
            )}
            {children}
          </ErrorBoundary>
        </div>
        <div className={styles.chatBotContainer}>
          <ChatBot />
        </div>
        {!noFooter && location.pathname !== "/" && <Footer />}
      </LayoutProvider>
    </>
  );
}
