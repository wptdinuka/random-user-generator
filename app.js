const app = Vue.createApp({
    data() {
        return {
          firstName: 'John',
          lastName: 'Doe',
          email: 'john@gmail.com',
          dob:'21/12/2021',
          city:'Berlin',
          nat:'BE',
          gender: 'male',
          picture: 'https://randomuser.me/api/portraits/men/10.jpg',
        }
      },
      methods: {
        async getUser() {
          const res = await fetch('https://randomuser.me/api')
          const { results } = await res.json()
    
           console.log(results)
    
          this.firstName = results[0].name.first
          this.lastName = results[0].name.last
          this.email = results[0].email
          this.dob = results[0].dob.date
          this.city = results[0].location.city
          this.nat = results[0].nat
          this.gender = results[0].gender
          this.picture = results[0].picture.large
        },
      },
})

app.mount('#app')