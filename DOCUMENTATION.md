## Documentation

### Quick start

We provide compiled CSS and JS (pl-progress.*), as well as compiled and minified CSS and JS (pl-progress.min.*).

Start including the pl-progress.js after the p-loading script:

```
 <!-- jQuery -->
<script type="text/javascript" src="https://code.jquery.com/jquery-2.2.1.min.js"></script>

<!-- P-Loading JS -->
<script type="text/javascript" src="dist/js/p-loading.min.js"></script>

<!-- Pl-progress JS -->
<script type="text/javascript" src="dist/js/pl-progress.min.js"></script>
```

Then include the CSS file after the P-loading CSS file:

```
<link rel="stylesheet" type="text/css" href="dist/css/p-loading.min.css" />
<link rel="stylesheet" type="text/css" href="dist/css/pl-progress.min.css" />
```



##### New Settings

Property              | Description       | Default value
-------------         | -------------     | -------------
action                | Executes a function of the pluginPublicAction object | show
progress         | Value to set to the progress bar | 0
hideAfter        | Container Attributes and custom attributes (class,id,for,etc) | undefined


### Actions
The property "action" of the settings object that is passed as parameter to the ploading plugin, allows us to 


Property              | Description       
-------------         | -------------     
show                | Show the progress bar  with the value of the progress in 0. 
updateProgress         | Show the progress bar and updates the progress value to the desired.
hide        | Hide the progress bar 
destroy        | Destroy the progress bar 

##### Show bar
Use this for show the progress bar in the selected jQuery element.
This will create all the markup and show the progress bar with the value of the progress in 0. 
```
$('#test').ploading({action: 'show', useAddOns: ['plprogress']});
```

##### Update progress.
Use this for show the progress bar in the selected jQuery element.
This will create all the markup of the progress bar if it doesn't exist and it'll update its progress value. 
```
$('#test').ploading({action: 'updateProgress', progress: 20, useAddOns: ['plprogress']});
```

##### Hide bar
Use this for hide the progress bar in the selected jQuery element.
The markup of the mask will be only hidden. 
```
$('#test').ploading({action: 'hide', useAddOns: ['plprogress']});
```

##### Destroy bar
Use this for destroy the markup of the progress bar. As consecuence the progress bar will disapear.
```
$('#test').ploading({action: 'destroy', useAddOns: ['plprogress']});
```

*Note: for avoid the constant definition of the useAddOns property, you can set it in the public settings of p-loading. `$.fn.ploading.defaults`*