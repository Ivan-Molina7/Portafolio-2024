
const question = document.querySelectorAll('.faq__pregunta');
const answer = document.querySelectorAll('.faq__respuesta'); 
const icons = document.querySelectorAll('.faq__icon'); 

for(let i = 0; i < question.length; i++){

    question[i].addEventListener('click', () => {
        const isOpen = answer[i].classList.contains('faq__respuesta--abierta')

        answer.forEach(a => {
            a.classList.remove('faq__respuesta--abierta')
        });

     
        question.forEach(q => {
            q.style.backgroundImage = 'unset'
        })

        icons.forEach(i => {
            i.classList.remove('active')
        });


       if(!isOpen){
        icons[i].classList.toggle('active');
        answer[i].classList.toggle('faq__respuesta--abierta');
        question[i].style.backgroundImage = 'linear-gradient(to left, #036B2B80, #07282270)'
       }
     
       
    })

}