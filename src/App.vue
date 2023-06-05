<template>
  <div class="flex flex-col md:block">
    <!-- mobile -->
    <div class="w-full h-[100vh] flex flex-col justify-around">
      <video
        poster="./assets/vapor-static.png"
        class="relative w-full h-32 mx-auto lg:h-96"
        src="./assets/vapor-loop.mp4"
        loop=""
        autoplay=""
        muted=""
        playsinline=""
      ></video>
      <div class="flex flex-col justify-around mx-8 text-center">
        <div class="text-xl leading-relaxed lg:text-2xl">
          <p class="mb-8">
            NFTs are a tamper-proof global record of read and write permissions
            for data and code.
          </p>
          <p>
            Vapor makes NFTs into rich digital experiences using
            cryptographically-owned digital identity and self-sovereign personal
            servers.
          </p>
        </div>
      </div>
    </div>

    <div class="flex flex-col justify-around py-16 bg-card">
      <div
        class="flex flex-col items-center justify-center h-full mx-8 md:mx-auto md:container"
      >
        <h1 class="mt-10 mb-4 text-xl text-center md:text-4xl">
          Get early access to the next era of NFT-enabled experiences.
        </h1>
        <div class="w-full mb-10">
          <SignUp class="mt-8" />
        </div>
      </div>
    </div>

    <div class="h-full py-24 mx-auto bg-white">
      <div class="items-center justify-center h-full md:container md:mx-auto">
        <div class="sticky mb-24 text-center top-4 md:relative">
          <div class="flex flex-row justify-around">
            <div class="flex flex-row">
              <div
                @click="chooseCreators"
                :class="
                  creators
                    ? 'text-dark-gray font-bold bg-less-dark'
                    : 'text-light-gray bg-dark'
                "
                class="px-6 py-2 rounded-l-full shadow-md cursor-pointer md:px-12"
              >
                Creators
              </div>

              <div
                @click="chooseCollectors"
                class="px-6 py-2 rounded-r-full shadow-md cursor-pointer md:px-12"
                :class="
                  !creators
                    ? 'text-dark-gray font-bold bg-less-dark'
                    : 'text-light-gray bg-dark'
                "
              >
                Collectors
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col justify-center h-full mx-4 md:mx-auto">
          <div v-if="!creators" class="h-full text-xl">
            <p>
              Collecting NFT Art is not about "right-click, save-as". It is
              patronage of the creators of the network age. It is participation
              in community-building, finding your tribe, and circumventing the
              gatekeeping of legacy "culture". Yet new gatekeepers are making
              themselves known, and technical dependencies are hindering the
              ingenuity of a new generation of creators.
            </p>

            <p class="mb-1">
              <span class="font-bold">
                The gatekeeping and technical limitations are everywhere:
              </span>
            </p>
            <ul>
              <li>
                Marketplaces add centralization layers and censorship risks,
                such as direct hosting of NFT artwork files on permissioned
                servers
              </li>
              <li>
                File type and size limitations curtail full creative expression
              </li>
              <li>
                Collections are static and non-interactive, lacking tangibility
                that makes art personal
              </li>
              <li>
                Community building is limited by a patchwork technical stack
                that lacks persistent identities, communications, and proper
                digital sovereignty
              </li>
            </ul>

            <p>
              <span class="font-bold">Vapor brings the power of a personal server</span>
              &mdash; an ever-running computer that operates with your best
              interests in mind &mdash; to the domain of NFTs and *digital goods* more
              broadly. Vapor is built atop of the Urbit network and virtual
              machine, bringing sovereignty to NFT collectors who find the
              current landscape lacking
            </p>

            <p class="mb-1">
              <span class="font-bold"
                >Vapor collectors get to own the next wave of NFT-driven digital
                experiences:</span
              >
            </p>
            <ul>
              <li>
                P2P content distribution directly from creators and other
                holders
              </li>
              <li>Rich multimedia, interactive, and dynamic experiences</li>
              <li>
                All the underlying benefits of Urbit: cryptographically-owned
                pseudonymous identity, P2P and encrypted communications,
                performance of arbitrary computation on the owner's behalf, and
                a network full of apps for building digital communities
              </li>
            </ul>
          </div>

          <div v-if="creators" class="h-full text-xl">
            <p>
              NFT Creators are promised decentralized, composable, and
              permissionless creative spaces by "web3", yet the layers of
              additional technology required to access and use blockchains take
              this promise and turn it into a subtle falsehood.
            </p>

            <p class="mb-1">
              <span class="font-bold"
                >Centralization and technical limitations are
                everywhere:</span
              >
            </p>
            <ul>
              <li>
                40% of NFT artwork is hosted directly by marketplaces, ready to
                disappear entirely when a company goes the way of FTX or Mt. Gox
              </li>
              <li>
                Even the work hosted on IPFS is often paid for by these same
                marketplaces
              </li>
              <li>
                File type and size limitations curtail full creative expression
              </li>
              <li>
                Collector interactions are nearly non-existent, whether with
                artists, holder communities, or the artwork itself
              </li>
            </ul>

            <p>
              <span class="font-bold">Vapor brings the power of a personal server</span>
              &mdash; an ever-running computer that operates with your best
              interests in mind &mdash; to the domain of NFTs and *digital
              goods* more broadly. By running an Urbit personal server and
              distributing your artwork using Vapor, creators will be able to
              actually achieve the dream of web3.
            </p>

            <p class="mb-1">
              <span class="font-bold">Vapor enables cutting edge creatives with:</span>
            </p>
            <ul>
              <li>P2P content distribution directly to collectors</li>
              <li>Rich multimedia, interactive, and dynamic experiences</li>
              <li>
                All the underlying benefits of Urbit: cryptographically-owned
                pseudonymous identity, P2P and encrypted communications,
                performance of arbitrary computation on the owner's behalf, and
                a network of talented developers looking for creative
                applications of their skillset
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <footer class="border-t bg-card">
      <div class="flex flex-col py-8 mx-8 md:container md:mx-auto">
        <a class="text-black underline" href="https://twitter.com/a_vapor_network" target="_blank">
          @a_vapor_network
        </a>
      </div>
    </footer>
  </div>
</template>

<script setup>
import SignUp from "@/components/SignUp.vue";
import { ref } from "vue";

const creators = ref(true);

const chooseCreators = () => {
  creators.value = true;
};

const chooseCollectors = () => {
  creators.value = false;
};

</script>

<style>
#main-banner {
  background-image: url("./assets/banner.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-attachment: fixed;
  background-position: center;
}
</style>
