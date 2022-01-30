import App from '@/App.vue'
import { shallowMount, createLocalVue, mount } from '@vue/test-utils'
import VueRouter from 'vue-router'

describe("App.vue", () => {

    function mountComponent() {
        const localVue = createLocalVue()
        localVue.use(VueRouter)

        return shallowMount(App, {
            localVue,
            // router
        })
    }

    it("compenent should exists", ()=> {
        const wrapper = mountComponent()
        expect(wrapper.exists()).toBeTruthy()
    })

})