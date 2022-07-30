import client from "./Apollo";
import graphql from "graphql-tag";

async function get_value(
  reqMethod: string,
  resCode: number,
  Header: [any],
  ResData: string,
  tag: any[]
) {
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
        requestMethod: reqMethod,
        responseCode: resCode,
        responseHeader: Header,
        responseData: ResData,
        tag: inputTag,
      },
    },
  });
  return data.addVal;
}

export default get_value;
