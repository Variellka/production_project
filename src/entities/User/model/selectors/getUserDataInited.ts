import { StateSchema } from 'app/providers/StoreProvider';

export const getUserDataInited = ((state: StateSchema) => state.user._inited);
