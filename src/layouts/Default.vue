<template>
  <div class="layout tw-container tw-mx-auto tw-pl-4 tw-pr-4">
    <header class="header" aria-role="banner">
      <span>
        <TribeLogo />
      </span>
      <span
        v-on:click="showdrawer = !showdrawer"
        class="ctw-open-nav tw-inline-block tw-absolute tw-pin-r tw-pin-t tw-mt-8 tw-mr-4 tw-cursor-pointer"
      >
        <svg
          width="26"
          height="18"
          viewBox="0 0 26 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Open Navigation</title>
          <path
            d="M1.625 1.99432H24.0359"
            stroke="#18F2B2"
            stroke-width="3"
            stroke-linecap="round"
          />
          <path
            d="M1.625 9.15341H24.0359"
            stroke="#18F2B2"
            stroke-width="3"
            stroke-linecap="round"
          />
          <path
            d="M1.625 16.3125H24.0359"
            stroke="#18F2B2"
            stroke-width="3"
            stroke-linecap="round"
          />
        </svg>
      </span>
      <transition name="slide">
        <nav
          v-show="showdrawer"
          class="nav tw-p-8 tw--ml-4 tw--mr-4 tw-flex tw-flex-col tw-items-center tw-bg-tertiary tw-justify-around tw-fixed tw-w-full tw-pin-t tw-shadow-lg"
          aria-role="navigation"
        >
          <span
            v-on:click="showdrawer = !showdrawer"
            class="ctw-close-nav tw-inline-block tw-absolute tw-pin-r tw-pin-t tw-mt-4 tw-mr-4 tw-cursor-pointer"
          >
            <svg
              width="26"
              height="25"
              viewBox="0 0 26 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Close Navigation</title>
              <line
                x1="4.12132"
                y1="3"
                x2="23.3776"
                y2="22.2562"
                stroke="#18F2B2"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <line
                x1="3"
                y1="22.2562"
                x2="22.2562"
                y2="3"
                stroke="#18F2B2"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <ul>
            <li>
              <g-link class="nav__link" to="/">Home</g-link>
            </li>
            <li>
              <g-link class="nav__link" to="/hire">Hire</g-link>
            </li>
            <li>
              <g-link class="nav__link" to="/join">Join</g-link>
            </li>
            <li>
              <a
                href="https://app.prosperworks.com/public/meeting-scheduler/The%20Staffing%20Cooperative/joseph/253546:d9f04345-3420-4d5c-823d-c50395d7022e"
                class="tw-text-2xl tw-text-white tw-no-underline;"
                >Contact Us</a
              >
            </li>
          </ul>
        </nav>
      </transition>
    </header>
    <slot />
    <footer role="contentinfo">
      <section>
        <div>
          <TribeLogo />
        </div>
        <p>
          Tribe is the only worker owned talent platform. Bringing ownership to
          the future of work. Subscribe to get the latest updates from the
          co-op's blog.
        </p>
        <h4>Contact us</h4>
        <form
          id="subscribe-form"
          name="subscribe-form"
          data-name="Subscribe Form"
        >
          <input
            type="email"
            maxlength="256"
            name="subscribe-email"
            data-name="Subscribe Email"
            placeholder="Jane@email.com"
            id="subscribe-email"
            required=""
          /><input
            type="submit"
            value="Get Updates"
            data-wait="In the mail!"
            class="btn btn-primary"
          />
        </form>
        <p>
          Call:
          <a
            href="https://app.prosperworks.com/public/meeting-scheduler/The%20Staffing%20Cooperative/joseph/253546:d9f04345-3420-4d5c-823d-c50395d7022e/2019-03-13"
            class="btn btn-primary"
            >Set up a call</a
          >
        </p>
        <h3>Follow Us</h3>
        <ul>
          <li>
            <a href="https://twitter.com/TribeStaffing">Twitter</a>
          </li>
          <li>
            <a href="https://www.instagram.com/tribestaffing/">Instagram</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/tribe-staffing-coop"
              >LinkedIn</a
            >
          </li>
        </ul>
      </section>

      <section>
        <h3>Good to Know</h3>
        <nav>
          <ul>
            <li>
              <g-link class="nav__link btn" to="/terms">Terms of use</g-link>
            </li>
            <li>
              <g-link class="nav__link" to="/privacy">Privacy policy</g-link>
            </li>
            <li>
              <a
                href="https://app.prosperworks.com/public/meeting-scheduler/The%20Staffing%20Cooperative/joseph/253546:d9f04345-3420-4d5c-823d-c50395d7022e"
                >Contact Us</a
              >
            </li>
          </ul>
        </nav>
      </section>
      <p>© 2019 Tribe Staffing, Inc.</p>
    </footer>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
import TribeLogo from "~/components/TribeLogo.vue";

export default {
  components: {
    TribeLogo
  },
  data() {
    return {
      showdrawer: false
    };
  }
};
</script>

<style>
.nav a {
  @apply tw-text-2xl tw-text-white tw-no-underline tw-font-bold;
  transition: color 0.5s ease-in;
}

.nav a:hover {
  @apply tw-text-secondary;
}

.nav .active--exact,
.nav a:focus {
  @apply tw-text-secondary;
}

.nav li {
  @apply tw-p-6 tw-text-center;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease-in-out;
}
.slide-enter, .slide-leave-to
/* .slide-leave-active below version 2.1.8 */ {
  transform: translateX(256px);
}
</style>
