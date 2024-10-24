import React from "react";
import Link from "next/link";

export default function About() {
  return (
    <div>
      <main className="content-zone">
        <header>
          <h1 className="text-red-500">"What Pallas"</h1>
          <p>
            <span className="text-red-500">
              this is the section where we call out a few of our "6
              primary benefits" through the lens of{" "}
              <em>what you can do with this system</em> with no regard
              to whether or not this is possible today or in the future.
            </span>
          </p>

          <p>
            <span className="text-red-500">
              Note that these sections would be linkable on their own.
              This means we have <em>something</em> to give to every
              type of person who asks. the PL people are satisfied by
              the landing page and the docs, but when we get a commenter
              on Nostr saying "what do you mean you have a solution for
              censorship?" we can link here. And when we get people who
              are asking about what we believe, we link them to the
              "WHY" at the bottom of this page
            </span>
          </p>
        </header>

        <section className="content-zone">
          <header className="flex flex-row space-between items-center">
            <div className="horizontal-bars shrink mr-[6px]"></div>
            <h1 className="grow whitespace-nowrap">
              Uncensorable Sharing
            </h1>
            <div className="horizontal-bars shrink ml-[6px]"></div>
          </header>

          <p>
            All data and code is content-addressed and stored in a
            Merkle DAG. Efficient memory paging means there is no real
            distinction between in-memory and on-disk.
          </p>

          <p>
            The DAG structure and peer network complement protocols like
            BitTorrent and the runtime can handle large amounts of data.
            This makes it possible to build scalable content networks.
          </p>
        </section>

        <section className="content-zone">
          <header className="flex flex-row space-between items-center">
            <div className="horizontal-bars shrink mr-[6px]"></div>
            <h1 className="grow whitespace-nowrap">No Server Cost</h1>
            <div className="horizontal-bars shrink ml-[6px]"></div>
          </header>

          <p>
            Users connect to each other peer-to-peer. Operating
            functions run on edge devices and cloud servers, moving
            programs between domains depending on their user’s need. 
          </p>

          <p>
            Developers write full stack programs as they would
            serverless functions, or smart contracts. Publishing
            software is equivalent to sharding: the user runs an
            entirely independent copy. External services can still be
            integrated through APIs.
          </p>
        </section>

        <section className="content-zone">
          <header className="flex flex-row space-between items-center">
            <div className="horizontal-bars shrink mr-[6px]"></div>
            <h1 className="grow whitespace-nowrap">
              (maybe) Compute Markets
            </h1>
            <div className="horizontal-bars shrink ml-[6px]"></div>
          </header>

          <p>loreum ipsum</p>

          <p>loreum ipsum</p>
        </section>

        <header>
          <h1 className="text-red-500">"How Pallas"</h1>
          <p>
            <span className="text-red-500">
              Here we give some structure to how it is the above
              promises start to look like they could actually work out.
            </span>
          </p>
        </header>
        <section className="content-zone" id="callouts">
          <article className="left">
            <header>
              <h3>Ships</h3>
            </header>
            <main>
              <p>
                A ship is made of many individual machines. Each
                physical computer you use contains one machine. All your
                machines together make up your ship. That means your
                ship is decentralized.
              </p>
            </main>
          </article>

          <article className="right">
            <header>
              <h3>Machines</h3>
            </header>
            <main>
              <p>
                A machine runs an operating function. The operating
                function is a new kind of programming environment that
                combines language features, a minimal kernel,
                networking, and a database. It bootstraps from PLAN.
              </p>
            </main>
          </article>

          <article className="left">
            <header>
              <h3>Cogs</h3>
            </header>
            <main>
              <p>
                Each machine can manage many processes, called cogs.
                Cogs are responsible for running all of your programs
                and storing all of your data. They do this automatically
                so you never have to think about saving or backup.
              </p>
            </main>
          </article>

          <article className="right">
            <header>
              <h3>Drivers</h3>
            </header>
            <main>
              <p>
                Each cog can create many drivers. Drivers are a special
                program that only a cog can create. They allow your
                machines, and your ship, to interact with the world
                around them. Drivers let your ship connect to things
                like the web, a file system, or a GPU.
              </p>
            </main>
          </article>

          <article className="left">
            <header>
              <h3>Mods</h3>
            </header>
            <main>
              <p>
                Mods are upgrades to your ship. You can install a mod
                from a marketplace, the internet, or from your friend
                down the street. Since you own your ship, no one can
                keep the insides of a mod secret from you. If you want
                to change the mod, the only limit is your skill.
              </p>
            </main>
          </article>

          <article className="right">
            <header>
              <h3>Manifests</h3>
            </header>
            <main>
              <p>
                As your digital life gets bigger, you’ll want to add
                more machines to your ship. To start a new machine, you
                give it a manifest. The manifest tells the machine what
                contents of your ship it is responsible for. 
              </p>
            </main>
          </article>
        </section>

        <header>
          <h1 className="text-red-500">"WHY Pallas"</h1>
          <p>
            <span className="text-red-500">
              Finally, we provide our "problem statement" of why such a
              system is needed
            </span>
          </p>
        </header>
        <section>
          <p>
            Application silos are destroying the Internet. With no
            realistic alternative, applications have come to dominate
            most forms of software production. They have become embedded
            in every part of modern life, and in the process, have
            spread negative externalities throughout society. Their
            mechanism of action is economics: apps create high
            transaction costs for developers and high switching costs
            for users. These constraints limit the rational coordination
            strategies of each party and nudge the market system toward
            mass surveillance, censorship of minorities, and
            winner-take-all dynamics.
          </p>

          <p>
            Siloed apps make it more difficult to create new kinds of
            software. Centralized organizations that produce a valuable
            software product tend to get large, and large centralized
            organizations must rationally plan their activities. With
            enough scale, these companies are forced to grapple with
            Hayek’s problem of the utilization of knowledge. The
            organization becomes bureaucratic and experimental code
            changes are subjected to coordination costs which grow
            non-linearly with codebase size. Commercially viable
            software goes unshipped because the returns seem too small,
            or the activation energy is too high, or it overlaps with an
            existing product. Externally, third party developers can’t
            even access the code, making the cost of parallel
            experimentation effectively infinite. This development
            structure pushes companies toward extractive business models
            in an attempt to beat back entropy.
          </p>

          <p>
            Applications also discourage users from adopting new
            software. Switching costs are high when users can’t export
            data, or can only export partially complete data. Since code
            is owned and controlled by the corporation, users who move
            to a new app bear the cost of learning new functionality;
            apps preclude the possibility of bringing old software into
            new contexts. Worse yet, applications capture the value
            created when users find and interact with one another.
            Silicon Valley calls these network effects, the rest of us
            just call it being social. There is no higher cost than the
            loss of community, but apps make social exclusion a
            rewarding business policy.
          </p>

          <p>
            What is needed instead of applications is a ubiquitous
            personal computer where all software is open, malleable, and
            owned by the user. The computer must run across all the
            devices that a user owns because software needs to be
            accessible wherever a user requires it. Applications have
            trained us all to expect access to cloud resources,
            including cheap storage, scalable compute, and services like
            generative models. This means the ubiquitous computer also
            needs to run on servers, preferably whenever it would be a
            better experience than running locally, but always under the
            control of the user. These requirements imply the need for a
            software-defined computer which can be standardized and made
            universally portable across hardware or hosts, preventing
            vendor lock-in, and incentivizing competition.
          </p>

          <p>
            Developers would benefit from this model too. When a user
            owns a computer in the cloud, the developer can write
            software without worrying about infrastructure. New
            developers can rely on user-owned social graphs, and focus
            on writing great programs, instead of bootstrapping new
            networks. And since users operate the software, developers
            won’t incur the same legal liabilities that plague software
            companies today—publishing software becomes like publishing
            a book: it would enjoy the full protection of free speech
            laws. Finally, the coordination costs for code changes would
            be minimized as much as possible. When all code is open, you
            can “inspect source” a full stack program and reuse or
            extend any bit you want.
          </p>

          <p>
            Realizing this vision means revolution, both in the
            Copernican-sense and the social-sense. Applications put
            software companies at the center of our industry, with users
            revolving around them. Users come to the software. The
            ubiquitous computer puts the user at the center and returns
            to them control over their data, their software, and their
            connections. What’s lost in pure industrial efficiency, is
            regained in system resilience and general market expansion.
            More importantly, this vision is one of an empowered
            individual. Software is the best tool we have for
            identifying, organizing, and solving societal issues. How
            much more could we do if our computers were our own?
          </p>
        </section>
      </main>
    </div>
  );
}
