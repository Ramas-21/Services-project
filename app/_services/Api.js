const DATABASE_URL =
  "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/" +
  process.env.NEXT_PUBLIC_DATABASE_URL +
  "/master";
import { gql, request } from 'graphql-request'

const getCategory = async () => {
  const query = gql`
    query Category {
      categories {
        bgColor {
          hex
        }
        id
        name
        icon {
          url
        }
      }
    }
  `;

  const result = await request(DATABASE_URL, query);
  return result;
};

export default { getCategory };
