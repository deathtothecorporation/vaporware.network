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
      "PLAN's portable evaluation model standardizes how computation moves between resources. This enables markets where compute can be traded and running programs can migrate to optimal execution environments.",
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

export default function About() {
  return (
    <div>
      <main className="mt-[64px]">
        <header className="relative z-10 mb-6 overflow-hidden flex justify-center text-white text-center flex-col items-center align-center h-[30vh]">
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

        <div className="content-zone mt-10 mb-6 flex flex-row space-between items-center">
          <div className="horizontal-bars shrink"></div>
        </div>

        <section className="system-components mb-12">
          <article className="content-zone left">
            <header className="mb-2 mt-0">
              <h5 className="mb-0">PLAN</h5>
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

          <article className="right">
            <header className="content-zone">
              <h5>Machines</h5>
            </header>
            <p className="content-zone">
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

            <div className="flex my-12 justify-center">
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

          <div>
            {USE_CASES.map((caseItem, index) => (
              <UseCase
                number={`${(index + 1).toString().padStart(2, "0")}.`}
                key={index}
                title={caseItem.title}
                hasBackground={caseItem.hasBackground}
              >
                <p>{caseItem.content}</p>
              </UseCase>
            ))}
          </div>
        </section>

        <div className="flex my-10 mb-12 justify-center">
          <Link href="#">
            <button>Contact Us</button>
          </Link>
        </div>
      </main>
    </div>
  );
}
