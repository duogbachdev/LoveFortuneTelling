$(document).ready(function () {
    $(".hopque img").click(function (e) { 
        var ketqua = Math.floor((Math.random() * 10)+1);
        console.log(ketqua);
        var outputP = document.getElementById("trave");
        var manhinh = screen.width;
        var hieuung = document.getElementById("animate");  
        if (manhinh>799) {
            console.log("May tinh");
            outputP.style.fontSize="3vw";
        } else {
            outputP.style.fontSize="5vw"; 
        }
        if (manhinh>799) {
            traketqua();
        }   else {
            setTimeout(traketqua,1500);
                                 
        }
        function traketqua(){
            if (ketqua ==1) {
            outputP.innerHTML="Ế"
            } else if (ketqua==2){
                outputP.innerHTML="Có NY nhưng 3 tháng ctay"
            } else if (ketqua==3){
                outputP.innerHTML="Có NY"
            } else if (ketqua==4){
                outputP.innerHTML="Ế dài hạn"
            } else if (ketqua==5){
                outputP.innerHTML="Ế nhưng kiếm dc nhiều tiền"
            } else if (ketqua==6){
                outputP.innerHTML="Có NY nhưng ko săn dc sale Shoppee"
            } else if (ketqua==7){
                outputP.innerHTML="Có NY (Cũ)"
            } else if (ketqua==8){
                outputP.innerHTML="Lấy chồng(vợ) không cần NY"
            } else if (ketqua==9){
                outputP.innerHTML="Độc thân vui tính"
            } else {
                outputP.innerHTML="Ế nửa năm"
            }
            hieuung.style.animation="none";
        }
        
        




    });
});