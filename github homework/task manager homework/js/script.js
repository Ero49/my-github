// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
const a = new Date();
const b = a.getMonth() + 1;
const c = a.getDate();
const d = a.getFullYear();
document.getElementById('date-block-one').innerHTML = c + '.' + "0" + b + '.' + d;
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
function deletedBlock(n){
    document.getElementById('fiveBlock' + n).style.display = 'none'
}
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
function editItem(h){
document.getElementById('name-block-one' + h).innerHTML = prompt('Edit Name');
document.getElementById('description-block-one' + h).innerHTML = prompt('Edit Description');
}
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
var count = 1
function newTask(){
    let k = prompt("Enter Name")
    let j = prompt("Enter Description")
    let f = document.createElement("div")
    f.setAttribute('id','fiveBlock' + count)
    f.setAttribute('class', 'fourBlock')
    let l = document.body.appendChild(f)
    let u = document.createElement('div')
    u.setAttribute('id','fiveBlock-one' + count)
    u.setAttribute('class',"fourBlock-one")
    let g = document.getElementById('fiveBlock' + count).appendChild(u)
    let o1 = document.createElement('div')
    o1.setAttribute('id','id-block-one' + count)
    o1.setAttribute('class','id-block')
    o1.innerHTML = '#2'
    document.getElementById('fiveBlock-one' + count).appendChild(o1)
    let o2 = document.createElement('div')
    o2.setAttribute('id','name-block-one' + count)
    o2.setAttribute('class','name-block')
    o2.innerHTML = k
    document.getElementById('fiveBlock-one' + count).appendChild(o2)
    let o3 = document.createElement('div')
    o3.setAttribute('id','description-block-one' +count)
    o3.setAttribute('class','description-block')
    o3.innerHTML = j
    document.getElementById('fiveBlock-one' + count).appendChild(o3)
    let o4 = document.createElement('div')
    o4.setAttribute('id','date-block-one' + count)
    o4.setAttribute('class','date-block')
    const a = new Date();
    const b = a.getMonth() + 1;
    const c = a.getDate();
    const d = a.getFullYear();
    o4.innerHTML = c + '.' + "0" + b + '.' + d;
    document.getElementById('fiveBlock-one' + count).appendChild(o4)
    let o5 = document.createElement('div')
    o5.setAttribute('id','edit-block-one' + count)
    o5.setAttribute('class','edit-block')
    o5.setAttribute('onclick','editItem('+count+')')
    o5.innerHTML = 'Edit'
    document.getElementById('fiveBlock-one' + count).appendChild(o5)
    let o6 = document.createElement('div')
    o6.setAttribute('id','delete-block-one' + count)
    o6.setAttribute('class','delete-block')
    o6.setAttribute('onclick','deletedBlock('+count+')')
    o6.innerHTML = 'Delete'
    document.getElementById('fiveBlock-one' + count).appendChild(o6)
    count += 1
}