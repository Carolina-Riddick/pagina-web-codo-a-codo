/*Funcion Maps*/
 
function iniciarMaps() {
    var coord = {lat:-34.597559 , lng:-58.3909937};
    var map = new google.maps.Map(document.getElementById("maps"),{
        zoom: 15,
        center: coord
    });
    var marker = new google.maps.Marker({
        position : coord,
        map : map
    });
}