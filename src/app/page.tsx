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
    <div className="mb-10">
      <main className="">
        <section className="top-hero relative z-10 overflow-hidden flex justify-center text-white text-center flex-col items-center align-center mb-0 h-[439px]">
          <img
            src="/images/wide-forest.jpeg"
            alt="Forest Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 max-w-lg mx-auto px-[52px]">
            <h1 className="text-6xl">
              <Lockup className="mx-auto" size={300} color="white" />
            </h1>
            <h2 className="no-underline font-bold berkeley text-[16px]">
              The Operating Function Company
            </h2>
            <div className="flex mt-16 mb-0 justify-center">
              <Link href="#">
                <button>Waitlist</button>
              </Link>
            </div>
          </div>
        </section>

        <div className="border-b border-black w-[318px] mx-auto my-8"></div>

        <section className="content-zone">
          <p className="">
            An operating function is a new kind of personal computer
            where all programs are open, malleable and owned by the
            user.
          </p>

          <p>
            It isn’t a device&mdash;it’s a computer defined as software.
            And it runs everywhere simultaneously.
          </p>
        </section>

        <div className="content-zone my-10 flex flex-row space-between items-center">
          <div className="horizontal-bars shrink"></div>
        </div>

        <section className="main-points my-12">
          <article className="content-zone left">
            <header>
              <h5>App-Less Software</h5>
            </header>
            <p>
              Because software in an operating function isn’t siloed in
              apps, you have full access to the codebase, backend
              included. “Inspect source” everything, and change anything
              you want.
            </p>
          </article>

          <article className="content-zone right">
            <header>
              <h5>No Server Costs</h5>
            </header>

            <p>
              Write full stack programs as you would serverless
              functions, or smart contracts. Operating functions are
              owned by users and scale automatically based on their
              owners' demand and preferences.
            </p>
          </article>

          <article className="content-zone left">
            <header>
              <h5>Programs Run Forever</h5>
            </header>

            <p>
              Operating functions provides strong backward and forward
              compatibility guarantees and make it possible to move
              running computations between machines, with no impact to
              the program.
            </p>
          </article>

          <article className="content-zone right">
            <header>
              <h5>Uncensorable Publishing</h5>
            </header>

            <p>
              All data and code is hashed and stored in a
              content-addressable Merkle DAG. Content can be published
              using a protocol that combines aspects of IPFS and
              BitTorrent.
            </p>
          </article>
        </section>

        <section className="content-zone my-12">
          <div className="text-center flex md:flex-col md:mx-auto md:w-1/2 md:space-y-4 justify-center w-full gap-x-4">
            <div className="flex-1 px-4">
              <Link
                href="https://opfn.gitbook.io/pallas"
                target="_blank"
              >
                <button className="w-full">Docs</button>
              </Link>
            </div>
            <div className="flex-1 px-4">
              <Link href="/system-overview#use-cases">
                <button className="w-full">Use Cases</button>
              </Link>
            </div>
          </div>
        </section>

        <div className="content-zone my-10 flex flex-row space-between items-center">
          <div className="horizontal-bars shrink"></div>
        </div>

        <section id="core-technology">
          <header className="relative z-10 overflow-hidden flex justify-center text-white text-center flex-col items-center align-center h-[30vh]">
            <img
              src="/images/field.png"
              alt="Forest Background"
              className="px-3 absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative z-10 max-w-lg">
              <h1 className="text-[20px] font-bold berkeley">
                Core Technology
              </h1>
            </div>
          </header>

          <article>
            <div className="jungle-bg">
              <img
                src="/images/dithered-jungle.png"
                alt="jungle background image"
                className="jungle-bg-image"
              />
              <div className="jungle-overlay"></div>
            </div>
            <div className="core-content">
              <header>
                <h2 className="mt-0">PLAN is a Bytecode</h2>
              </header>

              <main>
                <div className="p-4 bg-[#EEE] opacity-90">
                  <pre className="code">
                    <code
                      style={{
                        whiteSpace: "pre-wrap",
                        wordWrap: "break-word",
                      }}
                    >
                      {`

Each value is a pin x:<i>, a law x:{n a b}, an app x:(f g), or a nat x:@.

Treat this as a combinator system, and use normal-order evaluation to normalize.
Unmatched patterns diverge.

(0 n a b) | NAT(a)>0 = {NAT(n) NAT(a) force(b)}  
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

NAT(x:@) = x  
NAT(_)   = 0

EXEC(e, n:@)     = e[n] or n if n>=len(e)
EXEC(e, (0 x y)) = (EXEC(x) EXEC(y))  
EXEC(e, (1 v b)) = EXEC(f,b) where f = e ++ [EXEC(f,v)]  
EXEC(e, (2 x))   = x  
EXEC(e, x)       = x
                                    `}
                    </code>
                  </pre>
                </div>

                <p className="mt-8">
                  PLAN is the core innovation that makes a ubiquitous
                  personal computer possible. It enables universal
                  portability across devices, guarantees backward
                  compatibility, and makes forward compatibility between
                  runtimes tractable.
                </p>

                <p>PLAN is functional, lazy, and reflective.</p>
                <div
                  id="reflective"
                  className="absolute bottom-[80px] right-[-55px] h-[140px] w-[140px]"
                >
                  <img src="/images/reflective.png" />
                </div>
              </main>

              <div className="flex mt-12 mb-10 justify-center">
                <Link href="/system-overview">
                  <button>System Overview</button>
                </Link>
              </div>
            </div>
          </article>

          <article>
            <div className="jungle-bg">
              <img
                src="/images/dithered-jungle.png"
                alt="jungle background image"
                className="jungle-bg-image"
              />
              <div className="jungle-overlay"></div>
            </div>

            <div className="core-content">
              <header>
                <h2 className="mt-0">Cogs Run Forever</h2>
              </header>

              <main className="p-2 bg-[#EEE]  opacity-90">
                <div>
                  <p>
                    Cogs are programs that run forever. Even if you
                    reboot, cogs will continue exactly where they left
                    off because they persist state automatically. A
                    personal computer should never become obsolete. And
                    it should <span className="font-bold">never</span>{" "}
                    lose your data.
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
                      {`
type Worker   = Driver | Job
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
  }

                                    `}
                    </code>
                  </pre>
                </div>

                <p>
                  Notice that the cog is free to change itself. It can
                  even replace itself with a completely new value.
                </p>
              </main>

              <div className="flex mt-6 justify-center">
                <Link href="#">
                  <button>Waitlist</button>
                </Link>
              </div>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}
