# __StyleSort__

Style sort is a simple script that reorders your css or scss properties to follow a specified order. This program should not break any of your styles as it only changes the order of css properties. More updates coming soon.


## ⚙️ __How to use__ ⚙️

```
    npx stylesort <file.css> [options]
    npx stylesort <file.css> -o <output_file_name.css>
    npx stylesort <file.css> -c <config.txt>
    npx stylesort <file.scss> -s "   "
```

|Options| Description|
|--|--|
|-c| config file|
|-o| output file name|
|-s| Indentation defaults to 4 spaces| 


## Config File Structure

Note: A default config file is provided and can be found in the config folder. The basic order followed is outside in. Properties that control position go first, then how internals are displayed and finally background and colors.

```
*
/
background-color
color
font-size
font-weight
```

Special tokens in config files:

| Token | Reference|
|--|--|
|@| SASS mixins |
|- | CSS variables|
|/ | CSS comments |
|* | CSS selectors|

## License
> MIT

## Disclamer
Please use this project at your own risk. 
