"use client";

import React, { useEffect } from "react";
import Link from "next/link";

import WebGLTest from "@/components/WebGLTest";
import ScrollSequence from "@/components/ScrollSequence";

// import Image from "next/image";

import OpfnSvg from "@/assets/opfn_lockup.svg";

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {};

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // <WebGLTest speed={0.8} color={[0.5, 0.3, 1.0]} size={0.6} />

  return (
    <div className="">
      <main className="content-zone">
        <section className="flex justify-center text-center flex-col items-center align-center bg-black text-white h-[90vh]">
          <div>
            <h1 className="text-6xl">
              <OpfnSvg className="mx-auto" />
            </h1>
            <div className="max-w-lg">
              <h2 className="no-underline">
                An Operating Function is a decentralized personal computer.
              </h2>
              <h2 className="no-underline">
                It exists on many devices simultaneously, including the cloud,
                and can run forever.
              </h2>
            </div>
          </div>
        </section>

        <section>
          <p>Your ship is a ubiquitous personal cloud computer.</p>

          <p>
            A ship is made of many individual machines. Each physical computer
            you use contains one machine. All your machines together make up
            your ship. That means your ship is decentralized.
          </p>

          <p>
            Each machine can run many processes, called cogs. Cogs are
            responsible for running all of your programs and storing all of your
            data. They do this automatically so you never have to think about
            saving or backup.
          </p>

          <p>
            Each cog can create many drivers. Drivers are a special program that
            only a cog can create. They allow your machines, and your ship, to
            interact with the outside world. Drivers let your ship connect to
            things like the web, a file system, or a GPU.
          </p>

          <p>
            Mods are upgrades to your ship. You can install a mod from a
            marketplace, the internet, or from your friend down the street.
            Since you own your ship, no one can keep the insides of a mod secret
            from you. If you want to change the mod, the only limit is your
            skill.
          </p>

          <div className="text-right flex flew-row justify-end">
            <div className="text-right">
              <p className="text-xl" id="thing">
                Thing!!
              </p>
            </div>
          </div>

          <div className="text-center relative">
            <ScrollSequence
              frameDir="forest_frames"
              frameCount={100}
              width={698}
              height={1081}
              backgroundImage="/images/wide-forest.jpeg"
            >
              <section className="flex justify-center text-center flex-col items-center align-center transparent text-white h-[90vh]">
                <div>
                  <h1 className="text-6xl">
                    <OpfnSvg />
                  </h1>
                  <h2 className="no-underline">Sub header</h2>
                </div>
              </section>
            </ScrollSequence>
          </div>

          <p>
            As your digital life gets bigger, you’ll want to add more machines
            to your ship. To start a new machine, you give it a manifest file.
            The manifest tells the machine what contents of your ship it is
            responsible for.
          </p>
        </section>

        <section>
          <WebGLTest
            speed={0.5}
            color={[0.5, 0.3, 1.0]}
            size={0.1}
            targetSelectors={["#test", "#thing"]}
            debug={true} // Enable this temporarily to see what's happening
          />
          <div className="text-center">
            <button id="test">GET YOUR SHIP</button>
          </div>
        </section>
      </main>
    </div>
  );
}
