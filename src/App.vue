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

    <div class="relative pt-6 pb-16 sm:pb-24 banner">
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
              <a href="#getintouch" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white md:py-4 md:text-lg md:px-10 button-main"> Get started </a>
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
        <a name="product"></a><br>
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
<a name="integration">&nbsp;</a><br>
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
          <a href="#getintouch" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white button-main"> Dive in </a>
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

  <div class="diagram-container">
    <div class="diagram-item" style="color: #161616;">
      How does MyMonero Enterprise service work?
    </div>
    <div class="diagram-item">
      Hosting Monero is very complex and costly
    </div>
    
      <div class="diagram-text">
        Request MyMonero API Documentation
        <div class="chevron">
          
          </div>
        <div class="diagram-text">aas</div>
        
      </div>
    
    <div class="diagram-item">
      Integrate with MyMonero API Hosting Service
    </div>
    <div class="diagram-item">
      We power your Monero functionality
    </div>
  </div>
    
  </div>
</div>

<!------------- PRICING ----------------->
<a name="pricing">&nbsp;</a><br>
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
          <a href="#getintouch" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white button-main"> Get started </a>
        </div>
      </div>
    </div>
  </div>

<!----------------- SLA --------------->
<a name="sla">&nbsp;</a><br>
 <div class="relative pt-16 px-4 sm:px-6 lg:pt-15 lg:pb-15 lg:px-8 background-yellow">
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
        <div class="sla-text">Access to the MyMonero<br>infrastructure</div>
        <img class="sla-img" src="src/assets/images/sla-3.svg" alt="">
      </div>
      <div class="sla-container">
        <div class="sla-text sla-align">Unlimited wallet scaling</div>
        <img class="sla-img" src="src/assets/images/sla-4.svg" alt="">
      </div>
      <div class="sla-container">
        <div class="sla-text sla-align">No hidden fees or agendas</div>
        <img class="sla-img" src="src/assets/images/sla-5.svg" alt="">
      </div>
      <div class="sla-container">
        <div class="sla-text">Handling of all hard fork<br>updates</div>
        <img class="sla-img" src="src/assets/images/sla-6.svg" alt="">
      </div>
      <div class="sla-container">
        <div class="sla-text sla-align">No minimum fees</div>
        <img class="sla-img" src="src/assets/images/sla-7.svg" alt="">
      </div>
      <div class="sla-container">
        <div class="sla-text">21 days to make invoice payments</div>
        <img class="sla-img" src="src/assets/images/sla-8.svg" alt="">
      </div>
    </div>
  </div>
  </div>


  <!-------------- SUPPORT ------------>
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


<!--------------- TESTIMONIALS ------------->
<a name="partner">&nbsp;</a><br>
  <section class="bg-white-800">

    <div class="relative max-w-7xl mx-auto ">
    <div class="text-center">
      <h2 class="text-4xl font-light tracking-tight md:text-4xl lg:text-5xl text-center">Partner Testimonials</h2>
       <p class="mt-3 max-w-3xl mx-auto text-xl text-gray-500 sm:mt-4">Powering the Monero functionality for some of the worlds top crypto wallets.<br>Some of our partners:<br><br></p>
    </div>
    </div>

    <div class="max-w-7xl mx-auto md:grid md:grid-cols-2 md:px-6 lg:px-8 background-grey testimonial-border">
      <div class="py-12 px-4 sm:px-6 md:flex md:flex-col md:py-16 md:pl-0 md:pr-10  lg:pr-16">
        <div class="md:flex-shrink-0">
          <img class="h-12" src="src/assets/images/edge-logo.svg" alt="Tuple" />
        </div>
        <blockquote class="mt-6 md:flex-grow md:flex md:flex-col">
          <div class="relative text-md font-medium md:flex-grow testimonial-text-color">
            <svg class="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 testimonial-text-quote" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <p class="relative">“Working with the MyMonero team has allowed Edge to provide Monero support for our users with the least amount of development and maintenance effort. <br><br>
              They have also been consistent in providing updates as the Monero network upgrades are implemented. The support of Monero has been instrumental in our success since it went live in 2018.”</p>
          </div>
          <footer class="mt-8">
            <div class="flex items-start testimonial-ceo">
              <div class="ml-4">
                <div class="text-base font-medium testimonial-text-color">- Paul Puey</div>
                <div class="text-base font-medium testimonial-text-color">&nbsp;&nbsp;CEO Edge Wallet</div>
              </div>
            </div>
          </footer>
        </blockquote>
      </div>

      <div class="py-12 px-4 border-t-2 sm:px-6 md:py-16 md:pr-0 md:pl-10 md:border-t-0 md:border-l lg:pl-16 testimonial-line">
        <div class="md:flex-shrink-0">
          <img class="h-12" src="src/assets/images/zelcore-logo.svg" alt="Workcation" />
        </div>
        <blockquote class="mt-6 md:flex-grow md:flex md:flex-col">
          <div class="relative text-md font-medium md:flex-grow testimonial-text-color">
            <svg class="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 testimonial-text-quote" fill="currentColor" viewBox="0 0 32 32">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <p class="relative">“In our quest to add the best-in-class support in Zelcore, we wanted to work with the best Monero support solution, and that is MyMonero! <br><br>
                They have built a backend that allows us to push amazing service and support to our customers.”</p>
          </div>
          <footer class="mt-8">
            <div class="flex items-start testimonial-ceo">
              <div class="ml-4">
                <div class="text-base font-medium testimonial-text-color">- Daniel Keller</div>
                <div class="text-base font-medium testimonial-text-color">&nbsp;&nbsp;CSO Zelcore and Flux</div>
              </div>
            </div>
          </footer>
        </blockquote>
      </div>


    </div>
  </section>

<br>

<!--------------- FAQ ---------------->
<a name="faq">&nbsp;</a><br>
  <div class="bg-gray-100">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto divide-y-2 divide-gray-200">
        <h2 class="text-4xl font-light tracking-tight md:text-4xl lg:text-5xl text-center">Frequently asked questions</h2>
        <dl class="mt-6 space-y-6 divide-y divide-gray-200">
          <Disclosure as="div" v-for="faq in faqs" :key="faq.question" class="pt-6" v-slot="{ open }">
            <dt class="text-lg">
              <DisclosureButton class="text-left w-full flex justify-between items-start text-gray-400">
                <span class="font-medium text-gray-900">
                  {{ faq.question }}
                </span>
                <span class="ml-6 h-7 flex items-center">
                  <ChevronDownIcon :class="[open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform']" aria-hidden="true" />
                </span>
              </DisclosureButton>
            </dt>
            <DisclosurePanel as="dd" class="mt-2 pr-12">
              <p class="text-base text-gray-500">
                {{ faq.answer }}
              </p>
              <p class="text-base text-gray-500"><br>
                {{ faq.answer2 }}
              </p>
            </DisclosurePanel>
          </Disclosure>
        </dl>
      </div>
    </div>
  </div>

  <br>

  <!------ GET IN TOUCH ----------->
  <a name="getintouch">&nbsp;</a><br>

  <!-- This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
--> 

  <div class="bg-white">
    <div class="relative max-w-7xl mx-auto py-10 px-4 sm:py-18 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-4xl font-light tracking-tight md:text-4xl lg:text-5xl text-center">Get in touch</h2>
        </div>
       
       <br><br>

      <div class="relative bg-white shadow-xl contact-border-white">
        <div class="grid grid-cols-1 lg:grid-cols-3">
          <!-- Contact information -->
          <div class="relative overflow-hidden py-10 px-6 sm:px-10 xl:p-12 background-yellow contact-border">
            <div class="absolute inset-0 pointer-events-none sm:hidden" aria-hidden="true">
              <svg class="absolute inset-0 w-full h-full" width="343" height="388" viewBox="0 0 343 388" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                <path d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z" fill="url(#linear1)" fill-opacity=".1" />
                <defs>
                  <linearGradient id="linear1" x1="254.553" y1="107.554" x2="961.66" y2="814.66" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#fff" />
                    <stop offset="1" stop-color="#fff" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div class="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden" aria-hidden="true">
              <svg class="absolute inset-0 w-full h-full" width="359" height="339" viewBox="0 0 359 339" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                <path d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z" fill="url(#linear2)" fill-opacity=".1" />
                <defs>
                  <linearGradient id="linear2" x1="192.553" y1="28.553" x2="899.66" y2="735.66" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#fff" />
                    <stop offset="1" stop-color="#fff" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div class="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block" aria-hidden="true">
              <svg class="absolute inset-0 w-full h-full" width="160" height="678" viewBox="0 0 160 678" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                <path d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z" fill="url(#linear3)" fill-opacity=".1" />
                <defs>
                  <linearGradient id="linear3" x1="192.553" y1="325.553" x2="899.66" y2="1032.66" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#fff" />
                    <stop offset="1" stop-color="#fff" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h3 class="text-lg font-medium h1-text-color">Contact information</h3>
            <p class="mt-6 text-base max-w-3xl h1-text-color"><b>Website:</b><br><a class="contact-link" href="https://www.enterprise.mymonero.com">enterprise.mymonero.com</a></p>
            <p class="mt-6 text-base max-w-3xl h1-text-color"><b>Email:</b><br><a class="contact-link" href="mailto:partners@mymonero.com">partners@mymonero.com</a></p>
            <p class="mt-6 text-base max-w-3xl h1-text-color"><b>Legal:</b><br><a class="contact-link" href="mailto:info@mymonero.com">info@mymonero.com</a></p>
            <p class="mt-6 text-base max-w-3xl h1-text-color"><b>Head Office:</b><br><a class="testimonial-text-color">16192 Coastal Highway,<br>Lewes, Delaware,<br>USA</a></p>
            
            <ul role="list" class="mt-8 flex space-x-12">
              <li>
                <a class="contact-icons" href="#">
                  <span class="sr-only">Facebook</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" aria-hidden="true">
                    <path d="M22.258 1H2.242C1.556 1 1 1.556 1 2.242v20.016c0 .686.556 1.242 1.242 1.242h10.776v-8.713h-2.932V11.39h2.932V8.887c0-2.906 1.775-4.489 4.367-4.489 1.242 0 2.31.093 2.62.134v3.037l-1.797.001c-1.41 0-1.683.67-1.683 1.653v2.168h3.362l-.438 3.396h-2.924V23.5h5.733c.686 0 1.242-.556 1.242-1.242V2.242C23.5 1.556 22.944 1 22.258 1" fill="currentColor" />
                  </svg>
                </a>
              </li>
              <li>
                <a class="contact-icons" href="#">
                  <span class="sr-only">GitHub</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" aria-hidden="true">
                    <path d="M11.999 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.386.6.11.819-.26.819-.578 0-.284-.01-1.04-.017-2.04-3.337.724-4.042-1.61-4.042-1.61-.545-1.386-1.332-1.755-1.332-1.755-1.09-.744.082-.73.082-.73 1.205.086 1.838 1.238 1.838 1.238 1.07 1.833 2.81 1.304 3.493.996.109-.775.419-1.303.762-1.603C7.145 17 4.343 15.97 4.343 11.373c0-1.31.468-2.382 1.236-3.22-.124-.304-.536-1.524.118-3.176 0 0 1.007-.323 3.3 1.23.956-.266 1.983-.4 3.003-.404 1.02.005 2.046.138 3.005.404 2.29-1.553 3.296-1.23 3.296-1.23.655 1.652.243 2.872.12 3.176.77.838 1.233 1.91 1.233 3.22 0 4.61-2.806 5.624-5.478 5.921.43.37.814 1.103.814 2.223 0 1.603-.015 2.898-.015 3.291 0 .321.217.695.825.578C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12.001-12" fill="currentColor" />
                  </svg>
                </a>
              </li>
              <li>
                <a class="contact-icons" href="#">
                  <span class="sr-only">Twitter</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" aria-hidden="true">
                    <path d="M7.548 22.501c9.056 0 14.01-7.503 14.01-14.01 0-.213 0-.425-.015-.636A10.02 10.02 0 0024 5.305a9.828 9.828 0 01-2.828.776 4.94 4.94 0 002.165-2.724 9.867 9.867 0 01-3.127 1.195 4.929 4.929 0 00-8.391 4.491A13.98 13.98 0 011.67 3.9a4.928 4.928 0 001.525 6.573A4.887 4.887 0 01.96 9.855v.063a4.926 4.926 0 003.95 4.827 4.917 4.917 0 01-2.223.084 4.93 4.93 0 004.6 3.42A9.88 9.88 0 010 20.289a13.941 13.941 0 007.548 2.209" fill="currentColor" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <!-- Contact form -->
          
          <div class="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
            <h3 class="text-lg font-medium text-gray-900">Send us a message</h3>
            <form action="#" method="POST" class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
              <div>
                <label for="first-name" class="block text-sm font-medium text-gray-900">First name</label>
                <div class="mt-1">
                  <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 rounded-md contact-form-border" />
                </div>
              </div>
              <div>
                <label for="last-name" class="block text-sm font-medium text-gray-900">Last name</label>
                <div class="mt-1">
                  <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 rounded-md contact-form-border" />
                </div>
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-gray-900">Email</label>
                <div class="mt-1">
                  <input id="email" name="email" type="email" autocomplete="email" class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 rounded-md contact-form-border" />
                </div>
              </div>
              <div>
                <div class="flex justify-between">
                  <label for="phone" class="block text-sm font-medium text-gray-900">Phone</label>
                  <span id="phone-optional" class="text-sm text-gray-500">Optional</span>
                </div>
                <div class="mt-1">
                  <input type="text" name="phone" id="phone" autocomplete="tel" class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 rounded-md contact-form-border" aria-describedby="phone-optional" />
                </div>
              </div>
              <div class="sm:col-span-2">
                <label for="subject" class="block text-sm font-medium text-gray-900">Subject</label>
                <div class="mt-1">
                  <input type="text" name="subject" id="subject" class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 rounded-md contact-form-border" />
                </div>
              </div>
              <div class="sm:col-span-2">
                <div class="flex justify-between">
                  <label for="message" class="block text-sm font-medium text-gray-900">Message</label>
                  <span id="message-max" class="text-sm text-gray-500">Max. 500 characters</span>
                </div>
                <div class="mt-1">
                  <textarea id="message" name="message" rows="4" class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md" aria-describedby="message-max" />
                </div>
              </div>
              <div class="sm:col-span-2 sm:flex sm:justify-end">
                <button type="submit" class="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto button-main">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>


<!------------ FOOTER ------------>

  <footer class="background-menu footer-top" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">

      <div class="footer-container">
        <div class="footer-box">
          <div class="footer-text-header">LEGAL</div>
          <div class="footer-text"><a class="footer-text-link" href="#">Terms and Conditions</a></div>
          <div class="footer-text"><a class="footer-text-link" href="#">Privacy Policy</a></div>
        </div>
        <div class="footer-box">
          <div class="footer-text-header">COMPANY</div>
          <div class="footer-text"><a class="footer-text-link" href="#">About</a></div>
        </div>
      </div>
      <div class="footer-legal-container footer-text">
          For all legal matters or queries, please contact us via email at: <a class="footer-legal-link" href="#">info@mymonero.com</a>
        </div>

      <div class="mt-12 footer-line pt-8">
        <p class="text-base text-gray-400 xl:text-center">&copy; 2022 MyMonero. All rights reserved.</p>
      </div>
    </div>
  </footer>


</template>



<script>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { CheckIcon } from '@heroicons/vue/outline'
import { MenuIcon, XIcon } from '@heroicons/vue/outline'
import { DeviceMobileIcon, PuzzleIcon, QuestionMarkCircleIcon, UserIcon, InformationCircleIcon, PhoneIcon, SupportIcon, ChatIcon, ChevronDownIcon, MailIcon } from '@heroicons/vue/outline'
import { DotsVerticalIcon } from '@heroicons/vue/solid'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { defineComponent, h } from 'vue'

const navigation = [
  { name: 'Product Highlights & Features', href: '#product' },
  { name: 'Integration', href: '#integration' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'SLA & Support', href: '#sla' },
  { name: 'Partner Testimonials', href: '#partner' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Get in Touch', href: '#getintouch' },
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
    PhoneIcon,
    SupportIcon,
    ChatIcon,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    ChevronDownIcon,
    MailIcon,
  },
  setup() {
    return {
      navigation,
      navigationFooter,
      productLinks,
      supportLinks,
      pricing,
      projects,
      faqs,
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

// ----FOOTER
const navigationFooter = {
  legal: [
    { name: 'Terms and Conditions', href: 'terms-conditions.vue' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'For all legal matters or queries, please contact us via email at:', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
  ],
  
}


</script>