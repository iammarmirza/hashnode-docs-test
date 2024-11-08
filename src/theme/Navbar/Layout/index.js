/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { useThemeConfig } from "@docusaurus/theme-common";
import {
  useHideableNavbar,
  useNavbarMobileSidebar,
} from "@docusaurus/theme-common/internal";
import NavbarMobileSidebar from "@theme/Navbar/MobileSidebar";
import styles from "./styles.module.css";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { PlayIcon } from "@heroicons/react/solid";
import { NavHashLink } from "react-router-hash-link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import MobileSidebar from "../MobileSidebar/Layout";
import { useLocation } from "@docusaurus/router";
import NavbarItem from "@theme/NavbarItem";
import Link from "@docusaurus/Link";
import Head from "@docusaurus/Head";
import SearchBar from "@theme/SearchBar";

const navigation = [
  {
    name: "Features",
    href: "/#features",
  },
  { name: "Blog", href: "/blog" },
  { name: "Docs", href: "/docs" },
  { name: "Contact", href: "/contact" },
  { name: "Pricing", href: "https://www.parseable.com/pricing" },
  {
    name: "Join Slack",
    href: "https://join.slack.com/t/parseable/shared_invite/zt-23t505gz7-zX4T10OvkS8RAhnme4gDZQ",
  },
  {
    name: "Github",
    href: "https://github.com/parseablehq/parseable",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function NavbarBackdrop(props) {
  return (
    <div
      role="presentation"
      {...props}
      className={clsx("navbar-sidebar__backdrop", props.className)}
    />
  );
}
export default function NavbarLayout({ children }) {
  const {
    navbar: { hideOnScroll, style },
  } = useThemeConfig();
  const mobileSidebar = useNavbarMobileSidebar();
  const { navbarRef, isNavbarVisible } = useHideableNavbar(hideOnScroll);
  const [current, setCurrent] = useState("/#");
  const location = useLocation();
  const [navColor, setnavColor] = useState("transparent");
  const listenScrollEvent = () => {
    window.scrollY > 10
      ? setnavColor("rgba(255,255,255,0.8)")
      : setnavColor("transparent");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  const [stargazersCount, setStargazersCount] = useState(0);

  useEffect(() => {
    const getCount = async () => {
      const res = await fetch(
        `https://api.github.com/repos/parseablehq/parseable`
      );
      const resJson = await res.json();
      setStargazersCount(resJson.stargazers_count);
    };
    getCount();
  }, []);

  const [consentGiven, setConsentGiven] = useState(null);
  useEffect(() => {
    const storedConsent = localStorage?.getItem("storedConsent") || false;
    setConsentGiven(storedConsent === "true" ? true : false);
  }, []);

  return (
    <>
      <nav
        ref={navbarRef}
        className={clsx(
          "navbar",
          "shadow-bottom--none",
          "padding-vert--none",
          "padding-horiz--none"
        )}
        style={{}}
      >
        {consentGiven && (
          <img
            referrerpolicy="no-referrer-when-downgrade"
            src="https://static.scarf.sh/a.png?x-pxid=7aa9a4f1-4ee2-44cb-87e5-f9284da3a326"
          />
        )}
        <Disclosure
          as="nav"
          style={{
            background: navColor,
            backdropFilter: "blur(10px)",
            borderBottom: "1px solid #ece8f1",
            padding: "0px 10px",
          }}
          className={styles.navbarContainer}
        >
          {({ open }) => (
            <>
              <div className={styles.itemsContainer}>
                <div className={styles.logoContainer}>
                  <div className={styles.menuButtonContainer}>
                    <Disclosure.Button className={styles.toggleButton}>
                      {open ? (
                        <XIcon
                          className={styles.buttonIcon}
                          aria-hidden="true"
                        />
                      ) : (
                        <MenuIcon
                          className={styles.buttonIcon}
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>

                  <a href="/" className={styles.logo}>
                    <img
                      src={useBaseUrl("img/parseable-log.svg")}
                      alt="Workflow"
                    />
                  </a>
                </div>
                <div className={styles.linksContainer}>
                  <a href="/#features" className={styles.link}>
                    <span className={styles.linkText}>Features</span>
                  </a>
                  <a href="/blog" className={styles.link}>
                    <span className={styles.linkText}>Blog</span>
                  </a>
                  <a href="/docs" className={styles.link}>
                    <span className={styles.linkText}>Docs</span>
                  </a>
                  <a href="/pricing" className={styles.link}>
                    <span className={styles.linkText}>Pricing</span>
                  </a>
                  <a href="/contact" className={styles.link}>
                    <span className={styles.linkText}>Contact</span>
                  </a>
                </div>
                <div className={styles.neverHide}>
                  <div className={styles.hideOntablet}>
                    <a
                      target="_blank"
                      href={
                        "https://join.slack.com/t/parseable/shared_invite/zt-23t505gz7-zX4T10OvkS8RAhnme4gDZQ"
                      }
                      className={`${styles.slackButton} ${styles.link}`}
                      style={{ marginLeft: 0 }}
                    >
                      <img
                        width="20px"
                        style={{ marginRight: 8 }}
                        src={useBaseUrl("img/slack.svg")}
                      />
                      <span className={styles.linkText}>Join Slack</span>
                    </a>
                    <a
                      target="_blank"
                      href={"https://github.com/parseablehq/parseable"}
                      className={`${styles.slackButton} ${styles.link}`}
                      style={{
                        color: "#ffffff",
                        marginLeft: 0,
                      }}
                    >
                      <img
                        width="20px"
                        src={useBaseUrl("img/Github.svg")}
                        style={{
                          marginRight: 8,
                        }}
                      />
                      <span className={styles.linkText}>
                        Star on Github{" "}
                        {typeof stargazersCount === "number"
                          ? `| ${(stargazersCount / 1000).toPrecision(2)}k`
                          : ""}
                      </span>
                    </a>
                  </div>
                  <SearchBar />
                </div>
              </div>

              <Disclosure.Panel className={styles.panel}>
                <div className={styles.panelItemContainer}>
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      style={{
                        display: "block",
                        width: "100%",
                        color: "#ffffff",
                      }}
                      className="block  w-full rounded-md"
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name === "Live Demo" ? (
                        <a
                          target={"_blank"}
                          href={item.href}
                          className={styles.panelItem}
                        >
                          {item.name}
                        </a>
                      ) : item.name === "Github" ? (
                        <a
                          target={"_blank"}
                          href={item.href}
                          className={styles.panelItem}
                        >
                          {item.name}
                        </a>
                      ) : (
                        <a href={item.href} activeClassName="phoneActive">
                          <span className={styles.panelItem}>{item.name}</span>
                        </a>
                      )}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <NavbarBackdrop onClick={mobileSidebar.toggle} />
        <MobileSidebar />
      </nav>
    </>
  );
}
