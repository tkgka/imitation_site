import client from "./Apollo";
import graphql from "graphql-tag";

async function get_value(tag: any[], reqMethod: string, URL: string) {
  console.log(tag, reqMethod, URL);

  const inputTag: string[] = [];
  tag.forEach((element) => {
    inputTag.push(element.text);
  });

  const { data, errors } = await client.mutate({
    mutation: graphql`
      mutation CreateMutation($addvalInput: addvalInput!) {
        addVal(addvalInput: $addvalInput)
      }
    `,
    variables: {
      addvalInput: {
        tag: inputTag,
        requestMethod: reqMethod,
        requestURL: URL,
      },
    },
  });

  // console.log("data:", data.gql);
  // console.log("error:", errors);
  return data.addVal;
}

export default get_value;
