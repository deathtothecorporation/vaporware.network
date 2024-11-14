import React from "react";

export default function About() {
  return (
    <div>
      <main
        id="vision"
        className="mt-24 content-zone mx-auto px-4 mb-12"
      >
        <div>
          <h2 className="my-8">What motivates us</h2>
          <p>
            Software is the best tool we have to solve societal issues
            at scale, so why does modern software seem to cause so much
            harm and conflict? We believe the root cause is the siloing
            of software into applications and the economic relationships
            it incentivizes.
          </p>

          <p>
            Apps isolate data and code in opaque siloes, corrupting the
            incentives of successful companies and alienating developers
            from their labor. Massive data breaches, the loss of
            personal artifacts like photos and notes, and ratcheting
            online political conflict and polarization are all
            downstream of the app model. How do they cause this? Apps
            create high transaction costs for developers (the amount of
            effort required to make a code change) and high switching
            costs for users (the amount of effort to use new software).
            These constraints limit the rational coordination strategies
            of each party and nudge the market system toward mass
            surveillance, censorship of minorities, and winner-take-all
            dynamics.
          </p>

          <p>
            Siloed apps make it more difficult to create new kinds of
            software. Organizations that produce a valuable software
            product tend to get large, and large centralized
            organizations must rationally plan their activities. With
            enough success, these firms become so large that useful
            activity becomes impossible to centrally administrate. The
            organization becomes bureaucratic and experimental code
            changes are subject to coordination costs which grow
            super-linearly with codebase size. Commercially viable
            software goes unshipped because the returns seem too small,
            or it’s impossible to sustain focus and motivation, or it
            overlaps with an existing product. Externally, third party
            developers can’t even access the code, making the cost of
            parallel experimentation effectively infinite. This
            development structure pushes companies toward extractive
            business models in an attempt to beat back internal
            entropy—more ads, higher subscription fees, aggressive IP
            enforcement.
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
            virtual computer where all software is open, malleable, and
            owned by the user. The computer must run across all the
            devices that a user owns because software needs to be
            accessible wherever a user requires it. Applications have
            trained us all to expect access to cloud resources,
            including cheap storage, scalable compute, and services like
            generative models. This means the ubiquitous computer also
            needs to run on servers, preferably whenever it would be a
            better experience than running locally (but always under the
            control of the user). These requirements imply the need for
            a computer defined purely in software which can be
            standardized and made universally portable across hardware
            and hosts, preventing vendor lock-in, and incentivizing
            competition. We call this new device category a Personal
            Cloud Computer, or PC2.
          </p>

          <p>
            For users, a Personal Cloud Computer enables the Internet to
            be incrementally upgraded. The PC2 would sit like an overlay
            on top of current web apps, mediating the ability of
            Internet giants to lock away data and functionality. Rather
            than being stuck with fixed features, PC2 owners could learn
            to extend existing apps or could purchase modifications from
            independent developers. Data from one social app could be
            ported into another, or could be used to generate higher
            quality search and feed results. We already see some of this
            dynamic with browser extensions, but in a restricted way.
            Beyond upgrades, the PC2 would also create a new design
            space for distributed software: programs that are intended
            from the start to be extended, modified, or ported into new
            contexts. Video and photo filters could be added or removed
            from apps at will, favorite text editing tools could be
            reused wherever text is found, and data like social
            connections could be automatically integrated into any
            context the user needed.
          </p>

          <p>
            Developers would benefit from this model too. When a user
            owns a distributed computing platform, the developer can
            write software without worrying about infrastructure. New
            developers can rely on user-owned social graphs, and focus
            on writing great programs, instead of bootstrapping new
            networks. And since users operate the software, developers
            won’t incur the same legal liabilities that plague software
            companies today—publishing software becomes like publishing
            a book: it would enjoy the full protection of free speech
            laws. Finally, the coordination costs for code changes would
            be minimized as much as possible. When all code is open, you
            can &quot;inspect source&quot; a full stack program and
            reuse or extend any bit you want.
          </p>

          <p>
            Realizing this vision means revolution, both in the
            Copernican-sense and the social-sense. Applications put
            software companies at the center of our society, with users
            revolving around them. Users are forced to come to the
            software. The Personal Cloud Computer puts the user at the
            center and returns to them control over their data, their
            software, and their connections. What’s lost in pure
            industrial efficiency will be regained in system resilience
            and general market expansion. More importantly, this vision
            is one of an empowered individual. Modern technology
            enforces civil quiescence through homogeneity and control.
            If software is the best tool we have for solving societal
            issues, how much more could we do if our computers were our
            own?
          </p>

          <p>
            {" "}
            To find out{" "}
            <a
              className="hover:font-normal"
              href="https://docs.opfn.co"
              target="_blank"
            >
              read the PLAN
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
