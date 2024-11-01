import Link from "next/link";

export default function About() {
  return (
    <div>
      <main className="mt-[64px]">
        <header className="relative z-10 overflow-hidden flex justify-center text-white text-center flex-col items-center align-center h-[30vh]">
          <img
            src="/images/coast.png"
            alt="Forest Background"
            className="px-3 absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 max-w-lg">
            <h1 className="text-[20px] font-bold berkeley">
              System Overview
            </h1>
          </div>
        </header>
        <section className="content-zone">
          <p>
            An operating function is a programming environment that
            combines aspects of Erlang/OTP, the EVM, and Lisp. Like
          </p>
          <p>
            Erlang, the system is functional, supports concurrency
            through message passing, and programs can be hot reloaded
            without downtime. Like the EVM, program state is
            automatically persisted. Programs keep everything “in
            memory” and will run forever (but there is no global
            consensus). Like Lisp, programs can universally introspect
            themselves and their environment, and dynamically introduce
            new code.
          </p>
        </section>

        <div className="content-zone mt-10 flex flex-row space-between items-center">
          <div className="horizontal-bars shrink"></div>
        </div>

        <section className="system-components mb-12">
          <article className="content-zone left">
            <header>
              <h5>PLAN</h5>
            </header>
            <p>
              PLAN is the foundation of our system software—the
              operating function bootstraps from PLAN. It is a
              functional, lazy, and reflective “bytecode” and is
              designed to strike a reasonable balance between several
              requirements: human readability, functional compile
              target, efficient and stable memory representation, ease
              of implementation, and extensibility and modifiability.
            </p>

            <pre className="code">
              <code
                style={{
                  whiteSpace: "pre-wrap",
                  wordWrap: "break-word",
                }}
              >
                {`
PLAN ::= <PLAN>
         | {Nat Nat PLAN}
         | (PLAN PLAN)
         | Nat
Pins - subheaps: content addressed DAG nodes
Laws - supercombinators: pure n-ary functions
Apps - applications: closures or thunks
Nats - natural numbers: opaque data or opcodes
                                `}
              </code>
            </pre>
          </article>

          <article className="content-zone right">
            <header>
              <h5>Machines</h5>
            </header>
            <p>
              Because software in an operating function isn’t siloed in
              apps, you have full access to the codebase, backend
              included. “Inspect source” everything, and change anything
              you want.
            </p>
            <div className="flex justify-end relative right-[-20px]">
              <img src="/images/rocket.png" />
            </div>
          </article>

          <article className="content-zone left">
            <header>
              <h5>Cogs</h5>
            </header>
            <p>
              Machines run cogs. Cogs are responsible for user programs
              and managing the persistence of data. They do this
              automatically. Within the system, cogs are closures which
              capture their full environment. Cogs can upgrade
              themselves while running by accepting a value which
              defines a new cog.
            </p>
            <div className="flex justify-center">
              <img src="/images/blob.png" />
            </div>
          </article>

          <article className="content-zone right">
            <header>
              <h5>Drivers</h5>
            </header>
            <p>
              Drivers are a special program that only a cog can create.
              Each cog can create and manage many drivers. Drivers
              interact with a small set of standardized virtual hardware
              devices and let an operating function connect to things
              like the web, a file system, or a GPU.
            </p>
          </article>

          <article className="content-zone left">
            <header>
              <h5>Manifests</h5>
            </header>
            <p>
              Manifests are a special PLAN value that must be provided
              to a new machine. The manifest tells the machine what
              contents from a user’s existing network of operating
              functions it is responsible for: both programs and data.
            </p>

            <div className="flex justify-center">
              <a href="https://docs.opfn.co" target="_blank">
                <button>Read the Docs</button>
              </a>
            </div>
          </article>
        </section>

        <div className="content-zone my-10 flex flex-row space-between items-center">
          <div className="horizontal-bars shrink"></div>
        </div>

        <section id="use-cases">
          <header className="relative z-10 overflow-hidden flex justify-center text-white text-center flex-col items-center align-center h-[30vh]">
            <img
              src="/images/river.png"
              alt="Forest Background"
              className="px-3 absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative z-10 max-w-lg">
              <h1 className="text-[20px] font-bold berkeley">
                Use Cases
              </h1>
            </div>
          </header>

          <div class="">
            <article>
              <header className="">
                <div className="number">01.</div>
                <div className="title">
                  <div className="header-line"></div>
                  <h2>Fungible compute markets</h2>
                </div>
              </header>
              <div className="case-area">
                <div className="jungle-bg">
                  <img
                    src="/images/dithered-jungle.png"
                    alt="jungle background image"
                    className="jungle-bg-image"
                  />
                  <div className="jungle-overlay"></div>
                </div>
                <p>
                  PLAN's portable evaluation model standardizes how
                  computation moves between resources. This enables
                  markets where compute can be traded and running
                  programs can migrate to optimal execution
                  environments.
                </p>
              </div>
            </article>

            <article>
              <header className="">
                <div className="number">02.</div>
                <div className="title">
                  <div className="header-line"></div>
                  <h2>Decentralized social graphs</h2>
                </div>
              </header>
              <p>
                PLAN's portable evaluation model standardizes how
                computation moves between resources. This enables
                markets where compute can be traded and running programs
                can migrate to optimal execution environments.
              </p>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}
