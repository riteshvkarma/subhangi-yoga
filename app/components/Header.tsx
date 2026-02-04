"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div id="top-bar" className="dark">
        <div className="container">
          <div className="d-flex align-items-center justify-content-center flex-column flex-lg-row py-3 py-lg-0">
            Transform your life with shubhangi Yoga - Where wellness meets
            tradition
          </div>
        </div>
      </div>

      {/* Header */}
      <header id="header" className="border-full-header header-size-custom">
        <div id="header-wrap">
          <div className="container">
            <div
              className="header-row"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "1rem 0",
                position: "relative",
              }}
            >
              {/* Navigation - Left Side (Desktop) */}
              <nav
                className="primary-menu d-none d-lg-block"
                style={{ flex: "1" }}
              >
                <ul
                  className="menu-container"
                  style={{
                    display: "flex",
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                    gap: "2rem",
                  }}
                >
                  <li className="menu-item">
                    <Link
                      className="menu-link"
                      href="/"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      Home
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link
                      className="menu-link"
                      href="/about"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link
                      className="menu-link"
                      href="/gallery"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      Gallery
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link
                      className="menu-link"
                      href="/contact"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>

              {/* Logo - Center */}
              <div id="logo" style={{ flex: "0 0 auto", textAlign: "center" }}>
                <Link href="/">
                  <Image
                    className="logo-default"
                    src="/logo@2x.png"
                    alt="shubhangi Mali Logo"
                    width={180}
                    height={70}
                    priority
                  />
                </Link>
              </div>

              {/* Login & Social - Right Side (Desktop) */}
              <div
                className="header-misc d-none d-lg-flex"
                style={{
                  flex: "1",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <Link
                  href="/blog"
                  className="button-link"
                  style={{ textDecoration: "none" }}
                >
                  Blog
                </Link>
                <a
                  href="https://www.facebook.com/semicolonweb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon h-bg-facebook si-small bg-light mb-0"
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a
                  href="https://www.instagram.com/semicolonweb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon h-bg-instagram si-small bg-light mb-0"
                >
                  <i className="bi-instagram"></i>
                </a>
                <a
                  href="https://twitter.com/__SemiColon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon h-bg-paypal si-small bg-light mb-0"
                >
                  <i className="fa-brands fa-paypal"></i>
                </a>
              </div>

              {/* Mobile Menu Button */}
              <div
                className="d-lg-none"
                style={{
                  position: "absolute",
                  right: "15px",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              >
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "10px",
                    fontSize: "24px",
                  }}
                  aria-label="Toggle mobile menu"
                >
                  {mobileMenuOpen ? "✕" : "☰"}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            className="d-lg-none"
            style={{
              backgroundColor: "white",
              padding: "1rem",
              borderTop: "1px solid #eee",
            }}
          >
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              <li
                style={{ padding: "0.75rem 0", borderBottom: "1px solid #eee" }}
              >
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    display: "block",
                  }}
                >
                  Home
                </Link>
              </li>

              <li
                style={{ padding: "0.75rem 0", borderBottom: "1px solid #eee" }}
              >
                <Link
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    display: "block",
                  }}
                >
                  About Us
                </Link>
              </li>

              <li
                style={{ padding: "0.75rem 0", borderBottom: "1px solid #eee" }}
              >
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    display: "block",
                  }}
                >
                  Contact
                </Link>
              </li>

              <li
                style={{ padding: "0.75rem 0", borderBottom: "1px solid #eee" }}
              >
                <Link
                  href="/blog"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    display: "block",
                  }}
                >
                  Blog
                </Link>
              </li>

              <li style={{ padding: "0.75rem 0" }}>
                <div style={{ display: "flex", gap: "12px" }}>
                  <a
                    href="https://www.facebook.com/semicolonweb/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://www.instagram.com/semicolonweb/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://twitter.com/__SemiColon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                </div>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
}
