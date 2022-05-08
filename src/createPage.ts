import { h, defineComponent } from 'vue'

import theme1 from './layouts/theme1.vue'
import page1 from './pages/page1.vue'

export function createPage(): any {
	//return h('div', {}, '123456789');

	//return h('div', [h(theme1)]);

	const vnode = h(theme1, null, {
		//default: () => 'default slot',
		//default: () => h(page1),
	});
	return vnode;
}
