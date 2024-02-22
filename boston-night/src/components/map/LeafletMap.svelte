<!-- https://khromov.se/using-leaflet-with-sveltekit/ -->
<!-- https://leaflet-extras.github.io/leaflet-providers/preview/ -->

<script>
    import { onMount, onDestroy, getContext } from 'svelte';
    import { browser } from '$app/environment';

    let mapElement;
    let map;

    const data = getContext("data");
    // console.log(data[0])

    onMount(async () => {
        if(browser) {
            const leaflet = await import('leaflet');

            map = leaflet.map(mapElement, { zoomControl: false }).setView([42.360451, -71.059672], 13);

            leaflet.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.{ext}', {
                minZoom: 13,
                maxZoom: 15,
                attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                ext:'png'
            }).addTo(map);

            var LeafIcon = L.Icon.extend({
                options: {
                    // shadowUrl: 'leaf-shadow.png',
                    iconSize:     [12, 12],
                    // shadowSize:   [50, 64],
                    // iconAnchor:   [22, 94],
                    shadowAnchor: [4, 62],
                    popupAnchor:  [0, -10]
                }
            });

            var earlyIcon = new LeafIcon({iconUrl: './src/svg/early.png'}),
                middleIcon = new LeafIcon({iconUrl: './src/svg/middle.png'}),
                lateIcon = new LeafIcon({iconUrl: './src/svg/late.png'});

            for (let i = 0; i <data.length; i++){
                if (data[i]['closingHourCompare']=='not pass'){
                    leaflet.marker([data[i]['lat'], data[i]['lon']], {icon: earlyIcon}).addTo(map)
                        .bindPopup(data[i]['name'])
                } else if (data[i]['closingHourCompare']=='equal'){
                    leaflet.marker([data[i]['lat'], data[i]['lon']], {icon: middleIcon}).addTo(map)
                        .bindPopup(data[i]['name'])                   
                } else if (data[i]['closingHourCompare']=='equal'){
                    leaflet.marker([data[i]['lat'], data[i]['lon']], {icon: lateIcon}).addTo(map)
                        .bindPopup(data[i]['name'])                     
                }
            }

            // Legend
            var legend = L.control({position: 'bottomright'});

            legend.onAdd = function (map) {

                var div = L.DomUtil.create('div', 'info legend'),
                    grades = [0, 10, 20, 50, 100, 200, 500, 1000],
                    labels = [];

                // loop through our density intervals and generate a label with a colored square for each interval
                for (var i = 0; i < grades.length; i++) {
                    div.innerHTML +=
                        '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
                        grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
                }

                return div;
            };

            legend.addTo(map);


            // leaflet.marker([42.36, -71.06]).addTo(map)
                // .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
                // .openPopup();
        }
    });

    onDestroy(async () => {
        if(map) {
            console.log('Unloading Leaflet map.');
            map.remove();
        }
    });
</script>


<main>
    <div bind:this={mapElement}></div>
</main>

<style>
    @import 'leaflet/dist/leaflet.css';
    main div {
        height: 800px;
        width: 70%;
        margin: 0 auto;
    }
</style>