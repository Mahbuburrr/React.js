import React from "react";

const users=[
    {
        fullName:"Mahbubur Rahman",
        age:22,
        phones:[
            {home:"01609558069"},
            {office:"01518701661"},
        ]
    },

    {
        fullName:"Mim Khatun",
        age:18,
        phones:[
            {home:"01609558069"},
            {office:"01518701661"},
        ]
    }
]

const NestedList=() =>{
   

    return(
        <div>
            <h1>Nested Lists</h1>
            {

               users.map((user,index)=> <article key={index}>

                <h3>fullName:{user.fullName}</h3>
                <p>Age:{user.age}</p>

                {

                    user.phones.map((phone,index)=>
                    <div key={index}>

                        <p>Home phone:{phone.home} </p>
                        <p>Office phone:{phone.office} </p>
                    </div>
                    )
                }
               </article>) 

            }

        </div>
    );
    


}

export default NestedList