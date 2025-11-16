<template>
  <footer class="bg-[#0a2540] text-white py-10">
    <div
      class="max-w-[1300px] mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8"
    >
      <!-- Language & Currency -->
      <div class="space-y-4">
        <div>
          <h3 class="font-semibold mb-2 text-sm">Language</h3>
          <select
            class="w-full bg-white text-gray-800 text-sm rounded-md py-2 px-3 focus:outline-none"
          >
            <option>English (United States)</option>
            <option>Deutsch (Deutschland)</option>
            <option>Français (France)</option>
          </select>
        </div>

        <div>
          <h3 class="font-semibold mb-2 text-sm">Currency</h3>
          <select
            class="w-full bg-white text-gray-800 text-sm rounded-md py-2 px-3 focus:outline-none"
          >
            <option>UAE Dirham (د.إ)</option>
            <option>US Dollar ($)</option>
            <option>Euro (€)</option>
          </select>
        </div>
      </div>

      <!-- Mobile Apps -->
      <div>
        <h3 class="font-semibold mb-3 text-sm">Mobile</h3>
        <div class="flex flex-col gap-3">
          <img
            src="/app-store-badge-en-us.png"
            alt="Google Play"
            class="w-[130px]"
          />
          <img
            src="/google-play-badge-en-us.png"
            alt="App Store"
            class="w-[130px]"
          />
        </div>
      </div>

      <!-- Support -->
      <div>
        <h3 class="font-semibold mb-3 text-sm">Support</h3>
        <ul class="space-y-2 text-sm">
          <li><a href="#" class="hover:underline">Contact</a></li>
          <li><a href="#" class="hover:underline">Legal Notice</a></li>
          <li><a href="#" class="hover:underline">Privacy Policy</a></li>
          <li>
            <a href="#" class="hover:underline"
              >Cookies and Marketing Preferences</a
            >
          </li>
          <li>
            <a href="#" class="hover:underline">General Terms and Conditions</a>
          </li>
          <li>
            <a href="#" class="hover:underline"
              >Information according to the Digital Services Act</a
            >
          </li>
          <li><a href="#" class="hover:underline">Sitemap</a></li>
          <li>
            <a href="#" class="hover:underline"
              >Do not Sell or Share my Personal Information</a
            >
          </li>
        </ul>
      </div>

      <!-- Company -->
      <div>
        <h3 class="font-semibold mb-3 text-sm">Company</h3>
        <ul class="space-y-2 text-sm">
          <li><a href="#" class="hover:underline">About Us</a></li>
          <li><a href="#" class="hover:underline">Careers</a></li>
          <li><a href="#" class="hover:underline">Blog</a></li>
          <li><a href="#" class="hover:underline">Press</a></li>
          <li><a href="#" class="hover:underline">Gift Cards</a></li>
          <li><a href="#" class="hover:underline">Explorer</a></li>
        </ul>
      </div>

      <!-- Work With Us -->
      <div>
        <h3 class="font-semibold mb-3 text-sm">Work With Us</h3>
        <ul class="space-y-2 text-sm mb-4">
          <li>
            <a href="#" class="hover:underline">As a Supplier Partner</a>
          </li>
          <li>
            <a href="#" class="hover:underline">As a Content Creator</a>
          </li>
          <li>
            <a href="#" class="hover:underline">As an Affiliate Partner</a>
          </li>
        </ul>

        <h3 class="font-semibold mb-2 text-sm">Ways You Can Pay</h3>
        <div class="flex flex-wrap gap-2">
          <img src="/paypal_border.png" alt="PayPal" class="h-5" />
          <img src="/visa.png" alt="Visa" class="h-5" />
          <img src="/mastercard.png" alt="MasterCard" class="h-5" />
          <img src="/amex.png" alt="Amex" class="h-5" />
          <img src="/applepay.png" alt="Apple Pay" class="h-5" />
          <img src="/googlepay.png" alt="Google Pay" class="h-5" />
           <img src="/klarna.png" alt="Google Pay" class="h-5" />
           <img src="/maestro.png" alt="Google Pay" class="h-5" />
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-300">
      <p>
        © 2008 – 2025 GetYourGuide. Made in Zürich & Berlin.
      </p>

      <div class="flex justify-center gap-5 mt-4 text-gray-300">
        <UIcon name="i-ph-facebook-logo" class="w-5 h-5 hover:text-white" />
<UIcon name="i-ph-pinterest-logo" class="w-5 h-5 hover:text-white" />
<UIcon name="i-ph-twitter-logo" class="w-5 h-5 hover:text-white" />
<UIcon name="i-ph-linkedin-logo" class="w-5 h-5 hover:text-white" />
      </div>
    </div>
  </footer>
</template>
