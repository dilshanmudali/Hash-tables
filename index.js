// let user = {
//   age: 26,
//   name: 'Mudali',
//   magic: true,
//   scream: function() {
//     console.log('ahhhhhh');
//   }
// }


// user.spell = 'abra kadabra'//O(1)
// console.log(user)
// user.scream()//O(1)

// class HashTable {
//   constructor(size){
//     this.data = new Array(size)

//   }

//   _hash(key) {
//     let hash = 0;
//     for(let i=0; i<key.length;i++){
//       hash = (hash + key.charCodeAt(i) + i) %
//       this.data.length
//     }
//     return hash
//   }
// }


// const myHashTable = new HashTable(50);
// // myHashTable.set('grapes',10000)
// // myHashTable.get('grapes')


// reccuring character

// function recurNum(arr){
//   for(let i=0;i<arr.length;i++){
//     for(let j=i+1 ;j<arr.length;j++){
//       if (arr[i] === arr[j]){
//         return arr[i]
//       }
//     }
//   }
//   return undefined;
// } //O(n^2)


// function recurNum(arr){
//   //init hash map to store values
//   let hashMap = {}
//   for(let i=0;i<arr.length;i++){
//     //if key in hashmap exists, return it
//     if(!hashMap[arr[i]]){
//       hashMap[arr[i]] = true
//     }
//     //else add it into the hashmap
//     else{
//       return arr[i]
//     }
//   //return undefined if value is not recurring
//   }
//   return undefined
// }//O(n)

// console.log(recurNum([2,5,1,2,3,5,3,2])) //2
// console.log(recurNum([1,0,3,3,1])) //1
// console.log(recurNum([2,3,4,5])) //undefined
