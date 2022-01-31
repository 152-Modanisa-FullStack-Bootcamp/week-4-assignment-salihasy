import {mount, createLocalVue, shallowMount} from '@vue/test-utils'
import Vuex from 'vuex'
import API from "@/api";
import flushPromises from "flush-promises";
import Home from "@/views/Home";
import Video from "@/components/Video";

jest.mock("@/api")

describe("Home.vue",() => {

    // function for mount
    function mountComponent() {
        return shallowMount(Home, {
        })
    }

    // if the component is not found this will return false, and test will fail
    it("home component should exists", () => {
          const wrapper = mountComponent()
          expect(wrapper.exists()).toBeTruthy()
      })

    // if video component is not found this will return false, and test will fail
    it("video component should exists", () => {
        const wrapper = mountComponent()
        expect(wrapper.findComponent(Video)).toBeTruthy()
    })

      it("video count check", async () => {
          // this created for get videos
          const mockResponse = [
              {
                  "id": 1,
                  "name": "Tesettür Dünyası",
                  "description": "Desenli Mevlana Elbise TSD4414 Turuncu",
                  "image": "https://fns.modanisa.com/r/pro2/2021/11/01/n-desenli-mevlana-elbise-tsd4414-turuncu-8067476-7.jpg"
              },
              {
                  "id": 2,
                  "name": "Mervin Şal",
                  "description": "Paşmina Desenli Şal - Karışık Renkli - Mervin Şal",
                  "image": "https://fns.modanisa.com/r/pro2/2018/07/25/n-pasmina-desenli-sal--karisik-renkli--mervin-sal-516070-516070-2.jpg"
              },
              {
                  "id": 3,
                  "name": "Şalevi",
                  "description": "İnci Şal - Siyah - Şal Evi",
                  "image": "https://fns.modanisa.com/r/pro2/2020/10/05/n-inci-sal--siyah--sal-evi-1809885-1809885-1.jpg"
              }
          ]

          // We give the mockResponse that we created to the resolve value of getVideoList of the API.
          API.getVideoList.mockResolvedValue(mockResponse)
          const wrapper = mountComponent()
          await flushPromises()
          // Since we are mocking it, wrapper.vm.$data.videos.length value will be 3
          expect(wrapper.vm.$data.videos.length).toEqual(mockResponse.length)
      })

})