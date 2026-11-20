// a page in the sidebar with a counter that is saved between restarts
export default {
	start(api) {
		const { h, ref } = api.vue
		const count = ref(api.storage.get('count', 0))
		const add = () => api.storage.set('count', ++count.value)

		const page = api.addRoute('/', {
			render: () =>
				h('div', { class: 'p-6 flex flex-col gap-4' }, [
					h('h1', { class: 'm-0 text-2xl font-semibold text-contrast' }, `${api.options.greeting}!`),
					h('p', { class: 'm-0 text-secondary' }, `You clicked ${count.value} times`),
					h('button', { class: 'btn btn-primary w-fit', onClick: add }, 'Click'),
				]),
		})
		api.addNavItem({ label: 'Example', icon: api.icons.star, to: page })

		// shows up under the plugin in settings > plugins
		this.settings = { render: () => h('button', { class: 'btn', onClick: () => api.storage.set('count', (count.value = 0)) }, 'Reset counter') }
	},
}
