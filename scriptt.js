function iniciarMap(){
    var coord = {lat:-19.3163876,lng: -98.2237535};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}
