<template>
  <Layout>
    <section>
      <h1>Making hiring easy</h1>
      <p>
        Tribe makes hiring your next designer + developer fast, easy and
        transparent! Learn More Today
      </p>
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
              maxlength="256"
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
              maxlength="256"
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
              maxlength="256"
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
              maxlength="256"
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
              maxlength="256"
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
            <h4>Would you prefer call or email?</h4>

            <input
              type="radio"
              id="hire-call-pref"
              name="hire-call-pref"
              value="call"
              data-name="Hire Call"
            />
            <label for="hire-call-pref">Call</label>

            <input
              type="radio"
              id="hire-email-pref"
              name="Hire Email Pref"
              value="Email"
              data-name="hire-email-pref"
            />
            <label for="hire-email-pref">Email</label>
          </div>

          <input type="submit" value="Get in Touch" />
        </form>
      </div>
    </section>

    <BrandLove />

    <HireBenefits />

    <section>
      <h2>Unsure about tribe?</h2>
      <a
        href="https://app.prosperworks.com/public/meeting-scheduler/The%20Staffing%20Cooperative/joseph/253546:d9f04345-3420-4d5c-823d-c50395d7022e"
        >Let's grab coffee</a
      >
    </section>

    <OurBlog />
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
