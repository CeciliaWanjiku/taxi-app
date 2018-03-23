import { combineReducers } from "redux";
import  HomeReducer from "../routes/home/module/home";
// import { TrackDriverReducer as trackDriver } from "../routes/TrackDriver/module/trackDriver";

export const rootReducer = () => {
	return combineReducers({
		HomeReducer,
		// trackDriver
	});
}

export default rootReducer;
