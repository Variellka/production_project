import EditableProfileCard from './ui/EditableProfileCard/EditableProfileCard';
import { profileActions, profileReducer } from './model/slice/profileSlice';
import { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';
import { updateProfileData } from './model/services/updateProfileData/updateProfileData';
import { getProfileData } from './model/selectors/getProfileData/getProfileData';
import { getProfileError } from './model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from './model/selectors/getProfileIsLoading/getProfileLoading';
import { getProfileReadonly } from './model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileForm } from './model/selectors/getProfileForm/getProfileForm';
import { getValidateProfileErrors }
    from './model/selectors/getValidateProfileErrors/getValidateProfileErrors';

export {
    profileActions, profileReducer, EditableProfileCard,
    fetchProfileData, updateProfileData,
    getProfileData, getProfileError, getProfileIsLoading, getProfileReadonly, getProfileForm,
    getValidateProfileErrors,
};
