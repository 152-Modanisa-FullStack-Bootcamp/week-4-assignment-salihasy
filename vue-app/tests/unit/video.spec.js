import App from '@/App.vue'
import {shallowMount, createLocalVue, mount} from '@vue/test-utils'
import VueRouter from 'vue-router'
import Video from "@/components/Video";

describe("Video.vue", () => {

    function mountComponent() {
        //const localVue = createLocalVue()
        //localVue.use(VueRouter)
        return shallowMount(Video, {
            propsData: {
                video: [{
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
                }]
            }
        })
    }

    it("video compenent should exists", () => {
        const wrapper = mountComponent()
        expect(wrapper.exists()).toBeTruthy()
    })

    it("video id check", () => {
        const wrapper = mountComponent()
        expect(wrapper.vm.$props.video[0].id).toStrictEqual(1)
    })

})