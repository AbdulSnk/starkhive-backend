/* eslint-disable prettier/prettier */
import { SetMetadata } from '@nestjs/common';
import { Permission } from '../roles.enum';

export const PERMISSIONS_KEY = 'permissions';
export const Permissions = (...permissions: Permission[]) =>
  SetMetadata(PERMISSIONS_KEY, permissions);
