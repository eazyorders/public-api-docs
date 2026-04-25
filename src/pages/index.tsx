import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import React from "react";

const features = [
  {
    title: "Products API",
    description:
      "Create, update, and manage your product catalog programmatically. Sync inventory and product data in real time.",
    link: "/docs/create-product-api",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ),
  },
  {
    title: "Orders API",
    description:
      "Retrieve order details, update fulfillment status, and add notes to streamline your order management workflow.",
    link: "/docs/get-order-by-id",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
      </svg>
    ),
  },
  {
    title: "Webhooks",
    description:
      "Get real-time notifications when events happen in your store. React instantly to orders, updates, and more.",
    link: "/docs/webhooks",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
      </svg>
    ),
  },
  {
    title: "Categories API",
    description:
      "Organize your products with categories. Create, retrieve, and update categories to structure your catalog.",
    link: "/docs/create-category",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
      </svg>
    ),
  },
  {
    title: "Authentication",
    description:
      "Secure your API requests with token-based authentication. Learn how to obtain and manage your API credentials.",
    link: "/docs/authentication",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>
    ),
  },
  {
    title: "Shipping",
    description:
      "Update shipping areas and configurations for your store. Manage delivery zones and shipping methods via API.",
    link: "/docs/update-shipping-api",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
];

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-badge">
          <span>Developer Documentation</span>
        </div>
        <h1 className="hero-title">
          Build with the <span className="hero-gradient">EasyOrders API</span>
        </h1>
        <p className="hero-subtitle">
          Everything you need to integrate your applications with EasyOrders.
          Manage products, orders, categories, and more through our REST API.
        </p>
        <div className="hero-actions">
          <Link className="hero-button hero-button--primary" to="/docs/intro">
            Get Started
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
          <Link
            className="hero-button hero-button--secondary"
            to="/docs/authentication"
          >
            Authentication Guide
          </Link>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className="features-section">
      <div className="features-container">
        <div className="features-header">
          <h2 className="features-title">Explore the API</h2>
          <p className="features-subtitle">
            Comprehensive endpoints to power your integration
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature) => (
            <Link
              key={feature.title}
              to={feature.link}
              className="feature-card"
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-card-title">{feature.title}</h3>
              <p className="feature-card-description">
                {feature.description}
              </p>
              <span className="feature-card-link">
                Learn more
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuickStartSection() {
  return (
    <section className="quickstart-section">
      <div className="quickstart-container">
        <div className="quickstart-content">
          <h2 className="quickstart-title">Quick Start</h2>
          <p className="quickstart-subtitle">
            Make your first API call in seconds
          </p>
          <div className="quickstart-steps">
            <div className="quickstart-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>Get your API key</h4>
                <p>Sign up and generate credentials from your dashboard</p>
              </div>
            </div>
            <div className="quickstart-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>Authenticate</h4>
                <p>Include your token in the Authorization header</p>
              </div>
            </div>
            <div className="quickstart-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>Start building</h4>
                <p>Call any endpoint to manage your store data</p>
              </div>
            </div>
          </div>
          <Link className="hero-button hero-button--primary" to="/docs/authentication">
            View Authentication Guide
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
        <div className="quickstart-code">
          <div className="code-window">
            <div className="code-window-header">
              <div className="code-window-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span className="code-window-title">Example Request</span>
            </div>
            <pre className="code-window-body">
              <code>{`curl -X GET \\
  https://api.easy-orders.net/v1/products \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): React.JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}
    >
      <main className="landing-main">
        <HeroSection />
        <FeaturesSection />
        <QuickStartSection />
      </main>
    </Layout>
  );
}
