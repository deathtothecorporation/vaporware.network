'use client'
import React, { useState, useEffect } from 'react';
import Image from "next/image";

export default function Home() {
    const [isHeroBehindNav, setIsHeroBehindNav] = useState(false);

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
      const handleCanPlayThrough = () => {
        if (videoElement && videoElement.paused) { // Check if the video is not already playing
          console.log('playing... ', videoElement);
          videoElement.muted = true;
          videoElement.play();
        } else {
          console.log('Video is already playing');
        }
      };

      const navHandleCanPlayThrough = () => {
        if (navVideoElement && navVideoElement.paused) { // Check if the video is not already playing
          console.log('playing nav... ', navVideoElement);
          navVideoElement.muted = true;
          navVideoElement.play();
        } else {
          console.log('nav Video is already playing');
        }
      };

      const videoElement = document.getElementById('vaporwareDevicesVideo') as HTMLVideoElement;
      const navVideoElement = document.getElementById('vaporwareDevicesVideoNav') as HTMLVideoElement;
      console.log('checking for ', videoElement)

      if (videoElement) {
        console.log('have it')
        videoElement.addEventListener('canplaythrough', handleCanPlayThrough);

        videoElement.muted = true;
        videoElement.play().catch(e => console.log('Error trying to play video: ', e.message));

        // Cleanup function to remove the event listener
        // return () => {
        //   videoElement.removeEventListener('canplaythrough', handleCanPlayThrough);
        // };
      }

      console.log('checking for nav', navVideoElement)
      if (navVideoElement) {
        console.log('have it')
        navVideoElement.addEventListener('canplaythrough', navHandleCanPlayThrough);

        navVideoElement.muted = true;
        navVideoElement.play().catch(e => console.log('Error trying to play video: ', e.message));

        // Cleanup function to remove the event listener
        // return () => {
        //   navVideoElement.removeEventListener('canplaythrough', navHandleCanPlayThrough);
        // };
      }
  }, []); // Empty dependency array means this effect runs once after the initial render


  return (
    <div className="">
      <nav className="flex justify-end items-center text-right sticky top-0 z-50 bg-white py-4 mx-auto md:max-w-xl md:px-0 px-8" id="nav">
        <div className="grow text-left">
          <video
            className={`... ${isHeroBehindNav ? '' : 'hidden'}`} // Hide video when hero is not behind navbar
            id="vaporwareDevicesVideoNav"
            width="40"
            height="40"
            poster="/images/vaporware-devices-preview.png"
            src="/images/vaporware-devices-preview-194.mp4"
            preload="none"
            autoPlay
            playsInline
            loop
            muted
          >
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="text-right">
          <button>
            Get Updates
          </button>
        </div>
      </nav>

      <main className="container mx-auto md:max-w-xl px-8 md:px-0">

        <header className="mx-auto border-b border-black pb-8 mb-8">
          <video
            className="mx-auto"
            id="vaporwareDevicesVideo"
            width="194"
            height="194"
            poster="/images/vaporware-devices-preview.png"
            src="/images/vaporware-devices-preview-194.mp4"
            preload="none"
            autoPlay
            playsInline
            loop
            muted
          >
            Your browser does not support the video tag.
          </video>

          <h1 className="hero mb-4">
            This website is<br/>
            <span>vaporware</span>,
          </h1>

          <aside className="text-center">
            <p>
              a web application running on a Solid-State Interpreter Virtual Machine. Last updated: 1/26/24
            </p>

            <p>
              MASTER <span className="font-semibold">e70e1e7c297d0545177006247be13488b631a2dc</span>
            </p>
          </aside>
        </header>

        <section>
          <p>
            Vaporware is a new kind of internet computer, called a <em>ship</em>. Ships are built on a novel virtual machine, called a <a href="https://media.urbit.org/whitepaper.pdf" target="_blank">solid-state interpreter</a>. 
          </p>

          <p>
Ships combine the functionality of wallets, large file storage, encrypted p2p networking, and full stack web applications into a single framework. They are designed to run in the cloud, but are owned cryptographically by people. Ships are internet appliances.
          </p>
        </section>

        <section>
          <header className="flex flex-row space-between items-center">
            <div className="horizontal-bars shrink mr-4"></div>
            <h1 className="grow whitespace-nowrap">The system</h1>
            <div className="horizontal-bars shrink ml-4"></div>
          </header>

          <p>
            The Vaporware ship is composed of three closely related systems:
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
          </p>
          <p>
            Vaporware is developed as <em>Free and Open Source Software</em> and respects the <a href="https://www.gnu.org/philosophy/free-sw.en.html" target="_blank">four essential freedoms</a>.
          </p>
        </section>

        <section>
          <header>
            <div className="horizontal-bars shrink mr-4"></div>
            <h1 className="grow whitespace-nowrap">The device</h1>
            <div className="horizontal-bars shrink ml-4"></div>
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
            <div className="horizontal-bars shrink mr-4"></div>
            <h1 className="grow whitespace-nowrap">The registry</h1>
            <div className="horizontal-bars shrink ml-4"></div>
          </header>

          <p>
            Every ship has a unique identity. NFTs can be registered with the protocol and used as a network handle. Ships encrypt and sign all of their messages by default. The owner of a ship can register the ship’s content onchain and share it with others. Identities are used to control access to registered content.
          </p>

          <p>
            Vaporware is an alternative for <a href="https://arxiv.org/pdf/2205.14927.pdf" target="_blank">decentralized file storage</a>, but can also be used to distribute <em>and run</em> full stack software applications. Registration binds content to an NFT, so users can trustlessly monetize their data and apps.
          </p>
        </section>

        <section>
          <header>
            <div className="horizontal-bars shrink mr-4"></div>
            <h1 className="grow whitespace-nowrap">The app store</h1>
            <div className="horizontal-bars shrink ml-4"></div>
          </header>

          <p>
            The app store is the <em>economic bootloader</em> for the Vaporware network. It is the default program, owned by every user, providing access to purchasable content and software.
          </p>

          <p>
Rather than relying on a central company (like Apple or Steam) to host and monetize apps, users are able to self-host their own access point to a purely p2p, onchain, content distribution market. NFTs provide uncensorable payment rails and the app store provides uncensorable distribution.
          </p>
        </section>


      </main>
      <footer className="text-right sticky bottom-0 z-50 bg-white py-2 text-[13px] mx-auto md:max-w-xl md:px-0 px-8"
      >
        <ul>
          <li><a href="#" target="_blank">Twitter</a></li>
          <li><a href="#" target="_blank">Farcaster</a></li>
          <li><a href="#" target="_blank">GitHub</a></li>
        </ul>
      </footer>
    </div>

  );
}
