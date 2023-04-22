import { TestAsyncThunk } from 'shared/lib/TestAsyncThunk/TestAsyncThunk';
import { Profile } from 'entities/Profile/model/types/profile';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { fetchProfileData } from './fetchProfileData';

describe('fetchProfileData', () => {
  test('fetch data success', async () => {
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

    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ data: profileData }));

    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(profileData);
  });

  test('fetch data error', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({}));

    const result = await thunk.callThunk('1');

    expect(result.payload).toBe('error');
    expect(result.meta.requestStatus).toBe('rejected');
  });
});
