import { TestAsyncThunk } from 'shared/lib/TestAsyncThunk/TestAsyncThunk';
import { Profile, ValidateProfileError } from 'entities/Profile/model/types/profile';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { updateProfileData } from './updateProfileData';

const profileData: Profile = {
  age: 22,
  first: 'Abay',
  lastname: 'Kinayat',
  avatar: 'Test',
  city: 'Test',
  country: Country.Kazakhstan,
  currency: Currency.EUR,
  username: 'abay',
};

describe('updateProfileData', () => {
  test('update success', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: profileData,
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ data: profileData }));

    const result = await thunk.callThunk('1');

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(profileData);
  });

  test('update error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: { form: profileData },
    });

    thunk.api.put.mockReturnValue(Promise.resolve({ data: null }));

    const result = await thunk.callThunk('1');

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
  });
});
