import { User, UserSchema } from './model/types/userSchema';
import { userReducer, userActions } from './model/slice/userSlice';
import { getUserAuthData } from './model/selectors/getUserAuthData';
import { getUserDataInited } from './model/selectors/getUserDataInited';

export {
    User, UserSchema, userReducer, userActions, getUserAuthData, getUserDataInited,
};
