import { createContext, useEffect, useState, useCallback } from 'react';
import { IAuthContext } from '../interface/AuthoProps';


export const AuthContext = createContext({} as IAuthContext);