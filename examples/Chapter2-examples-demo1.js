function makeDemo1() {                                         //<1>
    d3.tsv( "Chapter2-examples-simple-demo1.tsv" )                            //<2>
        .then( function( data ) {                              //<3> <4>
            d3.select( "svg" )                                 //<5>
                .selectAll( "circle" )                         //<6> create a place holder
                .data( data )                                  //<7> associate with individual data point but there aren't any circle to return
                .enter()                                       //<8> method to access to surplus data points that could not matched with DOM
                .append( "circle" )                            //<9>
                .attr( "r", 10 ).attr( "fill", "red" )         //<10> fixed attribute
                .attr( "cx", function(d) { return d["x"] } )   //<11> supply with assessor functions
                .attr( "cy", function(d) { return d["y"] } );  // y axis run from top to bottom  
        } );
}


