Why is any labeled a "type safety hole," and why is unknown the safer choice for handling unpredictable data? Explain the concept of type narrowing.
Type safety in Typescript  `any` vs `unknown`
# Introduction:
Typescript er main kaj holo error dhora .any use korle typescript r  type check kore na ..tai any ke type safety hole bola hoy
# Why `any` unsafe
## With example:
```ts
let data:any="anything"
data.toUpperCase()
data.toFixed(2)
```
ei code e ekhane `any` deya te `toUpperCase()` and `toFixed(2)` kono ta te error dibe na typescript.but string e `toFixed()` method bolte kichu nei..pore eta runtime e error dekhabe .eta obossoi safer na.
##  Why `unknown` safer: 
With example :
```ts
let data:unknown="anything"
data.toUpperCase()
```
Unknown jane na j  data type ki.tai data type check na korar jonno error dibe
Correct :
```ts
let data:unknown="anything"
if(typeof data==="string"){
    console.log(data.toUpperCase())
}
```
## Type Narrowing:
General type theke specific type e niye asha  tai type narrowing
With example:
```ts
let data:unknown="anything"
if(typeof data==="string"){
    console.log(data.toUpperCase())
}
```
Ekhane `data` type first e unknown ache..jokhon stype check kora holo tokhon eta string e convert holo.ekhon string er jonno specific method niye kaj kora nclujabe
Conclusion:
`any` type safety maintain kore na.eta dangerious.on the other hand `unknown` safe karon eta type check na kora porjonto error dibe.Type narrowing use kore general data type theke specific type baniye kaj korbe
