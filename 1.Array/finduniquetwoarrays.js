var a=[1,2,3,4,2,3,6,7,8,5,6]
b=[1,4,6,7]


//sorting the filtered array and then storing in set
var c=[... new Set(a.filter((x,i)=>b.indexOf(x)===-1).sort())]
var d=new Set(a.filter((x,i)=>b.indexOf(x)===-1).sort())

//creating an array from set and the sorting
var e=Array.from(new Set(a.filter((x,i)=>b.indexOf(x)===-1))).sort()
var g=[... new Set(a.filter((x,i)=>b.indexOf(x)===-1))].sort()

// var e=a.filter((x,i)=>{return x>1})

//sorting a set using userdefined function
var f=sortSet(new Set(a.filter((x,i)=>b.indexOf(x)===-1)))
function sortSet(set)
{
    var entries=[]
    for(a of set){
        entries.push(a)
    }
    set.clear()

    for(b of entries.sort())
    {
        set.add(b)
    }
    return set
}


console.log("c:",c)
console.log("d:",d)
console.log("e:",e)
console.log("g:",g)
console.log("f:",f)