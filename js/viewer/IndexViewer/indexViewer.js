/**
 * CAROUSEL // WORD.IT LOGO //
 */

const carousels = document.querySelectorAll('.carousel');

    carousels.forEach(carousel => {

        carousel.scrollLeft = Math.floor(Math.random() * 2000) + 1000;

        let direction = Boolean(Math.random())

        
        setInterval(() => {

            if (carousel.scrollLeft == 0){
                direction = true
            }
            if (( carousel.scrollLeft + carousel.clientWidth ) == carousel.scrollWidth){
                direction = false
            }
    
            if(direction){
                carousel.scrollLeft += 1
            }else{
                carousel.scrollLeft -= 1
            }
               
        }, 15)     
    })

/**
 * Sign In //
 */


