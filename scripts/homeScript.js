const bookNow_btn = document.getElementById('bookNow_btn');
bookNow_btn.addEventListener('click', (e)=>{
    e.preventDefault();
    window.location.href = '/services';
})