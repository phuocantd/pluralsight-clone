import React, {createContext, useMemo, useReducer} from 'react';

const initialProfile = {
  id: '',
  email: '',
  avatar: '',
  name: '',
  favoriteCategories: [],
  point: 0,
  phone: '',
  type: '',
  isDeleted: false,
  isActivated: true,
  createdAt: '',
  updatedAt: '',
};

export const Stores = createContext();

export default function Provider({children}) {
  const [profile, dispatchProfile] = useReducer((prevState, action) => {
    switch (action.payload) {
      case 'RESTORE_PROFILE':
        return {
          ...prevState,
          id: action.id,
          email: action.email,
          avatar: action.avatar,
          name: action.name,
          favoriteCategories: action.favoriteCategories,
          point: action.point,
          phone: action.phone,
          type: action.type,
          isDeleted: action.isDeleted,
          isActivated: action.isActivated,
          createdAt: action.createdAt,
          updatedAt: action.updatedAt,
        };

      case 'UPDATE_PROFILE':
        return {
          ...prevState,
          name: action.name,
          avatar: action.avatar,
          phone: action.phone,
        };
      case 'CLEAR_PROFILE':
        return initialProfile;
      default:
        return prevState;
    }
  }, initialProfile);

  const value = useMemo(
    () => ({
      profile,
      restoreProfile: async info => {
        dispatchProfile({payload: 'RESTORE_PROFILE', ...info});
      },
      updateProfile: async (name, avatar, phone) => {
        dispatchProfile({payload: 'UPDATE_PROFILE', name, avatar, phone});
      },
      clearProfile: () => ({payload: 'CLEAR_PROFILE'}),
    }),
    [profile],
  );

  return <Stores.Provider value={value}>{children}</Stores.Provider>;
}
