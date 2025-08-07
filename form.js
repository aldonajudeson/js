let heading=document.getElementById("abcd");
heading.addEventListener('click',()=>{console.log("add event listener");
})

function a(e)
{
    e.preventDefault()
    console.log(e.target.value);
}

localStorage.setItem('admin',123)