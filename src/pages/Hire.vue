<template>
  <Layout>
    <main>
      <section>
        <h1>Making hiring easy</h1>
        <p>
          Tribe makes hiring your next designer + developer fast, easy and
          transparent! Learn More Today
        </p>
        <div>
          <g-image
            src="~/assets/images/misc/paying-attention.jpg"
            alt="Man listening"
            width="320"
          />
        </div>
      </section>

      <ContactActions />

      <section>
        <h2>Get in touch</h2>
        <p>
          Tribe makes hiring your next designer + developer fast, easy and
          transparent! Learn More Today
        </p>

        <div>
          <form id="email-hire" name="email-hire" data-name="Email Hire">
            <div>
              <label for="hire-name">Name</label>
              <input
                type="text"
                name="hire-name"
                data-name="Hire-Name"
                placeholder="Jane Jones"
                id="hire-name"
                required=""
              />
            </div>
            <div>
              <label for="hire-email">Email</label>
              <input
                type="email"
                name="Hire-Email"
                data-name="Email"
                placeholder="jane@tribemail.com"
                id="Email"
                required=""
              />
            </div>

            <div>
              <label for="hire-phone">Phone</label>
              <input
                type="tel"
                name="hire-phone"
                data-name="Hire Phone"
                placeholder="1-202-123-1234"
                id="phone"
                required=""
              />
            </div>

            <div>
              <label for="hire-industry">Industry</label>
              <input
                type="text"
                name="hire-industry"
                data-name="Hire Industry"
                id="hire-industry"
                required=""
              />
            </div>

            <div>
              <label for="hire-location">Location</label>
              <input
                type="text"
                class="w-input"
                name="hire-location"
                data-name="Hire Location"
                id="hire-location"
                required=""
              />
            </div>

            <div>
              <label for="hire-team-size">Your Team Size</label>
              <select
                id="hire-team-size"
                name="hire-team-size"
                data-name="Hire Team Size"
              >
                <option value="10 - 20">10 - 20</option>
                <option value="20 - 50">20 - 50</option>
                <option value="50 - 100">50 - 100</option>
                <option value="100 +">100 +</option>
              </select>
            </div>

            <div>
              <h4 class="tw-pt-4">Would you prefer call or email?</h4>

              <input
                type="radio"
                id="hire-call-pref"
                name="hire-contact-pref"
                value="call"
                data-name="Hire Call"
              />
              <label
                for="hire-call-pref"
                class="tw-inline-block tw-mr-4 tw-ml-2"
                >Call</label
              >

              <input
                type="radio"
                id="hire-email-pref"
                name="hire-contact-pref"
                value="Email"
                data-name="hire-contact-pref"
              />
              <label
                for="hire-email-pref"
                class="tw-inline-block tw-mr-4 tw-ml-2"
                >Email</label
              >
            </div>

            <input type="submit" class="btn btn-primary" value="Get in Touch" />
          </form>
        </div>
      </section>

      <BrandLove />

      <HireBenefits />

      <section
        class="tw-bg-tertiary tw-text-white tw-pl-8 tw-pr-8 tw-pt-4 tw-pb-4 tw--ml-4 tw--mr-4"
      >
        <h3 class="tw-text-center">Unsure about tribe?</h3>
        <a
          href="https://app.prosperworks.com/public/meeting-scheduler/The%20Staffing%20Cooperative/joseph/253546:d9f04345-3420-4d5c-823d-c50395d7022e"
          class="btn btn-primary tw-block tw-w-64 tw-mx-auto"
          >Let's grab coffee</a
        >
      </section>

      <OurBlog />
    </main>
  </Layout>
</template>


<script>
import HireBenefits from "~/components/HireBenefits.vue";
import BrandLove from "~/components/BrandLove.vue";
import OurBlog from "~/components/OurBlog.vue";
import ContactActions from "~/components/ContactActions.vue";

export default {
  metaInfo: {
    title: "Hire"
  },
  components: {
    HireBenefits,
    BrandLove,
    OurBlog,
    ContactActions
  }
};
</script>
