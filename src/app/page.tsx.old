"use client";
import React, { useState, useEffect, useRef } from "react";
// import Image from "next/image";

export default function Home() {
  const [isHeroBehindNav, setIsHeroBehindNav] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const [signupEntry, setSignupEntry] = useState("");
  const [thanks, setThanks] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef(null);

  const [isMobile, setIsMobile] = useState(null); // null initially indicates it's not yet determined
  const [videoSource, setVideoSource] = useState({
    mp4: "",
    webm: "",
  });

  const resetFlags = () => {
    setThanks(false);
    setError(false);
    setLoading(false);
  };

  const invalid = () => {
    const patpee = /^~[a-z-]*$/;
    const email = /^.*@.*\..*$/;

    if (!patpee.test(signupEntry) && !email.test(signupEntry)) {
      setError(true);
      return true;
    }
    return false;
  };

  const submitForm = (event: any) => {
    if (loading) {
      return;
    }
    event.preventDefault();
    setLoading(true);

    if (invalid()) {
      setLoading(false);
      return;
    }

    let formData = new FormData();
    formData.append("entry.1987957812", signupEntry);

    const url =
      "https://docs.google.com/forms/u/3/d/e/1FAIpQLSfBDo4OJQ3iJrMqTcWrcg6m_qqP09Hni9w-44dirgOUri3pxA/formResponse";

    fetch(url, {
      method: "POST",
      mode: "no-cors",
      body: formData,
    })
      .then(() => {
        setSignupEntry("");
        setThanks(true);
      })
      .catch((error) => {
        console.error("bad signup ", error);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const toggleUpdateForm = () => {
    if (showUpdateForm) {
      setIsFadingOut(true);
      resetFlags();
    } else {
      setShowUpdateForm(true);
    }
  };

  const handleTransitionEnd = () => {
    if (isFadingOut) {
      setShowUpdateForm(false);
      setIsFadingOut(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("vaporwareDevicesVideo");
      const navBar = document.getElementById("nav");
      if (heroSection && navBar) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        const navBottom = navBar.getBoundingClientRect().bottom;

        setIsHeroBehindNav(heroBottom < navBottom);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const userAgent =
      typeof navigator !== "undefined" ? navigator.userAgent.toLowerCase() : "";
    const isMobileDevice = /android|iPad|iPhone|iPod/i.test(userAgent);
    // @ts-ignore
    setIsMobile(isMobileDevice);

    const source = isMobileDevice
      ? {
          mp4: "https://general-static-assets.nyc3.cdn.digitaloceanspaces.com/vaporware-appliances-30s-200x200.mp4",
          webm: "https://general-static-assets.nyc3.cdn.digitaloceanspaces.com/vaporware-appliances-30s-200x200.webm",
        }
      : {
          mp4: "/images/vaporware-appliances-30s-200x200.mp4",
          webm: "/images/vaporware-appliances-30s-200x200.webm",
        };

    setVideoSource(source);
  }, []);

  if (isMobile === null) {
    // Ridiculous hack:
    // Render nothing until user agent is determined
    return <div></div>;
    // We have a nice <noscript>, so i feel okay about it.
  }

  return (
    <div className="">
      <nav
        className={`flex flex-col sticky top-0 z-50 bg-white pt-4 ${showUpdateForm ? "pb-0" : "pb-2"} mx-auto md:max-w-xl md:px-0 px-8`}
        id="nav"
      >
        <div
          className={`flex justify-end text-right ${showUpdateForm ? "items-start" : "items-center"}`}
        >
          <div className="grow text-left">
            <video
              className={`${isHeroBehindNav ? "" : "hidden"}`} // Hide video when hero is not behind navbar
              id="vaporwareDevicesVideoNav"
              width="30"
              height="30"
              poster="/images/vaporware-appliances-30s-200x200-preview.jpg"
              autoPlay
              playsInline
              webkit-playsinline="true"
              x5-playsinline="true"
              loop
              muted
            >
              <source src={videoSource.mp4} type="video/mp4" />
              <source src={videoSource.webm} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="text-right shrink flex items-center">
            {showUpdateForm && (
              <div
                className={`fade-transition ${isFadingOut ? "opacity-0" : "opacity-100"}`}
                onTransitionEnd={handleTransitionEnd}
              >
                <form
                  id="waitlistForm"
                  className="flex items-center"
                  onSubmit={submitForm}
                >
                  <input
                    ref={inputRef}
                    className="text-right text-[16px] border-b mr-2 h-[30px] px-1 max-w-[170px]"
                    id="input-entry"
                    type="text"
                    autoComplete="off"
                    spellCheck="false"
                    placeholder="email or urbit @p"
                    name="entry.1987957812"
                    value={signupEntry}
                    onChange={(e) => setSignupEntry(e.target.value)}
                    onKeyDown={resetFlags}
                  />
                  <button
                    className="text-[16px] px-1.5 py-1 h-[30px]"
                    disabled={loading}
                    onClick={submitForm}
                  >
                    Submit
                  </button>
                </form>
                <div className="my-2 pt-2">
                  <span
                    className="text-[16px] cursor-pointer"
                    onClick={toggleUpdateForm}
                  >
                    Close
                  </span>
                </div>
              </div>
            )}
            {!showUpdateForm && !isFadingOut && (
              <a className="no-underline" onClick={toggleUpdateForm}>
                Get Updates
              </a>
            )}
          </div>
        </div>

        {loading && (
          <div className="text-[13px] mt-2 mb-2 text-right" id="loading">
            Submitting...
          </div>
        )}
        {thanks && (
          <div className="text-[13px] mt-2 mb-2 text-right" id="thanks">
            Thank you for signing up!
          </div>
        )}
        {error && (
          <div className="text-[13px] mt-2 mb-2 text-right" id="error">
            There was an error. Please try again.
          </div>
        )}
      </nav>

      <main className="container mx-auto md:max-w-xl px-8 md:px-0">
        <header className="mx-auto border-b border-black pb-8 mb-8">
          <video
            className="mx-auto"
            id="vaporwareDevicesVideo"
            width="194"
            height="194"
            poster="/images/vaporware-appliances-30s-200x200-preview.jpg"
            preload="auto"
            autoPlay
            playsInline
            webkit-playsinline="true"
            x5-playsinline="true"
            loop
            muted
          >
            <source src={videoSource.mp4} type="video/mp4" />
            <source src={videoSource.webm} type="video/webm" />
            Your browser does not support the video tag.
          </video>

          <h1 className="hero mb-4">
            This website is
            <br />
            <span className="font-bold">vaporware</span>,
          </h1>

          <aside className="text-center">
            <p className="mb-2">
              a web application running on a Solid-State Interpreter Virtual
              Machine. Last updated: 06/05/24
            </p>

            <p>
              MASTER{" "}
              <span className="font-semibold">
                d1cb38641e2b34f1aef11cc729bcee779bcf08b4
              </span>
            </p>
            {false && (
              <p>
                Using mp4: <span className="">{videoSource.mp4}</span>
                <br />
                Using webm: <span className="">{videoSource.webm}</span>
              </p>
            )}
          </aside>
        </header>

        <section>
          <p>
            Vaporware is a program that runs on a new kind of internet computer,
            called a <span className="key-term">ship</span>. Ships are built on
            a novel virtual machine, called a{" "}
            <a href="https://media.urbit.org/whitepaper.pdf" target="_blank">
              solid-state interpreter
            </a>
            .{" "}
          </p>

          <p>
            Ships combine the functionality of wallets, large file storage,
            encrypted p2p networking, and full stack web applications into a
            single framework. They are designed to run in the cloud, but are
            owned cryptographically by people. Ships are{" "}
            <span className="key-term">internet appliances</span>.
          </p>
        </section>

        <section>
          <header className="flex flex-row space-between items-center">
            <div className="horizontal-bars shrink mr-[6px]"></div>
            <h1 className="grow whitespace-nowrap">The system</h1>
            <div className="horizontal-bars shrink ml-[6px]"></div>
          </header>

          <p className="mb-2">
            The Vaporware ship is composed of three closely related systems:
          </p>
          <ul>
            <li>a purely functional virtual machine</li>
            <li>permissionless application and package registries</li>
            <li>an app store and package management program</li>
          </ul>
          <p>
            Vaporware is developed as <em>Free and Open Source Software</em> and
            respects the{" "}
            <a
              href="https://www.gnu.org/philosophy/free-sw.en.html"
              target="_blank"
            >
              four essential freedoms
            </a>
            .
          </p>
        </section>

        <section>
          <header>
            <div className="horizontal-bars shrink mr-[6px]"></div>
            <h1 className="grow whitespace-nowrap">The device</h1>
            <div className="horizontal-bars shrink ml-[6px]"></div>
          </header>

          <p>
            Like the EVM, the virtual machine used by Vaporware has been
            designed as infrastructure for a decentralized internet. It is a{" "}
            <a
              href="https://web.archive.org/web/20030524195418id_/http://courses.cs.vt.edu:80/~cs5314/Spring00/LanguagePresentations/Papers/slotta-hudak_extract.pdf"
              target="_blank"
            >
              purely functional system
            </a>{" "}
            and is ultra-minimal. Unlike the EVM, it supports fast parallel
            computation and can store large amounts of data, cheaply. It does
            not provide global consensus.
          </p>

          <p>
            Vaporware uses the VM to replace developer-hosted web services with{" "}
            <a href="https://arxiv.org/pdf/2306.08168.pdf" target="_blank">
              non-custodial web apps
            </a>{" "}
            &mdash; web apps owned by users.
          </p>
        </section>

        <section>
          <header>
            <div className="horizontal-bars shrink mr-[6px]"></div>
            <h1 className="grow whitespace-nowrap">The registry</h1>
            <div className="horizontal-bars shrink ml-[6px]"></div>
          </header>

          <p>
            Every ship has a unique <span className="key-term">identity</span>{" "}
            in the form of a cryptographic key. Ships encrypt and sign all of
            their messages by default. The owner of a ship can register the
            ship’s content and share it with others. Identities are used to
            control access to registered content.
          </p>

          <p>
            Vaporware is a{" "}
            <a href="https://arxiv.org/pdf/2205.14927.pdf" target="_blank">
              decentralized file storage
            </a>{" "}
            network, but can also be used to distribute and run full stack
            software applications. Registration binds content to ship identity,
            so users can trustlessly monetize their data and apps.
          </p>
        </section>

        <section>
          <header>
            <div className="horizontal-bars shrink mr-[6px]"></div>
            <h1 className="grow whitespace-nowrap">The agora</h1>
            <div className="horizontal-bars shrink ml-[6px]"></div>
          </header>

          <p>
            The agora is the economic bootloader for the Vaporware network. It
            is the default protocol, owned by every user, providing unfiltered
            access to purchasable content and software.
          </p>

          <p>
            Vaporware has no &ldquo;app store&rdquo; qua &ldquo;app store&rdquo;
            to host and monetize apps. Instead, users are able to self-host
            their own access point to a purely p2p content distribution system.
            Peer-to-peer payments provide censorship resistant payment rails and
            the agora provides censorship resistant distribution.
          </p>
        </section>

        <section className="text-center">
          <p className="text-center mt-12 mb-8">
            Reach us at: <br />
            founders@vaporware.network
          </p>
        </section>
      </main>
      <footer className="z-50 bg-white pt-2 text-[14px] mx-auto md:max-w-xl md:px-0 px-8">
        <div className="flex flex-row justify-between mb-4">
          <div>
            <a href="https://twitter.com/__vaporware__" target="_blank">
              Twitter
            </a>
          </div>
          <div className="flex text-center flex-col">
            <div>
              <a href="https://blog.vaporware.network" target="_blank">
                Blog/Podcast
              </a>
            </div>
            <div>
              <a href="https://vaporware.gitbook.io/vaporware" target="_blank">
                Documentation
              </a>
            </div>
          </div>
          <div>
            <a
              href="https://github.com/deathtothecorporation/pallas"
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
