# Loading

#####This is a simple loading image demo ,you can use it in your xhr request easily .

# Usage

* First you show generate the cover box like this .

`var str = '<div id="over" class="over"></div><div id="layout" class="layout"><img src="images/loading.gif"/></div>';`

* Then append this javascript string in you page site, you can append it anywhere you want .

 `$("body").append(str);`

 * Then display the loading cover and image

 ` $("#layout").show();`

  `$("#over").show();`

  * While request finished you can remove cover loading image easy. use :

  ` $("#over").remove();`

  # By the way

  * This demo and README depend on jquery syntax , style use bootstrap ; but they are not necessary ,you
  can also use original javascript syntax to do this.