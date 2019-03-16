<template>
  <DesignLayout>
    <div class="tw-container tw-mx-auto system-container">
      <header>
        <h1>Design System for Tribe</h1>
      </header>
      <h2 id="atoms">Atoms</h2>
      <section id="headers">
        <h3>Headers</h3>
        <div>
          <h1>Title h1</h1>
          <h2>Title h2</h2>
          <h3>Title h3</h3>
          <h4>Title h4</h4>
          <h5>Title h5</h5>
          <h6>Title h6</h6>
        </div>
      </section>
      <section id="typography">
        <h3>General typography</h3>
        <div>
          <div>
            <span>General body text</span>
          </div>
          <div>
            <em>Emphasis</em>
          </div>
          <div>
            <small>Small text</small>
          </div>
          <div>
            <strong>Strong text</strong>
          </div>
          <div>
            <u>Underline</u>
          </div>
          <div>
            <sub>Small subtext</sub>
          </div>
          <p>
            Paragraph Bob Ross - I was blessed with a very steady hand; and it
            comes in very handy when you're doing these little delicate things.
            Let's make some happy little clouds in our world. Very easy to work
            these to death. Maybe there's a happy little bush that lives right
            there. I can't think of anything more rewarding than being able to
            express yourself to others through painting.
          </p>
          <blockquote>Blockquote text here!</blockquote>
          <div>
            <pre>
              <code>
                .my-special-color {
                    color: #F90;
                }
                </code>
            </pre>
          </div>
        </div>
      </section>
      <section id="lists">
        <h3>Lists</h3>
        <div>
          <h4>Unordered List</h4>
          <ul>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
          </ul>
          <h4>Ordered List</h4>
          <ol>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
          </ol>
          <h4>Definition List</h4>
          <dl>
            <dt>list item 1</dt>
            <dd>list item 1.1</dd>
          </dl>
        </div>
      </section>
      <section id="navigational">
        <h3>Navigational Elements</h3>
        <div>
          <a href="#navigational">Leads somewhere</a>
        </div>
        <div>
          <a href="#navigational" class="btn">Leads somewhere</a>
        </div>
        <div>
          <input class="btn" type="submit" value="Clear Button" />
        </div>
        <div>
          <button disabled>Some button Disabled</button>
        </div>
      </section>
      <section>
        <h3>Forms</h3>
        <div>
          <form>
            <fieldset>
              <label for="nameField">Name</label>
              <input type="text" placeholder="CJ Patoilo" id="nameField" />
              <label for="ageRangeField">Age Range</label>
              <select id="ageRangeField">
                <option value="0-13">0-13</option>
                <option value="14-17">14-17</option>
                <option value="18-23">18-23</option>
                <option value="24+">24+</option>
              </select>

              <div>
                <input
                  type="radio"
                  id="huey"
                  name="drone"
                  value="huey"
                  checked
                />
                <label for="huey">Huey</label>
              </div>

              <div>
                <input type="radio" id="dewey" name="drone" value="dewey" />
                <label for="dewey">Dewey</label>
              </div>

              <div>
                <input type="radio" id="louie" name="drone" value="louie" />
                <label for="louie">Louie</label>
              </div>

              <label for="commentField">Comment</label>
              <textarea placeholder="Hi CJ …" id="commentField"></textarea>
              <div class="float-right">
                <input type="checkbox" id="confirmField" />
                <label class="label-inline" for="confirmField"
                  >Send a copy to yourself</label
                >
              </div>
              <input class="button-primary" type="submit" value="Send" />
            </fieldset>
          </form>
        </div>
      </section>

      <section>
        <h3>Tables</h3>
        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Height</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Stephen Curry</td>
                <td>27</td>
                <td>1,91</td>
                <td>Akron, OH</td>
              </tr>
              <tr>
                <td>Klay Thompson</td>
                <td>25</td>
                <td>2,01</td>
                <td>Los Angeles, CA</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </DesignLayout>
</template>

<script>
import DesignLayout from "~/layouts/Designlayout.vue";
export default {
  components: {
    DesignLayout
  }
};
</script>


<style scoped>
.system-container div {
  @apply pt-4 pb-4;
}
</style>
