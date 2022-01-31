import App from '@/App.vue'
import { shallowMount, createLocalVue, mount } from '@vue/test-utils'
import VueRouter from 'vue-router'

describe("App.vue", () => {

    function mountComponent() { // function for mount()
        const localVue = createLocalVue()
        localVue.use(VueRouter)

        return shallowMount(App, {
            localVue // create local vue instance
        })
    }

    // if the component is not found this will return false, and test will fail
    it("compenent should exists", ()=> {
        const wrapper = mountComponent()
        expect(wrapper.exists()).toBeTruthy()
    })

})