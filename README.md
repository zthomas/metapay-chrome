### MetaPay Chrome Extension

MetaPay is a lightweight wallet for stellar lumens that enables one click purchases.
It's MetaMask for the Stellar network.

For developers, it's super simple, just add a link like this... [🍺 Support us](https://stellar.meta.re/transaction?to=GBJXNFFH53PICPBYZGYCXG7GA6Y5IGPEVTVQCFMVJIV5P5Z3ZIYTELVJ&amount=50&memo=Thanks!) (try it)

``` html
<a data-meta-pay
	href="https://stellar.meta.re/transaction?to=GBJXNFFH53PICPBYZGYCXG7GA6Y5IGPEVTVQCFMVJIV5P5Z3ZIYTELVJ&amount=50&memo=Thanks!"
	target="_blank" >Send Lumens</a>
```

If you have built apps for MetaMask, you'll agree that this is much easier to integrate :)

### How it works
When the user has the extension installed, it will look for link clicks with the attribute `data-meta-pay` and parses the link url. It will open a notification window with the parsed url parameters. 

### Fallback
Don't worry, while the extension makes the purchase experience seamless, it's not required for your app to work. If the user does not have the extension install, the link will just redirect them to our web version in a new tab. 

### Supported URL Parameters
| parameter | values |
| --- | --- |
| to | stellar public address |
| amount | numeric |
| memo | string |
| memoType | string |


### Roadmap
This repo is a compiled version of the chrome app. It's the exact app that's submitted and runs on your browser. 
If you are looking to contribute, we are still working on a documentation site and a new dev repo. For now, feel free to add submit issues and give us feedback 
- [ ] support for federation 
- [ ] improved documentation 
- [ ] asset type support


