<template>

<!----------------- MENU -------------->
  <div class="relative bg-gray-50 overflow-hidden ">
    <div class="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full" aria-hidden="true">
      <div class="relative h-full max-w-7xl mx-auto">
        <svg class="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2" width="404" height="784" fill="none" viewBox="0 0 404 784">
          <defs>
            <pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="784" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
        </svg>
        <svg class="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2" width="404" height="784" fill="none" viewBox="0 0 404 784">
          <defs>
            <pattern id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="784" fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)" />
        </svg>
      </div>
    </div>

    <div class="relative pt-6 pb-16 sm:pb-24 banner v-toolbar dense fixed">
      <Popover>
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
          <nav class="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
            <div class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
              <div class="flex items-center justify-between w-full md:w-auto">
                <a href="https://enterprise.mymonero.com">
                  <span class="sr-only">Workflow</span>
                  <img class="h-8 w-auto sm:h-10" src="src/assets/mymonero-logo-light-blue.svg" alt="" />
                </a>
                <div class="-mr-2 flex items-center md:hidden">
                  <PopoverButton class="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 background-menu">
                    <span class="sr-only">Open main menu</span>
                    <MenuIcon class="h-6 w-6" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
            </div>
            <div class="hidden md:flex md:space-x-10">
              <a v-for="item in navigation" :key="item.name" :href="item.href" class="font-medium menu-text-color">{{ item.name }}</a>
            </div>
            <div class="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
            </div>
          </nav>
        </div>
        
        <transition enter-active-class="duration-150 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
          <PopoverPanel focus class="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div class="rounded-lg shadow-md ring-1 ring-black ring-opacity-5 overflow-hidden background-menu-mobile">
              <div class="px-5 pt-4 flex items-center justify-between">
                <div>
                  <img class="h-8 w-auto" src="src/assets/mymonero-logo-light-blue.svg" alt="" />
                </div>
                <div class="-mr-2">
                  <PopoverButton class="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 background-menu">
                    <span class="sr-only">Close menu</span>
                    <XIcon class="h-6 w-6" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
              <div class="px-2 pt-2 pb-3">
                <a v-for="item in navigation" :key="item.name" :href="item.href" class="block px-3 py-2 rounded-md text-base font-medium menu-text-color">{{ item.name }}</a>
              </div>
            </div>
          </PopoverPanel>
        </transition>
      </Popover>
      
      <!-------------- HERO ------------->
      <main class="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
        <div class="text-center">
          <h1 class="text-4xl tracking-normal font-bold sm:text-5xl md:text-6xl hero-text-color">
            <span class="block xl:inline">MyMonero Enterprise Services</span></h1>
            <h2 class="text-2xl tracking-normal font-bold sm:text-5xl md:text-4xl hero-text-color hero-h2">
            <span class="block xl:inline">Light Monero Nodes for Businesses</span></h2>
          <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-md md:mt-4 md:text-l md:max-w-5xl hero-text-color">
            MyMonero is a highly scalable, non-custodial, light wallet hosting service. We maintain and service the technology required to support and include Monero in your multi-asset wallet or exchange platform. 
            Our hosting service is built for businesses, but will ultimately benefit the end user. 
            Other light wallet hosting services do exist, but we have built the only highly scalable solution. MyMonero is performance-built to scan large batches of wallets simultaneously, 
            which means consistent performance, even when your user base increases rapidly. <br><br>
            Our solution is built to take care of all the heavy lifting for you and keep Monero running smoothly 24/7. <br>
            Hosting Monero can be immensely costly in terms of machine resources and developer costs. Providing a fast and friendly end user experience with Monero is very challenging due to its 
            hardcore privacy-by-default architecture. Wallets  and exchanges are steadily adopting and supporting Monero. <br><br>

            Forget about building your own infrastructure and use MyMonero to power your Monero functionality. No one understands Monero like we do. We have a team ready to assist you to integrate with MyMonero.

            </p>
          <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div class="rounded-md shadow">
              <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white md:py-4 md:text-lg md:px-10 button-main"> Get started </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
  </template>

  <script>
    
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'


const navigation = [
  { name: 'Product Highlights & Features', href: '#product' },
  { name: 'Integration', href: '#integration' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'SLA & Support', href: '#sla' },
  { name: 'Partner Testimonials', href: '#partner' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Get in Touch', href: '#getintouch' },
]

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
  },
  setup() {
    return {
      navigation,
    }
  },
}
</script>