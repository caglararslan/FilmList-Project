function UI(){

}
UI.prototype.addFilmToUI=function(newFilm){
   /* <!-- <tr>
    <td><img src="" class="img-fluid img-thumbnail"></td>
    <td></td>
    <td></td>
    <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
  </tr> -->
  */
  const filmList=document.getElementById("films");
  
  filmList.innerHTML+=`
  
  <tr>
    <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
    <td>${newFilm.title}</td>
    <td>${newFilm.director}</td>
    <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
  </tr>
  
  
  
  `

}
UI.prototype.clearElements=function(element1, element2,element3){
    element1.value ="";
    element2.value ="";
    element3.value ="";
}

UI.prototype.displayMessages=function(message,type){
  const cardbody=document.querySelectorAll(".card-body")[0];
  //Alert Divini Oluşturma
  const div=document.createElement("div");
  div.className=`alert alert-${type}`;
  div.textContent=message;
  cardbody.appendChild(div);

  setTimeout(function(){
    div.remove();
  },2000)
}