var form  =document.getElementById("usernameForm")

form.addEventListener('submit',function(e){

  e.preventDefault()
  var search=document.getElementById("username").value
  const apiUrl = "https://api.github.com/users/"+search

  var searchnospace=search.split(' ').join('')
  alert(searchnospace)
  fetch(apiUrl)
  .then((result)=> result.json())
  .then((data)=>{
    console.log(data)
    document.getElementById("imgcontent").innerHTML=`
    <a href="https://www.github.com/${searchnospace}">
    <img src="${data.avatar_url}" width="200px" height="200px" border: "10px dashed red"/></a>
    `
    document.getElementById("followers").innerHTML=`Followers:    ${data.followers}`
    document.getElementById("following").innerHTML=`Following:    ${data.following}`
    document.getElementById("Repositories").innerHTML=`
    <a href="https://www.github.com/${searchnospace}?tab=repositories">Repositories:   ${data.public_repos}</a>
    `



  })


})