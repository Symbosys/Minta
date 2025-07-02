import { View, Text } from 'react-native'
import React from 'react'
import { List } from 'react-native-paper';
import IndexStyle from '../../Index.Style';


const Recent = () => {
    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);
  return (
      <View style={IndexStyle.p3}>

          {
              data.map((order, index) => (
                  <List.Section title={order.date} key={index} >

                      {
                          order.recent.map((item, index) => (
                              <List.Accordion 
                                  key={index}
                                  title={item.title}
                                  left={props => <List.Icon {...props} icon={item.status ? "check-circle" : "close-circle"} color={item.status ? "green" : "red"} />}>
                                  <List.Item title="First item" />
                                  <List.Item title="Second item" />
                              </List.Accordion>
                          ))
                      }
                  </List.Section>
              ))
          }

    </View>
  )
}

export default Recent

const data = [
    {
        date: 'Today (₹ 642)',
        recent: [
            {
                title: "Order 1",
                status: false

            },
            {
                title: "Order 2",
                status: true

            },
            {
                title: "Order 3",
                status: false

            }
        ]
    },
    {
        date: 'Yesterday (₹ 854)',
        recent: [
            {
                title: "Order 4",
                status: true

            },
            {
                title: "Order 5",
                status: false

            },
            {
                title: "Order 6",
                status: true

            }
        ]
    }
]