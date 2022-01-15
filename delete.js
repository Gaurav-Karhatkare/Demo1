const dbConnect = require('./mongodb')

const deleteData=async()=>{
   let data =await dbConnect();
//    console.log('delete')
let result =await data.deleteMany({first_name:'lovek'})
console.warn(result);
}

deleteData();