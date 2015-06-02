var person = [
    {
        name: 'Annie',
        tel: '671-787-7262',
        ammount: 20.01
    }, {
        name: 'Amie',
        tel: '671-686-1563',
        ammount: 12.33
    }, {
        name: 'Angelo',
        tel: '671-689-1088',
        ammount: 0
    }
];

var div   = document.createElement( 'div' ),
    p     = document.createElement( 'p' ),
    table = document.createElement( 'table' ),
    thead = document.createElement( 'thead' ),
    tbody = document.createElement( 'tbody' ),
    tr    = document.createElement( 'tr' ),
    th1   = document.createElement( 'th' ),
    th2   = document.createElement( 'th' ),
    th3   = document.createElement( 'th' );



th1.textContent = 'Name';
th2.textContent = 'Contact Number';
th3.textContent = 'Ammount';
p.textContent = 'Add'
div.className = 'data-wrapper';
table.className = 'data-table';
thead.className = 't-head';
tbody.className = 't-body';

tr.appendChild( th1 );
tr.appendChild( th2 );
tr.appendChild( th3 );

thead.appendChild( tr );
table.appendChild( thead );
table.appendChild( tbody );
div.appendChild( table );
div.appendChild( p );
document.body.insertBefore(div, document.body.firstChild);


// p.addEventListener('click', function(e){
//     var target = e.target;
//     if (target.nodeName.toLowerCase() === 'p'){
//         form.removeClass('.hide');
//     }
// });

for ( var i = 0; i < person.length; i++ ) {
    var tr = document.createElement( 'tr' );
    var td1 = document.createElement( 'td' );
    var td2 = document.createElement( 'td' );
    var td3 = document.createElement( 'td' );
    td1.textContent = person[i].name;
    td2.textContent = person[i].tel;
    td3.textContent = '$' + ' ' + person[i].ammount;

    // console.log( td1.textContent );
    // console.log( td2.textContent );
    // console.log( td3.textContent );

    tr.appendChild( td1 );
    tr.appendChild( td2 );
    tr.appendChild( td3 );

    tbody.appendChild( tr );
}

console.log( form );