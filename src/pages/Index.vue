<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->

    <main>
      <section>
        <h1>Hiring is Hard</h1>
        <p>
          Tribe makes Hiring Easier by directly connecting companies to
          tech+creative talent
        </p>
        <div>
          <g-image
            src="~/assets/images/misc/two-people.jpeg"
            width="320"
            alt="woman speaking to a group of people"
          />
        </div>
        <g-link class="nav__link btn btn-primary" to="/hire"
          >Make it Easy</g-link
        >
      </section>

      <section>
        <h1>Freelancing is harder</h1>
        <p>
          Tribe helps tech+creative professionals find consistent work and pay
          by joining a community of highly motivated professionals.
        </p>
        <div>
          <g-image
            src="~/assets/images/misc/dexter.jpeg"
            width="320"
            alt="man looks outward"
          />
        </div>
        <g-link class="nav__link btn btn-primary" to="/join">Earn More</g-link>
      </section>

      <section>
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

      <section>
        <h2>How it works</h2>
        <div>
          <iframe
            class="embedly-embed"
            src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FdW4NknlRBhs%3Ffeature%3Doembed&amp;url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DdW4NknlRBhs&amp;image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FdW4NknlRBhs%2Fhqdefault.jpg&amp;key=96f1f04c5f4143bcb0f2e68c87d65feb&amp;type=text%2Fhtml&amp;schema=youtube"
            scrolling="no"
            allow="autoplay; fullscreen"
            allowfullscreen="true"
            frameborder="0"
          ></iframe>
        </div>

        <HireBenefits />
      </section>

      <section>
        <span>Testimonial Logo</span>
        <p>Testimonial text</p>
        <span
          ><g-image
            src="~/assets/images/external_brand_logos/Colab_logo.png"
            alt="Colab"
            width="50"
        /></span>
        <span
          ><g-image
            src="~/assets/images/misc/Avatar4.jpg"
            alt="Person smiling"
            width="120"
        /></span>
      </section>

      <section>
        <h2>Questions?</h2>
        <p>Schedule a call to get started</p>
        <a
          href="https://app.prosperworks.com/public/meeting-scheduler/The%20Staffing%20Cooperative/joseph/253546:d9f04345-3420-4d5c-823d-c50395d7022e"
          class="btn btn-primary"
          >Schedule a call</a
        >
      </section>

      <BrandLove />

      <OurBlog />
    </main>
  </Layout>
</template>

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

<style>
</style>
