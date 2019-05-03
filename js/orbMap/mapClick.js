/* start `mapClick` function */
/* this runs when the map is clicked */
export function mapClick(properties) {

    // the id for the node
    var ids = properties.nodes;
    if (ids.length >= 1 ){
        if(properties.event.tapCount == 2){
            if(ids[0].length == 3){
                //window.open(('https://sissy-university.com/class.html?classId=' + ids[0]), '_blank');
            } else {
                //alert("Majors can't be linked to right now");
            }
            console.log("If there was a API, I could send you to that page, but there is not a API, so I can't.");
        }
    }
}
/* end `mapClick` function */
