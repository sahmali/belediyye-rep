//NOTIFICATIONS OWL START
$('.not-carousel .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    mouseDrag:true,
    dots:false,
    items:1,
    singleItem:true,
    margin:50,
})


//NOTIFICATIONS OWL END

//MAIN SLIDER OWL START
$('.main-carousel .owl-carousel').owlCarousel({
    stagePadding: 0,
    loop:true,
    margin:10,
    nav:true,
    items: 1,
    singleItem:true,
})




/*SPONSOR OWL*/

$('#events .owl-carousel').owlCarousel({
    nav:true,
    loop:true,
    autoWidth:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})



/*-------------------NAV MENU-----------------------*/
var hamburger= document.querySelector('.hamburger');
var navbar=document.querySelector('.navbar');
console.log(hamburger);

hamburger.addEventListener('click',()=>{
    navbar.classList.toggle('open-nav');
});

/*--------------------Calendar -------------------------*/
$(function () {

    $('#myCalendar').calendar({
        months: ['OCAK', 'ŞUBAT', 'MART', 'NİSAN', 'MAYIS', 'HAZİRAN', 'TEMMUZ', 'AĞUSTOS', 'EYLÜL', 'EKİM', 'KASIM', 'ARALIK'],
        days: ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Pzr'],
        color: '#6fdc94'

    });


});