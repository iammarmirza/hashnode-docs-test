/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import clsx from "clsx";
import styles from "./footer.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";

const data = [
  {
    title: "Useful Links",
    links: [
      {
        label: "Features",
        link: "/#features",
        blanK: false,
      },
      {
        label: "Docs",
        link: "/docs",
        blank: false,
      },
      {
        label: "Blog",
        link: "/blog",
        blank: false,
      },
      {
        label: "Contact us",
        link: "/contact",
        blank: false,
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        label: "Contribute",
        link: "/docs/contributing",
        blank: false,
      },

      {
        label: "Changelog",
        link: "https://github.com/parseablehq/parseable/releases",
        blank: true,
      },
      {
        label: "Releases",
        link: "https://github.com/parseablehq/parseable/releases/latest",
        blank: true,
      },
      {
        label: "Privacy policy",
        link: "/docs/privacy-policy",
        blank: false,
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        label: "Join Slack",
        link: "https://join.slack.com/t/parseable/shared_invite/zt-23t505gz7-zX4T10OvkS8RAhnme4gDZQ",
        blank: true,
      },
      {
        label: "Follow on Twitter",
        link: "https://twitter.com/parseablehq",
        blank: true,
      },
      {
        label: "Follow on LinkedIn",
        link: "https://www.linkedin.com/company/parseable/",
        blank: true,
      },
      {
        label: "GitHub discussions",
        link: "https://github.com/orgs/parseablehq/discussions",
        blank: true,
      },
    ],
  },
];

export default function FooterLayout({ style, links, logo, copyright }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(
      "POST",
      "https://36f55c89.sibforms.com/serve/MUIFALVMsCqHkkfB4f8MeMcwq-cDpmLaO_sLR5OCujdBrMGr6uMh-QfF_OklZQrxDLy2_Za2dMYebqiCZe0a-N24CGD0i3XLlhvXUh92YWhZ2-vZQaoTwye1eQQSzChaWNCHWZdLtghOvWwrJnve2nuqy1eeM-kjVkNz3BM8AnYrJFsul8hTV013l1NELZtsnPha7OoomoCchfsT?isAjax=1"
    );
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        alert("Thanks for subscribing!");
      } else {
        console.log("error");
        alert("Something went wrong :(");
      }
    };
    xhr.send(formData);
  };
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <a
        key={index}
        style={{
          fontFamily:
            "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
          WebkitTapHighlightColor: "transparent",
          lineHeight: 1.55,
          textDecoration: "none",
          display: "block",
          color: "rgb(134, 142, 150)",
          fontSize: "0.875rem",
          paddingTop: "0.1875rem",
          paddingBottom: "0.1875rem",
        }}
        href={link.link}
        {...(link?.blank
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {link.label}
      </a>
    ));

    return (
      <div
        key={group.title}
        style={{
          width: "10rem",
        }}
      >
        <p
          style={{
            fontFamily:
              "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
            WebkitTapHighlightColor: "transparent",
            lineHeight: 1.55,
            textDecoration: "none",
            fontSize: "1.125rem",
            fontWeight: 700,
            marginBottom: "0.3125rem",
            color: "rgb(0, 0, 0)",
          }}
        >
          {group.title}
        </p>
        {links}
      </div>
    );
  });
  return (
    <div style={{ border: "1px solid rgb(236, 232, 241)" }}>
      <div
        style={{
          paddingLeft: "1rem",
          paddingRight: "1rem",
          maxWidth: "71.25rem",
          marginLeft: "auto",
          marginRight: "auto",
          paddingTop: "1.5rem",
          paddingBottom: "1.5rem",
        }}
      >
        <h2
          style={{
            fontFamily:
              "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
            WebkitTapHighlightColor: "transparent",
            color: "rgb(0, 0, 0)",
            fontSize: "1.875rem",
            fontWeight: 700,
            lineHeight: 1.35,
            margin: 0,
            marginTop: "0.75rem",
            display: "block",
          }}
        >
          Get Updates from Parseable
        </h2>
        <div
          style={{
            fontFamily:
              "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
            WebkitTapHighlightColor: "transparent",
            color: "inherit",
            fontSize: "inherit",
            lineHeight: 1.55,
            textDecoration: "none",
            marginTop: "0.75rem",
          }}
        >
          Subscribe to keep up with latest news, updates and new features on
          Parseable
        </div>
        <form onSubmit={handleSubmit}>
          <input type="hidden" name="email_address_check" value="" />
          <input type="hidden" name="locale" value="en" />
          <input type="hidden" name="OPT_IN" value="1" />

          <div
            style={{
              fontFamily:
                "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
              lineHeight: 1.55,
              marginTop: "0.75rem",
            }}
          >
            <div
              style={{
                position: "relative",
              }}
            >
              <input
                type="text"
                name="EMAIL"
                placeholder="Enter your email"
                aria-invalid="false"
                style={{
                  fontFamily:
                    "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif",
                  height: "2.625rem",
                  WebkitTapHighlightColor: "transparent",
                  lineHeight: "calc(2.625rem - 0.125rem)",
                  WebkitAppearance: "none",
                  MozAppearance: "none",
                  MsAppearance: "none",
                  appearance: "none",
                  resize: "none",
                  boxSizing: "border-box",
                  fontSize: "1rem",
                  width: "100%",
                  color: "#000",
                  display: "block",
                  textAlign: "left",
                  border: "0.0625rem solid #ced4da",
                  backgroundColor: "#ffffff",
                  WebkitTransition: "border-color 100ms ease",
                  transition: "border-color 100ms ease",
                  minHeight: "2.625rem",
                  paddingLeft: "calc(2.625rem / 3)",
                  paddingRight: "2.625rem",
                  borderRadius: "2rem",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  right: 0,
                  display: "flex",
                  WebkitBoxAlign: "center",
                  alignItems: "center",
                  WebkitBoxPack: "center",
                  justifyContent: "center",
                  width: "2.625rem",
                }}
              >
                <button
                  type="submit"
                  value="submit"
                  style={{
                    WebkitTapHighlightColor: "transparent",
                    fontFamily:
                      "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
                    cursor: "pointer",
                    border: 0,
                    padding: 0,
                    WebkitAppearance: "none",
                    MozAppearance: "none",
                    MsAppearance: "none",
                    appearance: "none",
                    fontSize: "1rem",
                    backgroundColor: "transparent",
                    textAlign: "left",
                    color: "#000",
                    WebkitTextDecoration: "none",
                    textDecoration: "none",
                    boxSizing: "border-box",
                    position: "relative",
                    borderRadius: "2rem",
                    padding: 0,
                    lineHeight: 1,
                    display: "flex",
                    WebkitBoxAlign: "center",
                    alignItems: "center",
                    WebkitBoxPack: "center",
                    justifyContent: "center",
                    height: "2rem",
                    minHeight: "2rem",
                    width: "2rem",
                    minWidth: "2rem",
                    border: "0.0625rem solid transparent",
                    backgroundColor: "#464cc4",
                    color: "#ffffff",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      width: "1.125rem",
                      height: "1.125rem",
                    }}
                  >
                    <path d="M5 12l14 0"></path>
                    <path d="M13 18l6 -6"></path>
                    <path d="M13 6l6 6"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <footer>
        <div className={styles.container}>
          <div className={styles.logo}>
            <img
              style={{
                width: "9.1875rem",
              }}
              src={useBaseUrl("img/parseable-log.svg")}
              alt={""}
            />
            <p className={styles.logoText}>
              Parseable is a high performance, open source, and easy to use log
              analytics platform.
            </p>
            <br />
            <p className={styles.logoText}>
              Parseable, Inc. 584 Castro St, #2112 San Francisco, CA 94114-2512
            </p>
          </div>
          <div className={styles.rest}>{groups}</div>
        </div>
        <div className={styles.container}>
          <p
            style={{
              fontFamily:
                "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
              WebkitTapHighlightColor: "transparent",
              color: "rgb(134, 142, 150)",
              fontSize: "0.875rem",
              lineHeight: 1.55,
              textDecoration: "none",
            }}
          >
            © 2024 Parseable, Inc. All rights reserved.
          </p>
          <div
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexFlow: "row",
              WebkitBoxAlign: "center",
              alignItems: "center",
              WebkitBoxPack: "end",
              justifyContent: "flex-end",
              gap: "0rem",
            }}
          >
            <a
              style={{
                WebkitTapHighlightColor: "transparent",
                fontFamily:
                  "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
                cursor: "pointer",
                appearance: "none",
                fontSize: "1rem",
                textAlign: "left",
                textDecoration: "none",
                boxSizing: "border-box",
                position: "relative",
                borderRadius: "0.5rem",
                padding: "0px",
                lineHeight: 1,
                display: "flex",
                WebkitBoxAlign: "center",
                alignItems: "center",
                WebkitBoxPack: "center",
                justifyContent: "center",
                height: "2.125rem",
                minHeight: "2.125rem",
                width: "2.125rem",
                minWidth: "2.125rem",
                border: "0.0625rem solid transparent",
                backgroundColor: "transparent",
                color: "rgb(134, 142, 150)",
              }}
              href="https://twitter.com/parseablehq"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.05rem"
                height="1.05rem"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z"></path>
              </svg>
            </a>
            <a
              style={{
                WebkitTapHighlightColor: "transparent",
                fontFamily:
                  "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
                cursor: "pointer",
                appearance: "none",
                fontSize: "1rem",
                textAlign: "left",
                textDecoration: "none",
                boxSizing: "border-box",
                position: "relative",
                borderRadius: "0.5rem",
                padding: "0px",
                lineHeight: 1,
                display: "flex",
                WebkitBoxAlign: "center",
                alignItems: "center",
                WebkitBoxPack: "center",
                justifyContent: "center",
                height: "2.125rem",
                minHeight: "2.125rem",
                width: "2.125rem",
                minWidth: "2.125rem",
                border: "0.0625rem solid transparent",
                backgroundColor: "transparent",
                color: "rgb(134, 142, 150)",
              }}
              href="https://github.com/parseablehq"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.05rem"
                height="1.05rem"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
              </svg>
            </a>
            <a
              style={{
                WebkitTapHighlightColor: "transparent",
                fontFamily:
                  "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
                cursor: "pointer",
                appearance: "none",
                fontSize: "1rem",
                textAlign: "left",
                textDecoration: "none",
                boxSizing: "border-box",
                position: "relative",
                borderRadius: "0.5rem",
                padding: "0px",
                lineHeight: 1,
                display: "flex",
                WebkitBoxAlign: "center",
                alignItems: "center",
                WebkitBoxPack: "center",
                justifyContent: "center",
                height: "2.125rem",
                minHeight: "2.125rem",
                width: "2.125rem",
                minWidth: "2.125rem",
                border: "0.0625rem solid transparent",
                backgroundColor: "transparent",
                color: "rgb(134, 142, 150)",
              }}
              href="https://www.linkedin.com/company/parseable/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.05rem"
                height="1.05rem"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                <path d="M8 11l0 5"></path>
                <path d="M8 8l0 .01"></path>
                <path d="M12 16l0 -5"></path>
                <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
