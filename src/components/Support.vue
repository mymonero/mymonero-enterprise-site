<template>

  <div class="bg-white">
    <!-- Header -->
    <div class="relative pb-24 bg-gray-800">
      <div class="absolute inset-0 background-yellow-size-support">
        <div class="absolute inset-0" aria-hidden="true" />
      </div>
      <div class="relative max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-light tracking-tight md:text-4xl lg:text-5xl text-center h1-text-color">Support for you</h1>
      </div>
    </div>

    <!-- Overlapping cards -->
    <section class="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8" aria-labelledby="contact-heading">
      <div class="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-20 lg:gap-x-8">
        <div v-for="link in supportLinks" :key="link.name" class="flex flex-col bg-white rounded-2xl shadow-xl ">
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

import { PhoneIcon, SupportIcon, ChatIcon, } from '@heroicons/vue/outline'

export default {
  components: {
    PhoneIcon,
    SupportIcon,
    ChatIcon,
},
  setup() {
    return {
      supportLinks,
    }
  },
}

// This is Support
const supportLinks = [
  {
    name: 'Pre-Sale',
      description:
      'We have a highly motivated sales team who can broaden your understanding of the services that we offer. They can answer any questions that you may have and show you how our service can benefit your business.',
      description2:
      'They will also ensure that all invoicing and billing are processed correctly once you have come on board.',
    icon: PhoneIcon,
  },
  {
    name: 'During Integration',
      description:
      'The MyMonero team will provide you with the API documentation to guide you through the integration.',
      description2:
      'During this process, we offer full technical support to ensure a smooth transition for you and your business.',
    icon: SupportIcon,
  },
  {
    name: 'Post Integration',
      description:
      'We provide you with an account manager dedicated to handling any queries, questions, or concerns that you may have.',
      description2:
      'Your account manager is ready and able to assist with any issues that may arise while using our service and will help you troubleshoot and find solutions that suit your needs.',
    icon: ChatIcon,
  },
]

</script>