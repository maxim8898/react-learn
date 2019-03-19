import React from "react";
import { Hello } from '../src/Hello.jsx';

test('Simple test', () => {
    const hello = React.createElement(
        "div",
        { className: "container" },
		<Hello header="React Learning!"/>,
    );
    const expectHello = React.createElement(
		<div className="container">
			<div className="hello-world">
				<h1>
					React Learning!
				</h1>
			</div>
		</div>
    );
	expect(hello).toBe(expectHello);
});
