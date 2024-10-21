"use client";
import React, { useEffect } from "react";
import Link from "next/link";
// import Image from "next/image";

export default function Home() {
  // const inputRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {};

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="">
      <main className="content-zone">
        <section>
          <header className="hero">
            The Ubiquitous Computer You Mod
          </header>
        </section>

        <section>
          <p>
          Your ship is a ubiquitous personal cloud computer. 
        </p>

          <p>
          A ship is made of many individual machines. Each physical computer you use contains one machine. All your machines together make up your ship. That means your ship is decentralized.
        </p>

          <p>
          Each machine can run many processes, called cogs. Cogs are responsible for running all of your programs and storing all of your data. They do this automatically so you never have to think about saving or backup.
        </p>

          <p>
          Each cog can create many drivers. Drivers are a special program that only a cog can create. They allow your machines, and your ship, to interact with the outside world. Drivers let your ship connect to things like the web, a file system, or a GPU.
        </p>

          <p>
          Mods are upgrades to your ship. You can install a mod from a marketplace, the internet, or from your friend down the street. Since you own your ship, no one can keep the insides of a mod secret from you. If you want to change the mod, the only limit is your skill.
        </p>

          <p>
          As your digital life gets bigger, you’ll want to add more machines to your ship. To start a new machine, you give it a manifest file. The manifest tells the machine what contents of your ship it is responsible for. 
        </p>
        </section>

        <section>
          <div className="text-center">
            <button>GET YOUR SHIP</button>
          </div>
        </section>

      </main>
    </div>
  );
}
