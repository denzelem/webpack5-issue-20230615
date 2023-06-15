- Install Node version `v19.7.0`
- `npm install`
- `npm run build`

Current result:

`public/assets/light-a050d6fca14afa704ffb.css`:

```
.test1{color:#000}
.test2{color:#fff}
```


`public/assets/dark-a050d6fca14afa704ffb.css`:

```
.test1{color:#000}
.test2{color:#000}
```

Expected result:

`public/assets/light-a050d6fca14afa704ffb.css`:

```
.test1{color:#fff}
.test2{color:#fff}
```


`public/assets/dark-a050d6fca14afa704ffb.css`:

```
.test1{color:#000}
.test2{color:#000}
```
