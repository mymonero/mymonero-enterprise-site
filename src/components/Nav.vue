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
                  
                    <svg class="h-8 w-auto sm:h-10" width="1024" height="1024" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 120.477C0 53.9394 50.7803 0 113.498 0H910.502C973.185 0 1024 53.9718 1024 120.477V903.523C1024 970.061 973.22 1024 910.502 1024H113.498C50.815 1024 0 970.028 0 903.523V120.477ZM241.938 689.183C241.938 708.298 256.956 723.316 276.071 723.316C295.185 723.316 310.659 708.298 310.659 689.183V530.804L371.189 624.102C378.471 635.025 387.573 641.852 400.316 641.852C413.059 641.852 422.161 635.025 429.443 624.102L490.883 529.439V688.273C490.883 707.388 506.357 723.316 525.472 723.316C545.042 723.316 560.515 707.843 560.515 688.273V543.393L612.878 624.102C620.159 635.025 629.261 641.852 642.005 641.852C654.748 641.852 663.85 635.025 671.132 624.102L732.572 529.439V688.273C732.572 707.388 748.045 723.316 767.16 723.316C786.73 723.316 802.204 707.843 802.204 688.273V435.231C802.204 415.661 786.73 400.188 767.16 400.188H759.423C745.315 400.188 735.302 406.104 728.021 417.937L642.915 556.291L558.264 418.392C551.893 407.924 541.425 400.188 526.406 400.188C526.406 400.188 526.407 400.191 526.407 400.199C526.097 400.191 525.785 400.188 525.472 400.188H517.735C503.626 400.188 493.614 406.104 486.332 417.937L401.226 556.291L316.576 418.392C310.204 407.924 299.737 400.188 284.718 400.188H276.981C257.411 400.188 241.938 415.661 241.938 435.231V689.183Z" fill="white"/>
                    <path d="M96 136C96 113.909 113.909 96 136 96H888C910.091 96 928 113.909 928 136V160H96V136Z" fill="#00BDF4"/>
                    </svg>
                
                  <!-- <img class="h-8 w-auto sm:h-10" src="src/assets/mymonero-logo-light-blue.svg" alt="" /> -->
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