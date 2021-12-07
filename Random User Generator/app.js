const app = Vue.createApp({
    // template:'<h1>Hello {{firstName}}</h1>',
    data(){
        return{
            firstName:'john',
            lastName:'Doe',
            email:'john@gmail.com',
            gender:'male',
            picture:'https://randomuser.me/api/portraits/men/10.jpg'
        }
    },
    methods:{
      async getUser(){
        //   Promise<Response> fetch(input[, init]);用于发起获取资源的请求。
        // 它返回一个 promise，这个 promise 会在请求响应后被 resolve，并传回 Response 对象。
          const res = await fetch('https://randomuser.me/api')
        //   数组结果解构
        // 异步使函数返回承诺   await使函数等待承诺
          const {results} = await res.json() 
          console.log(results)
           this.firstName=results[0].name.first
           this.lastName=results[0].name.last
           this.email=results[0].email
           this.gender=results[0].gender
           this.picture=results[0].picture.large
       }
    }
})
app.mount('#app')