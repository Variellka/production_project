import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import axios from 'axios';
import { userActions } from 'entities/User';
import { loginByUsername } from './loginByUsername';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

describe('loginByUsername.test', () => {
    let dispatch: Dispatch;
    let getState: () => StateSchema;

    beforeEach(() => {
        dispatch = jest.fn();
        getState = jest.fn();
    });

    test('user logged in', async () => {
        const userData = { id: '1', username: 'admin' };
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userData }));
        const action = loginByUsername({ username: 'admin', password: '123' });
        const result = await action(dispatch, getState, undefined);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(dispatch).toHaveBeenCalledWith(
            userActions.setAuthData(userData),
        );
        expect(dispatch).toBeCalledTimes(3);
        expect(result.payload).toEqual(userData);
        expect(result.meta.requestStatus).toBe('fulfilled');
    });

    test('user not found', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const action = loginByUsername({ username: 'admin', password: '123' });
        const result = await action(dispatch, getState, undefined);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(dispatch).toBeCalledTimes(2);
        expect(result.meta.requestStatus).toBe('rejected');
    });
});
