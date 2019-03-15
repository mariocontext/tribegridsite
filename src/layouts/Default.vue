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
        <OpenIcon />
      </span>
      <transition name="slide">
        <nav v-show="showdrawer" class="nav" aria-role="navigation">
          <span
            v-on:click="showdrawer = !showdrawer"
            class="ctw-close-nav tw-inline-block tw-absolute tw-pin-r tw-pin-t tw-mt-4 tw-mr-4 tw-cursor-pointer"
          >
            <CloseIcon />
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
import OpenIcon from "~/components/icons/OpenIcon.vue";
import CloseIcon from "~/components/icons/CloseIcon.vue";

export default {
  components: {
    TribeLogo,
    OpenIcon,
    CloseIcon
  },
  data() {
    return {
      showdrawer: false
    };
  }
};
</script>

<style>
.nav {
  @apply tw-p-8 tw--ml-4 tw--mr-4 tw-flex tw-flex-col tw-items-center tw-bg-tertiary tw-justify-around tw-fixed tw-w-full tw-pin-t tw-shadow-lg tw-z-50;
}
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
