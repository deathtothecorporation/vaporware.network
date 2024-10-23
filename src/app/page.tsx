"use client";

import React, { useEffect } from "react";
import Lockup from "@/components/Lockup";
import Logo from "@/components/Logo";
//<Logo size={100} color="white" className="bg-black" />
//<Logo size={100} color="black" />
//
import Link from "next/link";
// import Image from "next/image";

// Cosmetics, for later
// import WebGLTest from "@/components/WebGLTest";
//
//        <WebGLTest
//          speed={0.5}
//          color={[0.5, 0.3, 1.0]}
//          size={0.1}
//          targetSelectors={["#test", "#thing"]}
//          debug={true} // Enable this temporarily to see what's happening
//        />
//
// import ScrollSequence from "@/components/ScrollSequence";
//
//          <div className="text-center relative">
//            <ScrollSequence
//              frameDir="forest_frames"
//              frameCount={100}
//              width={698}
//              height={1081}
//              backgroundImage="/images/wide-forest.jpeg"
//            >
//              <section className="flex justify-center text-center flex-col items-center align-center transparent text-white h-[90vh]">
//                <div>
//                  <h1 className="text-6xl">
//                    <OpfnSvg />
//                  </h1>
//                  <h2 className="no-underline">Sub header</h2>
//                </div>
//              </section>
//            </ScrollSequence>

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {};

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="">
      <main className="">
        <section className="relative z-10 overflow-hidden flex justify-center text-white text-center flex-col items-center align-center h-[70vh]">
          <img
            src="/images/wide-forest.jpeg"
            alt="Forest Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 max-w-lg">
            <h1 className="text-6xl">
              <Lockup className="mx-auto" size={300} color="white" />
            </h1>
            <h2 className="no-underline">The Operating Function Company</h2>
          </div>
        </section>

        <section className="content-zone">
          <p>
            An Operating Function specifies a new kind of personal computer. The
            computer is decentralized because it exists on many devices
            simultaneously, including the cloud, and can run forever.
          </p>

          <p>
            OFs save data automatically and can be moved even while running. All
            programs are open and modifiable. Users retain control over their
            software, their data, and their networks. Developers bear no
            infrastructure cost.
          </p>
        </section>

        <section className="content-zone">
          <header class="flex flex-row space-between items-center">
            <div class="horizontal-bars shrink mr-[6px]"></div>
            <h1 class="grow whitespace-nowrap">All Software is Open</h1>
            <div class="horizontal-bars shrink ml-[6px]"></div>
          </header>

          <p>
            The system is inspectable down to the bottom. Our compiler binary is
            called PLAN and is pure, lazy, and human readable. The entire system
            bootstraps itself from PLAN using reflection and dynamic code
            generation.
          </p>

          <p>
            End-user programs are created without siloing functionality in
            applications. When software is installed, source is automatically
            available for inspection. Modifications can be hot reloaded with no
            downtime.
          </p>
        </section>

        <div className="my-[400px]"></div>
        <section>
          <p>
            Each OF can run many processes, called cogs. Cogs are responsible
            for running all of your programs and storing all of your data. They
            do this automatically so you never have to think about saving or
            backup.
          </p>

          <p>
            Each cog can create many drivers. Drivers are a special program that
            only a cog can create. They allow your OF to interact with the
            outside world. Drivers let your OF connect to things like the web, a
            file system, or a GPU.
          </p>

          <p>
            Mods are upgrades to your OF. You can install a mod from a
            marketplace, the internet, or from your friend down the street.
            Since you own your OF, no one can keep the insides of a mod secret
            from you. If you want to change the mod, the only limit is your
            skill.
          </p>
        </section>

        <section>
          <div className="text-center">
            <button id="test">GET YOUR SHIP</button>
          </div>
        </section>
      </main>
    </div>
  );
}
