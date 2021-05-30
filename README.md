# yash_demo

Yash

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
