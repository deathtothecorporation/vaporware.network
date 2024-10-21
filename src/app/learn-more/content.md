<span id="vision">
</span>

# Vision

Application silos are destroying the Internet. We see their effect in the spread of surveillance capitalism and the growing conflicts with liberal values. The mechanism of action is economical: apps create high transaction costs for developers and high switching costs for users. These constraints limit rational coordination strategies between participants and create externalities for the rest of society.

Within organizations, experimental code changes are subject to coordination costs which grow non-linearly with codebase size. Externally, third party developers can’t even access the code, making transactions effectively impossible. This development structure inevitably favors large corporations that embrace extractive business models. But even with nation-sized treasuries, innovation slows to a crawl as organizations grow and diseconomies of scale set in.

Applications also discourage users from adopting new software. Switching is made more costly when user data is unavailable for exporting, or is exported in a malformed or partial representation. Since code is owned and controlled by the corporation, users that move to a new app have to learn new functionality; they can’t take the interface with them. Worse yet, applications capture the value created when users find and interact with one another. Silicon Valley calls these network effects, the rest of us just call it being social. But the desire to be connected is so compelling, people are willing to ignore even the most egregious manipulations.

What is needed instead of applications is a ubiquitous personal computer where all software is open and owned by the user. The computer must be distributed because software needs to exist everywhere its operator goes. Servers must be supported so that individuals can access cheap storage, scalable compute, and external services like generative models. A standardized and universally portable computer protects users from vendor lock-in because it can always be moved to a different device or host. 

Developers benefit too. If a user already has a computer in the cloud, the developer can write software without worrying about infrastructure. New developers can rely on user-owned social graphs, and focus on writing great programs, instead of bootstrapping new networks. And since users operate the software, developers don’t incur the same moderation costs that plague content publishers today—publishing software becomes like publishing a book. Finally, the coordination costs for code changes are minimized as much as possible. When all code is open, you can "inspect source" a full stack program and reuse any bit you want.


# Main Features, In-Depth

## All software is open / malleable / ownable

### what this means

> You own every byte

To **own** your software, it must be:
- `exclusively user-controlled`. nothing can reach in and make changes you don't authorize
- `fully-inspectible and human-readable`. nothing is hidden from you. from application code to compiler binaries.
- `trustless`. with enough skill, you can understand the entire system without trusting elements provided by a 3rd party 
- `malleable`. you must be able to change any part you want.

### why it matters

Resilience is downstream of ownership.

- without `exclusive control`, a hand-of-god could change the laws of physics your resiliency is built on.
- opaque parts of the system can create unwanted effects
- `trust` may be broken in a way that undermines resilience
- if a system isn't `malleable`, transferable or usable by its owner, what value is there in owning it?

### how we do it

- PLAN (disassembly)
- Licensing
- Type system
- App-less / accessible data


<span id="no-fee-sell">
</span>

## Sell your software globally w/ 0% fee

> Unstoppable app stores
### what this means

- Buyers and sellers of software can be anywhere on Earth, optionally anonymous
- payments (or other forms of optional access control) are permissionless and up to the market participants. no rent-seeking party taking a cut in the middle.
- all software is guaranteed to run on every instance
- software is distributed peer-to-peer
- developers and end-users can opt to trust a variety of curator "app stores" - or not. install what you want from where you want.
### why it matters

Transferring code between individuals is a form of information sharing, of free expression. The current network paradigm has allowed corporations and state actors to stubbornly lodge themselves in the middle of this process. When they're not censoring unfavorable information, they're charging fees for the "privilege" of using their involuntary software distribution walled-garden.  
Why is it that you can buy a lawn chair from your neighbor but not an app?

Communities must be able to exchange software on their own terms in order to build resilience. Involuntary fees and constraints waste value and result in vulnerability.
### how we do it 

- permissionless payments
- p2p software distribution
- universal deployment target
- trust in code / curator


## Zero ongoing server costs or platform fees

> Developers don't pay for the infrastructure their users rely on
### what this means

- Developers don't have to stand up or maintain any hosting infrastructure. End users run their own code and supply their own resources.
- Nor do developers pay to have their code initially delivered or hosted with any central repository.
- Developers don't pay for a platform subscription fee. there is no platform
- A User's single "computer" is spread across many devices in an elastic personal cluster of servers, edge devices and light clients.
### why it matters

The domain of applications feasible for individuals and small teams to build diminishes when software developers must bear the infrastructure costs - both financial and regulatory - associated with user management and scaling.  
There are many unfortunate results of this unnecessary arrangement: profusion of advertisement, harvesting and sale of user data, dehumanizing attention economy shenanigans, "user growth hacking" excesses. Ultimately, you end up with a world where unfeeling mega-corporations are the only entities providing software for communities to which they have no connection - or worse: communities which they exploit.

When this barrier is removed, small teams of developers are able to compete with billion dollar corporations. communities can evolve software that is relevant to their operators and in direct communication with hyper-local concerns. A diversity of components bloom. Malleable, human-scale software becomes tangible for the first time.

### how we do it 
- p2p connections
- multi-device, including servers (tunable)


## No DevOps

> Write code, deliver full-stack apps. That's the whole story
### what this means

A typed, functional, full-stack language with automatic persistence included for free, aimed at a universal deployment target.  
No need to coordinate tooling and DevEx between backend and frontend languages. No system dependencies like databases, auth or networking. A purely functional system means solid-state side effects that allow for simulating production systems. 

### why it matters

Heterogeneous, resilient communities will be populated with different devices and resource access. The software produced by and for these communities needs to serve flexible user experiences across many different device types and compute resources.  
**TK: more needed here**

### how we do it 
- automatic persistence
- hot reloading
- Full stack, single language
- solid-state side effects (testing, simulation of production systems, etc.)


## Write once, run forever

> "Programs that run forever"
### what this means

Data and applications inside your Operating Function will be accessible and executable forever.   
something about frozen core  
Something about feasibility of writing competing or replacement runtimes  
something about host-machine agnosticism  
something about extreme portability  
**TK: more here / flesh out**

### why it matters

in order to have a resilient networked society:
can't have lock-in (to host OSes, runtimes, languages)
can't have bitrot (can we really prevent bitrot, like at the cosmic ray level?)
people should be able to access 100 year old documents written by authors on completely alien physical machines
### how we do it 
- PLAN
- universal portability
- jets, hardware interface, data model, easy runtime development


## Uncensorable content delivery system

> Free speech isn't over! if we want it.
### what this means

free speech is guaranteed, reach is not. but it's entirely in your own hands and your own network
don't have to give up the affordances of the current content distribution world - text, video, audio, streaming, realtime communication
if you and another person want to exchange information, you can. full-stop.

### why it matters

human coordination requires free exchange of information  
### how we do it 
- portability of computer and feasibility of "running it in your closet"
- streaming
- content addressable data
- NAT holepunching

