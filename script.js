//store data
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

//declare variables and create table ::start
var div   = document.createElement( 'div' ),
    a     = document.createElement( 'a' ),
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
a.textContent = 'Add New Data';
a.href = '#';
a.className = 'add-btn';
div.className = 'data-wrapper';
table.className = 'data-table';
table.id = 'data-table';
thead.className = 't-head';
tbody.className = 't-body';

tr.appendChild( th1 );
tr.appendChild( th2 );
tr.appendChild( th3 );

thead.appendChild( tr );
table.appendChild( thead );
table.appendChild( tbody );
div.appendChild( table );
div.appendChild( a );
document.body.insertBefore(div, document.body.firstChild);
//declare variables and create table ::end

//to iterate the stored data in array
for ( var i = 0; i < person.length; i++ ) {
    var tr = document.createElement( 'tr' );
    var td1 = document.createElement( 'td' );
    var td2 = document.createElement( 'td' );
    var td3 = document.createElement( 'td' );
    tr.draggable = true;
    tr.className = 'draggable-item';
    td1.textContent = person[i].name;
    td2.textContent = person[i].tel;
    td3.textContent = '$' + ' ' + person[i].ammount;

    tr.appendChild( td1 );
    tr.appendChild( td2 );
    tr.appendChild( td3 );

    tbody.appendChild( tr );
}

var form = document.querySelector('#add-form');
var dataTable = document.querySelector('#data-table');
form.style.display = 'none';

//event lister | 
form.addEventListener('submit', function(e){
    var tr = document.createElement( 'tr' );
    var td1 = document.createElement( 'td' );
    var td2 = document.createElement( 'td' );
    var td3 = document.createElement( 'td' );
    tr.draggable = true;
    tr.className = 'draggable-item';
    td1.textContent = form['name-input'].value;
    td2.textContent = form['number-input'].value;
    td3.textContent = '$' + ' ' + form['ammount-input'].value;

    tr.appendChild( td1 );
    tr.appendChild( td2 );
    tr.appendChild( td3 );

    tbody.appendChild( tr );

    form.reset();

    e.preventDefault();

}, false);

a.addEventListener('click', function(e){
    form.style.display = 'block';

    e.preventDefault();
}, false);

dataTable.addEventListener('dragstart', function(e) {
    var target = e.target;
    
    e.dataTransfer.setData( 'text/plain', 'test' );
});