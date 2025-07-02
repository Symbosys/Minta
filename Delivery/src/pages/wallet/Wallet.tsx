import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import IndexStyle from '../../Index.Style'
import { Button, Icon, List, useTheme, Dialog, Portal, TextInput } from 'react-native-paper';

const Wallet = () => {
  const { colors } = useTheme(); // Access theme colors

  const [visible, setVisible] = React.useState(false);

  const hideDialog = () => setVisible(false);

  return (
    <View>
      <View style={[{ marginRight: 10, marginTop: 10, flexDirection: "row", alignItems: "center", backgroundColor: colors.secondary, borderTopRightRadius: 30, borderBottomEndRadius: 30 }, IndexStyle.p3]}>
        <Icon source="wallet" size={40} color="white" />

        <Text style={{ fontSize: 28, marginLeft: 10, color: "white", marginRight: 10 }}>
          ₹1254
        </Text>
        <TouchableOpacity onPress={() => setVisible(true)}>
          <Text style={[IndexStyle.p2, IndexStyle.bgSuccess]}>Withdrawal</Text>
        </TouchableOpacity>

      </View>

        <List.Section title="Transaction"  >
        <ScrollView >
          {
            datas.map((data, index) => (

              <List.Accordion
                key={index}
                title={`₹ ${data.Amount}`}
                titleStyle={{ fontWeight: "bold", fontSize: 18 }}
                left={(props) => (
                  <List.Icon
                    {...props}
                    icon="cash-multiple"
                    color={data.status ? "green" : "red"}
                  />
                )}
                style={{
                  backgroundColor: "#f5f5f5",
                  borderRadius: 10,
                  marginVertical: 5,
                  padding: 5,
                }}
              >
                <List.Item
                  title={`Transaction ID: ${data.tnxID}`}
                  left={(props) => <List.Icon {...props} icon="identifier" />}
                />
                <List.Item
                  title={`Bank: ${data.bankName}`}
                  left={(props) => <List.Icon {...props} icon="bank" />}
                />
                <List.Item
                  title={`Account No: ${data.accountNO}`}
                  left={(props) => <List.Icon {...props} icon="card-bulleted" />}
                />
                <List.Item
                  title={`IFSC Code: ${data.ifscCode}`}
                  left={(props) => <List.Icon {...props} icon="barcode" />}
                />
              </List.Accordion>

            ))

          }
        </ScrollView>

      </List.Section>

      <Portal>
        <Dialog visible={visible} >
          <Dialog.Title>Bank Details</Dialog.Title>
          <Dialog.Content>
            <TextInput
              style={IndexStyle.mb}
              label="Bank Name"
              right={<TextInput.Icon icon="bank" />}
            // value={text}
            // onChangeText={text => setText(text)}
            />
            <TextInput
              style={IndexStyle.mb}

              label="Account Number"
              right={<TextInput.Icon icon="identifier" />}
              secureTextEntry
              keyboardType="number-pad"

            // value={text}
            // onChangeText={text => setText(text)}
            />
            <TextInput
              style={IndexStyle.mb}

              label="Re-Type Account Number"
              right={<TextInput.Icon icon="identifier" />}
              keyboardType="number-pad"
            />
            <TextInput
              style={IndexStyle.mb}

              label="IFSC"
              right={<TextInput.Icon icon="security" />}
            />

          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setVisible(false)}>Cancel</Button>
            <Button onPress={() => console.log('Ok')}>Ok</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  )
}

export default Wallet

const datas = [
  {
    Amount: "254",
    date: "12/03/2025 12:23 AM",
    tnxID: "tnx245748542",
    accountNO: 1245754245,
    ifscCode: "BOI62045",
    bankName: "Bank Of India",
    status: true
  },
  {
    Amount: "965",
    date: "12/03/2025 12:23 AM",
    tnxID: "tnx245748542",
    accountNO: 1245754245,
    ifscCode: "BOI62045",
    bankName: "Bank Of India",
    status: true

  },
  {
    Amount: "7035",
    date: "12/03/2025 12:23 AM",
    tnxID: "tnx245748542",
    accountNO: 1245754245,
    ifscCode: "BOI62045",
    bankName: "Bank Of India",
    status: true

  },
  {
    Amount: "7035",
    date: "12/03/2025 12:23 AM",
    tnxID: "tnx245748542",
    accountNO: 1245754245,
    ifscCode: "BOI62045",
    bankName: "Bank Of India",
    status: true

  },
  {
    Amount: "7035",
    date: "12/03/2025 12:23 AM",
    tnxID: "tnx245748542",
    accountNO: 1245754245,
    ifscCode: "BOI62045",
    bankName: "Bank Of India",
    status: true

  },
  {
    Amount: "7035",
    date: "12/03/2025 12:23 AM",
    tnxID: "tnx245748542",
    accountNO: 1245754245,
    ifscCode: "BOI62045",
    bankName: "Bank Of India",
    status: true

  },
  {
    Amount: "7035",
    date: "12/03/2025 12:23 AM",
    tnxID: "tnx245748542",
    accountNO: 1245754245,
    ifscCode: "BOI62045",
    bankName: "Bank Of India",
    status: true

  },
  {
    Amount: "7035",
    date: "12/03/2025 12:23 AM",
    tnxID: "tnx245748542",
    accountNO: 1245754245,
    ifscCode: "BOI62045",
    bankName: "Bank Of India",
    status: true

  },
  {
    Amount: "7035",
    date: "12/03/2025 12:23 AM",
    tnxID: "tnx245748542",
    accountNO: 1245754245,
    ifscCode: "BOI62045",
    bankName: "Bank Of India",
    status: true

  },
  {
    Amount: "7035",
    date: "12/03/2025 12:23 AM",
    tnxID: "tnx245748542",
    accountNO: 1245754245,
    ifscCode: "BOI62045",
    bankName: "Bank Of India",
    status: true

  },
  {
    Amount: "7035",
    date: "12/03/2025 12:23 AM",
    tnxID: "tnx245748542",
    accountNO: 1245754245,
    ifscCode: "BOI62045",
    bankName: "Bank Of India",
    status: true

  },
  {
    Amount: "7035",
    date: "12/03/2025 12:23 AM",
    tnxID: "tnx245748542",
    accountNO: 1245754245,
    ifscCode: "BOI62045",
    bankName: "Bank Of India",
    status: true

  },
  {
    Amount: "7035",
    date: "12/03/2025 12:23 AM",
    tnxID: "tnx245748542",
    accountNO: 1245754245,
    ifscCode: "BOI62045",
    bankName: "Bank Of India",
    status: true

  },
]