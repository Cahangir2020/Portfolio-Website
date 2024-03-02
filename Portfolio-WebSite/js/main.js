ScrollOut({
	targets: 'h1, h2, div'
})

$('.slick').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false
});

var counters = document.querySelectorAll('.counter_number');
const speed = 2000;
counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;
		const inc = target/speed;
		if (count < target) {
			counter.innerText = Math.ceil(count + inc);
			setTimeout(updateCount, 100);
		}else{
			count.innerText = target;
		}

	}
	updateCount();
});

var elem = document.querySelector('.grid');
var msnry = new Masonry( elem, {
  itemSelector: '.grid-item',
});

var mobIcon = document.querySelector('.mob-menu_a');
var mobMenu = document.querySelector('.mob_menu_block');

mobIcon.addEventListener("click", function(){
	mobMenu.classList.toggle("active");
});
