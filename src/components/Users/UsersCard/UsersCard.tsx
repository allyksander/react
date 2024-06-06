import { useParams } from "react-router-dom";
import { useGetUsersQuery } from "@redux/api/jsonPlaceholderApi";
import { NotFound } from "@pages/NotFound/NotFound";
import { Loader } from "@components/Loader/Loader";
import { Card } from "@components/Card/Card";
import { Breadcrumbs } from "@components/Breadcrumbs/Breadcrumbs";
import { getItemFromEndpoint } from "@utils/getItemFromEndpoint";
import "./UsersCard.scss";

export const UsersCard = () => {
  const { id = "" } = useParams();
  const { data, isLoading } = useGetUsersQuery(id);

  if (isLoading) {
    return <Loader />;
  }

  if (!data) {
    return <NotFound />;
  }

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
  } = getItemFromEndpoint(data);

  return (
    <>
      <Breadcrumbs lastItemText={name} />
      <Card>
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
        <button>Edit</button>
        <button>Remove</button>
      </Card>
    </>
  );
};
