# useState tutorial
adding items into an array by using usestate and map method in react 

### default page layout
![default layout](/screenshots/default-layout.png)

the array is declared as a ```useState``` variable
```
const [testArray, setTestArray] = useState(["element1"]);
```

each time add items to array is clicked function ```addElement``` is called this running the code below

```
function addElement() {
        setTestArray((prevTestArray) => [
            ...prevTestArray,
            `element${testArray.length + 1}`,
        ]);
    }
```

similarly for clearing the array 
```
function clearArray(){
        setTestArray((prevTestArray)=>[
            "element1"
        ])
    }
```
