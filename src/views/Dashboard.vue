<template>
  <div class="container-fluid">
    <div class="row mb-4 mt-4">
      <div class="col-6 d-flex align-items-center">
        <h3 class="mb-0">Categories</h3>
      </div>
      <div class="col-6 text-end">
        <material-button color="warning" variant="gradient" @click="handleClickModal">
          <i class="fas fa-plus me-2"></i>
          Add New Item
        </material-button>
      </div>
    </div>
    <section>
      <div class="row">
        <div class="col-sm-6 col-md-6 col-lg-6" v-for="(item, index) in itemCategories" :key="index">
          <div class="food-card food-card--vertical">
            <div class="food-card_img">
              <img :src="item.image" :alt="item.image" />
              <a href="#!"><i class="fa fa-heart"></i></a>
            </div>
            <div class="ms-auto text-end">
              <a class="btn btn-link text-danger text-gradient px-3 mb-0" href="javascript:;">
                <i class="far fa-trash-alt me-2" aria-hidden="true"></i>Delete
              </a>
              <a class="btn btn-link text-dark px-3 mb-0" href="javascript:;">
                <i class="fas fa-pencil-alt text-dark me-2" aria-hidden="true"></i>Edit
              </a>
            </div>
            <div class="food-card_content">
              <div class="food-card_title-section">
                <a href="#!" class="food-card_title">{{ item.title }}</a>
                <a href="#!" class="food-card_author">{{ item.name }}</a>
              </div>
              <div class="food-card_bottom-section">
                <div class="space-between">
                  <div><span class="fa fa-fire"></span>{{ item.totalInStock }}</div>
                  <div class="pull-right">
                    <span class="badge badge-success">Veg</span>
                  </div>
                </div>
                <hr />
                <div class="space-between">
                  <div class="food-card_price">
                    <span>{{ item.price }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  </div>
  <modal-component modalId="modal-add-new" :toggleModal="toggleModalAddNew" v-if="itemCategories"
    :itemCategories="itemCategories" @handleModalAction="handleCreateItem"></modal-component>
    <div v-for="(item, index) in getData.customers" :key="index">
    <h1>{{ item.company_name }}</h1>
    </div>
</template>
<script>
// import ProjectCard from "./components/ProjectCard.vue";
// import TimelineList from "@/examples/Cards/TimelineList.vue";
// import TimelineItem from "@/examples/Cards/TimelineItem.vue";
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
import storiesData from "@/data/db.json";
// const img = require.context("@/assets/img", false, /\.png$|\.jpg$/);
const img = require.context("@/assets/img/foods", false, /\.png$|\.jpg$/);
const aaa = "@/assets/img/foods/apple-8591539_1280.jpg";
import ModalComponent from "./components/ModalList.vue";
import DataDb from "../data/db.json"

export default {
  components: {
    // ProjectCard,
    // TimelineList,
    // TimelineItem,
    MaterialButton,
    ModalComponent
  },
  name: "dashboard-default",
  data() {
    return {
      isModal: false,
      stories: storiesData,
      aaa: aaa,
      toggleModalAddNew: false,
      getData: DataDb,
      itemCategories: DataDb.categories,
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
  },
  mounted() {
    // this.handleGetAllPost();
  },
  methods: {
    loadImg(imgPath) {
      return img(imgPath);
    },
    handleClickModal() {
      this.toggleModalAddNew = !this.toggleModalAddNew;
    },
    async handleCreateItem(filterItem) {
      this.itemCategories.push(filterItem);
    }
  },
  watch: {
    toggleModalAddNew() {
      // this.itemCategories = {};
    }
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

.food-card .food-card_content .food-card_bottom-section .food-card_subscribers img,
.food-card .food-card_content .food-card_bottom-section .food-card_subscribers .food-card_subscribers-count {
  height: 45px;
  width: 45px;
  border-radius: 45px;
  border: 3px solid #fff;
  margin-left: -17px;
  float: left;
  background: #f5f5f5;
}

.food-card .food-card_content .food-card_bottom-section .food-card_subscribers .food-card_subscribers-count {
  position: relative;
}

.food-card .food-card_content .food-card_bottom-section .food-card_subscribers .food-card_subscribers-count span {
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

.food-card .food-card_content .food-card_bottom-section .food-card_order-count input {
  background: #f5f5f5;
  border-color: #f5f5f5;
  -webkit-box-shadow: none;
  box-shadow: none;
  text-align: center;
}

.food-card .food-card_content .food-card_bottom-section .food-card_order-count button {
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
