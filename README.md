react-input-digit
===
`react-input-digit` allows user to input digit(0 ~ 9) and backspace.
It will be helpful for input such as card number and phone number.

Installation
---

```
npm install react-input-digit
```

or

```
yarn add react-input-digit
```

Usage
---

```
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { value: 38 };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, { value }) {
    this.setState({ value });
  }

  render() {
    return (
      <DigitInput
        value={this.state.value}
        onChange={this.handleChange}
      />
    );
  }
}
```

If you want more detail, go to [here](https://github.com/blackpost38/react-input-digit-example)
