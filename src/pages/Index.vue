<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->

    <main>
      <section class="main-hero tw-mt-8">
        <h1 class="ctw-hero-title tw-text-white">Hiring is Hard</h1>
        <div>
          <g-image
            src="~/assets/images/misc/two-people.jpeg"
            width="320"
            alt="woman speaking to a group of people"
            class="ctw-hero-image"
          />
        </div>
        <p class="tw-hidden md:tw-block ctw-hero-text">
          Tribe makes Hiring Easier by directly connecting companies to
          tech+creative talent
        </p>
        <g-link class="nav__link btn btn-primary ctw-hero-cta" to="/hire"
          >Make it Easy</g-link
        >
      </section>

      <section class="secondary-hero">
        <h1 class="tw-text-right">Freelancing is harder</h1>
        <div>
          <g-image
            src="~/assets/images/misc/dexter.jpeg"
            width="320"
            alt="man looks outward"
          />
        </div>
        <p class="tw-hidden md:tw-block">
          Tribe helps tech+creative professionals find consistent work and pay
          by joining a community of highly motivated professionals.
        </p>
        <g-link class="nav__link btn btn-primary tw-float-right" to="/join"
          >Earn More</g-link
        >
      </section>

      <section class="tw-mt-16">
        <h2>Find great talent</h2>
        <p>
          Tribe is the only worker owned staffing platform. Find local and
          vetted talent for your team without the overhead.
        </p>

        <MiniBio>
          <span slot="member-name">Jeremy</span>
          <span slot="member-location">Baltimore, MD</span>
          <span slot="member-role">Sr Developer</span>
          <span slot="member-skill-one">Elixir</span>
          <span slot="member-skill-two">Phoenix</span>
          <span slot="member-skill-three">React</span>
          <span slot="member-image"
            ><g-image
              src="~/assets/images/misc/jeremy.png"
              width="320"
              alt="man working on laptop "
          /></span>
        </MiniBio>
      </section>

      <RoleListing />

      <section class="tw-mt-4 tw-mb-4">
        <h2 class="tw-text-center tw-mb-4">How it works</h2>
        <div class="tw-text-center embed-container">
          <iframe
            src="https://www.youtube.com/embed/dW4NknlRBhs"
            frameborder="0"
            allowfullscreen="true"
          ></iframe>
        </div>

        <HireBenefits />
      </section>

      <section
        class="tw-bg-secondary tw-flex tw-flex-col tw-justify-around tw-p-4 tw-mt-8 tw--ml-4 tw--mr-4"
      >
        <div class="tw-self-start">
          <g-image
            src="~/assets/images/external_brand_logos/Colab_logo.png"
            alt="Colab"
            width="50"
          />
        </div>

        <p class="tw-text-right tw-self-center tw-text-lg tw-font-bold">
          <span class="tw-inline-block tw-mt-4 tw--ml-1 tw-pr-1">
            <svg
              width="29"
              height="29"
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.4545 12.5278L13.0218 5.22005C13.2246 4.78505 12.9062 4.26282 12.4418 4.26282H12.0063C11.8035 4.26282 11.6007 4.35004 11.484 4.52337L1.82861 14.8479C1.01637 16.0374 0.610838 17.5157 0.784142 19.0825C1.10361 22.1571 3.68414 24.5925 6.78685 24.7375C10.4414 24.912 13.4569 22.012 13.4569 18.3871C13.4274 15.7476 11.7746 13.4555 9.4545 12.5278Z"
                fill="#001F48"
              />
              <path
                d="M24.3022 12.5278L27.8694 5.22005C28.0722 4.78505 27.7539 4.26282 27.2894 4.26282H26.8539C26.6511 4.26282 26.4484 4.35004 26.3317 4.52337L16.6763 14.8479C15.864 16.0374 15.4585 17.5157 15.6318 19.0825C15.9513 22.1571 18.5318 24.5925 21.6345 24.7375C25.2891 24.912 28.3045 22.012 28.3045 18.3871C28.2751 15.7476 26.6222 13.4555 24.3022 12.5278Z"
                fill="#001F48"
              />
            </svg>
          </span>
          This was a no brainer for us. It just worked
        </p>
        <div class="tw-self-end">
          <span class="tw-pr-2 tw-pt-4 tw-inline-block">
            <g-image
              src="~/assets/images/misc/Avatar4.jpg"
              alt="Person smiling"
              width="29"
              class="tw-inline-block tw-rounded-full"
            />
          </span>
          <div class="tw-inline-block">
            Mackenzie Jones
            <br />
            CoLab Cooperative
          </div>
        </div>
      </section>

      <section
        class="tw-bg-tertiary tw-text-white tw-pl-8 tw-pr-8 tw-pt-4 tw-pb-4 tw--ml-4 tw--mr-4"
      >
        <p class="tw-text-left tw-text-base">Questions?</p>
        <p class="tw-text-lg">Schedule a call to get started</p>
        <a
          href="https://app.prosperworks.com/public/meeting-scheduler/The%20Staffing%20Cooperative/joseph/253546:d9f04345-3420-4d5c-823d-c50395d7022e"
          class="btn btn-primary tw-block tw-w-48 tw-mx-auto"
          >Schedule a call</a
        >
      </section>

      <BrandLove />

      <OurBlog />
    </main>
  </Layout>
</template>

<style scoped>
.ctw-hero-title {
  @apply tw-text-white !important;
  @pply tw-shadow;
  position: relative;
  top: 60px;
  width: 60px;
  z-index: 20;
}
.ctw-hero-image {
  position: relative;
  left: 60px;
  top: -30px;
  z-index: 10;
}
.ctw-hero-cta {
  position: relative;
  left: 10%;
  top: -160px;
  z-index: 15;
}
.ctw-hero-text {
  @apply tw-text-secondary tw-text-base tw-text-white;
  width: 300px;
  position: relative;
}
</style>


<script>
import HireBenefits from "~/components/HireBenefits.vue";
import BrandLove from "~/components/BrandLove.vue";
import OurBlog from "~/components/OurBlog.vue";
import RoleListing from "~/components/RoleListing.vue";
import MiniBio from "~/components/MiniBio.vue";

export default {
  metaInfo: {
    title: "Welcome"
  },
  components: {
    HireBenefits,
    BrandLove,
    OurBlog,
    RoleListing,
    MiniBio
  }
};
</script>
