import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Course from "../views/Course.vue";
import CourseExperience from "../views/CourseExperience.vue";
import Feedback from "../views/Feedback.vue";
import AboutWe from "../views/AboutWe.vue";
import Calculate from "../views/Calculate.vue";

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
    path: "/courseExperience",
    name: "CourseExperience",
    component: CourseExperience
  },
  {
    path: "/feedback",
    name: "Feedback",
    component: Feedback
  },
  {
    path: "/aboutWe",
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
  mode: "history",

  routes
});

export default router;
