import { createRouter, createWebHistory } from "vue-router";

import ROUTES from "./routes";

export default createRouter({
	history: createWebHistory(),
	routes: ROUTES,
	scrollBehavior(to, from, savedPosition): { left: number; top: number } {
		if (!savedPosition) {
			// See https://github.com/vuejs/vue-router/issues/1187
			document.querySelector(".ri-app__container")?.scrollTo(0, 0);
			return { left: 0, top: 0 };
		}
		return savedPosition;
	},
});
