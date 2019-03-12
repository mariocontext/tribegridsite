// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import "~/assets/styles.css";

export default function(Vue, { router, head, isClient }) {
  //import cdn fonts
  head.link.push({
    rel: "stylesheet",
    href:
      "https://fonts.googleapis.com/css?family=Montserrat:400,500,700|Roboto:400,500"
  }),
    // Set default layout as a global component
    Vue.component("Layout", DefaultLayout);
}

//https://fonts.googleapis.com/css?family=Montserrat:400,500,700|Roboto:400,500" rel="stylesheet
