import React from "react";
import ExternalLink from "@/components/ExternalLink";

export default function About() {
  return (
    <div>
      <main className="content-zone">
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
          <ul className="list-disc">
            <li>
              <ExternalLink href="https://github.com/operating-function/pallas" >
                GitHub
              </ExternalLink>{" "}
              - The Pallas open-source code
            </li>

            <li>
              <a href="https://opfn.gitbook.io/pallas">Documentation</a>{" "}
              - In-depth technical documentation and reference for
              Pallas
            </li>

            <li>
              <a href="https://vaporware.network">Blog/Podcast</a> -
              Explorations of the wider ecosystem in which Pallas finds
              itself
            </li>

            <li>
              <a href="https://t.me/vaporwareNetwork">Telegram</a> -
              Chat with the core team, contributors and other users
            </li>

            <li>
              <a href="mailto:founders@vaporware.network">
                founders@vaporware.network
              </a>{" "}
              - Email us
            </li>

            <li>
              <a href="https://x.com/opfnco">Twitter/X</a>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
