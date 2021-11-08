function initTabNav() { //pra linkar a foto com o texto
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section'); 
    tabContent[0].classList.add('ativo');

    if(tabMenu.length && tabContent.length) {
        function activeTab(index){
            tabContent.forEach((section) => {
             section.classList.remove('ativo');
        });
        tabContent[index].classList.add('ativo');
    }
    
    tabMenu.forEach((itemMenu, index) => {
        itemMenu.addEventListener('click', function(){
            activeTab(index);
        });
    })
}
}
initTabNav();

function initAccordion(){ //pra abrir as respostas do faq
    const accordionList = document.querySelectorAll('.js-accordion dt');
    const activeClass = 'ativo';

    if(accordionList.length){
        accordionList[0].classList.add(activeClass);
        accordionList[0].nextElementSibling.classList.add(activeClass);

        function activeAccordion(){
            this.classList.toggle(activeClass);
            this.nextElementSibling.classList.toggle(activeClass);
        }

        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        })
    }   
}
initAccordion();



function initScrollSuave(){ //pra rolar a pagina ate o link selecionado
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

    function scrollToSection(event) {
        event.preventDefault(); //evitar que o link va ate a pagina clicada
        const href = event.currentTarget.getAttribute('href'); //quando clica no link pega o href
        const section = document.querySelector(href); //seleciona o href clicado
        //const topo = section.offsetTop;

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
        // window.scrollTo({
        //     top: topo,
        //     behavior: 'smooth'
        // })
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    })
}
initScrollSuave();

const sections = document.querySelectorAll('.js-scroll');

function initAnimacaoScroll() { //pra animar ao longo da barra de rolagem
    if (sections.length) {
        const windowMetade = window.innerHeight * 0.6;
    
        function animaScroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - windowMetade) < 0;
                if(isSectionVisible) {
                section.classList.add('ativo');
                }else {
                section.classList.remove('ativo');
                };
            })
        }
        animaScroll()
        window.addEventListener('scroll', animaScroll);
    }
}
initAnimacaoScroll();


