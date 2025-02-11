// Button Status
const buttonStatus = document.querySelectorAll("[button-status]");
// console.log(buttonStatus);

if(buttonStatus.length > 0){
    let url = new URL(window.location.href); 
    buttonStatus.forEach(button =>{
        // console.log(button);
        button.addEventListener("click", () =>{
            const status = button.getAttribute("button-status");
            // console.log(status);
            if(status){
                url.searchParams.set("status",status);
            }else{
                url.searchParams.delete("status");
            }
            // console.log(url.href);
            window.location.href = url.href;
        });
    });
}
// End button Status 