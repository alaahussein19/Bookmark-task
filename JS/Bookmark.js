var siteNameInput = document.getElementById('siteName');
var siteURLInput = document.getElementById('siteURL');

var bookitems=[];

if(localStorage.bookContainer != null){
    bookitems= JSON.parse(localStorage.bookContainer);
displayData();
}

// Add Book 
function submitBtn(){
    if( validationUrl() && siteNameInput.value !="" ){
        var book={
            Name: siteNameInput.value,
            url: siteURLInput.value  
        }
        bookitems.push(book);
        displayData()
        localStorage.setItem('bookContainer', JSON.stringify(bookitems))
        clearData()
    }
   else{
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${siteNameInput.value ==""?"Please Enter Site Name":""} ${validationUrl()== false?"Please Enter Valid URL " :""}` ,
      });
   }
}
// display Data 
function displayData(){
     var cartona=``;
    for(var i=0 ; i<bookitems.length   ;i++){
        cartona+=`
        <tr>
            <td>${[i]}</td>
            <td>${bookitems[i].Name}</td>
            <td><a class="btn btn-success" href="${bookitems[i].url}">Visit</a></td>
            <td><button onclick='deleteBook(${i})' class="btn btn-danger">Delete</button></td>
        </tr>
        `   
        }
        document.getElementById('tableData').innerHTML= cartona;
}
// Clear Inputs
function clearData(){
    siteNameInput.value = null;
    siteURLInput.value = null;
}
// Delete Book
function deleteBook(indexItem){
    bookitems.splice(indexItem , 1 )
    localStorage.setItem('bookContainer' , JSON.stringify(bookitems))
    displayData();
    }
// URL Validation
function validationUrl(){
    var pattern = /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/gi;
    return pattern.test(siteURLInput.value)
}
// Thanks For Your Effort
