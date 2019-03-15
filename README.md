# easy waypoint

`<script src="ryder-waypoint.js"></script>`


```javascript
$('element').ryderCool({
	hook: 0.9,
	repeat: true,
	enter(el) {
		// do something
	},
	leave(el) {
		// do something
	}
})
```



| Option | Type     | Default (Params) | Description                                                                                            |
| --     | --       | --               | --                                                                                                     |
| hook   | string   | 0.9              | Can be a number between 0 and 1 defining the position of the trigger Hook in relation to the viewport. |
| repeat | boolean  | false            | set to true if you want to trigger it again and again                                                  |
| enter  | function | el               | fires whenever the element enter                                                                       |
| leave  | function | el               | fires whenever the element leave                                                                       |
