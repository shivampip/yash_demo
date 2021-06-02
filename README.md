# yash_demo

Yash

## TODO:

-   Create blank react app
-   App
    -   Header
    -   Add New Blog Button
    -   BlogPosts (array)
        -   LikeButton (working) (like count)
    -   Footer

### API

-   URL (https://google.com)
-   Request Type (GET, POST, PUT)
-   Request Body (parameter sending to server) (optional)

-   Response (jo server send to client)
-   JSON {"frist_name": "Yash", "last_name": "Sahu"}

### useEffect Hook

-   Heavy operation in background

```
useEffect(anonymous callback function, [])
```

-   Example

```
useEffect(() => {
    return num1 + num2;
}, [])
```

### Ternary

```
condirtion? <true case>: <false case>
```

### Binary

```
condition && <Component/>
```

### API Call from React

-   Fetch
-   Axios (recommand)

## Github

-   Remote- Github Server
-   Local- Apna computer

*   Clone (copy) from Remote to Local

```
git clone <github-url>
```

-   Local to Remote (Push)

```
git add .
git commit -m "apna message"
git push origin main
```

-   Remote to Local (Pull)

```
git pull origin main
```

## Linux

-   ls
-   cd <folder>
-   cd ..
-   . => current dir
-   .. => parent dir
-   ../.. => grand parent
-   ./child => child

## React

-   develpoed by FB
-   Open source
-   Virtual DOM

### JSX

-   Javascript XML
-   HTML in JS

### JS in HTML

```
<div>{JS Code}</div>
```

#### Create New app

```
npx create-react-app ydemo
```

### Arrow function

```
const add = (num1, num2) => {
    return num1 + num2;
};
```

## Communication

### Parent to Child

-   Props

```
const add = ({first_name, city}) => {
    return <p>I am {first_name} I live at {city}</p>;
};
```

# Styling

-   Inline Style

```
<div style={{
    color: "yellow",
    backgrondColor: "red"
}}>sdfsdfdsfsdf</div>
```

-   With CSS File

```
class => className
```

```
import "./FileName.css"
```

### Callback Function

-   Anonymous Callback Function (Arrow Function)

```
(num1, num2) => {
    return num1 + num2;
};
```

## React Hooks

-   useState

```
const [data, setData]= useState("user")

//Galat
data= "Naman";

//Sahi
setData("Naman");
```

### Changing Dict value

```
const bike= {
    company: "Hero",
    color: "black",
    model: "VS4"
}

const newValue= {
    ...bike,
    color: "Blue"
}

const newValue= {
    ...bike,
    model: "VS5"
}
```

-   For Array

```
const students= ["Shivam", "Yash", "Afjal", "Maithil"]

const newStudents= [...students, "Sarik"]
```

#### Array of Dict

```
//Array
const arr= [1,2,3];

//Dict
const dd= {a: 121, b: 343}

//Array of dict
const ad= [
    {a: 121, b: 343},
    {a: 121, b: 343}
    {a: 121, b: 343}
]

ad[2].b
```

### Map function

```
arr.map((item) => {
    return <Element prosdfsdlfsdfsdf />
})
```
