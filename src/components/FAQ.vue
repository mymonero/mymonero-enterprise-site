<template>

<a name="faq" id="faq"></a>
  <div class="bg-lightsilver">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto divide-y-2 divide-charcoal">
        <h2 class="text-4xl font-light tracking-tight md:text-4xl lg:text-5xl text-center">Frequently asked questions</h2>
        <div class="mt-6 space-y-6 divide-y divide-charcoal">

<!-- Question 1 -->
          <Disclosure as="div" class="pt-6" v-slot="{ open }">
            <dt class="text-lg">
              <DisclosureButton class="text-left w-full flex justify-between items-start text-gray-400">
                <span class="font-medium text-gray-900">
                  What is a light wallet service?
                </span>
                <span class="ml-6 h-7 flex items-center">
                  <ChevronDownIcon :class="[open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform']" aria-hidden="true" />
                </span>
              </DisclosureButton>
            </dt>
            <DisclosurePanel as="dd" class="mt-2 pr-12">
              <p class="text-base text-gray-500">
                The light wallet service only downloads the portion of the blockchain that is necessary for transactions to process correctly. 
                Doing this allows for much faster sync speeds and saves massively on the storage space required to run the wallet.<br>
                Businesses and their wallet users are often required to run a full Monero node, which means they have to download the entire blockchain every time a user opens their wallet. 
                This translates into heavy data storage usage, longer waiting times before the user can start to transact, and a poor user experience. <br><br>
                At MyMonero, our servers constantly run the full node, and as a result, we can provide a light wallet service where users don't need to download the entire blockchain to transact. 
              </p>
            </DisclosurePanel>
          </Disclosure>

<!-- Question 2 -->
          <Disclosure as="div" class="pt-6" v-slot="{ open }">
            <dt class="text-lg">
              <DisclosureButton class="text-left w-full flex justify-between items-start text-gray-400">
                <span class="font-medium text-gray-900">
                  What problem are you trying to solve?
                </span>
                <span class="ml-6 h-7 flex items-center">
                  <ChevronDownIcon :class="[open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform']" aria-hidden="true" />
                </span>
              </DisclosureButton>
            </dt>
            <DisclosurePanel as="dd" class="mt-2 pr-12">
              <p class="text-base text-gray-500">
                Monero's underlying technology is incredibly complex and requires developers with very specialized skills to maintain it. 
                This means that for many crypto wallet businesses, the cost of supporting Monero is too high.<br><br>
                For this reason, many crypto wallets do not support Monero. <br>
                At MyMonero, our developers have the required skill-set and have built an infrastructure that simplifies the process of hosting Monero on any multi-asset wallet or exchange. 
                Therefore, lowering the barrier to entry for many crypto wallet businesses helps to make Monero more readily available and widespread among crypto users. 
              </p>
            </DisclosurePanel>
          </Disclosure>

<!-- Question 3 -->
          <Disclosure as="div" class="pt-6" v-slot="{ open }">
            <dt class="text-lg">
              <DisclosureButton class="text-left w-full flex justify-between items-start text-gray-400">
                <span class="font-medium text-gray-900">
                  Are there any other companies providing the same service as you?
                </span>
                <span class="ml-6 h-7 flex items-center">
                  <ChevronDownIcon :class="[open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform']" aria-hidden="true" />
                </span>
              </DisclosureButton>
            </dt>
            <DisclosurePanel as="dd" class="mt-2 pr-12">
              <p class="text-base text-gray-500">
                No. All other Monero hosting services are maintained by a community of people and are not scalable, robust, or reliable. Severe performance issues begin to surface as soon as the user base grows.<br><br>
                MyMonero stands out from the crowd because we are currently the only highly scalable, lightweight wallet hosting service for Monero. 
                We offer our partners unlimited horizontal scalability, and we are performance-built to handle clients with extensive Monero user bases. With a system like ours, 
                designed and built to scan large quantities of wallets simultaneously, our end-user experience is unmatched.<br><br>
                Our aim has always been to remain ahead of the game; therefore, we constantly add new features. The entire MyMonero team is passionate about Monero and works tirelessly to maintain a robust infrastructure. 
                This has resulted in us offering the best enterprise solution in the industry.
              </p>
            </DisclosurePanel>
          </Disclosure>

<!-- Question 4 -->
          <Disclosure as="div" class="pt-6" v-slot="{ open }">
            <dt class="text-lg">
              <DisclosureButton class="text-left w-full flex justify-between items-start text-gray-400">
                <span class="font-medium text-gray-900">
                  Why make use of a light wallet service instead of a fat client?
                </span>
                <span class="ml-6 h-7 flex items-center">
                  <ChevronDownIcon :class="[open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform']" aria-hidden="true" />
                </span>
              </DisclosureButton>
            </dt>
            <DisclosurePanel as="dd" class="mt-2 pr-12">
              <p class="text-base text-gray-500">
                Full wallets, also known as full node wallets, are heavily complicated and take a long time to sync. Since they download the entire blockchain to validate transactions, 
                this takes up a massive amount of bandwidth, processing power, and a significant amount of disc space, which is quite a heavy load. Hence a full node wallet is also referred to as a “fat client.”<br><br>
                A fat client is significantly less attractive to users who want to have their wallets available on smaller devices, such as a cellphone.<br><br>
                Light wallets are a more straightforward and modern option, especially since they download only a fraction of the blockchain (only the portion required to validate specific transactions). 
                These wallet types are available on mobile devices, sync much faster, use much less storage space, and are much easier to maintain.
              </p>
            </DisclosurePanel>
          </Disclosure>

<!-- Question 5 -->
          <Disclosure as="div" class="pt-6" v-slot="{ open }">
            <dt class="text-lg">
              <DisclosureButton class="text-left w-full flex justify-between items-start text-gray-400">
                <span class="font-medium text-gray-900">
                  Can I have a look at your API documents?
                </span>
                <span class="ml-6 h-7 flex items-center">
                  <ChevronDownIcon :class="[open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform']" aria-hidden="true" />
                </span>
              </DisclosureButton>
            </dt>
            <DisclosurePanel as="dd" class="mt-2 pr-12">
              <p class="text-base text-gray-500">
                Yes. We have well-documented client-side libraries, which can be shared with you upon request.<br>
                Please <a class="text-blue font-bold hover:underline" href="#getintouch">get in touch with us</a> to request our API documentation.
              </p>
            </DisclosurePanel>
          </Disclosure>

<!-- Question 6 -->
          <Disclosure as="div" class="pt-6" v-slot="{ open }">
            <dt class="text-lg">
              <DisclosureButton class="text-left w-full flex justify-between items-start text-gray-400">
                <span class="font-medium text-gray-900">
                  Why pay for your service?
                </span>
                <span class="ml-6 h-7 flex items-center">
                  <ChevronDownIcon :class="[open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform']" aria-hidden="true" />
                </span>
              </DisclosureButton>
            </dt>
            <DisclosurePanel as="dd" class="mt-2 pr-12">
              <p class="text-base text-gray-500">
                MyMonero is the only light wallet service that offers a reliable, fully scalable, and consistently maintained solution.<br>
                All other Monero hosting services, which offer their services for free, are maintained by a community of people and are not scalable, robust, or reliable. 
                Severe performance issues begin to surface as soon as the user base grows.<br>
                Our <a class="text-blue font-bold hover:underline" href="#pricing">fees</a> are nominal and charged per active wallet. 
              </p>
            </DisclosurePanel>
          </Disclosure>

<!-- Question 7 -->
          <Disclosure as="div" class="pt-6" v-slot="{ open }">
            <dt class="text-lg">
              <DisclosureButton class="text-left w-full flex justify-between items-start text-gray-400">
                <span class="font-medium text-gray-900">
                  Is your light wallet hosting service open source?
                </span>
                <span class="ml-6 h-7 flex items-center">
                  <ChevronDownIcon :class="[open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform']" aria-hidden="true" />
                </span>
              </DisclosureButton>
            </dt>
            <DisclosurePanel as="dd" class="mt-2 pr-12">
              <p class="text-base text-gray-500">
                Yes. Our client software is open source and compatible with the light wallet REST API. <br>
                Our server-side libraries are not open source. Please get in touch with us to request our API documentation.
              </p>
            </DisclosurePanel>
          </Disclosure>

<!-- Question 8 -->
          <Disclosure as="div" class="pt-6" v-slot="{ open }">
            <dt class="text-lg">
              <DisclosureButton class="text-left w-full flex justify-between items-start text-gray-400">
                <span class="font-medium text-gray-900">
                  Is the service non-custodial?
                </span>
                <span class="ml-6 h-7 flex items-center">
                  <ChevronDownIcon :class="[open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform']" aria-hidden="true" />
                </span>
              </DisclosureButton>
            </dt>
            <DisclosurePanel as="dd" class="mt-2 pr-12">
              <p class="text-base text-gray-500">
                Yes, our wallet hosting service is non-custodial, and we aim to offer all our customers an incredibly high level of privacy that can be passed on to their wallet users.
              </p>
            </DisclosurePanel>
          </Disclosure>

<!-- Question 9 -->
          <Disclosure as="div" class="pt-6" v-slot="{ open }">
            <dt class="text-lg">
              <DisclosureButton class="text-left w-full flex justify-between items-start text-gray-400">
                <span class="font-medium text-gray-900">
                  Will I save time and money using your service?
                </span>
                <span class="ml-6 h-7 flex items-center">
                  <ChevronDownIcon :class="[open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform']" aria-hidden="true" />
                </span>
              </DisclosureButton>
            </dt>
            <DisclosurePanel as="dd" class="mt-2 pr-12">
              <p class="text-base text-gray-500">
                The answer on both accounts is a resounding yes!<br>
                If your company is already hosting Monero, you are most likely aware of the complications, risks, and high costs of maintaining the service. 
                There is absolutely no doubt that using our service will reduce your overheads and save you time and stress.<br><br>
                If your company does not yet host Monero but is considering it, research will confirm that hosting Monero is extremely costly and complicated. 
                It requires developers with very specialized skills that are not easy to find. <br>
                If you choose to use our wallet hosting service, we charge you a small fee per active Monero wallet and will do the heavy lifting for you. 
                MyMonero manages and maintains the software in full, and we provide a level of service that you will not easily find elsewhere in the industry.
              </p>
            </DisclosurePanel>
          </Disclosure>

<!-- Question 10 -->
          <Disclosure as="div" class="pt-6" v-slot="{ open }">
            <dt class="text-lg">
              <DisclosureButton class="text-left w-full flex justify-between items-start text-gray-400">
                <span class="font-medium text-gray-900">
                  Is your service compatible with both hardware and software wallets?
                </span>
                <span class="ml-6 h-7 flex items-center">
                  <ChevronDownIcon :class="[open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform']" aria-hidden="true" />
                </span>
              </DisclosureButton>
            </dt>
            <DisclosurePanel as="dd" class="mt-2 pr-12">
              <p class="text-base text-gray-500">
                Yes, our Monero wallet hosting service can be implemented on hardware and software wallets.
              </p>
            </DisclosurePanel>
          </Disclosure>

<!-- Question 11 -->
          <Disclosure as="div" class="pt-6" v-slot="{ open }">
            <dt class="text-lg">
              <DisclosureButton class="text-left w-full flex justify-between items-start text-gray-400">
                <span class="font-medium text-gray-900">
                  Why not just build our own Monero solution?
                </span>
                <span class="ml-6 h-7 flex items-center">
                  <ChevronDownIcon :class="[open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform']" aria-hidden="true" />
                </span>
              </DisclosureButton>
            </dt>
            <DisclosurePanel as="dd" class="mt-2 pr-12">
              <p class="text-base text-gray-500">
               The cost required to build your own Monero solution outweighs the reward.<br>
                Instead of trying to build your own Monero solution, using our existing, tried, and tested hosting service is the simplest and most cost-effective way for you. <br><br>
                MyMonero has been in the industry for a long time. We have learned that although building this infrastructure is not impossible to do; it is simply not feasible for many wallet companies. 
                Many companies would rather forgo offering Monero on their wallet simply because it does not make good business sense to do so. It is complicated, time-consuming, and costly to maintain the technology required.<br><br>
                The option is available for you to build your own Monero hosting solution, but multi-asset wallets often experience a host of complex problems in trying to accomplish this. <br>
                This is why we have already done all the hard work for you; we have spent years through trial and error creating a Monero hosting service that will give you everything you could need.
              </p>
            </DisclosurePanel>
          </Disclosure>

        </div>
      </div>
    </div>
  </div>
  <br>

</template>

<script>
import { ChevronDownIcon } from '@heroicons/vue/outline'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    ChevronDownIcon,
},
  setup() {
    return {
    }
  },
}
</script>