/** Use JQUERY */

$(
    function(){
        toggleWhatWeDo('.product-management-icon', '.product-management-content');
        toggleWhatWeDo('.product-management-content', '.product-management-icon');
    }
)

function toggleWhatWeDo(class1, class2){
    $(class1).click(function(){
        $(this).addClass('d-none');
        $(class2).removeClass('d-none')
    })
}