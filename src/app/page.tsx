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
      <main className="container mx-auto md:max-w-xl px-8 md:px-0">
        <header className="mx-auto border-b border-black pb-8 mb-8">
          <h1 className="hero mb-4">opfn</h1>
        </header>

        <section>
          <header>
            <div className="horizontal-bars shrink mr-[6px]"></div>
            <h1 className="grow whitespace-nowrap">This is a relaunch</h1>
            <div className="horizontal-bars shrink ml-[6px]"></div>
          </header>

          <p>
            Application silos are destroying the Internet. Apps create high
            transaction costs for developers and high switching costs for users.
            Within organizations, experimental code changes are subject to
            coordination costs which grow non-linearly with codebase size.
            Externally, third party developers can’t even access the code,
            making transactions effectively impossible. This development
            structure inevitably favors large corporations that embrace
            extractive business models. But even with nation-sized treasuries,
            innovation slows to a crawl as organizations grow and diseconomies
            of scale set in.
          </p>

          <p>
            Applications also discourage users from adopting new software.
            Switching is made more costly when user data is unavailable for
            exporting, or is exported in a malformed or partial representation.
            Since code is owned and controlled by the corporation, users that
            move to a new app have to learn new functionality; they can’t take
            the interface with them. Worse yet, applications capture the value
            created when users find and interact with one another. Silicon
            Valley calls these network effects, the rest of us just call it
            being social. But the desire to be connected is so compelling,
            people are willing to ignore even the most egregious manipulations.
          </p>

          <p>
            What is needed instead of applications is a ubiquitous personal
            computer where all software is open and owned by the user. The
            computer must be distributed because software needs to exist
            everywhere its operator goes. Servers must be supported so that
            individuals can access cheap storage, scalable compute, and external
            services like generative models. A standardized and universally
            portable computer protects users from vendor lock-in because it can
            always be moved to a different device or host.
          </p>

          <p>
            Developers benefit too. If a user already has a computer in the
            cloud, the developer can write software without worrying about
            infrastructure. New developers can rely on user-owned social graphs,
            and focus on writing great programs, instead of bootstrapping new
            networks. And since users operate the software, developers don’t
            incur the same moderation costs that plague content publishers
            today—publishing software becomes like publishing a book. Finally,
            the coordination costs for code changes are minimized as much as
            possible. When all code is open, you can “inspect source” a full
            stack program and reuse any bit you want.
          </p>
        </section>
      </main>
    </div>
  );
}
