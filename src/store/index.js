import { createStore } from 'vuex'
import axios from 'axios'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

const apiURL ='https://vault-t79d.onrender.com/'
export default createStore({
  state: {
    data: null,
    info:null
  },
  getters: {
  },
  mutations: {
    setData(state, values){
      state.data =  values
    },
    setInfo(state, values){
      state.info =  values
    }
  },
  actions: {
    async fetchData(context){
      try{
        const res =  await axios.get(`${apiURL}/data`)
          const {results, msg} = res.data
          if(results) {
            context.commit('setData', results)
          } else {
            toast.error(`${msg}`, {
              autoClose: 2000,
              position: toast.POSITION.TOP_CENTER
            })
          }
      } catch(e){
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.TOP_CENTER
        })

      }
      
  },
  async fetchInfo(context, id){
    try{
      const res = await axios.get(`${apiURL}data/${id}`)
      const { results, msg } = await res.data
      if (results){
        context.commit('setInfo', results)
      } else{
        toast.error(`${msg}`, {
          autoClose: 3000,
          position: toast.POSITION.TOP_CENTER
        })
      }
    }catch(e){
      toast.error(`${e.message}`, {
        autoClose: 3000,
        position: toast.POSITION.TOP_CENTER
      })
    }
  },
  async deleteData(context, id){
    try{
      const {msg} = await (await axios.delete(`${apiURL}data/${id}`)).data
      if(msg){
        context.dispatch('fetchData')
        toast.success(`${msg}`,{
          theme: 'dark',
          autoClose: 3000,
          position: toast.POSITION.TOP_CENTER
        })
      }
    } catch(e){
      toast.error(`${e.message}`,{
        autoClose: 3000,
        position: toast.POSITION.TOP_CENTER
      })
    }
  },
  async addData(context, payload){
    try{
      const {msg} = await (await axios.post(`${apiURL}data/add`, payload)).data
      if(msg){
        context.dispatch('fetchData')
        toast.success(`${msg}`,{
          theme: 'dark',
          autoClose:3000,
          position: toast.POSITION.TOP_CENTER
        })
      }
    }catch(e){
      toast.error(`${e.message}`, {
        autoClose: 2000,
        position: toast.POSITION.TOP_CENTER
      })
    }
  },
  async editData(context, payload){
    try{
      const {msg} = await (await axios.patch(`${apiURL}data/${payload.id}`, payload.cred)).data
      if (msg) {
        context.dispatch('fetchData')
        toast.success(`${msg}`, {
          autoClose: 3000,
          position: toast.POSITION.TOP_CENTER
        })
      }
    } catch(e){
      toast.error(`${e.message}`, {
        autoClose: 3000,
        position: toast.POSITION.TOP_CENTER
      })
    }
  }
  },
  modules: {
  }
})