<template>
  <span>
    <span class="tribe-header-bg">
      <span class="ctw-content-container md:tw-max-w-3xl">
        <header
          class="header md:tw-flex md:tw-max-w-3xl md:tw-mx-auto md:tw-justify-between md:tw-items-center"
          aria-role="banner"
        >
          <span class="tw-p-4 mx:tw-self-start">
            <TribeLogo />
          </span>
          <span
            @click="toggleNav"
            class="ctw-open-nav tw-inline-block tw-absolute tw-pin-r tw-pin-t tw-mt-8 tw-mr-4 tw-cursor-pointer md:tw-hidden"
          >
            <OpenIcon />
          </span>
          <nav
            class="nav"
            aria-role="navigation"
            :class="{ navactive: isActive }"
          >
            <span
              @click="toggleNav"
              class="ctw-close-nav tw-inline-block tw-absolute tw-pin-r tw-pin-t tw-mt-4 tw-mr-4 tw-cursor-pointer md:tw-hidden"
            >
              <CloseIcon />
            </span>
            <ul class="mx:tw-self-end">
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
        </header>

        <div class="layout tw-container tw-mx-auto tw-pl-4 tw-pr-4 tw-z-10">
          <slot />
        </div>

        <footer
          role="contentinfo"
          class="main-footer tw-bg-tertiary tw-text-white tw--mr-4 tw--ml-4 tw-pl-4 tw-pr-4 tw-mt-8"
        >
          <div class="tw-flex tw-flex-col md:tw-flex-row md:tw-justify-center">
            <section>
              <div class="tw-text-center tw-pb-4">
                <TribeLogoLarge />
              </div>
              <p class="tw-pb-4 tw-max-w-xs tw-mx-auto tw-text-base">
                Tribe is the only worker owned talent platform. Bringing
                ownership to the future of work. Subscribe to get the latest
                updates from the co-op's blog.
              </p>

              <form
                id="subscribe-form"
                name="subscribe-form"
                data-name="Subscribe Form"
                class="tw-max-w-xs tw-mx-auto"
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
            </section>
            <section>
              <section class="contact-us tw-text-center">
                <h3>Contact Us</h3>
                <ul class="">
                  <li>
                    <a
                      href="mailto:info@tribestaffing.co"
                      class="tw-text-secondary tw-no-underline"
                      >Email</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://app.prosperworks.com/public/meeting-scheduler/The%20Staffing%20Cooperative/joseph/253546:d9f04345-3420-4d5c-823d-c50395d7022e/2019-03-13"
                      class="tw-text-secondary tw-no-underline"
                      >Call</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://app.prosperworks.com/public/meeting-scheduler/The%20Staffing%20Cooperative/joseph/253546:d9f04345-3420-4d5c-823d-c50395d7022e/2019-03-13"
                      class="tw-text-secondary tw-no-underline"
                      >Grab Coffee</a
                    >
                  </li>
                </ul>
              </section>
              <section class="follow-us">
                <h3 class="tw-text-center">Follow Us</h3>
                <ul>
                  <li>
                    <a href="https://twitter.com/TribeStaffing">
                      <div class="tw-text-center">
                        <g-image
                          src="~/assets/images/external_brand_logos/twitterLogo.png"
                          alt=""
                          width="30"
                          height="25"
                        />
                      </div>
                      <div class="tw-text-center tw-pt-4">Twitter</div></a
                    >
                  </li>
                  <li>
                    <a href="https://www.instagram.com/tribestaffing/">
                      <div class="tw-text-center">
                        <g-image
                          src="~/assets/images/external_brand_logos/instagramLogo.png"
                          alt=""
                          width="25"
                          height="25"
                        />
                      </div>
                      <div class="tw-text-center tw-pt-4">Instagram</div></a
                    >
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/tribe-staffing-coop"
                    >
                      <div class="tw-text-center">
                        <g-image
                          src="~/assets/images/external_brand_logos/linkedInLogo.png"
                          alt=""
                          width="25"
                          height="25"
                        />
                      </div>
                      <div class="tw-text-center tw-pt-4">LinkedIn</div></a
                    >
                  </li>
                </ul>
              </section>
            </section>

            <section class="good-to-know tw-hidden tw-text-center">
              <h4>Good to Know</h4>
              <nav>
                <ul>
                  <li>
                    <g-link class="nav__link" to="/terms">Terms of use</g-link>
                  </li>
                  <li>
                    <g-link class="nav__link" to="/privacy"
                      >Privacy policy</g-link
                    >
                  </li>
                </ul>
              </nav>
            </section>
          </div>
          <p class="tw-pt-4 tw-pb-8 tw-text-center">
            © 2019 Tribe Staffing, Inc.
          </p>
        </footer>
      </span>
    </span>
  </span>
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
import TribeLogoLarge from "~/components/TribeLogoLarge.vue";
import OpenIcon from "~/components/icons/OpenIcon.vue";
import CloseIcon from "~/components/icons/CloseIcon.vue";

export default {
  components: {
    TribeLogo,
    TribeLogoLarge,
    OpenIcon,
    CloseIcon
  },
  data: function() {
    return {
      isActive: false
    };
  },
  methods: {
    toggleNav: function(isActive) {
      this.isActive = !this.isActive;
      console.log("hello");
    }
  }
};
</script>

<style>
.navactive {
  @apply tw-flex !important;
}

.nav {
  @apply tw-p-8 tw--ml-4 tw--mr-4 tw-flex tw-flex-col tw-items-center tw-bg-tertiary tw-justify-around tw-fixed tw-w-full tw-pin-t tw-shadow-lg tw-z-50 tw-hidden;
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

@media screen and (min-width: 768px) {
  .nav {
    @apply tw-bg-transparent tw-static tw-shadow-none tw-flex;
  }
  .nav ul {
    @apply tw-self-end tw-pt-4 tw-pr-4;
  }
  .nav ul li {
    @apply tw-inline-block;
  }
  .nav a {
    @apply tw-text-sm;
  }
}

.main-footer a {
  @apply tw-text-white tw-no-underline tw-text-base;
}

.main-footer a:hover {
  @apply tw-text-secondary;
}

.main-footer .contact-us a {
  @apply tw-block tw-pt-4 tw-pb-4;
}

.main-footer .contact-us li {
  @apply tw-pb-2;
}

.main-footer .follow-us ul {
  @apply tw-flex tw-flex-row tw-justify-center tw-uppercase;
}

.main-footer .follow-us ul li a {
  @apply tw-text-xs tw-mr-4 tw-ml-4 tw-p-6;
}

.good-to-know ul {
  @apply tw-flex tw-flex-row tw-justify-center tw-uppercase tw-text-center;
}

.good-to-know ul li a {
  @apply tw-text-xs tw-mr-4 tw-ml-4;
}
</style>
