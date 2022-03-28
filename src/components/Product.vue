<template>

<div class="bg-white">
    <!-- Header -->
    <div class="relative pb-28 bg-gray-800">
      <div class="absolute inset-0 background-yellow-size">
        <a name="product" id="product"></a>
        <div class="absolute inset-0" aria-hidden="true" />
      </div>
      <div class="relative max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-light tracking-tight md:text-4xl lg:text-5xl text-center h1-text-color">Product Highlights</h1>
      </div>
    </div>

    <!-- Overlapping cards -->
    <section class="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8" aria-labelledby="contact-heading">
      <h2 class="sr-only" id="contact-heading">Contact us</h2>
      <div class="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-20 lg:gap-x-8">
        <div v-for="link in productLinks" :key="link.name" class="flex flex-col bg-white rounded-2xl shadow-xl ">
          <div class="flex-2 relative pt-16 px-6 pb-8 md:px-8 ">
            <div class="absolute top-0 p-5 inline-block bg-indigo-600 rounded-xl shadow-lg transform -translate-y-1/2 small-box-gradient">
              <component :is="link.icon" class="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            <h3 class="text-xl font-medium text-gray-900">{{ link.name }}</h3>
            <p class="mt-4 text-base text-gray-500">{{ link.description }}</p>
            <p class="mt-4 text-base text-gray-500">{{ link.description2 }}</p>
            <p class="mt-4 text-base text-gray-500">{{ link.description3 }}</p>
            <p class="mt-4 text-base text-gray-500">{{ link.description4 }}</p>
          </div>
        </div>
      </div>
    </section>

  </div>

</template>

<script>
import { DeviceMobileIcon, PuzzleIcon, QuestionMarkCircleIcon, UserIcon, InformationCircleIcon, } from '@heroicons/vue/outline'


export default {
  components: {
 
  },
  setup() {
    return {
      productLinks,
    }
  },
}


// This is Product Highlights
const productLinks = [
  {
    name: 'ABOUT MYMONERO',
      description:
      'MyMonero exists as an enterprise solution for multi-asset wallet companies and exchange services.',
      description2:
      'We have engineered and built the infrastructure that can enable any multi-asset wallet to support Monero.',
      description3:
      'What makes us unique is that we are able to provide a Monero solution at scale. There is no limit to the number of end user wallets that we are able to handle. ',
      description4:
      'This service is available to all multi-asset wallet companies and exchanges.',
    icon: DeviceMobileIcon,
  },
  {
    name: 'WHAT WE HAVE BUILT',
      description:
      'We are currently the only highly scalable, non-custodial, lightweight wallet hosting service for Monero.',
      description2:
      'There are numerous barriers for multi-asset wallets or exchanges looking to get involved with Monero. Hosting Monero is very heavy, challenging and finding developers with the right skill-set is hard. Another challenge is dealing with hard-fork updates, and other updates to the actual Monero code. ',
      description3:
      'Our team works on Monero all day every day, and this makes us the best option to power your wallet’s Monero functionality. You no longer have to build your own Monero solution, simply plug into our API and we’ll do all the heavy lifting for you.',
      description4:
      'We maintain the infrastructure. You simply pay a small fee per active wallet for our service and then sit back, relax and enjoy the ride.',
    icon: PuzzleIcon,
  },
  {
    name: 'WHY WE HAVE BUILT IT',
      description:
      'Businesses that want to add and support Monero very often find it to be more challenging than they initially thought.',
      description2:
      'We have created a fully loaded backend solution that makes supporting Monero much more accessible, manageable, and affordable to all multi-asset wallet companies and exchanges.',
      description3:
      'Our infrastructure is incredibly powerful, and this power is ultimately transferred to the end user, resulting in a great user experience. This means that more people can have access to Monero, a cryptocurrency that provides them with complete financial privacy.',
    icon: QuestionMarkCircleIcon,
  },
  {
    name: 'WHO IT IS BUILT FOR',
      description:
      'Our service is designed for all multi-asset software and hardware wallet companies, as well as exchange platforms.',
      description2:
      'This includes enterprises who already offer Monero in their portfolio, but would like to reduce their overheads and improve Monero functionality.',
      description3:
      'It also includes those who have not yet integrated with Monero, but would like to.',
    icon: UserIcon,
  },
  {
    name: 'WHY YOU SHOULD CARE',
      description:
      'It is challenging to build a fast, user-friendly backend solution for Monero. When Monero users get frustrated with their transactions, they begin looking for alternative wallets with  better Monero functionality. Their frustrations may stem from the necessity to download the entire blockchain, the wallet scanning may be very slow or they may just have a poor experience in general.',
      description2:
      'This could lead to a number of repercussions for your business, one major one being the loss of trust and hence losing out on future transactions from users that have moved on to a competitor. In order to retain your Monero user-base and ensure user growth, your backend Monero functionality needs to be rock solid.',
      description3:
      'You will not find a better or more powerful backend solution than MyMonero.',
    icon: InformationCircleIcon,
  },
]






</script>