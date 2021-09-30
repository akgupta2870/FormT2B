import "./styles.css";
import "./Loginstyles.css";
import {
  Button,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
  TextInput,
  Text
} from "grommet";
import { useState } from "react";
import { useHistory } from "react-router-dom";
export default function Login() {
  const [stateName, setStateName] = useState("");
  const [statePassword, setStatePassword] = useState("");
  const [hide, setHide] = useState(false);

  const clicked = () => {
    alert("clicked");
    setHide(true);
  };
  return (
    <div className="App">
      <div>
        <Text>Login Form</Text>
        <TextInput
          placeholder="Username"
          value={stateName}
          onChange={(event) => setStateName(event.target.value)}
        />
        <br></br>
        <TextInput
          type="password"
          placeholder="Password"
          value={statePassword}
          onChange={(event) => setStatePassword(event.target.value)}
        />
        <br></br>
        <Button primary label="Submit" onClick={clicked} />
        {hide && (
          <div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableCell scope="col" border="bottom">
                    Username
                  </TableCell>
                  <TableCell scope="col" border="bottom">
                    Password
                  </TableCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell scope="row">
                    <strong>{stateName}</strong>
                  </TableCell>
                  <TableCell>{statePassword}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </div>
  );
}
