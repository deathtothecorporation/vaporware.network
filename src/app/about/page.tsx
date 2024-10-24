import React from "react";
import Link from "next/link";

export default function About() {
  return (
    <div>
      <main className="content-zone">
        <div>
          <h1>About opfn</h1>
          <div>
            <p className="text-red-800">
              TODO: A short description of:
              <br />
              - opfn as a business entity
              <br />
              - the Pallas project (we build it, license, etc.)
              <br />
              - What the "Vaporware Network" is
              <br />
            </p>
          </div>

          <div>
            <h2>Get involved with opfn.</h2>
            <p>
              Whether you're writing code, joining the discussion or deepening
              your understanding, your contribution is valuable and helps
              manifest the vision.
            </p>
            <p>Help us learn what you want by choosing your path below:</p>
          </div>

          <ul className="list-disc">
            <li>
              <a href="https://t.me/vaporwareNetwork" target="_blank">
                Telegram
              </a>{" "}
              - Chat with the core team, contributors and other users
            </li>

            <li>
              <a href="https://vaporware.network" target="_blank">
                Blog/Podcast
              </a>{" "}
              - Explorations of the wider ecosystem in which opfn finds itself
            </li>

            <li>
              <Link href="/contribute">Contribute</Link> - Submit a pull request
            </li>

            <li>
              <a href="https://opfn.gitbook.io/pallas" target="_blank">
                Documentation
              </a>{" "}
              - In-depth technical documentation and reference
            </li>

            <li>
              <a href="mailto:founders@vaporware.network">
                founders@vaporware.network
              </a>{" "}
              - Email us
            </li>

            <li>
              <a href="https://x.com/opfnco" target="_blank">
                Twitter/X
              </a>{" "}
              - Follow @opfnco
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
