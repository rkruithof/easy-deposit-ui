/*
 * Copyright (C) 2018 DANS - Data Archiving and Networked Services (info@dans.knaw.nl)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { FileOverviewState, empty } from "../model/FileInfo"
import { Reducer } from "redux"
import { FileOverviewConstants } from "../constants/fileOverviewConstants"

export const fileOverviewReducer: Reducer<FileOverviewState> = (state = empty, action) => {
    switch (action.type) {
        case FileOverviewConstants.FETCH_FILES_PENDING: {
            return { ...state, loading: { ...state.loading, loading: true, loadingError: undefined } }
        }
        case FileOverviewConstants.FETCH_FILES_REJECTED: {
            return { ...state, loading: { ...state.loading, loading: false, loadingError: action.payload } }
        }
        case FileOverviewConstants.FETCH_FILES_SUCCESS: {
            return { ...state, loading: { loading: false, loaded: true }, files: action.payload }
        }
        case FileOverviewConstants.CLEAN_FILES: {
            return empty
        }
        default:
            return state
    }
}