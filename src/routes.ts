import { RouteRecordRaw } from "vue-router";

import ExperienceList from "./components/experience/ExperienceList.vue";
import FAQ from "./components/faq/FAQ.vue";
import HobbyList from "./components/hobbies/HobbyList.vue";
import AppHome from "./components/home/AppHome.vue";
import AuthorProfile from "./components/profile/AuthorProfile.vue";
import ProjectList from "./components/projects/ProjectList.vue";

export type RealRoute = RouteRecordRaw & { meta: { translationKey: string } };

export const routes: RealRoute[] = [
	{
		path: "/",
		name: "home",
		component: AppHome,
		meta: {
			translationKey: "menu.home",
		},
	},
	{
		path: "/profile",
		name: "profile",
		component: AuthorProfile,
		meta: {
			translationKey: "menu.profile",
		},
	},
	{
		path: "/experience",
		name: "experience",
		component: ExperienceList,
		meta: {
			translationKey: "menu.experience",
		},
	},
	{
		path: "/hobbies",
		name: "hobbies",
		component: HobbyList,
		meta: {
			translationKey: "menu.hobbies",
		},
	},
	{
		path: "/projects",
		name: "projects",
		component: ProjectList,
		meta: {
			translationKey: "menu.projects",
		},
	},
	{
		path: "/faq",
		name: "faq",
		component: FAQ,
		meta: {
			translationKey: "menu.faq",
		},
	},
];

const catchAllRoute: RouteRecordRaw = {
	path: "/:pathMatch(.*)*",
	redirect: "/",
};

export default (routes as RouteRecordRaw[]).concat(catchAllRoute);
