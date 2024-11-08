"use client";

import React, { ReactNode, useEffect } from "react";
import Lockup from "@/components/Lockup";
import Logo from "@/components/Logo";
//<Logo size={100} color="white" className="bg-black" />
//<Logo size={100} color="black" />
//
import Link from "next/link";

import UseCase from "@/components/UseCase";

const USE_CASES = [
  {
    title: "Fungible compute markets",
    hasBackground: true,
    content:
      "PLAN's portable evaluation model standardizes how computation moves between resources. This enables markets where compute can be traded and running programs can migrate to optimal execution environments.",
  },
  {
    title: "Decentralized social graphs",
    hasBackground: true,
    content:
      "Operating functions solve the problem of siloed social graphs by maintaining connections and data at the system level, independent of any single app. Users can try new social software while maintaining their existing graphs and data, dramatically reducing switching costs.",
  },
  {
    title: "Semantic exploratory programming",
    hasBackground: true,
    content:
      "Developers can integrate external AI services and use them to investigate and modify full stack systems while they run, entirely through natural language. Direct connections to underlying implementations are always available.",
  },
  {
    title: "P2P software distribution",
    hasBackground: true,
    content:
      "Pins enable data and code to be stored as a Merkle DAG. Combined with a top level cryptographic identity, authors can sign their software packages, creating verifiable content-addressed artifacts that can be shared across a p2p network.",
  },
  {
    title: "Personal data storage",
    hasBackground: true,
    content:
      "Operating functions store large amounts of data and can transparently page in large heaps while maintaining efficient access patterns. Combined with extreme forward and backward compatibility guarantees, they create a stable platform for storing personal data.",
  },
  {
    title: "Agent orchestration",
    hasBackground: true,
    content:
      "Operating functions provide a substrate for agent orchestration where the programming environment itself can evolve alongside the agents. Agents can inspect and modify not just source objects but the entire runtime environment.",
  },
  {
    title: "Lifestreams",
    hasBackground: true,
    content:
      "A lifestream is an ordered collection of all your documents and communications, organized automatically by timestamp. Operating functions are pure and event-sourced, making them particularly well-suited as a platform for universal chronological interfaces.",
  },
  {
    title: "Malleable software design",
    hasBackground: true,
    content:
      "Operating functions have the most complete feature set for malleable software design: full structural and behavioral reflection, capability-based access control, unified code/data representation, gradual adaptation patterns, and an effect system.",
  },
  {
    title: "Non-custodial programmable wallets",
    hasBackground: true,
    content:
      "Wallets don't need third parties for MPC coordination if users run their own distributed computer. Because operating functions also act as general purpose web servers, wallets can programmatically interact with multiple chains through RPCs.",
  },
];

interface UseCasesSectionProps {
  children: ReactNode[];
}

const UseCasesSection = ({ children }: UseCasesSectionProps) => {
  // Group the cases into pairs (for rows)
  const rows = [];
  for (let i = 0; i < children.length; i += 2) {
    rows.push(children.slice(i, i + 2));
  }

  return (
    <div className="flex w-full px-2 md:px-0 md:content-zone mx-auto flex-col gap-y-8 justify-items-stretch">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="relative">
          {/* Background for this row */}
          <div className="absolute inset-0 z-0">
            <div className="jungle-bg h-full">
              <img
                src="/images/dithered-jungle.png"
                alt="jungle background image"
                className="w-full h-full object-cover opacity-10"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#eeeeee] via-transparent to-[#eeeeee]"></div>
            </div>
          </div>

          {/* Row content */}
          <div className="relative z-10 md:grid md:grid-cols-2 flex flex-col">
            {/* Left column */}
            <div className="justify-self-start">{row[0]}</div>
            {/* Right column */}
            <div className="justify-self-end">{row[1]}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

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
    <div className="mb-10">
      <main className="">
        <section className="top-hero relative z-10 overflow-hidden flex justify-center text-white text-center flex-col items-center align-center mb-0 md:w-opfn w-full mx-auto md:h-[1043px]">
          <img
            src="/images/hero-forest.png"
            alt="Forest Background"
    className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 mx-auto pt-[147px] md:pt-0 md:px-[52px]">
            <h1 className="md:w-[744px]">
              <Lockup className="mx-auto" size={300} color="white" />
            </h1>
            <h2 className="no-underline font-bold berkeley text-[16px] md:text-[36px] mb-[70px] md:mb-[150px]">
              The Operating Function Company
            </h2>
            <div className="flex mb-[50px] md:mb-0 justify-center">
              <Link href="#">
                <button>Waitlist</button>
              </Link>
            </div>
          </div>
        </section>

        <div className="border-b border-black w-[318px] md:w-opfn-narrow mx-10 md:mx-auto md:narrow-zone my-opfn-sm"></div>

        <section className="narrow-zone">
          <p className="">
            An operating function is a new kind of personal computer where all
            programs are open, malleable and owned by the user.
          </p>

          <p>
            It isn’t a device&mdash;it’s a computer defined as software. And it
            runs everywhere simultaneously.
          </p>
        </section>

        <div className="content-zone my-opfn flex flex-row space-between items-center">
          <div className="horizontal-bars"></div>
        </div>

        <section className="main-points content-zone mb-opfn">
          <article className="left">
            <header>
              <h2>App-Less Software</h2>
            </header>
            <p>
              Because software in an operating function isn’t siloed in apps,
              you have full access to the codebase, backend included. “Inspect
              source” everything, and change anything you want.
            </p>
          </article>

          <article className="right">
            <header>
              <h2>No Server Costs</h2>
            </header>

            <p>
              Write full stack programs as you would serverless functions, or
              smart contracts. Operating functions are owned by users and scale
              automatically based on their owners' demand and preferences.
            </p>
          </article>

          <article className="left">
            <header>
              <h2>Programs Run Forever</h2>
            </header>

            <p>
              Operating functions provides strong backward and forward
              compatibility guarantees and make it possible to move running
              computations between machines, with no impact to the program.
            </p>
          </article>

          <article className="right">
            <header>
              <h2>Uncensorable Publishing</h2>
            </header>

            <p>
              All data and code is hashed and stored in a content-addressable
              Merkle DAG. Content can be published using a protocol that
              combines aspects of IPFS and BitTorrent.
            </p>
          </article>
        </section>

        <section className="content-zone mt-opfn-lg mb-[64px]">
          <div className="text-center flex mx-auto justify-center w-[286px] md:w-full gap-x-4">
            <div className="md:pr-[43px] pr-[36px]">
              <Link href="https://opfn.gitbook.io/pallas" target="_blank">
                <button className="fixed-w">Docs</button>
              </Link>
            </div>
            <div className="">
              <Link href="#use-cases">
                <button className="fixed-w">Use Cases</button>
              </Link>
            </div>
          </div>
        </section>

        <div className="content-zone my-[64px] md:my-opfn flex flex-row space-between items-center">
          <div className="horizontal-bars"></div>
        </div>

        <section id="core-technology">
          <header className="relative z-10 overflow-hidden flex justify-center text-white text-center flex-col items-center align-center mx-auto w-full h-[200px] md:w-[744px] md:h-[396px]">
            <img
              src="/images/field.png"
              alt="Forest Background"
    className="absolute inset-0 object-cover mx-auto px-2 md:px-0"
            />
            <div className="relative z-10 max-w-lg">
              <h1 className="font-bold berkeley md:text-[36px] text-[20px]">Core Technology</h1>
            </div>
          </header>

          <article className="content-zone w-opfn mx-auto container">
            <div className="jungle-bg">
              <img
                src="/images/dithered-jungle.png"
                alt="jungle background image"
                className="jungle-bg-image"
              />
              <div className="jungle-overlay"></div>
            </div>
            <div className="px-4 md:grid md:grid-cols-2 flex flex-col mx-auto">
              <div className="justify-self-start core-content md:w-372">
                <header>
                  <h2 className="mt-0 mb-[14px]">PLAN is a calculus</h2>
                </header>

                <main className="">
                  <div className="p-2 bg-[#EEE] opacity-90">
                    <div className="h-[400px]">
                      <pre className="code">
                        <code
                          className="flex flex-col gap-y-2"
                          style={{
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                          }}
                        >
                          <div className="">
                            {`Each value is a pin x:<i>, a law x:{n a b}, an app x:(f g), or a nat x:@. `}
                          </div>

                          <div className="">
                            {`Treat this as a combinator system, and use normal-order evaluation to normalize.
Unmatched patterns diverge. `}
                          </div>

                          <div className="">
                            {`(0 n a b) | NAT(a)>0 = {NAT(n) NAT(a) force(b)}  
(1 p _ _ _ <x>)      = (p x)  
(1 _ l _ _ {n a b})  = (l n a b)  
(1 _ _ a _ (f x))    = (a f x)  
(1 _ _ _ n x:@)      = (n x)  
(2 z p x)            = n=NAT(x); if n=0 then z else p (n-1)  
(3 x)                = NAT(x)+1  
(4 x)                = <force(x)>  
(f:{n a b} x0..xn)   = EXEC([f x0..xn], b)  
(f:<{n a b}> x0..xn) = EXEC([f x0..xn], b)  
(<i> ..)             = (i ..)
`}
                          </div>

                          <div className="">
                            {`NAT(x:@) = x
NAT(_)   = 0
`}
                          </div>

                          <div className="">
                            {`EXEC(e, n:@)     = e[n] or n if n>=len(e)
EXEC(e, (0 x y)) = (EXEC(x) EXEC(y))  
EXEC(e, (1 v b)) = EXEC(f,b) where f = e ++ [EXEC(f,v)]  
EXEC(e, (2 x))   = x  
EXEC(e, x)       = x`}
                          </div>
                        </code>
                      </pre>
                    </div>

                    <div>
                      <p className="">
                        PLAN is the core innovation that makes a ubiquitous
                        personal computer possible. It enables universal
                        portability across devices, guarantees backward
                        compatibility, and makes forward compatibility between
                        runtimes tractable.
                      </p>

                      <p>
                        PLAN is functional, lazy, and <em>reflective</em>.
                      </p>
                    </div>
                  </div>
                </main>
              </div>

              <div className="core-content justify-self-end md:w-372">
                <header>
                  <h2 className="mt-0 mb-[14px]">Cogs Run Forever</h2>
                </header>

                <main className="bg-[#EEE] p-2 opacity-90">
                  <div className="h-[400px]">
                    <div>
                      <p>
                        Cogs are programs that run forever. Even if you reboot,
                        cogs will continue exactly where they left off because
                        they persist state automatically. A personal computer
                        should never become obsolete. And it should{" "}
                        <span className="font-bold">never</span> lose your data.
                      </p>
                    </div>

                    <div className="">
                      <pre className="code">
                        <code
                          style={{
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                          }}
                        >
                          {`type Worker   = Driver | Job
type WorkerId = Nat
type MsgId    = Nat
type Input    = (WorkerId, PLAN)
type Output   = (WorkerId, MsgId, PLAN)

type CogClosure =
  { run     :: CogClosure 
            -> Array Input 
            -> (CogClosure, Array Output)
  , state   :: state
  , query   :: WorkerID -> state -> PLAN -> PLAN
  , workers :: Array Worker
  }`}
                        </code>
                      </pre>
                    </div>
                  </div>

                  <div className="">
                    <p>
                      Notice that the cog is free to change itself. It can even
                      replace itself with a completely new value.
                    </p>
                  </div>
                  <div className="w-full flex justify-around items-center mx-auto">
                    <div
                      id="reflective"
                      className="text-center h-[106px] w-[106px]"
                    >
                      <img src="/images/reflective.png" />
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </article>

        </section>

        <div className="content-zone my-[64px] md:my-opfn flex flex-row space-between items-center">
          <div className="horizontal-bars"></div>
        </div>

        <section id="system-overview">
          <header className="relative z-10 mt-0 mb-opfn overflow-hidden flex justify-center text-white text-center flex-col items-center align-center mx-auto w-full md:w-[744px] h-[200px] md:h-[396px]">
            <img
              src="/images/coast.png"
              alt="Forest Background"
              className="px-3 absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative z-10 max-w-lg">
              <h1 className="font-bold berkeley md:text-[36px] text-[20px]">System Overview</h1>
            </div>
          </header>

          <section className="content-zone w-opfn mx-auto container">
            <p>
              An operating function is a programming environment that combines
              aspects of Erlang/OTP, the EVM, and Lisp. Like
            </p>
            <p>
              Erlang, the system is functional, supports concurrency through
              message passing, and programs can be hot reloaded without
              downtime. Like the EVM, program state is automatically persisted.
              Programs keep everything “in memory” and will run forever (but
              there is no global consensus). Like Lisp, programs can universally
              introspect themselves and their environment, and dynamically
              introduce new code.
            </p>
          </section>

          <div className="border-b border-black md:w-[318px] md:w-opfn-narrow mx-10 md:mx-auto md:narrow-zone my-opfn-sm"></div>

        <section className="system-components md:grid md:grid-cols-2 md:gap-y-[65px] flex flex-col content-zone">
          <article className="md:w-opfn-xs left md:h-[360px] mb-[65px]">
              <header className="mb-2 mt-0">
                <h2 className="mb-0">PLAN</h2>
              </header>
              <p className="mb-[16px]">
                PLAN is the foundation of our system software—the operating
                function bootstraps from PLAN. It is a functional, lazy, and
                reflective “bytecode” and is designed to strike a reasonable
                balance between several requirements: human readability,
                functional compile target, efficient and stable memory
                representation, ease of implementation, and extensibility and
                modifiability.
              </p>

              <div className="w-full flex items-center justify-around">
                <pre className="code">
                  <code
                    style={{
                      whiteSpace: "pre-wrap",
                      wordWrap: "break-word",
                    }}
                  >
                    {`PLAN ::= <PLAN>
         | {Nat Nat PLAN}
         | (PLAN PLAN)
         | Nat
Pins - subheaps: content addressed DAG nodes
Laws - supercombinators: pure n-ary functions
Apps - applications: closures or thunks
Nats - natural numbers: opaque data or opcodes`}
                  </code>
                </pre>
              </div>
            </article>

          <article className="md:w-opfn-xs left md:h-[360px] mb-[65px]">
              <header className="content-zone">
                <h2 className="text-right w-full">Machines</h2>
              </header>
              <div className="flex h-full flex-col justify-between">
                <div>
                  <p className="content-zone">
                    Because software in an operating function isn’t siloed in
                    apps, you have full access to the codebase, backend
                    included. “Inspect source” everything, and change anything
                    you want.
                  </p>
                </div>
                <div className="shrink"></div>
                <div className="relative bottom-[30px] h-[120px] self-end">
                  <img height="120" src="/images/rocket.png" />
                </div>
              </div>
            </article>

            <article className="md:w-opfn-xs h-[360px]">
              <header>
                <h2>Cogs</h2>
              </header>
              <p>
                Machines run cogs. Cogs are responsible for user programs and
                managing the persistence of data. They do this automatically.
                Within the system, cogs are closures which capture their full
                environment. Cogs can upgrade themselves while running by
                accepting a value which defines a new cog.
              </p>
              <div className="flex justify-center">
                <img src="/images/blob.png" />
              </div>
            </article>

            <article className="md:w-opfn-xs left md:h-[360px] md:mb-[65px]">
              <div className="mb-[64px]">
                <header>
                  <h2 className="text-right w-full">Drivers</h2>
                </header>
                <p>
                  Drivers are a special program that only a cog can create. Each
                  cog can create and manage many drivers. Drivers interact with
                  a small set of standardized virtual hardware devices and let
                  an operating function connect to things like the web, a file
                  system, or a GPU.
                </p>
              </div>

              <div className="">
                <header>
                  <h2 className="text-right w-full">Manifests</h2>
                </header>
                <p>
                  Manifests are a special PLAN value that must be provided to a
                  new machine. The manifest tells the machine what contents from
                  a user’s existing network of operating functions it is
                  responsible for: both programs and data.
                </p>
              </div>
            </article>

            <div className="col-span-2 mx-auto mt-opfn-lg mb-[50px] md:mb-0">
              <a href="https://docs.opfn.co" target="_blank">
                <button>Read the Docs</button>
              </a>
            </div>
          </section>

          <div className="content-zone my-opfn flex flex-row space-between items-center">
            <div className="horizontal-bars"></div>
          </div>

          <section id="use-cases">
            <header className="relative z-10 mt-0 mb-opfn overflow-hidden flex justify-center text-white text-center flex-col items-center align-center mx-auto h-[200px] w-full md:w-[744px] md:h-[396px]">
              <img
                src="/images/river.png"
                alt="Forest Background"
                className="px-3 absolute inset-0 w-full h-full object-cover"
              />
              <div className="relative z-10 max-w-lg">
              <h1 className="font-bold berkeley md:text-[36px] text-[20px]">Use Cases</h1>
              </div>
            </header>

            <div className="">
              <UseCasesSection>
                {USE_CASES.map((caseItem, index) => (
                  <UseCase
                  className={`w-full md:w-[357px] ${index % 2 !== 0 ? "" : ""}`}
                    number={`${(index + 1).toString().padStart(2, "0")}.`}
                    key={index}
                    title={caseItem.title}
                    hasBackground={false}
                  >
                    <div className={`w-full md:w-[357px] ${index % 2 !== 0 ? "" : ""}`}>
                      <p className="w-full">{caseItem.content}</p>
                    </div>
                  </UseCase>
                ))}
              </UseCasesSection>
              <div className="flex mt-opfn-lg mb-opfn justify-center">
                <Link href="#">
                  <button>Waitlist</button>
                </Link>
              </div>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}
