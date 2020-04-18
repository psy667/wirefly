/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreateRoomInput = {
  id?: string | null;
  code?: string | null;
  text?: string | null;
  active?: boolean | null;
  createdAt?: string | null;
};

export type ModelRoomConditionInput = {
  code?: ModelStringInput | null;
  text?: ModelStringInput | null;
  active?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  and?: Array<ModelRoomConditionInput | null> | null;
  or?: Array<ModelRoomConditionInput | null> | null;
  not?: ModelRoomConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdateRoomInput = {
  id: string;
  code?: string | null;
  text?: string | null;
  active?: boolean | null;
  createdAt?: string | null;
};

export type DeleteRoomInput = {
  id?: string | null;
};

export type ModelRoomFilterInput = {
  id?: ModelIDInput | null;
  code?: ModelStringInput | null;
  text?: ModelStringInput | null;
  active?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  and?: Array<ModelRoomFilterInput | null> | null;
  or?: Array<ModelRoomFilterInput | null> | null;
  not?: ModelRoomFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type CreateRoomMutation = {
  __typename: "Room";
  id: string;
  code: string | null;
  text: string | null;
  active: boolean | null;
  createdAt: string | null;
};

export type UpdateRoomMutation = {
  __typename: "Room";
  id: string;
  code: string | null;
  text: string | null;
  active: boolean | null;
  createdAt: string | null;
};

export type DeleteRoomMutation = {
  __typename: "Room";
  id: string;
  code: string | null;
  text: string | null;
  active: boolean | null;
  createdAt: string | null;
};

export type GetRoomQuery = {
  __typename: "Room";
  id: string;
  code: string | null;
  text: string | null;
  active: boolean | null;
  createdAt: string | null;
};

export type ListRoomsQuery = {
  __typename: "ModelRoomConnection";
  items: Array<{
    __typename: "Room";
    id: string;
    code: string | null;
    text: string | null;
    active: boolean | null;
    createdAt: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateRoomSubscription = {
  __typename: "Room";
  id: string;
  code: string | null;
  text: string | null;
  active: boolean | null;
  createdAt: string | null;
};

export type OnUpdateRoomSubscription = {
  __typename: "Room";
  id: string;
  code: string | null;
  text: string | null;
  active: boolean | null;
  createdAt: string | null;
};

export type OnDeleteRoomSubscription = {
  __typename: "Room";
  id: string;
  code: string | null;
  text: string | null;
  active: boolean | null;
  createdAt: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateRoom(
    input: CreateRoomInput,
    condition?: ModelRoomConditionInput
  ): Promise<CreateRoomMutation> {
    const statement = `mutation CreateRoom($input: CreateRoomInput!, $condition: ModelRoomConditionInput) {
        createRoom(input: $input, condition: $condition) {
          __typename
          id
          code
          text
          active
          createdAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateRoomMutation>response.data.createRoom;
  }
  async UpdateRoom(
    input: UpdateRoomInput,
    condition?: ModelRoomConditionInput
  ): Promise<UpdateRoomMutation> {
    const statement = `mutation UpdateRoom($input: UpdateRoomInput!, $condition: ModelRoomConditionInput) {
        updateRoom(input: $input, condition: $condition) {
          __typename
          id
          code
          text
          active
          createdAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateRoomMutation>response.data.updateRoom;
  }
  async DeleteRoom(
    input: DeleteRoomInput,
    condition?: ModelRoomConditionInput
  ): Promise<DeleteRoomMutation> {
    const statement = `mutation DeleteRoom($input: DeleteRoomInput!, $condition: ModelRoomConditionInput) {
        deleteRoom(input: $input, condition: $condition) {
          __typename
          id
          code
          text
          active
          createdAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteRoomMutation>response.data.deleteRoom;
  }
  async GetRoom(id: string): Promise<GetRoomQuery> {
    const statement = `query GetRoom($id: ID!) {
        getRoom(id: $id) {
          __typename
          id
          code
          text
          active
          createdAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetRoomQuery>response.data.getRoom;
  }
  async ListRooms(
    filter?: ModelRoomFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListRoomsQuery> {
    const statement = `query ListRooms($filter: ModelRoomFilterInput, $limit: Int, $nextToken: String) {
        listRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            code
            text
            active
            createdAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListRoomsQuery>response.data.listRooms;
  }
  OnCreateRoomListener: Observable<OnCreateRoomSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateRoom {
        onCreateRoom {
          __typename
          id
          code
          text
          active
          createdAt
        }
      }`
    )
  ) as Observable<OnCreateRoomSubscription>;

  OnUpdateRoomListener: Observable<OnUpdateRoomSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateRoom {
        onUpdateRoom {
          __typename
          id
          code
          text
          active
          createdAt
        }
      }`
    )
  ) as Observable<OnUpdateRoomSubscription>;

  OnDeleteRoomListener: Observable<OnDeleteRoomSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteRoom {
        onDeleteRoom {
          __typename
          id
          code
          text
          active
          createdAt
        }
      }`
    )
  ) as Observable<OnDeleteRoomSubscription>;
}
//
