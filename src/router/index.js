import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Course from "../views/Course.vue";
import CourseExperience from "../views/CourseExperience.vue";
import Feedback from "../views/Feedback.vue";
import AboutWe from "../views/AboutWe.vue";
import Calculate from "../components/Calculate.vue";
import FeedbackDetail from "../views/FeedbackDetail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/course",
    name: "Course",
    component: Course
  },
  {
    path: "/experience",
    name: "CourseExperience",
    component: CourseExperience
  },
  {
    path: "/feedback",
    name: "Feedback",
    component: Feedback
  },
  {
    path: "/feedback/detail/:id",
    name: "FeedbackDetail",
    component: FeedbackDetail
  },
  {
    path: "/about",
    name: "AboutWe",
    component: AboutWe
  },
  {
    path: "/calculate",
    name: "Calculate",
    component: Calculate
  },
  {
    path: "*",
    redirect: { name: "Home" }
  }
];

const router = new VueRouter({

  routes
});

export default router;
