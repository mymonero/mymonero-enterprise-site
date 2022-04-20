<template>

<footer class="bg-midnight footer-top" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">

      <div class="footer-container">
        <div class="footer-box">
          <div class="footer-text-header">LEGAL</div>
          <div class="footer-text">
              <router-link to="/terms#terms" class="nav-link link text-white text-primary display-4 footer-text-link">Terms &amp; Conditions</router-link>
              </div>
          <div class="footer-text">
            <router-link to="/privacy#privacy" class="nav-link link text-white text-primary display-4 footer-text-link">Privacy Policy</router-link>
            </div>
        </div>
        <div class="footer-box">
          <div class="footer-text-header">COMPANY</div>
          <div class="footer-text"><a class="footer-text-link" href="/#product">About</a></div>
        </div>
      </div>
      <div class="footer-legal-container footer-text">
          For all legal matters or queries, please get in touch with us via email at: <a class="footer-legal-link" href="mailto:info@mymonero.com">info@mymonero.com</a>
        </div>

      <div class="mt-12 footer-line pt-8">
        <p class="text-base text-white-400 xl:text-center text-silver">&copy; 2022 MyMonero. All rights reserved.</p>
      </div>
    </div>
  </footer>

</template>