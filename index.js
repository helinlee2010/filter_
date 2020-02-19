const filterInput = document.getElementById("filterInput");

const filter = () => {  
    const inputValue = filterInput.value.toUpperCase();
    
    const ul = document.getElementById('names');

    //Get list from ul
    const li = ul.querySelectorAll('li.collection-item');  


    li.forEach(item => {
        let a = item.getElementsByTagName("a")[0];

        //Shortened Version, but leave empty grid after filtering

        // a.textContent.toUpperCase().includes(inputValue) ? a.style.display = "" : a.style.display="none";
        // });


        // If matched
        if(a.textContent.toUpperCase().indexOf(inputValue)>-1){
            item.style.display="";
        }else{
            item.style.display="none";
        }
        
      });
}

//Add event listenter
filterInput.addEventListener("keyup", filter);
filterInput.addEventListener("change", filter);

