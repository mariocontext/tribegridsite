<template>
  <Layout>
    <section>
      <h1>Start Earning More</h1>
      <p>
        Tribe helps you land great tech + creative roles at companies looking to
        hire top talent.
      </p>
    </section>

    <ContactActions />

    <section>
      <h2>New Jobs Found on Tribe</h2>
      <p>
        When you become a member with Tribe, you’ll be able to apply to some of
        the best jobs in the Tech + Creative industries
      </p>

      <JobCard />
      <JobCard />
    </section>

    <BrandLove />

    <section>
      <h2>Join Tribe</h2>
      <p>
        Email Tribe, and together we can help you find jobs in Tech + Creative
        industries + Earn More
      </p>

      <form
        id="join-email-form"
        name="join-email-form"
        data-name="Join Email Form"
      >
        <div>
          <label for="join-name">Name</label>
          <input
            type="text"
            maxlength="256"
            name="join-name"
            data-name="Join Name"
            placeholder="Jane Doe"
            id="join-name"
            required=""
          />
        </div>

        <div>
          <label for="join-email">Email</label>
          <input
            type="email"
            maxlength="256"
            name="join-email"
            data-name="Join Email Address"
            placeholder="jane@tribemail.com"
            id="join-email"
            required=""
          />
        </div>

        <div>
          <label for="join-phone">Phone</label>
          <input
            type="tel"
            maxlength="256"
            name="join-phone"
            data-name="Join Phone"
            placeholder="904-867-5309"
            id="join-phone"
            required=""
          />
        </div>

        <div>
          <label for="join-location">Location</label>
          <input
            type="text"
            maxlength="256"
            name="join-location"
            data-name="Join Location"
            placeholder="Somewhere USA"
            id="join-location"
            required=""
          />
        </div>

        <div>
          <label for="join-roles">Desired Roles</label>
          <input
            type="text"
            maxlength="256"
            name="join-roles"
            data-name="Join Roles"
            placeholder="Senior Product Designer"
            id="join-roles"
          />
        </div>

        <div>
          <label for="join-skills">Skills and Tools You Use</label>
          <input
            type="text"
            maxlength="256"
            name="join-skills"
            data-name="Join Skills"
            placeholder="Framer, Figma, Figgy Pudding.."
            id="join-skills"
          />
        </div>

        <input
          type="submit"
          value="Join Tribe"
          data-wait="Someone will be with you shortly!"
        />
      </form>
    </section>

    <OurBlog />
  </Layout>
</template>

<script>
import BrandLove from "~/components/BrandLove.vue";
import OurBlog from "~/components/OurBlog.vue";
import ContactActions from "~/components/ContactActions.vue";
import JobCard from "~/components/JobCard.vue";

export default {
  metaInfo: {
    title: "Join"
  },
  components: {
    BrandLove,
    OurBlog,
    ContactActions,
    JobCard
  }
};
</script>
