<template>
  <Layout>
    
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->

    <main>

      <section>
        <h1>Hiring is Hard</h1>
        <p>Tribe makes Hiring Easier by directly connecting companies to tech+creative talent</p>
        <a href="#">Make it Easy</a>
      </section>

      <section>
        <h1>Freelancing is harder</h1>
        <p>Tribe helps tech+creative professionals find consistent work and pay by joining a community of highly motivated professionals.</p>
        <a href="#">Earn More</a>
      </section>

      <section>
        <h2>Find great talent</h2>
        <p>Tribe is the only worker owned staffing platform. Find local and vetted talent for your team without the overhead.</p>

        <div class="mini-bio">
          <h3>Name</h3>
          <span>City, ST</span>
          <span>Title</span>
          <div>
            <ul>
              <li>Skill</li>
              <li>Skill</li>
            </ul>
            <p>image here?</p>
            <a href="#">Schedule a call</a>
          </div>
        </div>

        <div>
          <h2>Find great jobs</h2>
          <p>Tribe is the only worker owned staffing platform. Find local and remote vetted talent for your team without the overhead.</p>
          <ul>
            <li>Skill</li>
            <li>Skill</li>
            <li>Skill</li>
            <li>Skill</li>
            <li>Skill</li>
            <li>Skill</li>
            <li>Skill</li>
            <li>Skill</li>
          </ul>
          <a href="#">Find more jobs</a>
        </div>

      </section>

      <section>
        <h2>How it works</h2>
        <div>
          Video goes here
        </div>

        <HireBenefits />

      </section>

      <section>
        <span>Testimonial Logo</span>
        <p>Testimonial text</p>
        <span>Org Logo</span>
        <span>Org Person image</span>
      </section>

      <section>
        <h2>Questions?</h2>
        <p>Schedule a call to get started</p>
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

export default {
  metaInfo: {
    title: "Welcome"
  },
  components: {
    HireBenefits,
    BrandLove,
    OurBlog
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
