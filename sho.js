function sh()
{
    window.location.href="sh1.html";
}

sh1()
{
    document.querySelectorAll('.size-box').forEach(box =>{
        box.addEventListener('click',function(){
            this.classList.add('selected')
        })
    }
}