import { generateClient } from "aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { Amplify } from "aws-amplify";

Amplify.configure({
  API: {
    GraphQL: {
      endpoint:
        "https://aq2a7yo2zrgchculm7s7wcsrvu.appsync-api.eu-north-1.amazonaws.com/graphql",
      region: "eu-north-1",
      defaultAuthMode: "apiKey",
      apiKey: "da2-uuegttxalnd7nilh7jocjrwcpi",
    },
  },
  Storage: {
    S3: {
      bucket: "your-s3-bucket-name",
      region: "eu-north-1",
    },
  },
});
const client = generateClient();

const ListDevices = /* GraphQL */ `
  query ListDevices {
    listThings {
      items {
        id
        deviceId
        deviceName
        deviceType
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

const ListDeviceData = /* GraphQL */ `
  query ListDeviceData {
    listData {
      items {
        createdAt
        device_data
        id
        updatedAt
      }
    }
  }
`;

const GetDeviceData = /* GraphQL */ `
  query GetDeviceData($id: ID!) {
    getData(id: $id) {
      id
      device_data
      createdAt
      updatedAt
    }
  }
`;

export const fetchDevices = async () => {
  try {
    const response = (await client.graphql({
      query: ListDevices,
    })) as GraphQLResult<ListDevicesQuery>;

    if (response.data) {
      return response.data;
    }
    throw new Error("No data returned");
  } catch (error) {
    console.error("Error fetching devices:", error);
    throw error;
  }
};

export const fetchDeviceData = async () => {
  try {
    const response = (await client.graphql({
      query: ListDeviceData,
    })) as GraphQLResult<ListDeviceDataQuery>;

    if (response.data) {
      return response.data;
    }
    throw new Error("No data returned");
  } catch (error) {
    console.error("Error fetching device data:", error);
    throw error;
  }
};

// export const getDeviceData = async (id: string) => {
//   try {
//     const response = (await client.graphql({
//       query: GetDeviceData,
//       variables: { id },
//     })) as GraphQLResult<{ getData: DeviceData }>;

//     if (response.data) {
//       return response.data;
//     }
//     throw new Error("No data returned");
//   } catch (error) {
//     console.error("Error getting device data:", error);
//     throw error;
//   }
// };
