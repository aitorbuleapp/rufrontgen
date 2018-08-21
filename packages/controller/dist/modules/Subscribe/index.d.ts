import * as React from "react";
import { SubscribeToListMutationVariables } from "../../schemaTypes";
export declare const subscribeToListMutation: any;
export interface SubscribeToListProps {
    subscribeToList: (variables: SubscribeToListMutationVariables) => void;
}
export declare const withCreateListing: (WrappedComponent: React.ComponentType<any>) => React.ComponentClass<any>;
