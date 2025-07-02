import * as React from 'react';
import { ToggleButton } from 'react-native-paper';

const MyComponent = () => {
    const [value, setValue] = React.useState('left');

    return (
        <ToggleButton.Row onValueChange={value => setValue(value)} value={value}>
            <ToggleButton icon="format-align-left" value="left" />
            <ToggleButton icon="format-align-right" value="right" />
        </ToggleButton.Row>
    );
};

export default MyComponent;
