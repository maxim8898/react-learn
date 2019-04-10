import { Founded } from "../components/Founded";

test('Founded component test', () => {
    const component = renderer.create(
        <Founded number={7}/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('Simple test', () => {
    const component = React.createElement(
        <Founded number={7}/>
    );
    const expectComponent = React.createElement(
        <div className={"founded-movies"}>
            7 movies found
        </div>
    );
    expect(component).toBe(expectComponent);
});