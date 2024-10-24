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
            <h2 className="no-underline font-bold berkeley">
              The Operating Function Company
            </h2>
          </div>
        </section>

        <div className="max-w-sm content-zone border-b border-black mb-8"></div>

        <section className="content-zone">
          <p className="">
            <span className="italic">
              An operating function is a new software-defined personal
              computer. The computer is decentralized because it exists
              on many devices simultaneously, including the cloud, and
              can run forever.
            </span>
          </p>

          <p>
            <span className="italic">
              Operating functions can be moved while running and save
              state automatically. All programs are open and modifiable.
              Users retain control over their software, their data, and
              their networks. Developers bear no infrastructure cost.
            </span>
          </p>
        </section>

        <section className="content-zone">
          <header className="flex flex-row space-between items-center">
            <div className="horizontal-bars shrink mr-[6px]"></div>
            <h1 className="grow whitespace-nowrap">
              All Software is Open
            </h1>
            <div className="horizontal-bars shrink ml-[6px]"></div>
          </header>

          <p>
            The system is inspectable down to the bottom. Our compiler
            binary is called <a href="#plan">PLAN</a> and is pure, lazy,
            and human readable. The entire system bootstraps itself from
            PLAN using reflection and dynamic code generation. 
          </p>

          <p>
            End-user programs are created without siloing functionality
            in applications. When software is installed, source is
            automatically available for inspection. Modifications can be
            hot reloaded with no downtime.
          </p>

          <p>TK: paragraph about trustlessness</p>
        </section>

        <section className="content-zone">
          <header className="flex flex-row space-between items-center">
            <div className="horizontal-bars shrink mr-[6px]"></div>
            <h1 className="grow whitespace-nowrap">
              Programs Run Forever
            </h1>
            <div className="horizontal-bars shrink ml-[6px]"></div>
          </header>

          <p>
            A personal computer should never become obsolete. PLAN has 5
            opcodes that are frozen in time, guaranteeing old code will
            work on new implementations, and new code will work on old
            (but maybe more slowly).
          </p>

          <p>
            To make it fast, targets for hardware acceleration are
            encoded within the system. New targets can be added as
            standards. Stateful effects are handled by a small number of
            IO channels that are specified by the system, but
            implemented in the runtime.
          </p>

          <p>
            Operating functions run on edge devices and cloud servers,
            moving programs between domains depending on their user’s
            need. 
          </p>
        </section>

        <div className="max-w-sm content-zone border-b border-black mb-8"></div>

        <section className="content-zone">
          <article>
            <header>
              <h1 className="my-2">Pallas (OF 1.0)</h1>
            </header>
            <div>
              <p>
                The fullstack system being developed by
                <Lockup
                  className="relative top-1 mx-2 inline-block"
                  size={50}
                  color="black"
                />
                is called Pallas. it's the first operating function, but
                we expect subsequent OFs to emerge from other
                communities.
              </p>
              <p>
                PLAN is the core innovation that makes a ubiquitous
                personal computer possible. Let's take a quick look at
                it now.
              </p>
            </div>
          </article>
        </section>

        <section className="content-zone" id="callouts">
          <article className="left">
            <header>
              <h3 id="PLAN">PLAN</h3>
            </header>
            <main>
              <p>
                The PLAN spec is tiny and the system it defines is
                reflective: it can examine, introspect, and modify
                itself.
              </p>
              <p>Here is the data model of PLAN:</p>
              <pre className="code mx-2">
                <code>
                  {`
PLAN ::= <PLAN>           # Pin
       | {Nat Nat PLAN}   # Law
       | (PLAN PLAN)      # App
       | Nat              # Nat
                 `}
                </code>
              </pre>
              <p>
                PLAN is barely hand-writable, but it is human-readable.
                This is the source for the foldl function:
              </p>
              <pre className="code mx-2 text-[10px]">
                <code>
                  {`
* (_If a b c)=(2 c ((d e & d) b) a)
* (_Not a)=(_If a 0 1)
* (_IsApp a)=(1:(b&0):(b c d & 0):(b c & 1):(b&0) a)
* (_Null a)=(_Not _IsApp-a)
* (_Cdr a)=(1:(b&b):(b c d & d):(b c & c):(b&0) a)
* (_Car a)=(1:(b&4):(b c d & 0-b-c):(b c & b):(b&0) a)
* (_Get a b)=(_If _Null-a 0 (2 _Cdr-a (_Get _Car-a) b))
* (_Idx a b)=(_Get b a)
* (_Seq a b)=(2 b ((c d & c) b) a)
* (id a)=a
* (_Dec a)=(2:0:id a)
*   = (_Len a)
    ^ a
    : (go b c ? _Seq b (_If _Null-c b (go 3-b _Car-c)))
    : 0
*   = (foldl a b c)
    ^ a c b 0 _Len-c
    ? (go d e f g h)
    @ i (d f _Idx-g-e)
    | _If h (_Seq i (go d e i 3-g _Dec-h)) f
                `}
                </code>
              </pre>
              <p>
                foldl includes the source for its dependencies (_If
                _Not, etc). Once you learn the 5 opcodes, you can
                understand the entire foldl source down to the metal.
              </p>
            </main>
          </article>
        </section>

        <section className="content-zone">
          <div className="text-center flex justify-center w-full gap-x-4">
            <Link href="https://opfn.gitbook.io/pallas" target="_blank">
              <button>See the Docs</button>
            </Link>
            <Link href="/use-cases">
              <button>Use Cases</button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
