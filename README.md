# NativeScript Hackathon: template #2 - Clarifai API

## Inroduction
This template has been created for the [Angular Connect Hackathon](http://angularconnect.com/2016/extras/), hosted by Progress Software.

Be sure to check the announcement, rules and prices at [http://angularconnect.com/2016/extras/](http://angularconnect.com/2016/extras/) under HACKATHON (of course).

## Getting started

Once you go through the [quick setup](http://docs.nativescript.org/angular/start/quick-setup.html) of NativeScript, the template should get you started with a sample app using the cool Clarifai API.

- First launch the app generator, pointing to this template
```
tns create <my-clarifai-app> --template nativescript-template-clarifai
```
- Launch the setup script (it will just move some files around)
```
cd <my-clarifai-app>
app/setup.sh
```
- [Signup](https://developer.clarifai.com/signup/) to the awesome Clarifai API
- After registering, you should now have a __client Id__ and a __client secret__ available
- Edit _secrects.json_ and replace placeholders with your application data.
- Run ```tns emulate ios``` and/or ```tns emulate android``` to make sure everything is in place and working
- Start hacking!

## Helpers
You should check [Clarifai's guide](https://developer.clarifai.com/guide/).

## Issues
There is a known issue ([#2733: Image gets covered with color of Page color property](https://github.com/NativeScript/NativeScript/issues/2733))
 affecting images. 
The issue appeared after upgrading to nativescript 2.3.0 and should hopefuly be fixed soon (before the hackathon)
