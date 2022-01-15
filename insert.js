const dbConnect = require('./mongodb');

const insert=async ()=>{
    const db =await dbConnect();
    const result =await db.insert(
      [
        {
            first_name:'rahul',
            last_name:'mahjan',
            email:'rahul12@gmail.com'
        },
        {
            first_name:'harshit',
            last_name:'sharma',
            email:'harshit21@gmail.com'
        },
        {
            first_name:'love',
            last_name:'dhurwey',
            email:'love22@gmail.com'
        }
      ]
      );
        console.log(result)
}

insert();