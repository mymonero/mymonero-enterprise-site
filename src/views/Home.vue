<template>
<HeroVue />
<ProductVue />
<FeaturesVue />
<LibrariesVue />
<DiagramVue />
<PricingVue />
<SLAVue />
<SupportVue />
<TestimonialsVue />
<FAQVue />
<ContactVue />
<FooterVue />
</template>


<script>
import HeroVue from '../components/Hero.vue'
import ProductVue from '../components/Product.vue'
import FeaturesVue from '../components/Features.vue'
import LibrariesVue from '../components/Libraries.vue'
import DiagramVue from '../components/Diagram.vue'
import PricingVue from '../components/Pricing.vue'
import SLAVue from '../components/SLA.vue'
import SupportVue from '../components/Support.vue'
import TestimonialsVue from '../components/Testimonials.vue'
import FAQVue from '../components/FAQ.vue'
import ContactVue from '../components/Contact.vue'
import FooterVue from '../components/Footer.vue'

export default {
  components: {
    HeroVue,
    ProductVue,
    FeaturesVue,
    LibrariesVue,
    DiagramVue,
    PricingVue,
    SLAVue,
    SupportVue,
    TestimonialsVue,
    FAQVue,
    ContactVue,
    FooterVue,
},
  setup() {
    return {
     
    }
  },
}

</script>