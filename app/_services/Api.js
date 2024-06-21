const DATABASE_URL =
  "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/" +
  process.env.NEXT_PUBLIC_DATABASE_URL +
  "/master";
import { gql, request } from "graphql-request";

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

const getAllBusinessList = async () => {
  const query = gql`
    query BusinessList {
      businessLists {
        about
        address
        category {
          name
        }
        contactPerson
        email
        images {
          url
        }
        id
        name
      }
    }
  `;
  const result = await request(DATABASE_URL, query);
  return result;
};

const getBusinessByCategory = async (category) => {
  const query =
    gql`query MyQuery {
  businessLists(where: {category: {name: "` +
    category +
    `"}}) {
    about
    address
    category {
      name
    }
    contactPerson
    email
    id
    name
    images {
      url
    }
  }
}
`;

  const result = await request(DATABASE_URL, query);
  return result;
};

const getBusinessById = async (id) => {
  const query = gql`query GetBusinessById {
  businessList(where: {id: "`+id+`"}) {
    about
    address
    category {
      name
    }
    contactPerson
    email
    id
    name
    images {
      url
    }
  }
}`

const result = await request(DATABASE_URL, query);
  return result;
}

const createYourBooking = async (businessId,date,time,userEmail,userName) => {
  const mutationQuery = gql`mutation createBooking {
  createBooking(
    data: {bookingStatus: Booked, businessList: {connect: {id: "`+businessId+`"}}, date: "`+date+`", time: "`+time+`", userEmail: "`+userEmail+`", userName: "`+userName+`"}
  ) {
    id
  }
  publishManyBookings(to: PUBLISHED) {
    count
  }
}
`
const result = await request(DATABASE_URL, mutationQuery);
  return result;
}

const DisabledTime = async (businessId, date) => {
  const query = gql`query DisableAlreadyBookedDate {
  bookings(where: {businessList: {id: "`+businessId+`"}, date: "`+date+`"}) {
    date
    time
  }
}`

const result = await request(DATABASE_URL, query);
  return result;
}

export default { getCategory, getAllBusinessList, getBusinessByCategory, getBusinessById, createYourBooking, DisabledTime };
