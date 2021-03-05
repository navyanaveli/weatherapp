import {createLocalVue, shallowMount} from "@vue/test-utils";
import WeatherDetails from "/Users/navyanaveli/Documents/weatherapp/src/views/javascriptfile/weatherdetails";
import axios from "axios"


jest.mock("axios")


const localvue =createLocalVue()
describe("src/views/javascriptfile/weatherdetails.js", () => {

    let response;
    let wrapper;

    beforeEach(() => {
        response={
            data:{}
        }

        axios.request = jest.fn().mockImplementation(()=> {
            return Promise.resolve(response)
        })

        wrapper = shallowMount(WeatherDetails,{
            localvue,
            mocks: {
                $route:{params: {"cityname": "patna"}},
            }
        })

    })


    it('current city name is set properly',  () => {

        expect(wrapper.vm.$data.city).toEqual("patna")

    })

    it("created: weatherdetails axios check success", ()=>{
        expect(axios.request).toHaveBeenCalled()
    })

    it("created: weatherdetails axios check failure", () =>{

        global.alert = jest.fn()
        axios.request = jest.fn().mockImplementation(()=> {
            return Promise.reject()
        })

        let wrapper2 = shallowMount(WeatherDetails,{
            localvue,
            mocks: {
                $route:{params: {"cityname": "patna"}},
                $router: {
                    replace: jest.fn()
                }
            }
        })
        // const routerPushSpy = jest.spyOn(wrapper2.vm.$router,"replace")
        expect(axios.request).toHaveBeenCalled()
        // expect(routerPushSpy).toHaveBeenCalledWith({name: 'Search'})
    })
})

