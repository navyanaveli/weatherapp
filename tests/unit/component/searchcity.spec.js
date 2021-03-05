import {createLocalVue, shallowMount} from "@vue/test-utils";
import Vuex from "vuex";
import SearchCity from "@/views/SearchCity";

const localVue = createLocalVue()
localVue.use(Vuex)

describe("weather card", () => {


    let getters = {
        getfavoritelist: () => jest.fn()
    }

    let store = new Vuex.Store({
        getters
    })
    let wrapper = shallowMount(SearchCity,
        {localVue, store: store, mocks:{$router:{push:jest.fn()}}}
        )

    it('should add city name to router',  () => {
        const pushweather = jest.spyOn(wrapper.vm.$router,"push")
        wrapper.vm.weathersearch("ranchi")

        localVue.nextTick(() => {
            expect(pushweather).toHaveBeenCalledWith({name: 'WeatherDetails', params: {"cityname": "ranchi"}})
        })
    })

})