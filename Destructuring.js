var me={
    name: "omar faruq",
    weight: "65 kg",
    color: "black",
    home_destic: "pabna",
    study: "BAUET",
    age: "25 years",

    education: {
        degree: "BS.c",
        time: " 4 years"
    }
}

const { name ,age ,weight, education:{degree} }  = me

console.log( name, age, degree);