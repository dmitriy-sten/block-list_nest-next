import axios from 'axios'
import type {
  AxiosRequestConfig,
  AxiosResponse
} from 'axios'
export interface SignUpBodyDto {
  email: string;
  password: string;
}

export interface SignInBodyDto {
  email: string;
  password: string;
}

export interface GetSessionDto {
  id: number;
  email: string;
  iat: number;
  exp: number;
}

export interface AccountDto {
  id: number;
  ownerId: number;
  isBlockingEnabled: boolean;
}

export interface PatchAccountDto {
  isBlockingEnabled?: boolean;
}

export type BlockItemDtoType = typeof BlockItemDtoType[keyof typeof BlockItemDtoType];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const BlockItemDtoType = {
  KeyWord: 'KeyWord',
  WebSite: 'WebSite',
} as const;

export interface BlockItemDto {
  id: number;
  blockListId: number;
  type: BlockItemDtoType;
  data: string;
  createdAt: string;
}

export interface BlockListDto {
  id: number;
  ownerId: number;
  items: BlockItemDto[];
}

export type AddBlockItemDtoType = typeof AddBlockItemDtoType[keyof typeof AddBlockItemDtoType];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AddBlockItemDtoType = {
  KeyWord: 'KeyWord',
  WebSite: 'WebSite',
} as const;

export interface AddBlockItemDto {
  type: AddBlockItemDtoType;
  data: string;
}

export type BlockListControllerGetListParams = {
q?: string;
};





  export const authControllerSignUp = <TData = AxiosResponse<void>>(
    signUpBodyDto: SignUpBodyDto, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.post(
      `/auth/sign-up`,
      signUpBodyDto,options
    );
  }

export const authControllerSignIn = <TData = AxiosResponse<void>>(
    signInBodyDto: SignInBodyDto, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.post(
      `/auth/sign-in`,
      signInBodyDto,options
    );
  }

export const authControllerSignOut = <TData = AxiosResponse<void>>(
     options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.post(
      `/auth/sign-out`,undefined,options
    );
  }

export const authControllerGetSessionInfo = <TData = AxiosResponse<GetSessionDto>>(
     options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.get(
      `/auth/session`,options
    );
  }

export const accountControllerGetAccount = <TData = AxiosResponse<AccountDto>>(
     options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.get(
      `/account`,options
    );
  }

export const accountControllerPatchAccount = <TData = AxiosResponse<AccountDto>>(
    patchAccountDto: PatchAccountDto, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.patch(
      `/account`,
      patchAccountDto,options
    );
  }

export const blockListControllerGetList = <TData = AxiosResponse<BlockListDto>>(
    params?: BlockListControllerGetListParams, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.get(
      `/block-list`,{
    ...options,
        params: {...params, ...options?.params},}
    );
  }

export const blockListControllerAddBlockItem = <TData = AxiosResponse<AddBlockItemDto>>(
    addBlockItemDto: AddBlockItemDto, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.post(
      `/block-list/item`,
      addBlockItemDto,options
    );
  }

export const blockListControllerRemoveBlockItem = <TData = AxiosResponse<BlockItemDto>>(
    id: number, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.delete(
      `/block-list/item/${id}`,options
    );
  }

export type AuthControllerSignUpResult = AxiosResponse<void>
export type AuthControllerSignInResult = AxiosResponse<void>
export type AuthControllerSignOutResult = AxiosResponse<void>
export type AuthControllerGetSessionInfoResult = AxiosResponse<GetSessionDto>
export type AccountControllerGetAccountResult = AxiosResponse<AccountDto>
export type AccountControllerPatchAccountResult = AxiosResponse<AccountDto>
export type BlockListControllerGetListResult = AxiosResponse<BlockListDto>
export type BlockListControllerAddBlockItemResult = AxiosResponse<AddBlockItemDto>
export type BlockListControllerRemoveBlockItemResult = AxiosResponse<BlockItemDto>
