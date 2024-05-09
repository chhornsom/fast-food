<template>
  <div class="container-fluid">
    <div class="row mb-4 mt-4">
      <div class="col-6 d-flex align-items-center">
        <h3 class="mb-0">Categories</h3>
      </div>
      <div class="col-6 text-end">
        <material-button color="warning" variant="gradient">
          <i class="fas fa-plus me-2"></i>
          Add New Item
        </material-button>
      </div>
    </div>
    <div class="row mb-4">
      <div class="col-lg-12 position-relative z-index-2">
        <div class="row">
          <div class="col s12 m6">
            <div class="card" style="width: 18rem;">
              <div class="card-body">
                <img
                  src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D"
                  alt="">
                <h5 class="mt-2 text-center">All</h5>
              </div>
            </div>
          </div>
          <div class="col s12 m6">
            <div class="card" style="width: 18rem;">
              <div class="card-body">
                <img
                  src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D"
                  alt="">
                <h5 class="mt-2 text-center">All</h5>
              </div>
            </div>
          </div>
          <div class="col s12 m6">
            <div class="card" style="width: 18rem;">
              <div class="card-body">
                <img
                  src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D"
                  alt="">
                <h5 class="mt-2 text-center">All</h5>
              </div>
            </div>
          </div>
          <div class="col s12 m6">
            <div class="card" style="width: 18rem;">
              <div class="card-body">
                <img
                  src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D"
                  alt="">
                <h5 class="mt-2 text-center">All</h5>
              </div>
            </div>
          </div>
          <br>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-8 col-md-6 mb-md-0 mb-4">
        <project-card title="Projects"
          description="<i class='fa fa-check text-info' aria-hidden='true'></i> <span class='font-weight-bold ms-1'>30 done</span> this month"
          :headers="['Companies', 'Members', 'Budget', 'Progress']" :projects="[
            {
              logo: logoXD,
              title: 'Material XD Material XD Version',
              members: [team1, team2, team3, team4],
              budget: '$14,000',
              progress: { percentage: 60, color: 'info' },
            },
            {
              logo: logoAtlassian,
              title: 'Add Progress Track',
              members: [team2, team4],
              budget: '$3,000',
              progress: { percentage: 10, color: 'info' },
            },
            {
              logo: logoSlack,
              title: 'Fix Platform Errors',
              members: [team3, team1],
              budget: 'Not set',
              progress: { percentage: 100, color: 'success' },
            },
            {
              logo: logoSpotify,
              title: 'Launch our Mobile App',
              members: [team4, team3, team4, team1],
              budget: '$20,500',
              progress: { percentage: 100, color: 'success' },
            },
            {
              logo: logoJira,
              title: 'Add the New Pricing Page',
              members: [team4],
              budget: '$500',
              progress: { percentage: 25, color: 'info' },
            },
            {
              logo: logoJira,
              title: 'Redesign New Online Shop',
              members: [team1, team4],
              budget: '$2,000',
              progress: { percentage: 40, color: 'info' },
            },
          ]" />
      </div>
      <div class="col-lg-4 col-md-6">
        <timeline-list class="h-100" title="Orders overview" description="<i class='fa fa-arrow-up text-success' aria-hidden='true'></i>
        <span class='font-weight-bold'>24%</span> this month">
          <timeline-item :icon="{
            component: 'notifications',
            class: 'text-success',
          }" title="$2400 Design changes" date-time="22 DEC 7:20 PM" />
          <TimelineItem :icon="{
            component: 'code',
            class: 'text-danger',
          }" title="New order #1832412" date-time="21 DEC 11 PM" />
          <TimelineItem :icon="{
            component: 'shopping_cart',
            class: 'text-info',
          }" title="Server payments for April" date-time="21 DEC 9:34 PM" />
          <TimelineItem :icon="{
            component: 'credit_card',
            class: 'text-warning',
          }" title="New card added for order #4395133" date-time="20 DEC 2:20 AM" />
          <TimelineItem :icon="{
            component: 'vpn_key',
            class: 'text-primary',
          }" title="Unlock packages for development" date-time="18 DEC 4:54 AM" class="pb-1" />
        </timeline-list>
      </div>
    </div>
  </div>
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
export default {
  name: "dashboard-default",
  data() {
    return {
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
  methods: {
    fetchFastFoodItems() {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(posts => {
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
        .then(response => response.json())
        .then(post => {
          this.posts.unshift(post);
          this.newPost.name = "";
          this.newPost.title = "";
          this.newPost.product_image = "";
          this.newPost.create_at = ""
        });
    },
    editItem(post) {
      this.editingPost = post;
      this.newPost.name = post.name;
      this.newPost.price = post.price;
      this.newPost.product_image = post.product_image;
      this.newPost.create_at = post.create_at
    },
    updateItem() {
      fetch(`https://jsonplaceholder.typicode.com/posts/${this.editingPost.id}`, {
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
      })
        .then(response => response.json())
        .then(updatedPost => {
          const index = this.posts.findIndex(post => post.id === updatedPost.id);
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
      })
        .then(() => {
          this.posts = this.posts.filter(post => post.id !== id);
        });
    }
  },
  components: {
    ProjectCard,
    TimelineList,
    TimelineItem,
    MaterialButton
  }
}
</script>
<style lang="scss" scoped>
img {
  width: 100%;
  height: 100%;
}
</style>