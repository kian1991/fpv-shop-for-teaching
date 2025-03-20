import React from "react";
import { Link } from "react-router";

const HomePage: React.FC = () => {
  return (
    <div className="bg-base-200 min-h-screen">
      <main
        className="grid min-h-screen w-full place-items-center"
        style={{
          backgroundImage: "url(/img/hero-banner.webP)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-base-100 font-mono text-4xl font-bold">
            FPVoid.
          </h1>
          <h3 className="text-base-200 font-mono text-2xl font-semibold">
            Everything you'll ever need.
          </h3>
          <Link
            to={"/products"}
            className="btn btn-primary btn-lg font-mo mt-6 uppercase"
          >
            EXPLORE
          </Link>
        </div>
      </main>
      <footer className="footer bg-base-100 text-base-content flex justify-between px-24 py-10">
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover" href="#support">
            Support
          </a>
          <a className="link link-hover" href="#shipping">
            Versand
          </a>
          <a className="link link-hover" href="#returns">
            Rückgabe
          </a>
          <a className="link link-hover" href="#faq">
            FAQ
          </a>
        </div>
        <div>
          <span className="footer-title">FPV Drohen Shop</span>
          <a className="link link-hover" href="#about">
            Über uns
          </a>
          <a className="link link-hover" href="#blog">
            Blog
          </a>
          <a className="link link-hover" href="#jobs">
            Jobs
          </a>
          <a className="link link-hover" href="#press">
            Presse
          </a>
        </div>
        <div>
          <span className="footer-title">Kontakt</span>
          <a
            className="link link-hover"
            href="mailto:support@fpvdrohen-shop.de"
          >
            support@fpvdrohen-shop.de
          </a>
          <a className="link link-hover" href="tel:+491234567890">
            +49 123 4567890
          </a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
