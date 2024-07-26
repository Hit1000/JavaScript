// array of marks of students  filter out marks >= 85 ans print index number with marks 

let marks = [78, 92, 84, 85, 73, 88, 90, 67, 85, 100];

marks.forEach((mark, index) => {
    if (mark >= 85) {
        console.log(`Index: ${index}, Mark: ${mark}`);
    }
});

// take a input a array of number from 1 to n and print arr[number]
let n=prompt("enter no of elements")
for(i=0;i<n;i++){
    arr[i]=prompt(`enter the no${i}`)
}
arr.forEach(element =>{
    console.log(element);
})

let output=arr.reduce((pre,curr)=>{
    return pre*curr;
})
console.log(output);