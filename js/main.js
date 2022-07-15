var SiteName = document.getElementById("SiteNameInput");
var SiteUrl = document.getElementById("SiteUrlInput");
var TableRow= document.getElementById("t-row");


var SiteList;

(function(){
 
  if (localStorage.getItem("data") == null) {
    SiteList=[];
  } else {
    SiteList = JSON.parse(localStorage.getItem("data"));
    DisplaySite(SiteList);
  }
})();
function AddSite(){

  var site = {
    code:SiteName.value,
    url:SiteUrl.value,

  };

  SiteList.push(site);
  localStorage.setItem("data", JSON.stringify(SiteList));
  DisplaySite(SiteList);
  ClearList();
}



function DisplaySite(arrlist){
var box=``;
for (var i=0;i< arrlist.length;i++)
{
  box+=`<tr class="text-white">
  <td>${i+1}</td>
  <td>${arrlist[i].code}</td>
  <td>${arrlist[i].url}</td>
  <td><a href=https://${arrlist[i].url} target="_blank" class=" btn btn-small btn-success" >Visite</a></td>
  <td><button onclick=DeleteList(${i}) class=" btn btn-small btn-danger">Delete</button></td>
  
  
  </tr>`;
}

TableRow.innerHTML=box;

}


function ClearList(){
SiteName.value="";
SiteUrl.value="";

}


function DeleteList(index)
{

  SiteList.splice(index,1);
  localStorage.setItem("data", JSON.stringify(SiteList));
  DisplaySite(SiteList);
}


