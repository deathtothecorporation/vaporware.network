---
layout: blog
background_image:
header_image: /assets/images/headers/kiwi.jpg
title: vaporware explained
author: ~sarlev-sarsen
date: October 27, 2023
hide_nav: true
---

Plainly stated, `vaporware` is a new kind of peer-to-peer web application. It is
a construction of the elements necessary for a better user -- or shall we say,
*operator* -- experience with crypto, and more broadly, a sovereign digital
life. These applications offer similar functionality as existing websites and
apps, but are served in a way that preserves the privacy of the operator and
obviates the liability traps that drown developers in compliance policies and
starve us of novel software experiences.

The Vaporware ecosystem is comprised of the following components:

* Ethereum NFTs
* Mobile PWAs (Progressive Web App) with Embedded Crypto Wallets
* Token Bound Smart Contract Accounts
* Urbit, a Solid-State Interpreter
* Hosted Urbit Ship Onboarding
* Web3 Native Sign-In
* Vaporware Namespacing Protocol

Read on to learn more about how these systems work to deliver unique affordances
to developers and novel experiences to the world.

# NFTs as distribution channel and software 'licensing' scheme

Million dollar pictures of rocks or monkeys notwithstanding, Non-Fungible Tokens
(NFTs) represent a particularly interesting technological affordance: 

> **NFTs are a tamper-proof ledger of permissions to data and code.**

As NFT skeptics love to remind us, tokens have tended to merely point to data or
content that isn’t itself actually on-chain. As the use case for digital
information rights expands to running software, the conception of what an NFT
represents must expand beyond the limitations of degen token trading. 

Of course, we thank the degens for forging the path. For building the
marketplaces that allow capital to flow towards this new technology. But, we now
aim to turn these marketplaces not only into places for status signaling and
financial games (although we like those too), but into channels for monetizing
and distributing free and open source technology -- including as a secondary
market for *used cloud software*. Ever buy a subscription to Adobe Creative
Cloud, not use it for three months, and wish you could recoup some of that sunk
cost? Us too. 

Vaporware always comes as an operator-ownable NFT with all of the on-chain
affordances of that digital asset class: provenance, cryptographic ownership,
composability, etc. The main differentiator for Vaporware NFTs from the current
landscape is the mechanism of access to off-chain data, _running code and
application state_, and the way that they are linked to digital identities. This
enables a mechanism for taking the ‘programmability’ of crypto asset ownership,
to use as a licensing layer for cloud software, linked to on-chain identity.

In our initial implementation of "NFTs as programmable identity-linked
licenses", with MiladyOS we are taking a three part approach:

* Privileged mint access to current holders of the Milady Maker PFP ERC-721 to
  receive a sovereign cloud computer, utilizing the PFP as the actual *profile
  access token* 
* Open Edition mOS ERC-721 NFT mint for purchasing a software license to receive
  ongoing updates to the miladyOS application
* Token gated content access via ERC-1155 tokens that can be bought from and
  sold into a bonding curve and staking mechanics for earning yield.

Each token in the system is a license for specific software features, a proof of
ownership, and an access point for off-chain data & compute. While MiladyOS uses
these tokens for content access, we envision future applications making use of
NFTs for dependency management, open-source library monetization, and even
access to computational resources.

# End-running centralized app stores

As crypto gives software developers a more direct path to customers, the current
Megacorps are trying to protect their domain. Google and Apple’s app store
duopoly is effectively a cartel, with very high taxes and restrictive terms of
service that stifle innovation. This pushes developers towards the narrow set of
software experiences that support the duopoly’s  existing business models
(spying on you for advertisers and selling you expensive closed-source hardware,
respectively, among other ills). 

Although desktop OSes still retain their original open-by-default marketplaces,
with so much of the world trending towards mobile-first computing the App
Stores’ defacto ban on crypto restricts people to an increasingly anachronistic
desktop paradigm, hamstringing the utility of an otherwise device-agnostic
network.

> In other words, the App Store cartel effectively controls far too much of the
  practically-available application space.

The upshot: each new technical feature these giants implement exposes new cracks
in the monopoly. One such crack is the UX affordances of the Progressive Web App
(PWA). For Megacorps, the goal of PWAs is to combine the reach and accessibility
of the web with the engaging and feature-rich experience of native apps. Of
course, with new functionality comes new opportunities and Vaporware is designed
to expand into the gaps created by these implementations.  

Key characteristics of PWAs include:
* "Installation" of the app on the operator's home screen, for accessibility
  akin to a native app
* Host OS-level mobile push notifications
* Improved performance and functionality, even in offline or low-connectivity
  scenarios
* Persistent application state

This last characteristic is deceptively subtle, yet extremely high-leverage. By
pairing persistent local state on mobile, and persistent urbit state in the
cloud, we can embed Multi-Party Computation (MPC) wallets like Privy (or an
Urbit Native wallet) into these PWAs to broaden the set of possible crypto apps
otherwise disallowed by centralized app stores which are at risk of regulatory
capture.

And, with the advent of Token Bound Accounts (such as those defined in
EIP-6551), having an ecosystem of NFTs that represent your software and
individual features affords both developers and software operators capabilities
not previously possible in crypto or the broader software world.

# Token Gated Accounts grow the design space

Stand-alone NFTs have support from marketplaces and decent adoption among crypto
operators, but once you try using them for anything more than monkey pictures it
get’s tricky. You can’t sell a classical crypto address (e.g an Externally Owned
Account or EOA) and the variety of assets or permissions that it controls. But
by building on the [EIP6551 Token Bound Account (TBA)
standard](https://eips.ethereum.org/EIPS/eip-6551), Vaporware’s Token Gated
Accounts (TGA) give you a programmable container with a cryptographically-unique
identity that can be part of a digital agent that is plugged into the broader
financial system.

“Crypto” as a technology is still in it's nascent stage, loved by early adopters
for certain unique features (sovereignty, censorship resistance, separation of
  state and money), but lacking the decades of ‘user experience design’ that has
  gone into the fiat money networks. Forward progress demands that we improve
  these experiences in order to achieve the other promises of digital money:
  programmable financial instruments, autonomous AI agents taking economic
  action on your behalf, and fully global peer-to-peer networks.

Vaporware offers two main affordances for improving UX:

* Token Gated Accounts 
* Permissioned mobile wallets for select function calls on those Token Gated
  Accounts

But how does this improve usability? Your Milady Maker PFP remains in your
top-level EOA, potentially secured via a hardware wallet, and has "admin
privileges" to control all the other accounts in the system. This is fairly
standard for Token Bound Accounts based on the EIP6551 Standard. 

But here is where things get interesting... For Vaporware Token Gated Accounts
we have added a specific functionality: The ability to pair your in-app wallet
with your top-level ethereum wallet

MiladyOS operators can take their PWA's embedded MPC Wallet and, by signing
transactions, grant access permissions to a subset of actions on behalf of
multiple TBAs in their personal MiladyOS Account ecosystem. By doing this, we do
not need to ask holders of high-value PFP tokens to move their tokens in order
to access novel digital experiences. Retaining a single mobile account affords
execution of a subset of buy/sell actions and inventory changes. And if that
mobile wallet ever gets lost or compromised, the top level EOA that holds the
PFP can always revoke permissions and grant them to a newly-generated wallet.

We can now bring the longstanding 'principle of least permissions' into the
crypto software world -- instead of all access defacto running as `root`. Or, a
particularly security conscious user could choose to skip the mobile wallet
bonding entirely, and execute contract actions directly with their top-level
keys. In short, they retain the optionality to meet their appetite for security and UX tradeoffs
([`#friendtechbtfo`](https://cointelegraph.com/news/friendtech-sim-swap-attack-string-of-hacks)).

# Hosted Urbit ships for streamlined onboarding with a "right to exit"

Partnering with [Red Horizon](redhorizon.com), we offer web3 native onboarding
to sovereign Urbit applications. Given the early adopters of vaporware are
crypto operators, onboarding is driven by a smart contract ecosystem that holds
and distributes Urbit IDs linked to running Urbit instances. When an operator
buys vaporware, they are also airdropped an Urbit ID which gives their
software a self-sovereign cloud in which to run.

> "Wait, I thought this was sovereign? But someone else is running it for me!?" 

This is another UX tradeoff. But where cloud technology like facebook or
friend.tech make that decision for you (“you may only access your application
and data through our servers, and it must be hosted on our hardware”), vaporware
offers optionality. If ever you want to take your urbit and run it yourself -- you
can.

This mechanism works by using Urbit ID’s nature as a cryptographically owned
digital asset to:
* Enable hosting service providers to place running ships into a coordination
  contract
* Allow developers to set up a link between the NFT that represents their
  software and a set of ships within the coordination contract
* And then programmatically sell them to vaporware minters, splitting revenue
  either on chain or via a separate agreement with each other.

At this stage, the vaporware operator now cryptographically owns their Urbit and
thus has a inarguable "right to exit" (via breaching, revoking management keys,
and taking their identity elsewhere), and the software running on it, without
having to touch a command line -- or an email and password registration form. 

Experienced Urbiters will look at this and ask, "but, how do they get their
`+code` to sign in?" 

Our answer? They don't.

# Crypto wallets as the authentication mechanism to sovereign digital identities and cloud computers

Web3 users are accustomed to signing in to "dApps" using a crypto wallet and
signed messages (Not going to litigate the case here for how these aren't
actually decentralized. That's a story for another day). What we are doing with
vaporware is extending that functionality from signing in to an application on
someone else's cloud computer, to signing in to _your own sovereign cloud
computer_. 

How does vaporware do this? Every urbit instance is fundamentally linked to an
Urbit ID. Unlike your macBook, your urbit understands its own identity and
tracks the ownership of that identity on Ethereum. It can then grant access to
the owner from any browser or mobile device in the world -- assuming a valid signed message is
provided. 

When an operator visits their urbit on the clearweb, they are served a page to
which they can connect their wallet. After connecting their wallet, they are
prompted to sign a message with their ownership keys. This message is passed
into their urbit, validated to come from the owner, and then the urbit provides
a cookie back to the browser which allows the browser an authenticated session
to the visitor.

What does this let you do? Aside from not needing to provide an email, manage
passwords, or somehow use out-of-band communications channels to share an urbit
`+code` to an operator, web3 users can sign-in once, and use any app running on
their sovereign cloud computer without needing to sign in again. 

> For existing Urbiters, this functionality is available from %mask; `|install
  ~ligbel %mask`

# Urbit: A Solid State Interpreter for magic and arbitrage.

What makes this sovereignty in cloud computing possible? Vaporware is built on
top of [Urbit, the first-of-it's-kind Solid State
Interpreter,](https://media.urbit.org/whitepaper.pdf) as a technology
infrastructure for the network age. It bundles identity, networking, databases
and other tools (like a webserver) into a single, portable,
cryptographically-owned state machine.

By having data and compute mapped to the operator -- instead of the current
model of data and compute mapped to the application -- vaporware changes the
opportunities and liability landscape for the development, monetization,
distribution, and computation of open-source software. When all user data lives
on one logical machine, magical app experiences become eminently more possible.

Some of the affordances of a solid state interpreter with
cryptographically-linked identity:
* Software is run by individual "operators" instead of consumer "users".
* Communication and application distribution is directly peer-to-peer
* Data and code are physically portable
* Developers don’t need to worry about the liability of hosting front ends to
  blockchain networks
* Operators control their own data and it all lives in one place, instead of
  disjointed across multiple service providers. 

The big takeaway here for application creators it that they get to **give up
control of user data**. This is, in some sense, anathema to current application
monetization practices, but for new entrants into the software industry it
offers a crack in the armor to the technology landscape. Without vaporware,
successfully launching a software application is an arms race of collecting
every possible piece of data about a user and trying to do a better job at it
than Google or Facebook. By extracting the liability of collecting and handling
user data (see: GDPR, CCPA, etc), vaporware creates an arbitrage opportunity to
developers who can now create a whole new class of applications that are
impossible in the world of centralized SaaS computing due to regulatory
compliance requirements.

# Vaporware Protocol for sharing data and code based on chain state

Of course, Web3 native sign-in and smooth Urbit onboarding flows are table
stakes to deliver a robust customer experience, but if we believe NFTs are the
tamper-proof ledger of data and code _permissions_, there needs to be an
off-chain mechanism for programmatic actions taken on those permissions.
Vaporware aims to further improve the lives of software operators by creating a
set of Urbit infrastructure applications that watch chain state and support the distribution of
data and code based on that state. 

The first iteration of this vision appears in MiladyOS where our chain watcher,
`%make`, watches pre-specified contracts for the movement of relevant tokens and
their relationships to other addresses -- particularly those relating to an Urbit
ID -- and shares a subscription of that data to all MiladyOS holders. Based on the
relationship of an Urbit ID to specific tokens in the collection, an urbit can
modify the way it shares or receives messages from other miladyOS instances. 

This understanding of chain state is shared between permissioned provider nodes,
but as the product evolves, these permissioned nodes will merely be a default
option. By giving every vaporware operators an always-running cloud computer it
becomes possible to receive and verify the state of global consensus through a
larger multitude of options:
* Trust a developer to provide an accurate preset
* Provide your own API keys from a service like Infura or Alchemy
* Run your own blockchain node and connect directly to it from your Urbit
* Trust a friendly node to share accurate chain state to you
* Share your understanding of chain state out to your friends

This frees the average crypto network participant from the restraints of
publicly served front ends and centralized and predetermined data
sources. In the current paradigm, practically speaking, they have neither the
option to check veracity of their blockchain state data source, nor to switch
providers if they become unreliable. With vaporware, it becomes as simple as
flipping a switch.

# Vaporware as hyperstition

Vaporware is all of these things and none of these things. In its full form, all
of these elements will be composable with one another. Developers may utilize
some portions and eschew others. Don't want to use TBAs and just want to use the
crypto-native hosted onboarding flow? Go for it. Want to self-host? Go for it.
Hell, maybe you'll even bring a different Solid-State Interpreter into the mix. Go
for it. 

**These aren't the tightly-ordered departments of a strict joint-stock company
with corporate VP roles, they are the emergent elements of a new system for
human organization and coordination. We are building them from within our
corporate cathedral, but to truly succeed we need to evolve past legalistic
fiction. To ensure a sovereign digital life, the technology we build must itself
become vaporware.**
