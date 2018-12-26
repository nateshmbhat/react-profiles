# react-profiles

> A collection various Profile components with auto data retrieval using public APIs and auto cache management of profile data. You wanna showcase your profile ? Style it up with react-profiles :)


## Features : 
+ Profile UI components
+ compressed SVG icons for scalability.
+ font awesome fonts with animations 
+ uses public APIs to fetch data based on given username
+ material ui components.
+ Customized tooltips


![](https://i.imgur.com/Y6zaXQp.gif )


## Usage : 

```js
import { GitHub, HackerRank, Facebook, StackOverflow, LinkedIn, Instagram, GooglePlus, Youtube, Yahoo, Twitch, Twitter, Skype } from 'react-profiles';

```


### Profile Bars : 



#### GitHub (auto fetch data) : 
![Imgur](https://i.imgur.com/6Rmbhqe.png)

```js
<GitHub username="nateshmbhat" />
```


#### StackOverflow (auto fetch data) : 
![Imgur](https://i.imgur.com/LB4rfpI.png)

```js
<StackOverflow userid="6665568" tooltip="custom tooltip" />
```


#### LinkedIn (no auto fetch): 

![](https://i.imgur.com/AypR95e.png)
```js
<LinkedIn username="nateshmbhat" organization="Google" role="Developer" />
```


#### HackerRank (no auto fetch): 

![](https://i.imgur.com/AKEDXii.png)
```js
<HackerRank username="nateshmbhat1" rank={4900} category="Algorithm Practice"
    competitions="13"
    contestRating="1500"
    gold="1"
    silver="2"
    bronze="3"
/>
```




### Profile Chips : 

![](https://i.imgur.com/XZ2S0JX.png)

```js
<Instagram link="https://www.instagram.com/nateshmbhat/" />
<Facebook link="" newPage{false}/>
<GooglePlus link="" newPage={false} />
<Youtube link="" />
<Twitch link="" />
<Twitter link="" />
<Skype link="" />
<Yahoo link="" tooltip="My tooltip"  />
```



Props :
 
+ bool newPage = open new page on clicking link (default = true)
+ string link = profile link
+ string tooltip = tooltip to be shown on mouse hover




