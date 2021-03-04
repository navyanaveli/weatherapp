import {createLocalVue, mount} from "@vue/test-utils";
import Vuex from "vuex";
import Router from 'vue-router'
import VueRouter from 'vue-router'
import SearchCity from "@/views/SearchCity";
import Dummy from "@/views/Dummy";

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(VueRouter)

describe("weather card", () => {

    let getters = {
        getfavoritelist: () => jest.fn()
    }

    let store = new Vuex.Store({
        getters
    })
    let router = new Router({ routes : [{
        path: '/WeatherDetails/:cityname',
        name: 'WeatherDetails',
        component: Dummy
    }]})
    let wrapper = mount(SearchCity, {localVue, store: store, router: router })

    it('should add city name to router',  () => {
        wrapper.vm.weathersearch("ranchi")

        localVue.nextTick(() => {
            expect(router.currentRoute.params.cityname).toBe("ranchi")
        })
    })

    it('should call getfavoritelist when mounted', function () {

    });
})