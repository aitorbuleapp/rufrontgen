

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MeQuery
// ====================================================

export interface MeQuery_me {
  email: string;
}

export interface MeQuery {
  me: MeQuery_me | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ForgotPasswordChangeMutation
// ====================================================

export interface ForgotPasswordChangeMutation_forgotPasswordChange {
  path: string;
  message: string;
}

export interface ForgotPasswordChangeMutation {
  forgotPasswordChange: ForgotPasswordChangeMutation_forgotPasswordChange[] | null;
}

export interface ForgotPasswordChangeMutationVariables {
  newPassword: string;
  key: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateAllergeneMutation
// ====================================================

export interface CreateAllergeneMutation {
  createAllergene: boolean;
}

export interface CreateAllergeneMutationVariables {
  name: string;
  description: string;
  DishId: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateDishMutation
// ====================================================

export interface CreateDishMutation {
  createDish: boolean;
}

export interface CreateDishMutationVariables {
  name: string;
  description: string;
  price: number;
  MenuId: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateListingMutation
// ====================================================

export interface CreateListingMutation {
  createListing: boolean;
}

export interface CreateListingMutationVariables {
  picture?: any | null;
  name: string;
  category: string;
  description: string;
  price: number;
  latitude: number;
  longitude: number;
  amenities: string[];
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateMenuMutation
// ====================================================

export interface CreateMenuMutation {
  createMenu: boolean;
}

export interface CreateMenuMutationVariables {
  name: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateMessageMutation
// ====================================================

export interface CreateMessageMutation {
  createMessage: boolean;
}

export interface CreateMessageMutationVariables {
  message: MessageInput;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FindListingsQuery
// ====================================================

export interface FindListingsQuery_findListings_owner {
  id: string;
  email: string;
}

export interface FindListingsQuery_findListings {
  id: string;
  name: string;
  pictureUrl: string | null;
  owner: FindListingsQuery_findListings_owner;
}

export interface FindListingsQuery {
  findListings: FindListingsQuery_findListings[];
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FindMenusQuery
// ====================================================

export interface FindMenusQuery_findMenus {
  id: string;
  name: string;
}

export interface FindMenusQuery {
  findMenus: FindMenusQuery_findMenus[];
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteMenuMutation
// ====================================================

export interface DeleteMenuMutation {
  deleteMenu: boolean;
}

export interface DeleteMenuMutationVariables {
  menuId: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SendForgotPasswordEmailMutation
// ====================================================

export interface SendForgotPasswordEmailMutation {
  sendForgotPasswordEmail: boolean | null;
}

export interface SendForgotPasswordEmailMutationVariables {
  email: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: LoginMutation
// ====================================================

export interface LoginMutation_login_errors {
  path: string;
  message: string;
}

export interface LoginMutation_login {
  errors: LoginMutation_login_errors[] | null;
  sessionId: string | null;
}

export interface LoginMutation {
  login: LoginMutation_login;
}

export interface LoginMutationVariables {
  email: string;
  password: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: LogoutMutation
// ====================================================

export interface LogoutMutation {
  logout: boolean | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RegisterMutation
// ====================================================

export interface RegisterMutation_register {
  path: string;
  message: string;
}

export interface RegisterMutation {
  register: RegisterMutation_register[] | null;
}

export interface RegisterMutationVariables {
  email: string;
  password: string;
  name: string;
  lastname: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SubscribeToListMutation
// ====================================================

export interface SubscribeToListMutation {
  subscribeToList: boolean;
}

export interface SubscribeToListMutationVariables {
  email: string;
  name: string;
  lastname: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateAllergeneMutation
// ====================================================

export interface UpdateAllergeneMutation {
  updateAllergene: boolean;
}

export interface UpdateAllergeneMutationVariables {
  allergeneId: string;
  name: string;
  description: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateDishMutation
// ====================================================

export interface UpdateDishMutation {
  updateDish: boolean;
}

export interface UpdateDishMutationVariables {
  dishId: string;
  name: string;
  description: string;
  price: number;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateListingMutation
// ====================================================

export interface UpdateListingMutation {
  updateListing: boolean;
}

export interface UpdateListingMutationVariables {
  listingId: string;
  input: UpdateListingInput;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateMenuMutation
// ====================================================

export interface UpdateMenuMutation {
  updateMenu: boolean;
}

export interface UpdateMenuMutationVariables {
  menuId: string;
  input: UpdateMenuInput;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ViewAllergenesQuery
// ====================================================

export interface ViewAllergenesQuery_allergenes {
  id: string;
  name: string;
  description: string;
  dishId: string;
}

export interface ViewAllergenesQuery {
  allergenes: ViewAllergenesQuery_allergenes[];
}

export interface ViewAllergenesQueryVariables {
  dishId: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteAllergeneMutation
// ====================================================

export interface DeleteAllergeneMutation {
  deleteAllergene: boolean;
}

export interface DeleteAllergeneMutationVariables {
  allergeneId: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ViewDishQuery
// ====================================================

export interface ViewDishQuery_viewDish {
  id: string;
  name: string;
  description: string;
}

export interface ViewDishQuery {
  viewDish: ViewDishQuery_viewDish | null;
}

export interface ViewDishQueryVariables {
  id: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ViewDishesQuery
// ====================================================

export interface ViewDishesQuery_dishes {
  id: string;
  name: string;
  description: string;
  price: number;
  menuId: string;
}

export interface ViewDishesQuery {
  dishes: ViewDishesQuery_dishes[];
}

export interface ViewDishesQueryVariables {
  menuId: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteDishMutation
// ====================================================

export interface DeleteDishMutation {
  deleteDish: boolean;
}

export interface DeleteDishMutationVariables {
  dishId: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ViewListingQuery
// ====================================================

export interface ViewListingQuery_viewListing_owner {
  id: string;
  email: string;
}

export interface ViewListingQuery_viewListing {
  id: string;
  name: string;
  description: string;
  category: string;
  pictureUrl: string | null;
  price: number;
  latitude: number;
  longitude: number;
  amenities: string[];
  owner: ViewListingQuery_viewListing_owner;
}

export interface ViewListingQuery {
  viewListing: ViewListingQuery_viewListing | null;
}

export interface ViewListingQueryVariables {
  id: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ViewMenuQuery
// ====================================================

export interface ViewMenuQuery_viewMenu {
  id: string;
  name: string;
}

export interface ViewMenuQuery {
  viewMenu: ViewMenuQuery_viewMenu | null;
}

export interface ViewMenuQueryVariables {
  id: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ViewMessagesQuery
// ====================================================

export interface ViewMessagesQuery_messages_user {
  id: string;
  email: string;
}

export interface ViewMessagesQuery_messages {
  text: string;
  user: ViewMessagesQuery_messages_user;
  listingId: string;
}

export interface ViewMessagesQuery {
  messages: ViewMessagesQuery_messages[];
}

export interface ViewMessagesQueryVariables {
  listingId: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: NewMessageSubscription
// ====================================================

export interface NewMessageSubscription_newMessage_user {
  id: string;
  email: string;
}

export interface NewMessageSubscription_newMessage {
  text: string;
  user: NewMessageSubscription_newMessage_user;
  listingId: string;
}

export interface NewMessageSubscription {
  newMessage: NewMessageSubscription_newMessage;
}

export interface NewMessageSubscriptionVariables {
  listingId: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

/**
 * 
 */
export interface MessageInput {
  text: string;
  listingId: string;
}

/**
 * 
 */
export interface UpdateListingInput {
  name?: string | null;
  picture?: any | null;
  pictureUrl?: string | null;
  category?: string | null;
  description?: string | null;
  price?: number | null;
  latitude?: number | null;
  longitude?: number | null;
  amenities?: string[] | null;
}

/**
 * 
 */
export interface UpdateMenuInput {
  name?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================