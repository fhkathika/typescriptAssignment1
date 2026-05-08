How do Generics allow you to build reusable components and functions that stay strictly typed regardless of the data structures passed in?
=> Generic In Typescript
Introduction:
 Generic er Concept holo eki function or class or component different type er data niye kaj korte pare and type safety o think thake
Example Without Generics:
Nicher ei function e jekono type data use kora jabe
Example:
function getMyData(data:any){
return data
}
Ei code e any use koray type safety maintain hoy ni and  vhul method use korle o typescript e error generate hobe na
Example With Generics:
Function getMyData<T>( data:T):T{
return data
}
Usage:
getMyData<string>(“programming hero”)
getMyData<number>(25)
ei function e T holo placeholder,typescript automatic bujbe kon type data return hobe
Advantages:
•	eta reusable,eki function e different type er jonno kaj kore
•	eta strickly typed ,mane vul type use korle error dekhay
•	array,number,object sob gular jonno kaj korbe
Conclusition:So generics typescript e reusable , strictly typed hoyay eta code k flexable,maintainable,scalable kore







