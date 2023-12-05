# Frontend Mentor - Space tourism website

## Technology Used


### 1. Using supports command 
```
@supports (backdrop-filter: blur(1rem)){
nav ul{ 
    background-color: hsl(0, 0%, 100%, 0.104);
    backdrop-filter: blur(1rem);
    }}
```

Illustrating a bluring background for the nav bar if the brower supports backdrop bluring function

<br>

### 2. Media Query (max-width)
```
@media (max-width:35em){

nav ul{
    position: fixed;
    inset: 0% 0% 0px 30%;
    flex-direction: column;
    padding: 30vh 2.5em;
    background-color: rgba(250, 63, 63, 0.342);
    z-index: 3;
}
}
```
By defining the max-width of the screen, shrinking the nav-bar to a column design and make the nav-bar background become semi-transparent

<br>

### 3. Displaying navbar for mobile version

