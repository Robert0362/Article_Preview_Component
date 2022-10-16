const shareIcon = document.getElementById('share');
const shareDiv = document.getElementById('socialDiv');
const disappear = document.getElementById('disappear');
const info = document.getElementById('info');
const mediaQuery = window.matchMedia('(max-width: 1000px)');

shareIcon.addEventListener('mouseover', function(){
 
});


//Function
function handleSizeChange(e) {
    if (e.matches) {
        shareDiv.addEventListener('mouseenter', function(){
            disappear.style.display = "block";
            info.style.display ='none';
        });
        shareDiv.addEventListener('mouseleave', function(){
            disappear.style.display = "none";
            info.style.display ='grid';
        });
        console.log(mediaQuery);
    }else{
        shareIcon.addEventListener('mouseenter', function(){
            
        });
        console.log(mediaQuery);
        
    }
}

mediaQuery.addEventListener('change', handleSizeChange)

handleSizeChange(mediaQuery)


