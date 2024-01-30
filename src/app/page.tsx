'use client'
import React, { useState, useEffect, useRef } from 'react';
// import Image from "next/image";

export default function Home() {
  const [isHeroBehindNav, setIsHeroBehindNav] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const [signupEntry, setSignupEntry] = useState('');
  const [thanks, setThanks] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef(null); // Reference to the input element

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

    const url = "https://docs.google.com/forms/u/3/d/e/1FAIpQLSfBDo4OJQ3iJrMqTcWrcg6m_qqP09Hni9w-44dirgOUri3pxA/formResponse";

    fetch(url, {
      method: "POST",
      mode: "no-cors",
      body: formData,
    })
      .then(() => {
        setSignupEntry('');
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
      resetFlags()
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
      const heroSection = document.getElementById('vaporwareDevicesVideo'); // Add an ID to your hero section
      const navBar = document.getElementById('nav'); // Add an ID to your navbar
      if (heroSection && navBar) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        const navBottom = navBar.getBoundingClientRect().bottom;

        // Set state based on scroll position
        setIsHeroBehindNav(heroBottom < navBottom);
      }
    };

    // Set up event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // const handleCanPlayThrough = () => {
    //   if (videoElement && videoElement.paused) { // Check if the video is not already playing
    //     console.log('playing... ', videoElement);
    //     videoElement.muted = true;
    //     videoElement.play();
    //   } else {
    //     console.log('Video is already playing');
    //   }
    // };

    // const navHandleCanPlayThrough = () => {
    //   if (navVideoElement && navVideoElement.paused) { // Check if the video is not already playing
    //     console.log('playing nav... ', navVideoElement);
    //     navVideoElement.muted = true;
    //     navVideoElement.play();
    //   } else {
    //     console.log('nav Video is already playing');
    //   }
    // };

    // const videoElement = document.getElementById('vaporwareDevicesVideo') as HTMLVideoElement;
    // const navVideoElement = document.getElementById('vaporwareDevicesVideoNav') as HTMLVideoElement;
    // console.log('checking for ', videoElement)

    // if (videoElement) {
    //   console.log('have it')
    //   videoElement.addEventListener('canplaythrough', handleCanPlayThrough);

    //   videoElement.muted = true;
    //   videoElement.play().catch(e => console.log('Error trying to play video: ', e.message));

    //   // Cleanup function to remove the event listener
    //   // return () => {
    //   //   videoElement.removeEventListener('canplaythrough', handleCanPlayThrough);
    //   // };
    // }

    // console.log('checking for nav', navVideoElement)
    // if (navVideoElement) {
    //   console.log('have it')
    //   navVideoElement.addEventListener('canplaythrough', navHandleCanPlayThrough);

    //   navVideoElement.muted = true;
    //   navVideoElement.play().catch(e => console.log('Error trying to play video: ', e.message));

    //   // Cleanup function to remove the event listener
    //   // return () => {
    //   //   navVideoElement.removeEventListener('canplaythrough', navHandleCanPlayThrough);
    //   // };
    // }
  }, []); // Empty dependency array means this effect runs once after the initial render


  return (
    <div className="">
      <nav className={`flex flex-col sticky top-0 z-50 bg-white pt-4 ${ showUpdateForm ? 'pb-0' : 'pb-2' } mx-auto md:max-w-xl md:px-0 px-8`} id="nav">
        <div className={`flex justify-end text-right ${ showUpdateForm ? 'items-start' : 'items-center' }`}>
          <div className="grow text-left">
            <video
              className={`${isHeroBehindNav ? '' : 'hidden'}`} // Hide video when hero is not behind navbar
              id="vaporwareDevicesVideoNav"
              width="30"
              height="30"
              poster="/images/vaporware-devices-30s-preview.jpeg"
              autoPlay
              playsInline
              loop
              muted
            >
              <source src="https://nyc3.digitaloceanspaces.com/sogrum-savluc/2024.1.30..02.48.50-vaporware-devices-600.webm" type="video/webm" />
              <source src="https://nyc3.digitaloceanspaces.com/sogrum-savluc/2024.1.30..02.33.19-vaporware-devices-600.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="text-right shrink flex items-center">
            {showUpdateForm && (
              <div
                className={`fade-transition ${isFadingOut ? 'opacity-0' : 'opacity-100'}`}
                onTransitionEnd={handleTransitionEnd}
              >
                <form id="waitlistForm" className="flex items-center" onSubmit={submitForm}>
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
                  <button className="text-[16px] px-1.5 py-1 h-[30px]" disabled={loading} onClick={submitForm}>Submit</button>
                </form>
                <div className="my-2 pt-2">
                  <span className="text-[16px] cursor-pointer" onClick={toggleUpdateForm}>Close</span>
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

        {loading && <div className="text-[13px] mt-2 mb-2 text-right" id="loading">Submitting...</div>}
    {thanks && <div className="text-[13px] mt-2 mb-2 text-right" id="thanks">Thank you for signing up!</div>}
    {error && <div className="text-[13px] mt-2 mb-2 text-right" id="error">There was an error. Please try again.</div>}
  </nav>

  <main className="container mx-auto md:max-w-xl px-8 md:px-0">

    <header className="mx-auto border-b border-black pb-8 mb-8">
      <video
        className="mx-auto"
        id="vaporwareDevicesVideo"
        width="194"
        height="194"
        poster="/images/vaporware-devices-30s-preview.jpeg"
        autoPlay
        playsInline
        loop
        muted
        controls
      >
        <source src="/images/vaporware-devices-30s.webm" type="video/webm" />
        <source src="/images/vaporware-devices-30s.m4v" type="video/m4v" />
        Your browser does not support the video tag.
      </video>

      <h1 className="hero mb-4">
        This website is<br/>
        <span className="font-bold">vaporware</span>,
      </h1>

      <aside className="text-center">
        <p className="mb-2">
          a web application running on a Solid-State Interpreter Virtual Machine. Last updated: 1/26/24
        </p>

        <p>
          MASTER <span className="font-semibold">e70e1e7c297d0545177006247be13488b631a2dc</span>
        </p>
      </aside>
    </header>

    <section>
      <p>
        Vaporware is a progam that runs on a new kind of internet computer, called a <span className="key-term">ship</span>. Ships are built on a novel virtual machine, called a <a href="https://media.urbit.org/whitepaper.pdf" target="_blank">solid-state interpreter</a>. </p>

      <p>
        Ships combine the functionality of wallets, large file storage, encrypted p2p networking, and full stack web applications into a single framework. They are designed to run in the cloud, but are owned cryptographically by people. Ships are <span className="key-term">internet appliances</span>.
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
        <li>
          a purely functional virtual machine 
        </li>
        <li>
          a tokenized application and package registry 
        </li>
        <li>
          an app store and package management program
        </li>
      </ul>
      <p>
        Vaporware is developed as <em>Free and Open Source Software</em> and respects the <a href="https://www.gnu.org/philosophy/free-sw.en.html" target="_blank">four essential freedoms</a>.
      </p>
    </section>

    <section>
      <header>
        <div className="horizontal-bars shrink mr-[6px]"></div>
        <h1 className="grow whitespace-nowrap">The device</h1>
        <div className="horizontal-bars shrink ml-[6px]"></div>
      </header>

      <p>
        Like the EVM, the virtual machine used by Vaporware has been designed as infrastructure for a decentralized internet. It is a <a href="https://web.archive.org/web/20030524195418id_/http://courses.cs.vt.edu:80/~cs5314/Spring00/LanguagePresentations/Papers/slotta-hudak_extract.pdf" target="_blank">purely functional system</a> and is ultra-minimal. Unlike the EVM, it supports fast parallel computation and can store large amounts of data, cheaply. It does not provide global consensus.
      </p>

      <p>
        Vaporware uses the VM to replace developer-hosted web services with <a href="https://arxiv.org/pdf/2306.08168.pdf" target="_blank">non-custodial web apps</a> &mdash; web apps owned by users.
      </p>
    </section>

    <section>
      <header>
        <div className="horizontal-bars shrink mr-[6px]"></div>
        <h1 className="grow whitespace-nowrap">The registry</h1>
        <div className="horizontal-bars shrink ml-[6px]"></div>
      </header>

      <p>
        Every ship has a unique <span className="key-term">identity</span>. NFTs can be registered with the protocol and used as a network handle. Ships encrypt and sign all of their messages by default. The owner of a ship can register the ship’s content onchain and share it with others. Identities are used to control access to registered content.
      </p>

      <p>
        Vaporware is a <a href="https://arxiv.org/pdf/2205.14927.pdf" target="_blank">decentralized file storage</a>, but can also be used to distribute and run full stack software applications. Registration binds content to an NFT, so users can trustlessly monetize their data and apps.
      </p>
    </section>

    <section>
      <header>
        <div className="horizontal-bars shrink mr-[6px]"></div>
        <h1 className="grow whitespace-nowrap">The agora</h1>
        <div className="horizontal-bars shrink ml-[6px]"></div>
      </header>

      <p>
        The agora is the economic bootloader for the Vaporware network. It is the default protocol, owned by every user, providing unfiltered access to purchasable content and software.
      </p>

      <p>
        Vaporware has no &ldquo;app store&rdquo; qua &ldquo;app store&rdquo; to host and monetize apps. Instead, users are able to self-host their own access point to a purely p2p, onchain, content distribution system. Tokens provide censorship resistant payment rails and the agora provides censorship resistant distribution.
      </p>
    </section>

    <section className="text-center">
      <p className="text-center">
        For whitelist access,<br />
        mint a free Vaporware appliance.
      </p>

      <button disabled className="text-[20px]">
        Mint coming soon
      </button>

    </section>


  </main>
  <footer className="sticky bottom-0 z-50 bg-white pt-2 pb-[25px] text-[14px] mx-auto md:max-w-xl md:px-0 px-8">
    <ul className="mb-[30px]">
      <li><a href="#" target="_blank">Twitter</a></li>
      <li><a href="#" target="_blank">Farcaster</a></li>
      <li><a href="#" target="_blank">GitHub</a></li>
    </ul>
  </footer>
</div>

  );
}
