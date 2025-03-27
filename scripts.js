setTimeout(function() {
    document.querySelector('header h1').textContent = "Jember, Kota yang Memukau!";
}, 5000);

document.querySelector('footer').addEventListener('click', function() {
    alert('Terima kasih telah mengunjungi Website Jember!');
});
