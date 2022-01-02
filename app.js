/** Use JQUERY */

$(
    function(){
        toggleWhatWeDo('.product-management-icon', '.product-management-content');
        toggleWhatWeDo('.product-management-content', '.product-management-icon');
        toggleWhatWeDo('.development-icon', '.development-content');
        toggleWhatWeDo('.development-content', '.development-icon');
        toggleWhatWeDo('.design-icon','.design-content');
        toggleWhatWeDo('.design-content', '.design-icon');


        /** Portfolio Hover Effect */
        let portfolioItems = $('.portfolio-items-container').children();
        portfolioItems.each(function(){
            $(this).hover(function mouseEnter(){
                let title = $(this).children()[1];
                $(title).removeClass('d-none').addClass('toggle-portfolio-title')
            }, function mouseLeave(){
                let title = $(this).children()[1]
                $(title).addClass('d-none')
            })
        });

        /** Form Validation */
        let form = $('form');
        let name = $('#name');
        let email = $('#email');
        let message = $('#message');
        
        form.submit(function(event){
            event.preventDefault();
            if(message.val().length === 0){
                alert('What Message do you have for us?')
            } else {
                alert(`Hey ${name.val()}, Your Message has been received, Thank you. `)
            }
            form[0].reset();
        })
    }
)

/** Toggle What we do Items */
function toggleWhatWeDo(class1, class2){
    $(class1).click(function(){
        $(this).addClass('d-none');
        $(class2).removeClass('d-none')
    })
}



