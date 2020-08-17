import {createAction} from "@reduxjs/toolkit";
import {ADD_API_FAILURE_STATUS, REMOVE_API_FAILURE_STATUS} from "../StoreConstants";

export const addApiFailureStatus = createAction(ADD_API_FAILURE_STATUS);
export const removeApiFailureStatus = createAction(REMOVE_API_FAILURE_STATUS);
