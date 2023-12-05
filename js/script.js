
    let btn = document.getElementsByClassName('btn');

    var i;

    for(i = 0; i <= btn.length; i++)
    {
        if(btn[i]){
            btn[i].addEventListener("click", function(){
                this.classList.toggle('active');
                
                let panel = this.nextElementSibling;
                if(panel.style.maxHeight){
                    // panel.style.display = "none";
                    panel.style.maxHeight = null;
                } else {
                    // panel.style.display = "block";
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            })
        }
    }
