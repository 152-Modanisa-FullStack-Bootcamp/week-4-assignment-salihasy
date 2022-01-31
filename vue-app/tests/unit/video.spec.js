import {createLocalVue, RouterLinkStub, mount, shallowMount} from '@vue/test-utils'
import Video from "@/components/Video";
import VueRouter from "vue-router";
import Watch from "@/components/Watch";


describe("Video.vue", () => {

    // function for mount
    function mountComponent() {
        // created local vue instance
        const localVue = createLocalVue()
        localVue.use(VueRouter)
        // created new router instance
        const router = new VueRouter()

        return shallowMount(Video, {
            localVue,
            router,
            stubs : {
                "router-link" : RouterLinkStub
            },
            // we give props
            propsData: {
                video: {
                    id: 1,
                    videoAddress: "https://www.youtube.com/watch?v=FXpIoQ_rT_c",
                    coverImage: "https://raw.githubusercontent.com/modanisa/bootcamp-video-db/main/video-images/1-cover.webp",
                    hoverImage: "https://raw.githubusercontent.com/modanisa/bootcamp-video-db/main/video-images/1-hover.webp",
                    title: "Vue.js Course for Beginners [2021 Tutorial]",
                    viewCount: 254,
                    publishDateInMonth: 4,
                    ownerImage: "https://yt3.ggpht.com/ytc/AKedOLTtJvQ1Vfew91vemeLaLdhjOwGx3tTBLlreK_QUyA=s68-c-k-c0x00ffffff-no-rj",
                    ownerName: "freeCodeCamp.org",
                    description: "Learn Vue 3 by in this full course. Vue.js is an open-source model–view–view model front end JavaScript framework for building user interfaces and single-page applications."
                }
            }
        })
    }

    // if the component is not found this will return false, and test will fail
    it("video compenent should exists", () => {
        const wrapper = mountComponent()
        expect(wrapper.exists()).toBeTruthy()
    })
    // We check the id of the props we gave while mounting.
    it("video id check", () => {
        const wrapper = mountComponent()
        expect(wrapper.vm.$props.video.id).toStrictEqual(1)
    })

   // We check if the watch component exists with the routing of the routerLink
    it("renders a child component via routing", async () => {
        const wrapper = mountComponent()
        const link = wrapper.findComponent(RouterLinkStub)
        expect(link.props().to.path).toEqual("/watch")
        expect(link.props().to.query.id).toEqual(1)
        expect(link.attributes().id).toEqual("my-router-link")
    })


})