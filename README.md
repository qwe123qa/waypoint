# easy waypoint

### how to use
`<script src="ryder-waypoint.js"></script>`


### setting
| Option | Type     | Default (Params) | Description                                                                                            |
| --     | --       | --               | --                                                                                                     |
| hook   | string   | 0.9              | can be a number between 0 and 1 defining the position of the trigger hook in relation to the viewport |
| repeat | boolean  | false            | set to true if you want to trigger it again and again                                                  |
| enter  | function | el               | fires whenever the element enter                                                                       |
| leave  | function | el               | fires whenever the element leave                                                                       |


### example
```javascript
$('.element').ryderCool({
	hook: 0.5,
	repeat: true,
	enter(el) {
		// do something
	},
	leave(el) {
		// do something
	}
})
```
