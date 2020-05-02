import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  smallint: any;
  timestamptz: any;
  uuid: any;
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/** mutation root */
export type Mutation_Root = {
   __typename?: 'mutation_root';
  /** delete data from the table: "questions" */
  delete_questions?: Maybe<Questions_Mutation_Response>;
  /** delete data from the table: "reviews" */
  delete_reviews?: Maybe<Reviews_Mutation_Response>;
  /** delete data from the table: "sessions" */
  delete_sessions?: Maybe<Sessions_Mutation_Response>;
  /** delete data from the table: "upvotes" */
  delete_upvotes?: Maybe<Upvotes_Mutation_Response>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** insert data into the table: "questions" */
  insert_questions?: Maybe<Questions_Mutation_Response>;
  /** insert data into the table: "reviews" */
  insert_reviews?: Maybe<Reviews_Mutation_Response>;
  /** insert data into the table: "sessions" */
  insert_sessions?: Maybe<Sessions_Mutation_Response>;
  /** insert data into the table: "upvotes" */
  insert_upvotes?: Maybe<Upvotes_Mutation_Response>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** update data of the table: "questions" */
  update_questions?: Maybe<Questions_Mutation_Response>;
  /** update data of the table: "reviews" */
  update_reviews?: Maybe<Reviews_Mutation_Response>;
  /** update data of the table: "sessions" */
  update_sessions?: Maybe<Sessions_Mutation_Response>;
  /** update data of the table: "upvotes" */
  update_upvotes?: Maybe<Upvotes_Mutation_Response>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
};


/** mutation root */
export type Mutation_RootDelete_QuestionsArgs = {
  where: Questions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_ReviewsArgs = {
  where: Reviews_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_SessionsArgs = {
  where: Sessions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_UpvotesArgs = {
  where: Upvotes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootInsert_QuestionsArgs = {
  objects: Array<Questions_Insert_Input>;
  on_conflict?: Maybe<Questions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ReviewsArgs = {
  objects: Array<Reviews_Insert_Input>;
  on_conflict?: Maybe<Reviews_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SessionsArgs = {
  objects: Array<Sessions_Insert_Input>;
  on_conflict?: Maybe<Sessions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UpvotesArgs = {
  objects: Array<Upvotes_Insert_Input>;
  on_conflict?: Maybe<Upvotes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_QuestionsArgs = {
  _inc?: Maybe<Questions_Inc_Input>;
  _set?: Maybe<Questions_Set_Input>;
  where: Questions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_ReviewsArgs = {
  _inc?: Maybe<Reviews_Inc_Input>;
  _set?: Maybe<Reviews_Set_Input>;
  where: Reviews_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_SessionsArgs = {
  _set?: Maybe<Sessions_Set_Input>;
  where: Sessions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_UpvotesArgs = {
  _inc?: Maybe<Upvotes_Inc_Input>;
  _set?: Maybe<Upvotes_Set_Input>;
  where: Upvotes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** query root */
export type Query_Root = {
   __typename?: 'query_root';
  /** fetch data from the table: "questions" */
  questions: Array<Questions>;
  /** fetch aggregated fields from the table: "questions" */
  questions_aggregate: Questions_Aggregate;
  /** fetch data from the table: "reviews" */
  reviews: Array<Reviews>;
  /** fetch aggregated fields from the table: "reviews" */
  reviews_aggregate: Reviews_Aggregate;
  /** fetch data from the table: "reviews" using primary key columns */
  reviews_by_pk?: Maybe<Reviews>;
  /** fetch data from the table: "sessions" */
  sessions: Array<Sessions>;
  /** fetch aggregated fields from the table: "sessions" */
  sessions_aggregate: Sessions_Aggregate;
  /** fetch data from the table: "sessions" using primary key columns */
  sessions_by_pk?: Maybe<Sessions>;
  /** fetch data from the table: "upvotes" */
  upvotes: Array<Upvotes>;
  /** fetch aggregated fields from the table: "upvotes" */
  upvotes_aggregate: Upvotes_Aggregate;
  /** fetch data from the table: "upvotes" using primary key columns */
  upvotes_by_pk?: Maybe<Upvotes>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


/** query root */
export type Query_RootQuestionsArgs = {
  distinct_on?: Maybe<Array<Questions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Questions_Order_By>>;
  where?: Maybe<Questions_Bool_Exp>;
};


/** query root */
export type Query_RootQuestions_AggregateArgs = {
  distinct_on?: Maybe<Array<Questions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Questions_Order_By>>;
  where?: Maybe<Questions_Bool_Exp>;
};


/** query root */
export type Query_RootReviewsArgs = {
  distinct_on?: Maybe<Array<Reviews_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Reviews_Order_By>>;
  where?: Maybe<Reviews_Bool_Exp>;
};


/** query root */
export type Query_RootReviews_AggregateArgs = {
  distinct_on?: Maybe<Array<Reviews_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Reviews_Order_By>>;
  where?: Maybe<Reviews_Bool_Exp>;
};


/** query root */
export type Query_RootReviews_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootSessionsArgs = {
  distinct_on?: Maybe<Array<Sessions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sessions_Order_By>>;
  where?: Maybe<Sessions_Bool_Exp>;
};


/** query root */
export type Query_RootSessions_AggregateArgs = {
  distinct_on?: Maybe<Array<Sessions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sessions_Order_By>>;
  where?: Maybe<Sessions_Bool_Exp>;
};


/** query root */
export type Query_RootSessions_By_PkArgs = {
  id: Scalars['String'];
};


/** query root */
export type Query_RootUpvotesArgs = {
  distinct_on?: Maybe<Array<Upvotes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Upvotes_Order_By>>;
  where?: Maybe<Upvotes_Bool_Exp>;
};


/** query root */
export type Query_RootUpvotes_AggregateArgs = {
  distinct_on?: Maybe<Array<Upvotes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Upvotes_Order_By>>;
  where?: Maybe<Upvotes_Bool_Exp>;
};


/** query root */
export type Query_RootUpvotes_By_PkArgs = {
  question_id: Scalars['Int'];
  session_id: Scalars['String'];
  user_id: Scalars['String'];
};


/** query root */
export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** query root */
export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** query root */
export type Query_RootUsers_By_PkArgs = {
  id: Scalars['String'];
};

/** columns and relationships of "questions" */
export type Questions = {
   __typename?: 'questions';
  archived: Scalars['Boolean'];
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  pinned: Scalars['Boolean'];
  /** An object relationship */
  session: Sessions;
  session_id: Scalars['String'];
  text: Scalars['String'];
  /** An array relationship */
  upvotes: Array<Upvotes>;
  /** An aggregated array relationship */
  upvotes_aggregate: Upvotes_Aggregate;
  /** An object relationship */
  user?: Maybe<Users>;
  user_id?: Maybe<Scalars['String']>;
};


/** columns and relationships of "questions" */
export type QuestionsUpvotesArgs = {
  distinct_on?: Maybe<Array<Upvotes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Upvotes_Order_By>>;
  where?: Maybe<Upvotes_Bool_Exp>;
};


/** columns and relationships of "questions" */
export type QuestionsUpvotes_AggregateArgs = {
  distinct_on?: Maybe<Array<Upvotes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Upvotes_Order_By>>;
  where?: Maybe<Upvotes_Bool_Exp>;
};

/** aggregated selection of "questions" */
export type Questions_Aggregate = {
   __typename?: 'questions_aggregate';
  aggregate?: Maybe<Questions_Aggregate_Fields>;
  nodes: Array<Questions>;
};

/** aggregate fields of "questions" */
export type Questions_Aggregate_Fields = {
   __typename?: 'questions_aggregate_fields';
  avg?: Maybe<Questions_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Questions_Max_Fields>;
  min?: Maybe<Questions_Min_Fields>;
  stddev?: Maybe<Questions_Stddev_Fields>;
  stddev_pop?: Maybe<Questions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Questions_Stddev_Samp_Fields>;
  sum?: Maybe<Questions_Sum_Fields>;
  var_pop?: Maybe<Questions_Var_Pop_Fields>;
  var_samp?: Maybe<Questions_Var_Samp_Fields>;
  variance?: Maybe<Questions_Variance_Fields>;
};


/** aggregate fields of "questions" */
export type Questions_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Questions_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "questions" */
export type Questions_Aggregate_Order_By = {
  avg?: Maybe<Questions_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Questions_Max_Order_By>;
  min?: Maybe<Questions_Min_Order_By>;
  stddev?: Maybe<Questions_Stddev_Order_By>;
  stddev_pop?: Maybe<Questions_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Questions_Stddev_Samp_Order_By>;
  sum?: Maybe<Questions_Sum_Order_By>;
  var_pop?: Maybe<Questions_Var_Pop_Order_By>;
  var_samp?: Maybe<Questions_Var_Samp_Order_By>;
  variance?: Maybe<Questions_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "questions" */
export type Questions_Arr_Rel_Insert_Input = {
  data: Array<Questions_Insert_Input>;
  on_conflict?: Maybe<Questions_On_Conflict>;
};

/** aggregate avg on columns */
export type Questions_Avg_Fields = {
   __typename?: 'questions_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "questions" */
export type Questions_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "questions". All fields are combined with a logical 'AND'. */
export type Questions_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Questions_Bool_Exp>>>;
  _not?: Maybe<Questions_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Questions_Bool_Exp>>>;
  archived?: Maybe<Boolean_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  pinned?: Maybe<Boolean_Comparison_Exp>;
  session?: Maybe<Sessions_Bool_Exp>;
  session_id?: Maybe<String_Comparison_Exp>;
  text?: Maybe<String_Comparison_Exp>;
  upvotes?: Maybe<Upvotes_Bool_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "questions" */
export enum Questions_Constraint {
  /** unique or primary key constraint */
  PinnedQuestionIdx = 'pinned_question_idx',
  /** unique or primary key constraint */
  QuestionsIdKey = 'questions_id_key'
}

/** input type for incrementing integer columne in table "questions" */
export type Questions_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "questions" */
export type Questions_Insert_Input = {
  archived?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  pinned?: Maybe<Scalars['Boolean']>;
  session?: Maybe<Sessions_Obj_Rel_Insert_Input>;
  session_id?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  upvotes?: Maybe<Upvotes_Arr_Rel_Insert_Input>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Questions_Max_Fields = {
   __typename?: 'questions_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  session_id?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "questions" */
export type Questions_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  session_id?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Questions_Min_Fields = {
   __typename?: 'questions_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  session_id?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "questions" */
export type Questions_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  session_id?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "questions" */
export type Questions_Mutation_Response = {
   __typename?: 'questions_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Questions>;
};

/** input type for inserting object relation for remote table "questions" */
export type Questions_Obj_Rel_Insert_Input = {
  data: Questions_Insert_Input;
  on_conflict?: Maybe<Questions_On_Conflict>;
};

/** on conflict condition type for table "questions" */
export type Questions_On_Conflict = {
  constraint: Questions_Constraint;
  update_columns: Array<Questions_Update_Column>;
  where?: Maybe<Questions_Bool_Exp>;
};

/** ordering options when selecting data from "questions" */
export type Questions_Order_By = {
  archived?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  pinned?: Maybe<Order_By>;
  session?: Maybe<Sessions_Order_By>;
  session_id?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
  upvotes_aggregate?: Maybe<Upvotes_Aggregate_Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** select columns of table "questions" */
export enum Questions_Select_Column {
  /** column name */
  Archived = 'archived',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Pinned = 'pinned',
  /** column name */
  SessionId = 'session_id',
  /** column name */
  Text = 'text',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "questions" */
export type Questions_Set_Input = {
  archived?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  pinned?: Maybe<Scalars['Boolean']>;
  session_id?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Questions_Stddev_Fields = {
   __typename?: 'questions_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "questions" */
export type Questions_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Questions_Stddev_Pop_Fields = {
   __typename?: 'questions_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "questions" */
export type Questions_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Questions_Stddev_Samp_Fields = {
   __typename?: 'questions_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "questions" */
export type Questions_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Questions_Sum_Fields = {
   __typename?: 'questions_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "questions" */
export type Questions_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "questions" */
export enum Questions_Update_Column {
  /** column name */
  Archived = 'archived',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Pinned = 'pinned',
  /** column name */
  SessionId = 'session_id',
  /** column name */
  Text = 'text',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Questions_Var_Pop_Fields = {
   __typename?: 'questions_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "questions" */
export type Questions_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Questions_Var_Samp_Fields = {
   __typename?: 'questions_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "questions" */
export type Questions_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Questions_Variance_Fields = {
   __typename?: 'questions_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "questions" */
export type Questions_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "reviews" */
export type Reviews = {
   __typename?: 'reviews';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  rating: Scalars['smallint'];
  /** An object relationship */
  session: Sessions;
  session_id: Scalars['String'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['String'];
};

/** aggregated selection of "reviews" */
export type Reviews_Aggregate = {
   __typename?: 'reviews_aggregate';
  aggregate?: Maybe<Reviews_Aggregate_Fields>;
  nodes: Array<Reviews>;
};

/** aggregate fields of "reviews" */
export type Reviews_Aggregate_Fields = {
   __typename?: 'reviews_aggregate_fields';
  avg?: Maybe<Reviews_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Reviews_Max_Fields>;
  min?: Maybe<Reviews_Min_Fields>;
  stddev?: Maybe<Reviews_Stddev_Fields>;
  stddev_pop?: Maybe<Reviews_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Reviews_Stddev_Samp_Fields>;
  sum?: Maybe<Reviews_Sum_Fields>;
  var_pop?: Maybe<Reviews_Var_Pop_Fields>;
  var_samp?: Maybe<Reviews_Var_Samp_Fields>;
  variance?: Maybe<Reviews_Variance_Fields>;
};


/** aggregate fields of "reviews" */
export type Reviews_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Reviews_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "reviews" */
export type Reviews_Aggregate_Order_By = {
  avg?: Maybe<Reviews_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Reviews_Max_Order_By>;
  min?: Maybe<Reviews_Min_Order_By>;
  stddev?: Maybe<Reviews_Stddev_Order_By>;
  stddev_pop?: Maybe<Reviews_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Reviews_Stddev_Samp_Order_By>;
  sum?: Maybe<Reviews_Sum_Order_By>;
  var_pop?: Maybe<Reviews_Var_Pop_Order_By>;
  var_samp?: Maybe<Reviews_Var_Samp_Order_By>;
  variance?: Maybe<Reviews_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "reviews" */
export type Reviews_Arr_Rel_Insert_Input = {
  data: Array<Reviews_Insert_Input>;
  on_conflict?: Maybe<Reviews_On_Conflict>;
};

/** aggregate avg on columns */
export type Reviews_Avg_Fields = {
   __typename?: 'reviews_avg_fields';
  id?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "reviews" */
export type Reviews_Avg_Order_By = {
  id?: Maybe<Order_By>;
  rating?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "reviews". All fields are combined with a logical 'AND'. */
export type Reviews_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Reviews_Bool_Exp>>>;
  _not?: Maybe<Reviews_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Reviews_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  rating?: Maybe<Smallint_Comparison_Exp>;
  session?: Maybe<Sessions_Bool_Exp>;
  session_id?: Maybe<String_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "reviews" */
export enum Reviews_Constraint {
  /** unique or primary key constraint */
  ReviewsPkey = 'reviews_pkey'
}

/** input type for incrementing integer columne in table "reviews" */
export type Reviews_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['smallint']>;
};

/** input type for inserting data into table "reviews" */
export type Reviews_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['smallint']>;
  session?: Maybe<Sessions_Obj_Rel_Insert_Input>;
  session_id?: Maybe<Scalars['String']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Reviews_Max_Fields = {
   __typename?: 'reviews_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['smallint']>;
  session_id?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "reviews" */
export type Reviews_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  rating?: Maybe<Order_By>;
  session_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Reviews_Min_Fields = {
   __typename?: 'reviews_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['smallint']>;
  session_id?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "reviews" */
export type Reviews_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  rating?: Maybe<Order_By>;
  session_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "reviews" */
export type Reviews_Mutation_Response = {
   __typename?: 'reviews_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Reviews>;
};

/** input type for inserting object relation for remote table "reviews" */
export type Reviews_Obj_Rel_Insert_Input = {
  data: Reviews_Insert_Input;
  on_conflict?: Maybe<Reviews_On_Conflict>;
};

/** on conflict condition type for table "reviews" */
export type Reviews_On_Conflict = {
  constraint: Reviews_Constraint;
  update_columns: Array<Reviews_Update_Column>;
  where?: Maybe<Reviews_Bool_Exp>;
};

/** ordering options when selecting data from "reviews" */
export type Reviews_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  rating?: Maybe<Order_By>;
  session?: Maybe<Sessions_Order_By>;
  session_id?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** select columns of table "reviews" */
export enum Reviews_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Rating = 'rating',
  /** column name */
  SessionId = 'session_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "reviews" */
export type Reviews_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['smallint']>;
  session_id?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Reviews_Stddev_Fields = {
   __typename?: 'reviews_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "reviews" */
export type Reviews_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  rating?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Reviews_Stddev_Pop_Fields = {
   __typename?: 'reviews_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "reviews" */
export type Reviews_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  rating?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Reviews_Stddev_Samp_Fields = {
   __typename?: 'reviews_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "reviews" */
export type Reviews_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  rating?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Reviews_Sum_Fields = {
   __typename?: 'reviews_sum_fields';
  id?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['smallint']>;
};

/** order by sum() on columns of table "reviews" */
export type Reviews_Sum_Order_By = {
  id?: Maybe<Order_By>;
  rating?: Maybe<Order_By>;
};

/** update columns of table "reviews" */
export enum Reviews_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Rating = 'rating',
  /** column name */
  SessionId = 'session_id',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Reviews_Var_Pop_Fields = {
   __typename?: 'reviews_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "reviews" */
export type Reviews_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  rating?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Reviews_Var_Samp_Fields = {
   __typename?: 'reviews_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "reviews" */
export type Reviews_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  rating?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Reviews_Variance_Fields = {
   __typename?: 'reviews_variance_fields';
  id?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "reviews" */
export type Reviews_Variance_Order_By = {
  id?: Maybe<Order_By>;
  rating?: Maybe<Order_By>;
};

/** columns and relationships of "sessions" */
export type Sessions = {
   __typename?: 'sessions';
  created_at: Scalars['timestamptz'];
  creator_id: Scalars['String'];
  expired: Scalars['Boolean'];
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  /** An array relationship */
  questions: Array<Questions>;
  /** An aggregated array relationship */
  questions_aggregate: Questions_Aggregate;
  /** An array relationship */
  reviews: Array<Reviews>;
  /** An aggregated array relationship */
  reviews_aggregate: Reviews_Aggregate;
  updated_at?: Maybe<Scalars['timestamptz']>;
  /** An array relationship */
  upvotes: Array<Upvotes>;
  /** An aggregated array relationship */
  upvotes_aggregate: Upvotes_Aggregate;
  /** An object relationship */
  user: Users;
};


/** columns and relationships of "sessions" */
export type SessionsQuestionsArgs = {
  distinct_on?: Maybe<Array<Questions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Questions_Order_By>>;
  where?: Maybe<Questions_Bool_Exp>;
};


/** columns and relationships of "sessions" */
export type SessionsQuestions_AggregateArgs = {
  distinct_on?: Maybe<Array<Questions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Questions_Order_By>>;
  where?: Maybe<Questions_Bool_Exp>;
};


/** columns and relationships of "sessions" */
export type SessionsReviewsArgs = {
  distinct_on?: Maybe<Array<Reviews_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Reviews_Order_By>>;
  where?: Maybe<Reviews_Bool_Exp>;
};


/** columns and relationships of "sessions" */
export type SessionsReviews_AggregateArgs = {
  distinct_on?: Maybe<Array<Reviews_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Reviews_Order_By>>;
  where?: Maybe<Reviews_Bool_Exp>;
};


/** columns and relationships of "sessions" */
export type SessionsUpvotesArgs = {
  distinct_on?: Maybe<Array<Upvotes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Upvotes_Order_By>>;
  where?: Maybe<Upvotes_Bool_Exp>;
};


/** columns and relationships of "sessions" */
export type SessionsUpvotes_AggregateArgs = {
  distinct_on?: Maybe<Array<Upvotes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Upvotes_Order_By>>;
  where?: Maybe<Upvotes_Bool_Exp>;
};

/** aggregated selection of "sessions" */
export type Sessions_Aggregate = {
   __typename?: 'sessions_aggregate';
  aggregate?: Maybe<Sessions_Aggregate_Fields>;
  nodes: Array<Sessions>;
};

/** aggregate fields of "sessions" */
export type Sessions_Aggregate_Fields = {
   __typename?: 'sessions_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Sessions_Max_Fields>;
  min?: Maybe<Sessions_Min_Fields>;
};


/** aggregate fields of "sessions" */
export type Sessions_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Sessions_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "sessions" */
export type Sessions_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Sessions_Max_Order_By>;
  min?: Maybe<Sessions_Min_Order_By>;
};

/** input type for inserting array relation for remote table "sessions" */
export type Sessions_Arr_Rel_Insert_Input = {
  data: Array<Sessions_Insert_Input>;
  on_conflict?: Maybe<Sessions_On_Conflict>;
};

/** Boolean expression to filter rows from the table "sessions". All fields are combined with a logical 'AND'. */
export type Sessions_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Sessions_Bool_Exp>>>;
  _not?: Maybe<Sessions_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Sessions_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  creator_id?: Maybe<String_Comparison_Exp>;
  expired?: Maybe<Boolean_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  questions?: Maybe<Questions_Bool_Exp>;
  reviews?: Maybe<Reviews_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  upvotes?: Maybe<Upvotes_Bool_Exp>;
  user?: Maybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "sessions" */
export enum Sessions_Constraint {
  /** unique or primary key constraint */
  SessionsIdKey = 'sessions_id_key',
  /** unique or primary key constraint */
  SessionsPkey = 'sessions_pkey'
}

/** input type for inserting data into table "sessions" */
export type Sessions_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  creator_id?: Maybe<Scalars['String']>;
  expired?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  questions?: Maybe<Questions_Arr_Rel_Insert_Input>;
  reviews?: Maybe<Reviews_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  upvotes?: Maybe<Upvotes_Arr_Rel_Insert_Input>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Sessions_Max_Fields = {
   __typename?: 'sessions_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  creator_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "sessions" */
export type Sessions_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  creator_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Sessions_Min_Fields = {
   __typename?: 'sessions_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  creator_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "sessions" */
export type Sessions_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  creator_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "sessions" */
export type Sessions_Mutation_Response = {
   __typename?: 'sessions_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Sessions>;
};

/** input type for inserting object relation for remote table "sessions" */
export type Sessions_Obj_Rel_Insert_Input = {
  data: Sessions_Insert_Input;
  on_conflict?: Maybe<Sessions_On_Conflict>;
};

/** on conflict condition type for table "sessions" */
export type Sessions_On_Conflict = {
  constraint: Sessions_Constraint;
  update_columns: Array<Sessions_Update_Column>;
  where?: Maybe<Sessions_Bool_Exp>;
};

/** ordering options when selecting data from "sessions" */
export type Sessions_Order_By = {
  created_at?: Maybe<Order_By>;
  creator_id?: Maybe<Order_By>;
  expired?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  questions_aggregate?: Maybe<Questions_Aggregate_Order_By>;
  reviews_aggregate?: Maybe<Reviews_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
  upvotes_aggregate?: Maybe<Upvotes_Aggregate_Order_By>;
  user?: Maybe<Users_Order_By>;
};

/** select columns of table "sessions" */
export enum Sessions_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatorId = 'creator_id',
  /** column name */
  Expired = 'expired',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "sessions" */
export type Sessions_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  creator_id?: Maybe<Scalars['String']>;
  expired?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "sessions" */
export enum Sessions_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatorId = 'creator_id',
  /** column name */
  Expired = 'expired',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}


/** expression to compare columns of type smallint. All fields are combined with logical 'AND'. */
export type Smallint_Comparison_Exp = {
  _eq?: Maybe<Scalars['smallint']>;
  _gt?: Maybe<Scalars['smallint']>;
  _gte?: Maybe<Scalars['smallint']>;
  _in?: Maybe<Array<Scalars['smallint']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['smallint']>;
  _lte?: Maybe<Scalars['smallint']>;
  _neq?: Maybe<Scalars['smallint']>;
  _nin?: Maybe<Array<Scalars['smallint']>>;
};

/** subscription root */
export type Subscription_Root = {
   __typename?: 'subscription_root';
  /** fetch data from the table: "questions" */
  questions: Array<Questions>;
  /** fetch aggregated fields from the table: "questions" */
  questions_aggregate: Questions_Aggregate;
  /** fetch data from the table: "reviews" */
  reviews: Array<Reviews>;
  /** fetch aggregated fields from the table: "reviews" */
  reviews_aggregate: Reviews_Aggregate;
  /** fetch data from the table: "reviews" using primary key columns */
  reviews_by_pk?: Maybe<Reviews>;
  /** fetch data from the table: "sessions" */
  sessions: Array<Sessions>;
  /** fetch aggregated fields from the table: "sessions" */
  sessions_aggregate: Sessions_Aggregate;
  /** fetch data from the table: "sessions" using primary key columns */
  sessions_by_pk?: Maybe<Sessions>;
  /** fetch data from the table: "upvotes" */
  upvotes: Array<Upvotes>;
  /** fetch aggregated fields from the table: "upvotes" */
  upvotes_aggregate: Upvotes_Aggregate;
  /** fetch data from the table: "upvotes" using primary key columns */
  upvotes_by_pk?: Maybe<Upvotes>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


/** subscription root */
export type Subscription_RootQuestionsArgs = {
  distinct_on?: Maybe<Array<Questions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Questions_Order_By>>;
  where?: Maybe<Questions_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootQuestions_AggregateArgs = {
  distinct_on?: Maybe<Array<Questions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Questions_Order_By>>;
  where?: Maybe<Questions_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootReviewsArgs = {
  distinct_on?: Maybe<Array<Reviews_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Reviews_Order_By>>;
  where?: Maybe<Reviews_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootReviews_AggregateArgs = {
  distinct_on?: Maybe<Array<Reviews_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Reviews_Order_By>>;
  where?: Maybe<Reviews_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootReviews_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootSessionsArgs = {
  distinct_on?: Maybe<Array<Sessions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sessions_Order_By>>;
  where?: Maybe<Sessions_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSessions_AggregateArgs = {
  distinct_on?: Maybe<Array<Sessions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sessions_Order_By>>;
  where?: Maybe<Sessions_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSessions_By_PkArgs = {
  id: Scalars['String'];
};


/** subscription root */
export type Subscription_RootUpvotesArgs = {
  distinct_on?: Maybe<Array<Upvotes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Upvotes_Order_By>>;
  where?: Maybe<Upvotes_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUpvotes_AggregateArgs = {
  distinct_on?: Maybe<Array<Upvotes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Upvotes_Order_By>>;
  where?: Maybe<Upvotes_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUpvotes_By_PkArgs = {
  question_id: Scalars['Int'];
  session_id: Scalars['String'];
  user_id: Scalars['String'];
};


/** subscription root */
export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['String'];
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "upvotes" */
export type Upvotes = {
   __typename?: 'upvotes';
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  question: Questions;
  question_id: Scalars['Int'];
  /** An object relationship */
  session: Sessions;
  session_id: Scalars['String'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['String'];
};

/** aggregated selection of "upvotes" */
export type Upvotes_Aggregate = {
   __typename?: 'upvotes_aggregate';
  aggregate?: Maybe<Upvotes_Aggregate_Fields>;
  nodes: Array<Upvotes>;
};

/** aggregate fields of "upvotes" */
export type Upvotes_Aggregate_Fields = {
   __typename?: 'upvotes_aggregate_fields';
  avg?: Maybe<Upvotes_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Upvotes_Max_Fields>;
  min?: Maybe<Upvotes_Min_Fields>;
  stddev?: Maybe<Upvotes_Stddev_Fields>;
  stddev_pop?: Maybe<Upvotes_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Upvotes_Stddev_Samp_Fields>;
  sum?: Maybe<Upvotes_Sum_Fields>;
  var_pop?: Maybe<Upvotes_Var_Pop_Fields>;
  var_samp?: Maybe<Upvotes_Var_Samp_Fields>;
  variance?: Maybe<Upvotes_Variance_Fields>;
};


/** aggregate fields of "upvotes" */
export type Upvotes_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Upvotes_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "upvotes" */
export type Upvotes_Aggregate_Order_By = {
  avg?: Maybe<Upvotes_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Upvotes_Max_Order_By>;
  min?: Maybe<Upvotes_Min_Order_By>;
  stddev?: Maybe<Upvotes_Stddev_Order_By>;
  stddev_pop?: Maybe<Upvotes_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Upvotes_Stddev_Samp_Order_By>;
  sum?: Maybe<Upvotes_Sum_Order_By>;
  var_pop?: Maybe<Upvotes_Var_Pop_Order_By>;
  var_samp?: Maybe<Upvotes_Var_Samp_Order_By>;
  variance?: Maybe<Upvotes_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "upvotes" */
export type Upvotes_Arr_Rel_Insert_Input = {
  data: Array<Upvotes_Insert_Input>;
  on_conflict?: Maybe<Upvotes_On_Conflict>;
};

/** aggregate avg on columns */
export type Upvotes_Avg_Fields = {
   __typename?: 'upvotes_avg_fields';
  question_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "upvotes" */
export type Upvotes_Avg_Order_By = {
  question_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "upvotes". All fields are combined with a logical 'AND'. */
export type Upvotes_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Upvotes_Bool_Exp>>>;
  _not?: Maybe<Upvotes_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Upvotes_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  question?: Maybe<Questions_Bool_Exp>;
  question_id?: Maybe<Int_Comparison_Exp>;
  session?: Maybe<Sessions_Bool_Exp>;
  session_id?: Maybe<String_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "upvotes" */
export enum Upvotes_Constraint {
  /** unique or primary key constraint */
  UpvotesPkey = 'upvotes_pkey'
}

/** input type for incrementing integer columne in table "upvotes" */
export type Upvotes_Inc_Input = {
  question_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "upvotes" */
export type Upvotes_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  question?: Maybe<Questions_Obj_Rel_Insert_Input>;
  question_id?: Maybe<Scalars['Int']>;
  session?: Maybe<Sessions_Obj_Rel_Insert_Input>;
  session_id?: Maybe<Scalars['String']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Upvotes_Max_Fields = {
   __typename?: 'upvotes_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  question_id?: Maybe<Scalars['Int']>;
  session_id?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "upvotes" */
export type Upvotes_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  question_id?: Maybe<Order_By>;
  session_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Upvotes_Min_Fields = {
   __typename?: 'upvotes_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  question_id?: Maybe<Scalars['Int']>;
  session_id?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "upvotes" */
export type Upvotes_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  question_id?: Maybe<Order_By>;
  session_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "upvotes" */
export type Upvotes_Mutation_Response = {
   __typename?: 'upvotes_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Upvotes>;
};

/** input type for inserting object relation for remote table "upvotes" */
export type Upvotes_Obj_Rel_Insert_Input = {
  data: Upvotes_Insert_Input;
  on_conflict?: Maybe<Upvotes_On_Conflict>;
};

/** on conflict condition type for table "upvotes" */
export type Upvotes_On_Conflict = {
  constraint: Upvotes_Constraint;
  update_columns: Array<Upvotes_Update_Column>;
  where?: Maybe<Upvotes_Bool_Exp>;
};

/** ordering options when selecting data from "upvotes" */
export type Upvotes_Order_By = {
  created_at?: Maybe<Order_By>;
  question?: Maybe<Questions_Order_By>;
  question_id?: Maybe<Order_By>;
  session?: Maybe<Sessions_Order_By>;
  session_id?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** select columns of table "upvotes" */
export enum Upvotes_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  QuestionId = 'question_id',
  /** column name */
  SessionId = 'session_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "upvotes" */
export type Upvotes_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  question_id?: Maybe<Scalars['Int']>;
  session_id?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Upvotes_Stddev_Fields = {
   __typename?: 'upvotes_stddev_fields';
  question_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "upvotes" */
export type Upvotes_Stddev_Order_By = {
  question_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Upvotes_Stddev_Pop_Fields = {
   __typename?: 'upvotes_stddev_pop_fields';
  question_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "upvotes" */
export type Upvotes_Stddev_Pop_Order_By = {
  question_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Upvotes_Stddev_Samp_Fields = {
   __typename?: 'upvotes_stddev_samp_fields';
  question_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "upvotes" */
export type Upvotes_Stddev_Samp_Order_By = {
  question_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Upvotes_Sum_Fields = {
   __typename?: 'upvotes_sum_fields';
  question_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "upvotes" */
export type Upvotes_Sum_Order_By = {
  question_id?: Maybe<Order_By>;
};

/** update columns of table "upvotes" */
export enum Upvotes_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  QuestionId = 'question_id',
  /** column name */
  SessionId = 'session_id',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Upvotes_Var_Pop_Fields = {
   __typename?: 'upvotes_var_pop_fields';
  question_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "upvotes" */
export type Upvotes_Var_Pop_Order_By = {
  question_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Upvotes_Var_Samp_Fields = {
   __typename?: 'upvotes_var_samp_fields';
  question_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "upvotes" */
export type Upvotes_Var_Samp_Order_By = {
  question_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Upvotes_Variance_Fields = {
   __typename?: 'upvotes_variance_fields';
  question_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "upvotes" */
export type Upvotes_Variance_Order_By = {
  question_id?: Maybe<Order_By>;
};

/** columns and relationships of "users" */
export type Users = {
   __typename?: 'users';
  created_at: Scalars['timestamptz'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  mock_id: Scalars['uuid'];
  name: Scalars['String'];
  /** An array relationship */
  questions: Array<Questions>;
  /** An aggregated array relationship */
  questions_aggregate: Questions_Aggregate;
  /** An array relationship */
  reviews: Array<Reviews>;
  /** An aggregated array relationship */
  reviews_aggregate: Reviews_Aggregate;
  /** An array relationship */
  sessions: Array<Sessions>;
  /** An aggregated array relationship */
  sessions_aggregate: Sessions_Aggregate;
  /** An array relationship */
  upvotes: Array<Upvotes>;
  /** An aggregated array relationship */
  upvotes_aggregate: Upvotes_Aggregate;
};


/** columns and relationships of "users" */
export type UsersQuestionsArgs = {
  distinct_on?: Maybe<Array<Questions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Questions_Order_By>>;
  where?: Maybe<Questions_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersQuestions_AggregateArgs = {
  distinct_on?: Maybe<Array<Questions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Questions_Order_By>>;
  where?: Maybe<Questions_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersReviewsArgs = {
  distinct_on?: Maybe<Array<Reviews_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Reviews_Order_By>>;
  where?: Maybe<Reviews_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersReviews_AggregateArgs = {
  distinct_on?: Maybe<Array<Reviews_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Reviews_Order_By>>;
  where?: Maybe<Reviews_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersSessionsArgs = {
  distinct_on?: Maybe<Array<Sessions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sessions_Order_By>>;
  where?: Maybe<Sessions_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersSessions_AggregateArgs = {
  distinct_on?: Maybe<Array<Sessions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Sessions_Order_By>>;
  where?: Maybe<Sessions_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersUpvotesArgs = {
  distinct_on?: Maybe<Array<Upvotes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Upvotes_Order_By>>;
  where?: Maybe<Upvotes_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersUpvotes_AggregateArgs = {
  distinct_on?: Maybe<Array<Upvotes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Upvotes_Order_By>>;
  where?: Maybe<Upvotes_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
   __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
   __typename?: 'users_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Users_Max_Order_By>;
  min?: Maybe<Users_Min_Order_By>;
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  mock_id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  questions?: Maybe<Questions_Bool_Exp>;
  reviews?: Maybe<Reviews_Bool_Exp>;
  sessions?: Maybe<Sessions_Bool_Exp>;
  upvotes?: Maybe<Upvotes_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersIdKey = 'users_id_key',
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  mock_id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  questions?: Maybe<Questions_Arr_Rel_Insert_Input>;
  reviews?: Maybe<Reviews_Arr_Rel_Insert_Input>;
  sessions?: Maybe<Sessions_Arr_Rel_Insert_Input>;
  upvotes?: Maybe<Upvotes_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
   __typename?: 'users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
   __typename?: 'users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
   __typename?: 'users_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** ordering options when selecting data from "users" */
export type Users_Order_By = {
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  mock_id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  questions_aggregate?: Maybe<Questions_Aggregate_Order_By>;
  reviews_aggregate?: Maybe<Reviews_Aggregate_Order_By>;
  sessions_aggregate?: Maybe<Sessions_Aggregate_Order_By>;
  upvotes_aggregate?: Maybe<Upvotes_Aggregate_Order_By>;
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  MockId = 'mock_id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  mock_id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  MockId = 'mock_id',
  /** column name */
  Name = 'name'
}


/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

export type UpVoteMutationVariables = {
  session_id: Scalars['String'];
  user_id: Scalars['String'];
  question_id: Scalars['Int'];
};


export type UpVoteMutation = (
  { __typename?: 'mutation_root' }
  & { insert_upvotes?: Maybe<(
    { __typename?: 'upvotes_mutation_response' }
    & Pick<Upvotes_Mutation_Response, 'affected_rows'>
  )> }
);

export type AskQuestionMutationVariables = {
  text: Scalars['String'];
  userId: Scalars['String'];
  sessionId: Scalars['String'];
};


export type AskQuestionMutation = (
  { __typename?: 'mutation_root' }
  & { insert_questions?: Maybe<(
    { __typename?: 'questions_mutation_response' }
    & Pick<Questions_Mutation_Response, 'affected_rows'>
  )> }
);

export type PinQuestionMutationVariables = {
  question_id: Scalars['Int'];
};


export type PinQuestionMutation = (
  { __typename?: 'mutation_root' }
  & { update_questions?: Maybe<(
    { __typename?: 'questions_mutation_response' }
    & Pick<Questions_Mutation_Response, 'affected_rows'>
  )> }
);

export type UnPinQuestionMutationVariables = {
  question_id: Scalars['Int'];
};


export type UnPinQuestionMutation = (
  { __typename?: 'mutation_root' }
  & { update_questions?: Maybe<(
    { __typename?: 'questions_mutation_response' }
    & Pick<Questions_Mutation_Response, 'affected_rows'>
  )> }
);

export type ArchieveQuestionMutationVariables = {
  question_id: Scalars['Int'];
};


export type ArchieveQuestionMutation = (
  { __typename?: 'mutation_root' }
  & { update_questions?: Maybe<(
    { __typename?: 'questions_mutation_response' }
    & Pick<Questions_Mutation_Response, 'affected_rows'>
  )> }
);

export type EndSessionMutationVariables = {
  sessionId: Scalars['String'];
};


export type EndSessionMutation = (
  { __typename?: 'mutation_root' }
  & { update_sessions?: Maybe<(
    { __typename?: 'sessions_mutation_response' }
    & Pick<Sessions_Mutation_Response, 'affected_rows'>
  )> }
);

export type CreateSessionMutationVariables = {
  userId: Scalars['String'];
};


export type CreateSessionMutation = (
  { __typename?: 'mutation_root' }
  & { insert_sessions?: Maybe<(
    { __typename?: 'sessions_mutation_response' }
    & Pick<Sessions_Mutation_Response, 'affected_rows'>
  )> }
);

export type GetQuestionsBySessionSubscriptionVariables = {
  id: Scalars['String'];
};


export type GetQuestionsBySessionSubscription = (
  { __typename?: 'subscription_root' }
  & { questions: Array<(
    { __typename?: 'questions' }
    & Pick<Questions, 'id' | 'text' | 'created_at' | 'archived' | 'pinned'>
    & { upvotes_aggregate: (
      { __typename?: 'upvotes_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'upvotes_aggregate_fields' }
        & Pick<Upvotes_Aggregate_Fields, 'count'>
      )> }
    ) }
  )> }
);

export type GetSessionSubscriptionVariables = {};


export type GetSessionSubscription = (
  { __typename?: 'subscription_root' }
  & { sessions: Array<(
    { __typename?: 'sessions' }
    & Pick<Sessions, 'id' | 'name' | 'created_at'>
  )> }
);


export const UpVoteDocument = gql`
    mutation upVote($session_id: String!, $user_id: String!, $question_id: Int!) {
  insert_upvotes(objects: {session_id: $session_id, user_id: $user_id, question_id: $question_id}) {
    affected_rows
  }
}
    `;
export type UpVoteMutationFn = ApolloReactCommon.MutationFunction<UpVoteMutation, UpVoteMutationVariables>;

/**
 * __useUpVoteMutation__
 *
 * To run a mutation, you first call `useUpVoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpVoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upVoteMutation, { data, loading, error }] = useUpVoteMutation({
 *   variables: {
 *      session_id: // value for 'session_id'
 *      user_id: // value for 'user_id'
 *      question_id: // value for 'question_id'
 *   },
 * });
 */
export function useUpVoteMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpVoteMutation, UpVoteMutationVariables>) {
        return ApolloReactHooks.useMutation<UpVoteMutation, UpVoteMutationVariables>(UpVoteDocument, baseOptions);
      }
export type UpVoteMutationHookResult = ReturnType<typeof useUpVoteMutation>;
export type UpVoteMutationResult = ApolloReactCommon.MutationResult<UpVoteMutation>;
export type UpVoteMutationOptions = ApolloReactCommon.BaseMutationOptions<UpVoteMutation, UpVoteMutationVariables>;
export const AskQuestionDocument = gql`
    mutation askQuestion($text: String!, $userId: String!, $sessionId: String!) {
  insert_questions(objects: {text: $text, user_id: $userId, session_id: $sessionId}) {
    affected_rows
  }
}
    `;
export type AskQuestionMutationFn = ApolloReactCommon.MutationFunction<AskQuestionMutation, AskQuestionMutationVariables>;

/**
 * __useAskQuestionMutation__
 *
 * To run a mutation, you first call `useAskQuestionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAskQuestionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [askQuestionMutation, { data, loading, error }] = useAskQuestionMutation({
 *   variables: {
 *      text: // value for 'text'
 *      userId: // value for 'userId'
 *      sessionId: // value for 'sessionId'
 *   },
 * });
 */
export function useAskQuestionMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AskQuestionMutation, AskQuestionMutationVariables>) {
        return ApolloReactHooks.useMutation<AskQuestionMutation, AskQuestionMutationVariables>(AskQuestionDocument, baseOptions);
      }
export type AskQuestionMutationHookResult = ReturnType<typeof useAskQuestionMutation>;
export type AskQuestionMutationResult = ApolloReactCommon.MutationResult<AskQuestionMutation>;
export type AskQuestionMutationOptions = ApolloReactCommon.BaseMutationOptions<AskQuestionMutation, AskQuestionMutationVariables>;
export const PinQuestionDocument = gql`
    mutation pinQuestion($question_id: Int!) {
  update_questions(where: {id: {_eq: $question_id}}, _set: {pinned: true}) {
    affected_rows
  }
}
    `;
export type PinQuestionMutationFn = ApolloReactCommon.MutationFunction<PinQuestionMutation, PinQuestionMutationVariables>;

/**
 * __usePinQuestionMutation__
 *
 * To run a mutation, you first call `usePinQuestionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePinQuestionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [pinQuestionMutation, { data, loading, error }] = usePinQuestionMutation({
 *   variables: {
 *      question_id: // value for 'question_id'
 *   },
 * });
 */
export function usePinQuestionMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<PinQuestionMutation, PinQuestionMutationVariables>) {
        return ApolloReactHooks.useMutation<PinQuestionMutation, PinQuestionMutationVariables>(PinQuestionDocument, baseOptions);
      }
export type PinQuestionMutationHookResult = ReturnType<typeof usePinQuestionMutation>;
export type PinQuestionMutationResult = ApolloReactCommon.MutationResult<PinQuestionMutation>;
export type PinQuestionMutationOptions = ApolloReactCommon.BaseMutationOptions<PinQuestionMutation, PinQuestionMutationVariables>;
export const UnPinQuestionDocument = gql`
    mutation unPinQuestion($question_id: Int!) {
  update_questions(where: {id: {_eq: $question_id}}, _set: {pinned: false}) {
    affected_rows
  }
}
    `;
export type UnPinQuestionMutationFn = ApolloReactCommon.MutationFunction<UnPinQuestionMutation, UnPinQuestionMutationVariables>;

/**
 * __useUnPinQuestionMutation__
 *
 * To run a mutation, you first call `useUnPinQuestionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnPinQuestionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unPinQuestionMutation, { data, loading, error }] = useUnPinQuestionMutation({
 *   variables: {
 *      question_id: // value for 'question_id'
 *   },
 * });
 */
export function useUnPinQuestionMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UnPinQuestionMutation, UnPinQuestionMutationVariables>) {
        return ApolloReactHooks.useMutation<UnPinQuestionMutation, UnPinQuestionMutationVariables>(UnPinQuestionDocument, baseOptions);
      }
export type UnPinQuestionMutationHookResult = ReturnType<typeof useUnPinQuestionMutation>;
export type UnPinQuestionMutationResult = ApolloReactCommon.MutationResult<UnPinQuestionMutation>;
export type UnPinQuestionMutationOptions = ApolloReactCommon.BaseMutationOptions<UnPinQuestionMutation, UnPinQuestionMutationVariables>;
export const ArchieveQuestionDocument = gql`
    mutation archieveQuestion($question_id: Int!) {
  update_questions(where: {id: {_eq: $question_id}}, _set: {archived: true, pinned: false}) {
    affected_rows
  }
}
    `;
export type ArchieveQuestionMutationFn = ApolloReactCommon.MutationFunction<ArchieveQuestionMutation, ArchieveQuestionMutationVariables>;

/**
 * __useArchieveQuestionMutation__
 *
 * To run a mutation, you first call `useArchieveQuestionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useArchieveQuestionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [archieveQuestionMutation, { data, loading, error }] = useArchieveQuestionMutation({
 *   variables: {
 *      question_id: // value for 'question_id'
 *   },
 * });
 */
export function useArchieveQuestionMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ArchieveQuestionMutation, ArchieveQuestionMutationVariables>) {
        return ApolloReactHooks.useMutation<ArchieveQuestionMutation, ArchieveQuestionMutationVariables>(ArchieveQuestionDocument, baseOptions);
      }
export type ArchieveQuestionMutationHookResult = ReturnType<typeof useArchieveQuestionMutation>;
export type ArchieveQuestionMutationResult = ApolloReactCommon.MutationResult<ArchieveQuestionMutation>;
export type ArchieveQuestionMutationOptions = ApolloReactCommon.BaseMutationOptions<ArchieveQuestionMutation, ArchieveQuestionMutationVariables>;
export const EndSessionDocument = gql`
    mutation endSession($sessionId: String!) {
  update_sessions(where: {id: {_eq: $sessionId}}, _set: {expired: true}) {
    affected_rows
  }
}
    `;
export type EndSessionMutationFn = ApolloReactCommon.MutationFunction<EndSessionMutation, EndSessionMutationVariables>;

/**
 * __useEndSessionMutation__
 *
 * To run a mutation, you first call `useEndSessionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEndSessionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [endSessionMutation, { data, loading, error }] = useEndSessionMutation({
 *   variables: {
 *      sessionId: // value for 'sessionId'
 *   },
 * });
 */
export function useEndSessionMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<EndSessionMutation, EndSessionMutationVariables>) {
        return ApolloReactHooks.useMutation<EndSessionMutation, EndSessionMutationVariables>(EndSessionDocument, baseOptions);
      }
export type EndSessionMutationHookResult = ReturnType<typeof useEndSessionMutation>;
export type EndSessionMutationResult = ApolloReactCommon.MutationResult<EndSessionMutation>;
export type EndSessionMutationOptions = ApolloReactCommon.BaseMutationOptions<EndSessionMutation, EndSessionMutationVariables>;
export const CreateSessionDocument = gql`
    mutation createSession($userId: String!) {
  insert_sessions(objects: {creator_id: $userId}) {
    affected_rows
  }
}
    `;
export type CreateSessionMutationFn = ApolloReactCommon.MutationFunction<CreateSessionMutation, CreateSessionMutationVariables>;

/**
 * __useCreateSessionMutation__
 *
 * To run a mutation, you first call `useCreateSessionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSessionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSessionMutation, { data, loading, error }] = useCreateSessionMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useCreateSessionMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateSessionMutation, CreateSessionMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateSessionMutation, CreateSessionMutationVariables>(CreateSessionDocument, baseOptions);
      }
export type CreateSessionMutationHookResult = ReturnType<typeof useCreateSessionMutation>;
export type CreateSessionMutationResult = ApolloReactCommon.MutationResult<CreateSessionMutation>;
export type CreateSessionMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateSessionMutation, CreateSessionMutationVariables>;
export const GetQuestionsBySessionDocument = gql`
    subscription getQuestionsBySession($id: String!) {
  questions(where: {session_id: {_eq: $id}}, order_by: {pinned: desc, upvotes_aggregate: {count: desc}}) {
    id
    text
    created_at
    archived
    pinned
    upvotes_aggregate {
      aggregate {
        count
      }
    }
  }
}
    `;

/**
 * __useGetQuestionsBySessionSubscription__
 *
 * To run a query within a React component, call `useGetQuestionsBySessionSubscription` and pass it any options that fit your needs.
 * When your component renders, `useGetQuestionsBySessionSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetQuestionsBySessionSubscription({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetQuestionsBySessionSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<GetQuestionsBySessionSubscription, GetQuestionsBySessionSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<GetQuestionsBySessionSubscription, GetQuestionsBySessionSubscriptionVariables>(GetQuestionsBySessionDocument, baseOptions);
      }
export type GetQuestionsBySessionSubscriptionHookResult = ReturnType<typeof useGetQuestionsBySessionSubscription>;
export type GetQuestionsBySessionSubscriptionResult = ApolloReactCommon.SubscriptionResult<GetQuestionsBySessionSubscription>;
export const GetSessionDocument = gql`
    subscription getSession {
  sessions {
    id
    name
    created_at
  }
}
    `;

/**
 * __useGetSessionSubscription__
 *
 * To run a query within a React component, call `useGetSessionSubscription` and pass it any options that fit your needs.
 * When your component renders, `useGetSessionSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSessionSubscription({
 *   variables: {
 *   },
 * });
 */
export function useGetSessionSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<GetSessionSubscription, GetSessionSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<GetSessionSubscription, GetSessionSubscriptionVariables>(GetSessionDocument, baseOptions);
      }
export type GetSessionSubscriptionHookResult = ReturnType<typeof useGetSessionSubscription>;
export type GetSessionSubscriptionResult = ApolloReactCommon.SubscriptionResult<GetSessionSubscription>;