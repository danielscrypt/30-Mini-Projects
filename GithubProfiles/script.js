const APIURL = 'https://api.github.com/users/'

const form = document.querySelector('#form')
const search = document.querySelector('#search')
const main = document.querySelector('main')




async function getUser(username) {
    try {
        const {data} = await axios.get(APIURL + username)
        createProfile(data)
    } catch (err) {
        if (err.response.status == 404) {
            errorCard('NO FUCKIN PROFILE !')
        }
    }
}

form.addEventListener('submit' , (e) => {
    e.preventDefault() 

    const user = search.value ; 

    if (user) {
        getUser(user)

        search.value = ''
    }
})

function createProfile(user) {
    const cardHtml = ` <div class="card">
       
    <div class="image">
        <img src="${user.avatar_url}" alt="">
    </div>
     <div class="user-info">
       <h2> ${user.name} </h2>
       <p> ${user.bio}</p>
    
            <ul>
                <li> ${user.followers} <strong>followers</strong></li>
                <li> ${user.following} <strong>following</strong></li>
                <li> ${user.public_repos} <strong>repos</strong></li>

            </ul>
            <div class="repos">
                

            </div>
        </div>
  </div>`

     main.innerHTML = cardHtml
}

function errorCard(msg) {
    const errorHtml = `
    <div class="card"> 
    <h1>${msg}</h1>
    </div>
    ` 
    main.innerHTML = errorHtml
}