var siteName = document.getElementById('siteName');
var siteURL = document.getElementById('siteURL');
var bookMarks =[];



if (localStorage.sites != null){
    bookMarks = JSON.parse(localStorage.sites);
    showData();
}
    else {
    var bookMarks = [];
}

submit.onclick = function(){
    var newBookMark = {
        name : siteName.value,
        url : siteURL.value,
    }
    if(newBookMark.name == '' || newBookMark.url == ''){
      document.getElementById('nRequired').classList.remove('d-none');
      document.getElementById('uRequired').classList.remove('d-none');
      
    } else if ( newBookMark.url == '') {
        document.getElementById('uRequired').classList.remove('d-none');
    } else if (newBookMark.name == '' ) {
      document.getElementById('nRequired').classList.remove('d-none');
      
    }
    else {
        document.getElementById('nRequired').classList.add('d-none')
        document.getElementById('uRequired').classList.add('d-none');
        bookMarks.push(newBookMark);
        localStorage.setItem('sites',JSON.stringify(bookMarks));
    
        showData()
        DataClear()
    }
    
}

//Show data
function showData(){
    var table = '';
    var x = JSON.parse(localStorage.sites);
    for (var i=0 ; i< bookMarks.length ; i++){
        table +=`
        <tr>
            <td>${i+1}</td>
            <td>${x[i].name}</td>
            <td><a class="btn btn-success" href="https://${x[i].url}" target="_blank" >VISIT</a></td>
            <td><button onclick="deleteData(${i})" id="delete" class=" btn btn-danger delete-btn">Delete</button></td>
        </tr> `
    }
     document.getElementById('tbody').innerHTML=table;
}

// Clear data
function DataClear(){
    siteName.value = '';
    siteURL.value ='';
}

//delete
function deleteData (i){
    bookMarks.splice(i,1);
    localStorage.sites = JSON.stringify(bookMarks);
    showData()
}
