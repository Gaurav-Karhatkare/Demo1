const dbConnect =require('./mongodb');

const update =async ()=>{
    let data =await dbConnect();
    // console.log(data);
    let result =await data.update(
        {first_name:'lovekush'},{$set:{first_name:'lovek'} }
    );
    console.log(result);
}

update();