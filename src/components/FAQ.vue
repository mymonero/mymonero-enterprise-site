<template>

<a name="faq" id="faq"></a>
  <div class="bg-lightsilver">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto divide-y-2 divide-charcoal">
        <h2 class="text-4xl font-light tracking-tight md:text-4xl lg:text-5xl text-center">Frequently asked questions</h2>
        <dl class="mt-6 space-y-6 divide-y divide-charcoal">
          <Disclosure as="div" v-for="faq in faqs" :key="faq.question" class="pt-6" v-slot="{ open }">
            <dt class="text-lg">
              <DisclosureButton class="text-left w-full flex justify-between items-start text-charcoal">
                <span class="font-medium text-charcoal">
                 {{faq.question}}
                </span>
                <span class="font-medium text-charcoal">
                </span>
                <span class="ml-6 h-7 flex items-center">
                  <ChevronDownIcon :class="[open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform']" aria-hidden="true" />
                </span>
              </DisclosureButton>
            </dt>
            <DisclosurePanel as="dd" class="mt-2 pr-12">
              <p class="text-base text-charcoal">
               {{faq.answer}}

              </p>
              <p class="text-base text-charcoal"><br>
              {{faq.answer2}}
              </p>
            </DisclosurePanel>
          </Disclosure>
        </dl>
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
      faqs,
    }
  },
}



// ---- FAQ
const faqs = [
  {
    question: "What is a light wallet service?",
    answer:
      "The light wallet service only downloads the portion of the blockchain that is necessary for transactions to process correctly. In doing this, it allows for much faster sync speeds and saves massively on the storage space required to run the wallet.",
    answer2:"Businesses and their wallet users are often required to run a full Monero node, which means they have to download the entire blockchain every time a user opens their wallet. This translates into heavy data storage usage and hefty waiting times before the user can start to transact, resulting in a poor user experience. At MyMonero, our servers constantly run the full node and as a result we are able to provide a light wallet service where users do not need to download the entire blockchain in order to transact.",
  },
  {
    question: "What problem are you trying to solve?",
    answer:
      "Monero’s underlying technology is incredibly complex  and requires developers with very specialized skills to maintain it. This means that for many crypto wallet businesses the cost of supporting Monero is simply too high. For this reason, a lot of crypto wallets  do not support Monero.",
    answer2:"At MyMonero, our developers have the required skill-set and have built an infrastructure that simplifies the process of hosting Monero on any multi-asset wallet or exchange.  We have hence lowered the barrier to entry for many crypto wallet businesses, helping to make Monero more readily available and widespread among crypto users.",
  },
  {
    question: "Are there any other companies providing the same service as you?",
    answer:
      "No. All other Monero hosting services are maintained by a community of people and are not scalable, robust or reliable. Serious performance issues begin to surface as soon as your user base starts to grow. MyMonero stands out from the crowd, because we are currently the only highly scalable, lightweight wallet hosting service for Monero. We offer our partners unlimited horizontal scalability, and we are performance built to handle clients with very large Monero user bases.",
      answer2:"With a system like ours, designed and built to scan large quantities of wallets simultaneously, our end-user experience is unmatched. Since we are constantly adding on new features, our aim has always been to stay ahead of the game. The entire MyMonero team is passionate about Monero and works tirelessly to maintain a strong infrastructure. This has resulted in us being able to offer the best enterprise solution in the industry.",
  },
  {
    question: "Why make use of a light wallet service instead of a fat client?",
    answer:
      "Full wallets, also known as full node wallets, are heavily complicated and take a long time to sync. Since they download the entire blockchain in order to validate transactions, this takes up a massive amount of bandwidth, processing power and a significant amount of disc space, which is quite a heavy load. Hence a full node wallet is also referred to as a “fat client”.",
      answer2:"A fat client is significantly less attractive to users who want to have their wallets available on smaller devices, such as a cellphone. Light wallets are a much simpler and more modern option, especially since they download only a fraction of the blockchain - only the portion required to validate specific transactions. These wallet types are available on mobile devices, sync much faster, use much less storage space, and are just generally much easier to maintain.",
  },
  {
    question: "Can I have a look at your API documents?",
    answer:
      "Yes. We have well-documented client-side libraries, which can be shared with you upon request. Please contact us to request our API documentation.",
  },
  {
    question: "Why pay for your service?",
    answer:
      "MyMonero is the only light wallet service that offers a reliable, fully scalable and consistently maintained solution. All other Monero hosting services, who offer their services for free, are maintained by a community of people and are not scalable, robust or reliable. Serious performance issues begin to surface as soon as your user base starts to grow.",
      answer2:"Our fees are nominal and charged per active wallet.",
  },
  {
    question: "Is your light wallet hosting service open source?",
    answer:
      "Yes. Our client software is open source and compatible with the light wallet REST API.",
      answer2:"Our server-side libraries are not open source. Please contact us to request our API documentation.",
  },
  {
    question: "Is the service non-custodial?",
    answer:
      "Yes, our wallet hosting service is non-custodial, and we aim to offer all our customers an incredibly high level of privacy that can be passed onto their wallet users.",
      answer2:"",
  },
  {
    question: "Will I save time and money using your service?",
    answer:
      "The answer on both accounts is a resounding yes! If your company is already hosting Monero, you are most likely aware of the complications, risks, and heavy costs involved in maintaining the service. There is absolutely no doubt that using our service will reduce your overheads and save you time and stress.",
      answer2:"If your company does not yet host Monero, but is considering it, research will confirm that hosting Monero is extremely costly and complicated. It requires developers with very specialized skills that are not easy to find. If you choose to use our wallet hosting service, we simply charge you a small fee per active Monero wallet and will do the heavy lifting for you. MyMonero manages and maintains the software in full and we provide a level of service that you will not easily find elsewhere in the industry.",
  },
  {
    question: "Is your service compatible with both hardware and software wallets?",
    answer:
      "Yes, our Monero wallet hosting service can be implemented on hardware and software wallets alike.",
      answer2:"",
  },
  {
    question: "Why not just build our own Monero solution?",
    answer:
      "Logically speaking, the cost required to build your own Monero solution simply outweighs the reward. In a nutshell, instead of trying to build your own Monero solution, using our existing, tried, and tested hosting service is the simplest and most cost-effective way for you. MyMonero has been in the industry for a long time, and in that time we have learned that although building this infrastructure is not impossible to do, it is simply not feasible for many wallet companies.",
      answer2:"Many companies would rather forgo offering Monero on their wallet, simply because it does not make good business sense to do so. It is complicated, time-consuming, and very expensive to maintain the technology required. The option is always there for you to build your own Monero hosting solution, but multi-asset wallets often experience a host of difficult problems in trying to accomplish this. Whereas, we have already done all the hard work for you, we have spent years through trial and error, creating a Monero hosting service that will give you everything you could possibly need.",
  },
  
]


</script>