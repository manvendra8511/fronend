import React from "react";
import { Link } from "react-router-dom";

const benefits = [
  {
    icon: "https://dreamrindia.com/cdn/shop/files/buy_6043141.svg?v=1783499072&width=200",
    title: "BUY 1, The Other Is On Us",
    description:
      "Purchase Any 2 Bedsheets And Get 1 Absolutely FREE, Exclusively For Dreamr Members.",
  },
  {
    icon: "https://dreamrindia.com/cdn/shop/files/giftbox_1139982.svg?v=1783499332&width=200",
    title: "Member Exclusive Offers",
    description:
      "Enjoy Exclusive Discounts, Festive Deals, And Limited-Time Offers Available Only For Dreamr Members.",
  },
  {
    icon: "https://dreamrindia.com/cdn/shop/files/free-delivery_5163977.svg?v=1783499406&width=200",
    title: "Free Shipping",
    description:
      "Get Free Shipping On All Orders Throughout Your Membership Period.",
  },
  {
    icon: "https://dreamrindia.com/cdn/shop/files/heart_388307.svg?v=1783499215&width=200",
    title: "100% Free Membership",
    description:
      "No Joining Fee. No Renewal Charges. Enjoy All Benefits For 90 Days.",
  },
];

const perfectFor = [
  {
    icon: "https://dreamrindia.com/cdn/shop/files/heart_388307.svg?v=1783499215&width=120",
    title: "Love Premium Bedsheets",
  },
  {
    icon: "https://dreamrindia.com/cdn/shop/files/bank_4541387.svg?v=1783502064&width=120",
    title: "Enjoy Extra Savings",
  },
  {
    icon: "https://dreamrindia.com/cdn/shop/files/rental_14597158.svg?v=1783502102&width=120",
    title: "Shop For Your Home Regularly",
  },
  {
    icon: "https://dreamrindia.com/cdn/shop/files/chocolate-box_332936.svg?v=1783502064&width=120",
    title: "Love Gifting Premium Bedding",
  },
];

export default function Membership() {
  return (
    <main className="membership-page">

      {/* HERO */}
      <section className="membership-hero">
        <div className="membership-hero-content">
          <h1>DREAMR MEMBERSHIP</h1>

          <h2>SLEEP BETTER. SAVE MORE</h2>

          <p>
            Become A <strong>Dreamr Member</strong> And Enjoy Exclusive
            Benefits Every Time You Shop.
          </p>

          <p>
            Dreamr Membership Is <strong>Completely FREE For 3 Months</strong>.
            Members Get Access To Our Exclusive{" "}
            <strong>Buy 1 Get 1 FREE</strong> Offer On Eligible Bedsheets
            Along With Special Member-Only Benefits.
          </p>

          <Link
            to="/products/dreamr-membership"
            className="membership-primary-btn"
          >
            Join Free Membership
          </Link>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="membership-benefits">
        <div className="membership-container">
          <h2 className="membership-section-title">
            WHY JOIN DREAMR MEMBERSHIP?
          </h2>

          <div className="benefits-grid">
            {benefits.map((benefit) => (
              <article className="benefit-card" key={benefit.title}>
                <div className="benefit-icon">
                  <img src={benefit.icon} alt="" />
                </div>

                <div className="benefit-content">
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY YOU'LL LOVE IT */}
      <section className="love-membership">
        <div className="membership-container">
          <h2 className="membership-section-title">
            WHY YOU'LL LOVE DREAMR MEMBERSHIP
          </h2>

          <p className="membership-subtitle">
            Perfect For You If You:
          </p>

          <div className="perfect-grid">
            {perfectFor.map((item) => (
              <div className="perfect-card" key={item.title}>
                <img src={item.icon} alt="" />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>

          <div className="membership-center-btn">
            <Link
              to="/products/dreamr-membership"
              className="membership-primary-btn"
            >
              Join Free Membership
            </Link>
          </div>
        </div>
      </section>

      {/* TERMS */}
      <section className="membership-terms">
        <div className="membership-container">
          <h2 className="membership-section-title">
            TERMS &amp; BENEFITS
          </h2>

          <div className="terms-list">
            <p>
              <span>✔</span>
              Membership is <strong>FREE</strong> and valid for{" "}
              <strong>90 days</strong> from the date of activation.
            </p>

            <p>
              <span>✔</span>
              Exclusive <strong>Buy 1 Get 1 FREE</strong> offer is available
              only for Dreamr Members.
            </p>

            <p>
              <span>✔</span>
              The Buy 1 Get 1 FREE offer is applicable on{" "}
              <strong>all products</strong>.
            </p>

            <p>
              <span>✔</span>
              The free product must be added to the cart along with eligible
              products.
            </p>

            <p>
              <span>✔</span>
              Membership benefits are available on the Dreamr website.
            </p>

            <p>
              <span>✔</span>
              Member-exclusive offers may vary during promotional campaigns.
            </p>

            <p>
              <span>✔</span>
              Membership is non-transferable and linked to your registered
              account.
            </p>

            <p>
              <span>✔</span>
              Dreamr reserves the right to modify or discontinue membership
              benefits at any time without prior notice.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="membership-final">
        <div className="membership-final-content">
          <h2>DREAM BETTER WITH DREAMR MEMBERSHIP</h2>

          <p>
            Enjoy <strong>FREE Membership</strong>,{" "}
            <strong>Buy 1 Get 1 FREE</strong>, Exclusive Offers, And Premium
            Savings For 90 Days.
          </p>

          <Link
            to="/products/dreamr-membership"
            className="membership-primary-btn"
          >
            Join Dreamr Membership
          </Link>
        </div>
      </section>

      {/* SERVICE FEATURES */}
      <section className="membership-service">
        <div className="membership-service-grid">

          <div className="service-item">
            <img
              src="https://dreamrindia.com/cdn/shop/files/customer-support_9723160.svg?v=1781350428&width=100"
              alt=""
            />
            <h3>Customer Service</h3>
            <p>Mon To Sat (10AM - 7PM IST)</p>
          </div>

          <div className="service-item">
            <img
              src="https://dreamrindia.com/cdn/shop/files/free-delivery_4947265.svg?v=1781350326&width=100"
              alt=""
            />
            <h3>Free Shipping</h3>
            <p>Enjoy Free Shipping On Every Order.</p>
          </div>

          <div className="service-item">
            <img
              src="https://dreamrindia.com/cdn/shop/files/secure-payment_15546800.svg?v=1781350186&width=100"
              alt=""
            />
            <h3>Secure Payment</h3>
            <p>Your Payment Information Is Processed Securely</p>
          </div>

        </div>
      </section>

    </main>
  );
}