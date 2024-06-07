import "./UsersCard.scss";
import { UserType } from "./types";

export const UsersCard = ({ data }: { data: UserType }) => {
  const {
    name,
    username,
    email,
    address: {
      street,
      suite,
      city,
      zipcode,
      geo: { lat, lng },
    },
    phone,
    website,
    company: { name: companyName, catchPhrase, bs },
  } = data;

  return (
    <table>
      <thead>
        <tr>
          <th colSpan={2}>
            <h1>{name}</h1>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>username</td>
          <td>{username}</td>
        </tr>
        <tr>
          <td>email</td>
          <td> {email}</td>
        </tr>
        <tr>
          <td colSpan={2}>
            <h2>Adress</h2>
          </td>
        </tr>
        <tr>
          <td>street</td>
          <td> {street}</td>
        </tr>
        <tr>
          <td>suite</td>
          <td>{suite}</td>
        </tr>
        <tr>
          <td>city</td>
          <td>{city}</td>
        </tr>
        <tr>
          <td>zipcode</td>
          <td> {zipcode}</td>
        </tr>
        <tr>
          <td colSpan={2}>
            <h3>Geo</h3>
          </td>
        </tr>
        <tr>
          <td>lat</td>
          <td>{lat}</td>
        </tr>
        <tr>
          <td>lng</td>
          <td>{lng}</td>
        </tr>
        <tr>
          <td>phone</td>
          <td>{phone}</td>
        </tr>
        <tr>
          <td>website</td>
          <td>{website}</td>
        </tr>
        <tr>
          <td colSpan={2}>
            <h3>Company</h3>
          </td>
        </tr>
        <tr>
          <td>name</td>
          <td>{companyName}</td>
        </tr>
        <tr>
          <td>catchPhrase</td>
          <td>{catchPhrase}</td>
        </tr>
        <tr>
          <td>bs</td>
          <td>{bs}</td>
        </tr>
      </tbody>
    </table>
  );
};
