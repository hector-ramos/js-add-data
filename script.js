//store data
var person = [
    {
        name: 'Annie',
        tel: '671-787-7262',
        amount: 20.01
    }, {
        name: 'Amie',
        tel: '671-686-1563',
        amount: 12.33
    }, {
        name: 'Angelo',
        tel: '671-689-1088',
        amount: 0
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
th3.textContent = 'Amount';
a.textContent = 'Add New Data';
a.href = 'javascript:void(0)';
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
div.appendChild( a );
div.appendChild( table );
document.body.insertBefore(div, document.body.firstChild);
//declare variables and create table ::end


var td1, td2, td3;

// create table
var createTable = function () {
    tr = document.createElement( 'tr' );
    td1 = document.createElement( 'td' );
    td2 = document.createElement( 'td' );
    td3 = document.createElement( 'td' );
    tr.draggable = true;
    tr.className = 'draggable-item';
};

var appendData = function () {
    tr.appendChild( td1 );
    tr.appendChild( td2 );
    tr.appendChild( td3 );
    tbody.appendChild( tr );
};



//to iterate the stored data in array
for ( var i = 0; i < person.length; i++ ) {
    createTable();

    td1.textContent = person[i].name;
    td2.textContent = person[i].tel;
    td3.textContent = '$' + ' ' + person[i].amount;

    appendData();
}

var form = document.querySelector('#add-form');
form.style.display = 'none';

// Drag and Drop ::start
var dnd = function () {
    var dragElement;

    function dragStart (e) {

        dragElement = this;

        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData( 'text/html', this.innerHTML );
    }

    function dragEnter(e) {
        // this / e.target is the current hover target.
        this.classList.add('over');
    }

    function dragLeave(e) {
        this.classList.remove('over');  // this / e.target is previous target element.
    }

    function dragOver(e) {
        if (e.preventDefault) {
            e.preventDefault(); // Necessary. Allows us to drop.
        }

        e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.
        
        return false;
    }

    function drop(e) {
        // this / e.target is current target element.

        if (e.stopPropagation) {
            e.stopPropagation(); // stops the browser from redirecting.
        }

        // Don't do anything if dropping the same column we're dragging.
        if (dragElement !== this) {
            // Set the source column's HTML to the HTML of the column we dropped on.
            dragElement.innerHTML = this.innerHTML;
            this.innerHTML = e.dataTransfer.getData('text/html');
        }

        return false;
    }

    function dragEnd(e) {
        // this/e.target is the source node.

        [].forEach.call(dataTable, function (tbl) {
            tbl.classList.remove('over');
        });
    }
    

    var dataTable = document.querySelectorAll('#data-table .draggable-item');
        [].forEach.call(dataTable, function(tbl) {
            tbl.addEventListener('dragstart', dragStart, false);
            tbl.addEventListener('dragenter', dragEnter, false);
            tbl.addEventListener('dragleave', dragLeave, false);
            tbl.addEventListener('dragover', dragOver, false);
            tbl.addEventListener('drop', drop, false);
            tbl.addEventListener('dragend', dragEnd, false);
    });
}

dnd();

//event lister | Add Data
form.addEventListener('submit', function(e){

    createTable();

    td1.textContent = form['name-input'].value;
    td2.textContent = form['number-input'].value;
    td3.textContent = '$' + ' ' + form['amount-input'].value;

    if ( form['amount-input'].value !== NaN ) {
        alert( "Amount is Not Valid!" );
    } else {
        appendData();
        dnd();
    }

    // form.reset();

    e.preventDefault();

}, false);

var addbtn = document.querySelector('.add-btn');
var closebtn = document.querySelector('.close-btn');

addbtn.addEventListener('click', function(e){
    form.style.display = 'block';
}, false);

closebtn.addEventListener('click', function(e){
    form.style.display = 'none';
}, false);


// console.log(parseFloat("3.14"));
// console.log( addbtn );
// console.log( closebtn );