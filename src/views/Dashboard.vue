<template>
  <div class="container-fluid">
    <div
    class="col-sm-3 box-upload"
    v-for="(item, index) in storePosts" :key="index"
  >
    <!-- <div>
      <img :src="item.image"/>
    </div> -->
    <h1>bbbbbbbbbbbbbb</h1>
    <h4>{{ item.productId }}</h4>
  </div>
    <div class="row mb-4 mt-4">
      <div class="col-6 d-flex align-items-center">
        <h3 class="mb-0">Categories</h3>
      </div>
      <div class="col-6 text-end">
        <material-button
          color="warning"
          variant="gradient"
          @click="handleClickModal"
        >
          <i class="fas fa-plus me-2"></i>
          Add New Item
        </material-button>
      </div>
    </div>
    <div v-for="(item, index) in post" :key="index">
      <h2>{{ item.title }}</h2>
      <h2>{{ item.body }}</h2>
    </div>
    <section>
      <div class="row">
        <div class="col-sm-6 col-md-6 col-lg-6">
          <div class="food-card food-card--vertical">
            <div class="food-card_img">
              <img
                src="@/assets/img/foods/ai-generated-8619138_1280.png"
                alt=""
              />
              <a href="#!"><i class="fa fa-heart"></i></a>
            </div>
            <div class="food-card_content">
              <div class="food-card_title-section">
                <a href="#!" class="food-card_title"
                  >Double Cheese Potato Burger</a
                >
                <a href="#!" class="food-card_author">Burger</a>
              </div>
              <div class="food-card_bottom-section">
                <div class="space-between">
                  <div><span class="fa fa-fire"></span> 220 - 280 Kcal</div>
                  <div class="pull-right">
                    <span class="badge badge-success">Veg</span>
                  </div>
                </div>
                <hr />
                <div class="space-between">
                  <div class="food-card_price">
                    <span>5.99$</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-6 col-lg-6">
          <div class="food-card food-card--vertical">
            <div class="food-card_img">
              <img src="@/assets/img/foods/apple-8591539_1280.jpg" alt="" />
              <a href="#!"><i class="fa fa-heart"></i></a>
            </div>
            <div class="food-card_content">
              <div class="food-card_title-section">
                <a href="#!" class="food-card_title"
                  >Double Cheese Potato Burger</a
                >
                <a href="#!" class="food-card_author">Burger</a>
              </div>
              <div class="food-card_bottom-section">
                <div class="space-between">
                  <div><span class="fa fa-fire"></span> 220 - 280 Kcal</div>
                  <div class="pull-right">
                    <span class="badge badge-success">Veg</span>
                  </div>
                </div>
                <hr />
                <div class="space-between">
                  <div class="food-card_price">
                    <span>5.99$</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-6 col-lg-6">
          <div class="food-card food-card--vertical">
            <div class="food-card_img">
              <img src="@/assets/img/foods/asparagus-2169305_1280.jpg" alt="" />
              <a href="#!"><i class="fa fa-heart"></i></a>
            </div>
            <div class="food-card_content">
              <div class="food-card_title-section">
                <a href="#!" class="food-card_title"
                  >Double Cheese Potato Burger</a
                >
                <a href="#!" class="food-card_author">Burger</a>
              </div>
              <div class="food-card_bottom-section">
                <div class="space-between">
                  <div><span class="fa fa-fire"></span> 220 - 280 Kcal</div>
                  <div class="pull-right">
                    <span class="badge badge-success">Veg</span>
                  </div>
                </div>
                <hr />
                <div class="space-between">
                  <div class="food-card_price">
                    <span>5.99$</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-6 col-lg-6">
          <div class="food-card food-card--vertical">
            <div class="food-card_img">
              <img src="@/assets/img/foods/food-712665_1280.jpg" alt="" />
              <a href="#!"><i class="fa fa-heart"></i></a>
            </div>
            <div class="food-card_content">
              <div class="food-card_title-section">
                <a href="#!" class="food-card_title"
                  >Double Cheese Potato Burger</a
                >
                <a href="#!" class="food-card_author">Burger</a>
              </div>
              <div class="food-card_bottom-section">
                <div class="space-between">
                  <div><span class="fa fa-fire"></span> 220 - 280 Kcal</div>
                  <div class="pull-right">
                    <span class="badge badge-success">Veg</span>
                  </div>
                </div>
                <hr />
                <div class="space-between">
                  <div class="food-card_price">
                    <span>5.99$</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="row">
      <div class="col-lg-8 col-md-6 mb-md-0 mb-4">
        <project-card
          title="Projects"
          description="<i class='fa fa-check text-info' aria-hidden='true'></i> <span class='font-weight-bold ms-1'>30 done</span> this month"
          :headers="['Companies', 'Members', 'Budget', 'Progress']"
          :projects="[
            {
              logo: logoXD,
              title: 'Material XD Material XD Version',
              members: [team1, team2, team3, team4],
              budget: '$14,000',
              progress: { percentage: 60, color: 'info' }
            },
            {
              logo: logoAtlassian,
              title: 'Add Progress Track',
              members: [team2, team4],
              budget: '$3,000',
              progress: { percentage: 10, color: 'info' }
            },
            {
              logo: logoSlack,
              title: 'Fix Platform Errors',
              members: [team3, team1],
              budget: 'Not set',
              progress: { percentage: 100, color: 'success' }
            },
            {
              logo: logoSpotify,
              title: 'Launch our Mobile App',
              members: [team4, team3, team4, team1],
              budget: '$20,500',
              progress: { percentage: 100, color: 'success' }
            },
            {
              logo: logoJira,
              title: 'Add the New Pricing Page',
              members: [team4],
              budget: '$500',
              progress: { percentage: 25, color: 'info' }
            },
            {
              logo: logoJira,
              title: 'Redesign New Online Shop',
              members: [team1, team4],
              budget: '$2,000',
              progress: { percentage: 40, color: 'info' }
            }
          ]"
        />
      </div>
      <div class="col-lg-4 col-md-6">
        <timeline-list
          class="h-100"
          title="Orders overview"
          description="<i class='fa fa-arrow-up text-success' aria-hidden='true'></i>
        <span class='font-weight-bold'>24%</span> this month"
        >
          <timeline-item
            :icon="{
              component: 'notifications',
              class: 'text-success'
            }"
            title="$2400 Design changes"
            date-time="22 DEC 7:20 PM"
          />
          <TimelineItem
            :icon="{
              component: 'code',
              class: 'text-danger'
            }"
            title="New order #1832412"
            date-time="21 DEC 11 PM"
          />
          <TimelineItem
            :icon="{
              component: 'shopping_cart',
              class: 'text-info'
            }"
            title="Server payments for April"
            date-time="21 DEC 9:34 PM"
          />
          <TimelineItem
            :icon="{
              component: 'credit_card',
              class: 'text-warning'
            }"
            title="New card added for order #4395133"
            date-time="20 DEC 2:20 AM"
          />
          <TimelineItem
            :icon="{
              component: 'vpn_key',
              class: 'text-primary'
            }"
            title="Unlock packages for development"
            date-time="18 DEC 4:54 AM"
            class="pb-1"
          />
        </timeline-list>
      </div>
    </div>
  </div>
  <modal-default v-if="(isModal = isModal)"></modal-default>
</template>
<script>
import ProjectCard from "./components/ProjectCard.vue";
import TimelineList from "@/examples/Cards/TimelineList.vue";
import TimelineItem from "@/examples/Cards/TimelineItem.vue";
import logoXD from "@/assets/img/small-logos/logo-xd.svg";
import logoAtlassian from "@/assets/img/small-logos/logo-atlassian.svg";
import logoSlack from "@/assets/img/small-logos/logo-slack.svg";
import logoSpotify from "@/assets/img/small-logos/logo-spotify.svg";
import logoJira from "@/assets/img/small-logos/logo-jira.svg";
import logoInvision from "@/assets/img/small-logos/logo-invision.svg";
import team1 from "@/assets/img/team-1.jpg";
import team2 from "@/assets/img/team-2.jpg";
import team3 from "@/assets/img/team-3.jpg";
import team4 from "@/assets/img/team-4.jpg";
import MaterialButton from "@/components/MaterialButton.vue";
import myPosts from "@/data/db.json";
import ModalDefault from "./components/ModalDefault.vue";
const images = require.context("@/assets/img", false, /\.png$|\.jpg$/);
export default {
  name: "dashboard-default",
  data() {
    return {
      isModal: false,
      storePosts: [
        {
          // image: [require("@/assets/img/foods/ai-generated-8619138_1280.png")],
          productId: 2,
          name: "aaaaaaaaaaaaaaa"
        },
        {
          // image: [require("@/assets/img/foods/fruit-8750860_1280.jpg")],
          productId: 3,
          name: "aaaaaaaaaaaaaaa"
        },
        {
          // image: [require("@/assets/img/foods/ai-generated-8619138_1280.png")],
          productId: 4,
          name: "aaaaaaaaaaaaaaa"
        }
      ],
      logoXD,
      team1,
      team2,
      team3,
      team4,
      logoAtlassian,
      logoSlack,
      logoSpotify,
      logoJira,
      logoInvision,
      posts: [],
      newPost: {
        name: "",
        price: "",
        product_image: "",
        create_at: ""
      },
      editingPost: null
    };
  },
  created() {
    this.fetchFastFoodItems();
  },
  mounted() {
    this.handleGetAllPost();
    this.fetchFastFoodItems();
  },
  methods: {
    handleClickModal() {
      alert("WORKING");
      this.isModal = !this.isModal;
    },
    async loadImg(imgPath) {
      return images(imgPath);
    },
    async handleGetAllPost() {
      this.storePosts = myPosts.data;
    },
    fetchFastFoodItems() {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((posts) => {
          this.posts = posts;
        });
    },
    addNewItem() {
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(this.newPost),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then((response) => response.json())
        .then((post) => {
          this.posts.unshift(post);
          this.newPost.name = "";
          this.newPost.title = "";
          this.newPost.product_image = "";
          this.newPost.create_at = "";
        });
    },
    editItem(post) {
      this.editingPost = post;
      this.newPost.name = post.name;
      this.newPost.price = post.price;
      this.newPost.product_image = post.product_image;
      this.newPost.create_at = post.create_at;
    },
    updateItem() {
      fetch(
        `https://jsonplaceholder.typicode.com/posts/${this.editingPost.id}`,
        {
          method: "PUT",
          body: JSON.stringify({
            name: this.newPost.name,
            price: this.newPost.price,
            product_image: this.newPost.product_image,
            create_at: this.newPost.create_at,
            // userId: this.editingPost.userId,
            id: this.editingPost.id
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        }
      )
        .then((response) => response.json())
        .then((updatedPost) => {
          const index = this.posts.findIndex(
            (post) => post.id === updatedPost.id
          );
          if (index !== -1) {
            this.posts.splice(index, 1, updatedPost);
          }
          this.newPost.name = "";
          this.newPost.price = "";
          this.newPost.product_image = "";
          this.newPost.create_at = "";
          this.editingPost = null;
        });
    },
    deleteItem(id) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "DELETE"
      }).then(() => {
        this.posts = this.posts.filter((post) => post.id !== id);
      });
    }
  },
  components: {
    ProjectCard,
    TimelineList,
    TimelineItem,
    MaterialButton,
    ModalDefault
  }
};
</script>
<style lang="scss" scoped>
img {
  width: 100%;
  height: 100%;
}

@import url(https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap);

body {
  background: #f9f9f9;
  font-family: 'roboto', sans-serif;
}

@import url(https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap);

body {
  background: #f9f9f9;
  font-family: 'roboto', sans-serif;
}

.main-content {
  padding-top: 100px;
  padding-bottom: 100px;
}

a {
  text-decoration: none;
}

.food-card {
  background: #fff;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 30px;
  -webkit-box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
  -webkit-transition: 0.1s;
  transition: 0.1s;
}

.food-card:hover {
  -webkit-box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}

.food-card .food-card_img {
  display: block;
  position: relative;
}

.food-card .food-card_img img {
  width: 100%;
  height: 200px;
  -o-object-fit: cover;
  object-fit: cover;
}

.food-card .food-card_img i {
  position: absolute;
  top: 20px;
  right: 30px;
  color: #fff;
  font-size: 25px;
  -webkit-transition: all 0.1s;
  transition: all 0.1s;
}

.food-card .food-card_img i:hover {
  top: 18px;
  right: 28px;
  font-size: 29px;
}

.food-card .food-card_content {
  padding: 15px;
}

.food-card .food-card_content .food-card_title-section {
  height: 100px;
  overflow: hidden;
}

.food-card .food-card_content .food-card_title-section .food-card_title {
  font-size: 24px;
  color: #333;
  font-weight: 500;
  display: block;
  line-height: 1.3;
  margin-bottom: 8px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.food-card .food-card_content .food-card_title-section .food-card_author {
  font-size: 15px;
  display: block;
}

.food-card .food-card_content .food-card_bottom-section .space-between {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.food-card .food-card_content .food-card_bottom-section .food-card_subscribers {
  margin-left: 17px;
}

.food-card
  .food-card_content
  .food-card_bottom-section
  .food-card_subscribers
  img,
.food-card
  .food-card_content
  .food-card_bottom-section
  .food-card_subscribers
  .food-card_subscribers-count {
  height: 45px;
  width: 45px;
  border-radius: 45px;
  border: 3px solid #fff;
  margin-left: -17px;
  float: left;
  background: #f5f5f5;
}

.food-card
  .food-card_content
  .food-card_bottom-section
  .food-card_subscribers
  .food-card_subscribers-count {
  position: relative;
}

.food-card
  .food-card_content
  .food-card_bottom-section
  .food-card_subscribers
  .food-card_subscribers-count
  span {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  font-size: 13px;
}

.food-card .food-card_content .food-card_bottom-section .food-card_price {
  font-size: 28px;
  font-weight: 500;
  color: #f47a00;
}

.food-card .food-card_content .food-card_bottom-section .food-card_order-count {
  width: 180px;
}

.food-card
  .food-card_content
  .food-card_bottom-section
  .food-card_order-count
  input {
  background: #f5f5f5;
  border-color: #f5f5f5;
  -webkit-box-shadow: none;
  box-shadow: none;
  text-align: center;
}

.food-card
  .food-card_content
  .food-card_bottom-section
  .food-card_order-count
  button {
  border-color: #f5f5f5;
  border-width: 3px;
  -webkit-box-shadow: none;
  box-shadow: none;
}

@media (min-width: 992px) {
  .food-card--vertical {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    position: relative;
    height: 235px;
  }

  .food-card--vertical .food-card_img img {
    width: 200px;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
  }
}
</style>
