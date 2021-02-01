const students=[
    { id : 21, name:'Manna'},
    {id : 31, name:'Omar sunny'},
    {id : 41, name:'Moyuri'},
    {id :71, name:'Deepjol'}
]
// let arr=[];
// for (let i=0;i<students.length;i++)
// {
//     let element=i.name;
//     arr.push(element);
    
    
// }
// console.log(arr);
const names=students.map(s=>s.name);
const ids=students.map(s=>s.id);
const bigger =students.find(s=>s.id>40);
console.log(bigger);
console.log(names);
console.log(ids);