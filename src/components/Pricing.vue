<template>

<a name="pricing" id="pricing"></a>
<div class="bg-midnight">
  <div class="max-w-7xl mx-auto py-24 px-4 bg-white sm:px-6 lg:px-8 bg-midnight">
    <div class="text-center">
      <h2 class="text-4xl font-light tracking-tight md:text-4xl lg:text-5xl text-center text-white">We offer the most competitive pricing</h2>
       <p class="mt-1 max-w-1xl mx-auto text-xl text-gray-500 sm:mt-4 font-bold text-yellow">What is an active wallet?</p>
       <p class="mt-1 max-w-1xl mx-auto text-xl text-gray-500 sm:mt-4 text-white">To be considered an active wallet, a user would need to access their Monero specific wallet at least once per month.</p>
    </div><br><br>
    <!-- Tiers -->
    <div class="price-border">
    <div class="mt-18 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
      <div v-for="tier in pricing.tiers" :key="tier.title" class="relative p-8  rounded-2xl shadow-sm flex flex-col">
        <div class="flex-1">
          <h3 class="text-xl font-semibold text-gray-900 text-white">{{ tier.title }}</h3>
          <p v-if="tier.mostPopular" class="absolute top-0 py-1.5 px-4 bg-indigo-500 rounded-full text-xs font-semibold uppercase tracking-wide text-white transform -translate-y-1/2">Most popular</p>
          <p class="mt-4 flex text-gray-900">
            <span class="text-5xl font-extrabold tracking-tight text-white">${{ tier.price }}</span>
            <span class="ml-4 text-xl font-semibold text-white price-wallet-align">{{ tier.frequency }}</span>
          </p>
          <p class="mt-6 text-xl font-extrabold text-yellow">{{ tier.description }}</p>

          <!-- Feature list -->
          <ul role="list" class="mt-6 space-y-6">
            <li v-for="feature in tier.features" :key="feature" class="flex">
              <CheckIcon class="flex-shrink-0 w-6 h-6 text-indigo-500 text-yellow" aria-hidden="true" />
              <span class="ml-3 text-gray-500 text-yellow">{{ feature }}</span>
            </li>
          </ul>
        </div>

      </div>
    </div>
</div>
  </div>
</div>

<!--------------- CTA2 ---------------->
  <div class="bg-white">
    <div class="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-8 lg:px-8">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        <span class="block">Start using MyMonero today.</span>
      </h2>
      <div class="mt-8 flex justify-center">
        <div class="inline-flex rounded-md shadow">
          <a href="#getintouch" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white button-main"> Get started </a>
        </div>
      </div>
    </div>
  </div>

</template>



<script>

import { CheckIcon } from '@heroicons/vue/outline'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

export default {
  components: {
    CheckIcon,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
},
  setup() {
    return {
      pricing,
    }
  },
}

// PRICING
const pricing = {
  tiers: [
    {
      title: 'Start-Up:',
      price: '0.30',
      frequency: 'per active wallet per month',
      description: '1 - 10 000 wallets',
      features: [
        '24 hour turnaround time on support queries',
        ],
      cta: 'Monthly billing',
      mostPopular: false,
    },
    {
      title: 'Growth:',
      price: '0.20',
      frequency: 'per active wallet per month',
      description: '10 001 - 100 000 wallets',
      features: [
        '12 hour turnaround time on support queries',
        'Dedicated Support Person',
        'Dedicated Account Manager',
      ],
      cta: 'Monthly billing',
      mostPopular: false,
    },
    {
      title: 'Scale:',
      price: '0.15',
      frequency: 'per active wallet per month',
      description: '100 001 - 1000 000 wallets',
      features: [
        '6 hour turnaround time for support queries',
        'Prioritized Wallet Scanning',
        '99.9% Uptime',
        'Dedicated Support Person',
        'Dedicated Account Manager',
      ],
      cta: 'Monthly billing',
      mostPopular: false,
    },
  ],
}



</script>