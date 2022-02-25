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

    <div class="relative pt-6 pb-16 sm:pb-24 banner ">
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

<!-------------- PRODUCT HIGHLIGTS ------------>
  <div class="bg-white">
    <!-- Header -->
    <div class="relative pb-28 bg-gray-800">
      <div class="absolute inset-0 background-yellow-size">
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


<!---------- FEATURES --------------->
<div class="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-18 lg:pb-28 lg:px-8 background-menu">
  <div class="absolute inset-0">
    <div class="h-1/3 sm:h-2/3 background-menu"></div>
  </div>
  <div class="relative max-w-7xl mx-auto ">
    <div class="text-center">
      <h2 class="text-4xl font-light tracking-tight md:text-4xl lg:text-5xl text-center hero-text-color">Key Features</h2>
    </div>
    <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
      <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <div class="flex-shrink-0">
          <img class="h-48 w-full object-cover" src="src/assets/images/feat-img01.png" alt="">
        </div>
        <div class="flex-1 bg-white p-6 flex flex-col justify-between">
          <div class="flex-1">
            <a href="#" class="block mt-2">
              <p class="text-xl font-semibold text-gray-900">Multi-Address Send</p>
              <p class="mt-3 text-base text-gray-500">This is an exciting feature that supports the sending of Monero to multiple destinations or wallets within one single transaction.</p>
            </a>
          </div>
        </div>
      </div>

      <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <div class="flex-shrink-0">
          <img class="h-48 w-full object-cover" src="src/assets/images/feat-img02.png" alt="">
        </div>
        <div class="flex-1 bg-white p-6 flex flex-col justify-between">
          <div class="flex-1">
            <a href="#" class="block mt-2">
              <p class="text-xl font-semibold text-gray-900">Lightweight Nature For Clients</p>
              <p class="mt-3 text-base text-gray-500">Many multi-asset wallet services choose to run the full Monero node themselves, which can mean that their wallet users are forced to download the entire Monero blockchain. 
                This takes an extremely long time to do andt will also use up a very large amount of space on the user’s device. <br><br>

                We offer a lightweight wallet experience, where we run all of the heavy stuff on our backend. This means that neither our enterprise partners nor the end wallet users will ever have to download the entire Monero blockchain. 
                This ensures that wallet users will have a completely lightweight and smooth experience.
                </p>
            </a>
          </div>
        </div>
      </div>

      <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <div class="flex-shrink-0">
          <img class="h-48 w-full object-cover" src="src/assets/images/feat-img03.png" alt="">
        </div>
        <div class="flex-1 bg-white p-6 flex flex-col justify-between">
          <div class="flex-1">
            <a href="#" class="block mt-2">
              <p class="text-xl font-semibold text-gray-900">Protocol Updates</p>
              <p class="mt-3 text-base text-gray-500">We will handle all protocol updates in-house; this also includes bi-annual hardfork updates. 
                If any additional updates are required to fall in line with the Monero project, we will action these on our end.</p>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
      <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <div class="flex-shrink-0">
          <img class="h-48 w-full object-cover" src="src/assets/images/feat-img04.png" alt="">
        </div>
        <div class="flex-1 bg-white p-6 flex flex-col justify-between">
          <div class="flex-1">
            <a href="#" class="block mt-2">
              <p class="text-xl font-semibold text-gray-900">Feature Changes</p>
              <p class="mt-3 text-base text-gray-500">As Monero evolves, new features emerge. We stay up to date with any feature changes within Monero so that you don’t have to worry about it.<br>
                At MyMonero we make sure to add all new features to the infrastructure as well as follow through with this on the client-side code.
                </p>
            </a>
          </div>
        </div>
      </div>

      <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <div class="flex-shrink-0">
          <img class="h-48 w-full object-cover" src="src/assets/images/feat-img05.png" alt="">
        </div>
        <div class="flex-1 bg-white p-6 flex flex-col justify-between">
          <div class="flex-1">
            <a href="#" class="block mt-2">
              <p class="text-xl font-semibold text-gray-900">Unlimited Horizontal Scaling</p>
              <p class="mt-3 text-base text-gray-500">Our server infrastructure can easily handle running large volumes of Monero multi-asset wallets at the same time, which means that each of our partners 
                could have user bases of tens of thousands or larger. <br><br>

                We further have the ability to scale horizontally by adding additional machine resources to our existing infrastructure at any point in time, as and when needed. 
                This puts us in a position to offer a highly scalable, lightweight, non-custodial Monero wallet hosting service.</p>
            </a>
          </div>
        </div>
      </div>

      <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <div class="flex-shrink-0">
          <img class="h-48 w-full object-cover" src="src/assets/images/feat-img06.png" alt="">
        </div>
        <div class="flex-1 bg-white p-6 flex flex-col justify-between">
          <div class="flex-1">
            <a href="#" class="block mt-2">
              <p class="text-xl font-semibold text-gray-900">Performant Scanning</p>
              <p class="mt-3 text-base text-gray-500">Our infrastructure is engineered to scan large wallet quantities simultaneously.<br>
                Even if users have not opened their wallets for several weeks, upon accessing their wallet again, they will not need to wait for the entire blockchain to be scanned. <br><br>

                Many other solutions will scan the full blockchain, leaving the user frustrated whilst waiting for the new blocks to be added. There is no waiting time with MyMonero - 
                users simply open their wallets and are ready to transact.
                </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!------------ CLIENT LIBRARY --------------->
<div class="relative pt-16 pb-18 px-4 sm:px-6 lg:pt-15 lg:pb-15 lg:px-8 bg-white">
  <div class="absolute inset-0">
    <div class="h-1/3 sm:h-2/3 bg-white"></div>
  </div>
  <div class="relative max-w-7xl mx-auto ">
    <div class="text-center">
      <h2 class="text-4xl font-light tracking-tight md:text-4xl lg:text-5xl text-center">Well documented client-side libraries</h2>
       <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">All you need to do is plug into our API and let us do the rest. We will make hosting Monero look easy!</p>
    </div>

    <div class="mt-12 max-w-lg mx-auto grid lg:grid-cols-1 lg:max-w-none">
      <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <div class="flex-shrink-0">
          <img class="h-48 w-full object-cover" src="src/assets/images/client-img01.png" alt="">
        </div>
        <div class="flex-1 bg-white p-6 flex flex-col justify-between">
          <div class="flex-1">
            <a href="#" class="block mt-2">
              <p class="mt-3 text-base text-gray-500 text-center ">To start using our superior Monero wallet hosting service, simply send us a request and we will supply you with our well-written client-side API documentation.<br>
              Our client-side software is fully open source and is compatible with the light wallet rest API. <br>
              It is a constantly evolving document, and as new features are added, these are immediately built-in.
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>

<!--------------- CTA1 ---------------->
  <div class="bg-white">
    <div class="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-8 lg:px-8">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        <span class="block">Ready to dive in?</span>
      </h2>
      <div class="mt-8 flex justify-center">
        <div class="inline-flex rounded-md shadow">
          <a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white button-main"> Dive in </a>
        </div>
      </div>
    </div>
  </div>

<hr>

<!-------------- DIAGRAM ---------------->
<div class="relative pt-16 pb-18 px-4 sm:px-6 lg:pt-15 lg:pb-15 lg:px-8 bg-white">
  <div class="absolute inset-0">
    <div class="h-1/3 sm:h-2/3 bg-white"></div>
  </div>
  <div class="relative max-w-7xl mx-auto ">
    <div class="text-center">
      <h2 class="text-4xl font-light tracking-tight md:text-4xl lg:text-5xl text-center">Integrating<img class="diagram-logo" src="src/assets/images/monero-logo-diagram.svg" alt="">has never been easier</h2>
    </div>

<div>SPACE FOR DIAGRAM</div>
    
  </div>
</div>

<!------------- PRICING ----------------->
<div class="background-menu">
  <div class="max-w-7xl mx-auto py-24 px-4 bg-white sm:px-6 lg:px-8 background-menu">
    <div class="text-center">
      <h2 class="text-4xl font-light tracking-tight md:text-4xl lg:text-5xl text-center hero-text-color">We offer the most competitive pricing</h2>
       <p class="mt-1 max-w-1xl mx-auto text-xl text-gray-500 sm:mt-4 font-bold yellow-text-color">What is an active wallet?</p>
       <p class="mt-1 max-w-1xl mx-auto text-xl text-gray-500 sm:mt-4 hero-text-color">To be considered an active wallet, a user would need to access their Monero specific wallet at least once per month.</p>
    </div><br><br>
    <!-- Tiers -->
    <div class="price-border">
    <div class="mt-18 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
      <div v-for="tier in pricing.tiers" :key="tier.title" class="relative p-8  rounded-2xl shadow-sm flex flex-col">
        <div class="flex-1">
          <h3 class="text-xl font-semibold text-gray-900 hero-text-color">{{ tier.title }}</h3>
          <p v-if="tier.mostPopular" class="absolute top-0 py-1.5 px-4 bg-indigo-500 rounded-full text-xs font-semibold uppercase tracking-wide text-white transform -translate-y-1/2">Most popular</p>
          <p class="mt-4 flex text-gray-900">
            <span class="text-5xl font-extrabold tracking-tight hero-text-color">${{ tier.price }}</span>
            <span class="ml-4 text-xl font-semibold hero-text-color price-wallet-align">{{ tier.frequency }}</span>
          </p>
          <p class="mt-6 text-xl font-extrabold yellow-text-color">{{ tier.description }}</p>

          <!-- Feature list -->
          <ul role="list" class="mt-6 space-y-6">
            <li v-for="feature in tier.features" :key="feature" class="flex">
              <CheckIcon class="flex-shrink-0 w-6 h-6 text-indigo-500 yellow-text-color" aria-hidden="true" />
              <span class="ml-3 text-gray-500 yellow-text-color">{{ feature }}</span>
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
          <a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white button-main"> Get started </a>
        </div>
      </div>
    </div>
  </div>

<!----------------- SLA --------------->
 <div class="relative pt-16 pb-24 px-4 sm:px-6 lg:pt-15 lg:pb-15 lg:px-8 background-yellow">
  <div class="relative max-w-7xl mx-auto">
    <div class="text-center">
      <h2 class="text-4xl font-light tracking-tight md:text-4xl lg:text-5xl text-center">Service-level Agreements (SLA’s)</h2>
       <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">A level of support suited to your needs:</p>
    </div>
    <div class="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4 ">
      <div class="sla-container">
        <div class="sla-text">Full support during <br>integration</div>
        <img class="sla-img" src="src/assets/images/sla-1.svg" alt="">
      </div>
      <div class="sla-container">
        <div class="sla-text">Full support after <br>integration</div>
        <img class="sla-img" src="src/assets/images/sla-2.svg" alt="">
      </div>
      <div class="sla-container">
        <div class="sla-text">Access to the <br>MyMonero infrastructure</div>
        <img class="sla-img" src="src/assets/images/sla-3.svg" alt="">
      </div>
      <div class="sla-container">
        <div class="sla-text">Unlimited wallet scaling</div>
        <img class="sla-img" src="src/assets/images/sla-4.svg" alt="">
      </div>
      <div class="sla-container">
        <div class="sla-text">No hidden fees or agendas</div>
        <img class="sla-img" src="src/assets/images/sla-5.svg" alt="">
      </div>
      <div class="sla-container">
        <div class="sla-text">Handling of all <br>hard fork updates</div>
        <img class="sla-img" src="src/assets/images/sla-6.svg" alt="">
      </div>
      <div class="sla-container">
        <div class="sla-text">No minimum fees</div>
        <img class="sla-img" src="src/assets/images/sla-7.svg" alt="">
      </div>
      <div class="sla-container">
        <div class="sla-text">21 days to make invoice payments</div>
        <img class="sla-img" src="src/assets/images/sla-8.svg" alt="">
      </div>
    </div>
  </div>
  </div>


</template>


<script>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { CheckIcon } from '@heroicons/vue/outline'
import { MenuIcon, XIcon } from '@heroicons/vue/outline'
import { DeviceMobileIcon, PuzzleIcon, QuestionMarkCircleIcon, UserIcon, InformationCircleIcon } from '@heroicons/vue/outline'
import { DotsVerticalIcon } from '@heroicons/vue/solid'

const navigation = [
  { name: 'Product Highlights & Features', href: '#' },
  { name: 'Integration', href: '#' },
  { name: 'Pricing', href: '#' },
  { name: 'SLA & Support', href: '#' },
  { name: 'Partner Testimonials', href: '#' },
  { name: 'FAQ', href: '#' },
  { name: 'Get in Touch', href: '#' },
]

const projects = [
  { name: 'Full support during integration', },
  { name: 'Component Design', initials: 'CD', href: '#', members: 12, bgColor: 'bg-purple-600' },
  { name: 'Templates', initials: 'T', href: '#', members: 16, bgColor: 'bg-yellow-500' },
  { name: 'React Components', initials: 'RC', href: '#', members: 8, bgColor: 'bg-green-500' },
]

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
    MenuIcon,
    XIcon,
    CheckIcon,
    DotsVerticalIcon,
  },
  setup() {
    return {
      navigation,
      supportLinks,
      pricing,
      projects,
    }
  },
}


// This is Product Highlights
const supportLinks = [
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

// PRICING
const pricing = {
  tiers: [
    {
      title: 'Start-Up:',
      price: 0.30,
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
      price: 0.20,
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
      price: 0.15,
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





