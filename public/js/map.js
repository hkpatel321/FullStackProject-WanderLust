
            mapboxgl.accessToken =mapToken ;
              const map = new mapboxgl.Map({
                  container: 'map', // container ID
                  center: coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
                  zoom: 9 // starting zoom
              });

              const marker1 = new mapboxgl.Marker({color:'red'})
              .setLngLat(coordinates)//Listing.geometry coordinates
              // .setPopUp(new mapboxgl.Popup({offset: 25})
              // .setHTML(`<h4>${location}</h4><p>Exact location provided after booking!</p>`))
              .addTo(map);