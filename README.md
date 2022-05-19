# __StyleSort__

Style sort is a simple script that reorders your css or scss properties to follow a specified order. This program should not break any of your styles as it only changes the order of css properties. More updates coming soon.


## ⚙️ __How to use__ ⚙️

```
    npx stylesort <file.css> [options]
    npx stylesort <file.css> -o <output_file_name.css>
    npx stylesort <file.css> -c <config.txt>
```

|Options| Description|
|--|--|
|-c| config file|
|-o| output file name|

By default the properties will be reorder to follow [these](https://9elements.com/css-rule-order/) principle. But by using the `-c or --config` flag we can specify the order or the properties manually.

## Example Config File Structure

```
*
/
background-color
color
font-size
font-weight
```

CSS config tokens:

| Token | Reference|
|--|--|
|-| CSS variables|
|/| CSS comments |
|*| CSS selectors|

## License
> MIT

## Disclamer
Please use this project at your own risk. 
