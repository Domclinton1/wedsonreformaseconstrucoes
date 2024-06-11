function inicio(){
    var click = window.document.getElementById('inicio')
    window.location.href = '#hero'
}
function sobre() {
    var click = window.document.getElementById('sobre')
    window.location.href = '#sobre'
}
function services() {
    var click = window.document.getElementById('services')
    window.location.href = '#services'
}
function fotos(){
    window.document.getElementById('fotos')
    window.location.href = '#foto'
}
function localiza() {
    var click = window.document.getElementById('location')
    window.location.href = '#local'
}
function contato(){
    var click = window.document.getElementById('contato')
    window.location.href = '#contato'
}
function order() {
    var click = window.document.querySelectorAll('order')
    window.open("https://wa.me/5531988828183?text=Ola,%20quero%20fazer%20um%20orçamento%20sobre um projeto...")
}
function dev() {
    var click = window.document.querySelectorAll('dev')
    window.open("https://www.domlinksolucoesdigitais.com.br")
}
function call() {
    window.location.href = 'tel:+5531988828183';
}
function sendEmail() {
    window.location.href = 'mailto:wedsonreformaseconstrucoes@gmail.com';
}
function insta() {
    var click = window.document.querySelectorAll('insta')
}
function localize() {
    var click = window.document.querySelectorAll('localize')
    window.open("https://www.google.com/maps/dir//Av.+Virg%C3%ADlio+de+Melo+Franco,+479+-+Santa+Amelia,+Belo+Horizonte+-+MG,+31555-120/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0xa691b5297bfff3:0xc0e50836aebfc1d1?sa=X&ved=1t:707&ictx=111")
}

document.addEventListener("DOMContentLoaded", function() {
    const openModalButtons = document.querySelectorAll(".openModal");
    const modals = document.querySelectorAll(".modal");
    const closeButtons = document.querySelectorAll(".close");

    openModalButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            const modalId = button.getAttribute("data-modal-id");
            const modal = document.getElementById(modalId);
            modal.style.display = "block";
        });
    });

    closeButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            const modal = button.closest(".modal");
            modal.style.display = "none";
        });
    });

    window.addEventListener("click", function(event) {
        modals.forEach(function(modal) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const modals = document.querySelectorAll('.modal');
    const openModalButtons = document.querySelectorAll('.openModal');
    const closeModalButtons = document.querySelectorAll('.close');
    const prevButtons = document.querySelectorAll('#modal-prevBtn');
    const nextButtons = document.querySelectorAll('#modal-nextBtn');
    
    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-modal-id');
            document.getElementById(modalId).style.display = 'block';
        });
    });

    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.closest('.modal').style.display = 'none';
        });
    });

    prevButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalSlides = button.closest('.modal').querySelector('.modalSlides');
            const slides = modalSlides.querySelectorAll('.modalSlide');
            const totalSlides = slides.length;
            let activeIndex = Array.from(slides).findIndex(slide => slide.classList.contains('active'));

            slides[activeIndex].classList.remove('active');
            activeIndex = (activeIndex - 1 + totalSlides) % totalSlides;
            slides[activeIndex].classList.add('active');
            modalSlides.style.transform = `translateX(-${activeIndex * 100}%)`;
        });
    });

    nextButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalSlides = button.closest('.modal').querySelector('.modalSlides');
            const slides = modalSlides.querySelectorAll('.modalSlide');
            const totalSlides = slides.length;
            let activeIndex = Array.from(slides).findIndex(slide => slide.classList.contains('active'));

            slides[activeIndex].classList.remove('active');
            activeIndex = (activeIndex + 1) % totalSlides;
            slides[activeIndex].classList.add('active');
            modalSlides.style.transform = `translateX(-${activeIndex * 100}%)`;
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var slides = document.querySelectorAll('.coments li');
    var currentSlide = 0;
    
    function nextSlide() {
      slides[currentSlide].style.display = 'none'; // Oculta o slide atual
      currentSlide = (currentSlide + 1) % slides.length; // Atualiza o índice do próximo slide
      slides[currentSlide].style.display = 'block'; // Exibe o próximo slide
    }
    
    setInterval(nextSlide, 5000); // Altere o intervalo de troca de slide conforme necessário
  });


  function toggleMenu() {
    const menu = document.querySelector('.menuFilho');
    menu.classList.toggle('active');
}

let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    const menuPai = document.querySelector('.menuPai');
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // Scrolling down
        menuPai.style.top = "-100px";
    } else {
        // Scrolling up
        menuPai.style.top = "0";
    }
    lastScrollTop = scrollTop;
});

window.addEventListener('click', function(event) {
    const menu = document.querySelector('.menuFilho');
    const menuHamburguer = document.querySelector('.menuHamburguer');
    if (!menu.contains(event.target) && !menuHamburguer.contains(event.target)) {
        menu.classList.remove('active');
    }
});

// Função para fechar o menu quando a página é rolada
function closeMenuOnScroll() {
    var menu = document.getElementById('menuFilho');

    // Verifica se o menu está aberto
    if (menu.classList.contains('active')) {
        // Fecha o menu
        menu.classList.remove('active');
    }
}

// Adiciona um event listener para escutar por rolagens na página
window.addEventListener('scroll', closeMenuOnScroll);

    document.addEventListener('DOMContentLoaded', function () {
        const slides = document.querySelector('#slides');
        const slideArray = document.querySelectorAll('.slide');
        const prevBtn = document.querySelector('#prevBtn');
        const nextBtn = document.querySelector('#nextBtn');
        let currentIndex = 0;

        function showSlide(index) {
            const offset = -index * 100;
            slides.style.transform = `translateX(${offset}%)`;
        }

        prevBtn.addEventListener('click', function () {
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = slideArray.length - 1;
            }
            showSlide(currentIndex);
        });

        nextBtn.addEventListener('click', function () {
            if (currentIndex < slideArray.length - 1) {
                currentIndex++;
            } else {
                currentIndex = 0;
            }
            showSlide(currentIndex);
        });

        // Mostrar a primeira imagem inicialmente
        showSlide(currentIndex);
    });
