<template>

<!----------------- MENU -------------->
  <div class="relative bg-gray-50 ">
    <div class="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full" aria-hidden="true">
      <div class="relative h-full max-w-7xl mx-auto">
      </div>
    </div>

    <div class="relative pt-6 pb-6 sm:pb-8 banner ">
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
                  <PopoverButton class="rounded-md p-2 inline-flex items-center justify-center bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 midnight">
                    <span class="sr-only">Open main menu</span>
                    <MenuIcon class="h-6 w-6" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
            </div>
            <div class="hidden md:flex md:space-x-10">
              <router-link v-for="item in navigation" :key="item.name" :to="{ path: item.href, hash: item.hash }" class="font-medium yellow menu-text-color">{{ item.name }}</router-link>
            </div>
            <div class="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
            </div>
          </nav>
        </div>
        
        <transition enter-active-class="duration-150 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
          <PopoverPanel focus class="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div class="rounded-lg shadow-md ring-1 ring-black ring-opacity-5 overflow-hidden white midnight background-menu-mobile">
              <div class="px-2 pt-4 flex items-center justify-between">
                <div>
                  <img class="h-9 w-auto" src="src/assets/mymonero-logo-light-blue.svg" alt="" />
                </div>
                <div class="-mr-2">
                  <PopoverButton class="rounded-md p-2 inline-flex items-center justify-center bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 midnight">
                    <span class="sr-only">Close menu</span>
                    <XIcon class="h-6 w-6" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
              <div class="relative pt-6 pb-6 px-2 pt-2">
                <a v-for="item in navigation" :key="item.name" :href="item.href" class="block px-3 py-2 rounded-md text-base font-medium yellow menu-text-color">{{ item.name }}</a>
              </div>
            </div>
          </PopoverPanel>
        </transition>
      </Popover>
      




    </div>
  </div>


</template>



<script>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { CheckIcon } from '@heroicons/vue/outline'
import { MenuIcon, XIcon } from '@heroicons/vue/outline'
import { DotsVerticalIcon } from '@heroicons/vue/solid'



const navigation = [
  
  { 
    name: 'Product Highlights & Features', 
    href: '/', 
    hash: '#product', 
    component: 'Product',
  },

  { 
    name: 'Integration', 
    href: '/', 
    hash: '#integration' 
  },

  { 
    name: 'Pricing', 
    href: '/', 
    hash: '#pricing' },

  { 
    name: 'SLA & Support', 
    href: '/', 
    hash: '#sla' },

  { 
    name: 'Partner Testimonials', 
    href: '/', 
    hash: '#partner' },

  { 
    name: 'FAQ', 
    href: '/', 
    hash: '#faq' },

  { 
    name: 'Get in Touch', 
    href: '/', 
    hash: '#getintouch' },
    
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
    }
  },
}


</script>