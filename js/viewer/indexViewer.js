const carousels = document.querySelectorAll('.carousel');

    carousels.forEach(carousel => {

        carousel.scrollLeft = Math.floor(Math.random() * 3000);

        let direction = Boolean(Math.random())

        
        setInterval(() => {

            if (carousel.scrollLeft == 0){
                direction = true
            }
            if (( carousel.scrollLeft + carousel.clientWidth ) == carousel.scrollWidth){
                direction = false
            }
    
            if(direction){
                carousel.scrollLeft += 2
            }else{
                carousel.scrollLeft -= 2
            }
          
               
        }, 20)     
    })

